// TensorFlow.js inference integration for CutiselleAI
// Loads a TF.js model (LayersModel) from model/model.json and overrides analyzeImage

let skinModel = null;
const MODEL_URL = 'model/model.json';
const IMAGE_SIZE = 224;

// Class keys/labels must match the model output order from the public HAM10000 model
const CLASS_KEYS = [
  'Actinic keratosis',
  'Basal cell carcinoma',
  'Benign keratosis',
  'Dermatofibroma',
  'Melanoma',
  'Nevus',
  'Vascular lesion'
];

async function ensureModelLoaded() {
  if (skinModel) return skinModel;
  if (typeof tf === 'undefined') {
    throw new Error('TensorFlow.js not loaded');
  }
  try {
    await tf.ready();
    // Prefer WebGL if available
    if (tf.backend().name !== 'webgl' && tf.findBackend('webgl')) {
      await tf.setBackend('webgl');
      await tf.ready();
    }
  } catch (e) {
    // Proceed with default backend
  }
  // Load a LayersModel (tfjs_layers_model format)
  skinModel = await tf.loadLayersModel(MODEL_URL);
  return skinModel;
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function preprocessImage(img) {
  return tf.tidy(() => {
    const tensor = tf.browser.fromPixels(img)
      .resizeBilinear([IMAGE_SIZE, IMAGE_SIZE], true)
      .toFloat()
      .div(255);
    return tensor.expandDims(0); // [1, 224, 224, 3]
  });
}

function argMax(array) {
  let maxIdx = 0;
  let maxVal = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxVal) {
      maxVal = array[i];
      maxIdx = i;
    }
  }
  return [maxIdx, maxVal];
}

// Override the existing analyzeImage to run real inference
window.analyzeImage = async function(file) {
  const analysisResult = document.getElementById('analysisResult');
  const resultContent = document.getElementById('resultContent');
  const uploadBox = document.getElementById('uploadBox');

  uploadBox.innerHTML = `
    <i class="fas fa-spinner fa-spin"></i>
    <p>Analyzing your image...</p>
    <div class="loading">Please wait while our AI analyzes your skin.</div>
  `;

  try {
    const model = await ensureModelLoaded();

    const dataUrl = await readFileAsDataURL(file);
    const imgEl = await loadImageElement(dataUrl);
    const input = preprocessImage(imgEl);

    const logits = model.predict(input);
    const probabilities = Array.from(await logits.data());

    tf.dispose([input, logits]);

    const [topIdx, topProb] = argMax(probabilities);
    const predictedKey = CLASS_KEYS[topIdx] || String(topIdx);
    const db = (typeof SKIN_CONDITIONS_DATABASE !== 'undefined') ? SKIN_CONDITIONS_DATABASE[predictedKey] : undefined;
    const predictedName = db?.name || predictedKey;
    const confidencePct = (topProb * 100).toFixed(2);

    const symptomsHtml = db?.symptoms ? db.symptoms.slice(0, 6).map(s => `<li>${s}</li>`).join('') : '';
    const treatmentsHtml = db?.treatments ? db.treatments.slice(0, 4).map(t => `<li>${t}</li>`).join('') : '';
    const preventionHtml = db?.preventionTips ? db.preventionTips.slice(0, 3).map(p => `<li>${p}</li>`).join('') : '';

    resultContent.innerHTML = `
      <div class="analysis-summary">
        <h4>Diagnosis: ${predictedName}</h4>
        ${db?.description ? `<div class="analysis-item"><strong>Description:</strong> ${db.description}</div>` : ''}
        ${db?.severity ? `<div class="analysis-item"><strong>Severity:</strong> ${db.severity}</div>` : ''}
        <div class="analysis-item"><strong>Confidence Level:</strong> ${confidencePct}%</div>
        ${db?.prevalence ? `<div class="analysis-item"><strong>Prevalence:</strong> ${db.prevalence}</div>` : ''}
      </div>
      ${symptomsHtml ? `<div class="symptoms-section"><h4>Common Symptoms</h4><ul>${symptomsHtml}</ul></div>` : ''}
      ${treatmentsHtml ? `<div class="treatments-section"><h4>Recommended Treatments</h4><ul>${treatmentsHtml}</ul></div>` : ''}
      ${preventionHtml ? `<div class="prevention-section"><h4>Prevention Tips</h4><ul>${preventionHtml}</ul></div>` : ''}
      ${db?.whenToSeeDoctor ? `<div class="doctor-consultation"><h4>When to See a Doctor</h4><p><strong>${db.whenToSeeDoctor}</strong></p></div>` : ''}
      <div class="disclaimer">
        <p><em><strong>Important:</strong> This is an AI-generated analysis for educational purposes only. Always consult with a qualified dermatologist for proper diagnosis and treatment.</em></p>
      </div>
      <div style="margin-top: 1rem;">
        <details>
          <summary>View top-5 predictions</summary>
          <ul>
            ${[...probabilities]
              .map((p, i) => ({ idx: i, p }))
              .sort((a, b) => b.p - a.p)
              .slice(0, 5)
              .map(({ idx, p }) => {
                const key = CLASS_KEYS[idx] || String(idx);
                const name = (typeof SKIN_CONDITIONS_DATABASE !== 'undefined' && SKIN_CONDITIONS_DATABASE[key]?.name) ? SKIN_CONDITIONS_DATABASE[key].name : key;
                return `<li>${name}: ${(p * 100).toFixed(2)}%</li>`;
              })
              .join('')}
          </ul>
        </details>
      </div>
    `;

    analysisResult.style.display = 'block';

    uploadBox.innerHTML = `
      <i class="fas fa-cloud-upload-alt"></i>
      <p>Upload another image for analysis</p>
      <button class="upload-btn" onclick="document.getElementById('imageUpload').click()">Choose Image</button>
    `;
  } catch (err) {
    console.error('Inference error:', err);
    resultContent.innerHTML = `
      <div class="analysis-summary">
        <h4>Prediction Error</h4>
        <div class="analysis-item"><strong>Details:</strong> ${err.message}</div>
        <div class="analysis-item">Ensure that <code>${MODEL_URL}</code> and weight shard files are placed correctly and that class order matches the model output.</div>
      </div>`;
    analysisResult.style.display = 'block';
    uploadBox.innerHTML = `
      <i class="fas fa-cloud-upload-alt"></i>
      <p>Upload or drag your skin image here</p>
      <button class="upload-btn" onclick="document.getElementById('imageUpload').click()">Choose Image</button>
    `;
  }
};

// Optionally preload model on page load to reduce first-inference latency
window.addEventListener('DOMContentLoaded', () => {
  ensureModelLoaded().catch((e) => console.warn('Model preload failed:', e));
});