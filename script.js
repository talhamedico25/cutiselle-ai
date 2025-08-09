// Function to convert a File object to an ArrayBuffer
function fileToArrayBuffer(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsArrayBuffer(file);
    });
}

// Main function to handle image upload and analysis
async function analyzeImage(file) {
    const analysisResult = document.getElementById('analysisResult');
    const resultContent = document.getElementById('resultContent');
    const uploadBox = document.getElementById('uploadBox');

    // Show loading state 
    uploadBox.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        <p>Analyzing your image...</p>
        <div class="loading">Please wait while our AI analyzes your skin.</div>
    `;

    // 🔑 YOUR HUGGING FACE API TOKEN HERE
    const API_TOKEN = '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';

    // 🔗 The API endpoint for the 'techtop/skin-disease-detect' model
    const API_URL = 'https://api-inference.huggingface.co/models/techtop/skin-disease-detect';

    try {
        const imageData = await fileToArrayBuffer(file);

        const response = await fetch(API_URL, {
            headers: { Authorization: `Bearer ${API_TOKEN}` },
            method: 'POST',
            body: imageData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API Error: ${response.status} - ${JSON.stringify(errorData)}`);
        }

        const result = await response.json();
        console.log("API Result:", result);

        // The API returns an array of objects. We take the top prediction.
        const topPrediction = result[0];
        const predictedLabel = topPrediction.label;
        const confidence = (topPrediction.score * 100).toFixed(2);

        // Map the model's output label to your database key
        const dbKey = mapHuggingFaceLabelToDatabaseKey(predictedLabel);

        const conditionData = SKIN_CONDITIONS_DATABASE[dbKey] || {
            name: `Diagnosis: ${predictedLabel}`, // Use the direct label if no match in DB
            description: 'The AI could not find a detailed description for this condition.',
            symptoms: ['Consult with a dermatologist for more information.'],
            severity: 'Unknown',
            treatments: ['Professional medical evaluation is recommended.'],
            preventionTips: ['No specific prevention tips available.'],
            whenToSeeDoctor: 'It is highly recommended to see a doctor immediately.',
            prevalence: 'Unknown'
        };

        // Populate the UI with the actual results
        resultContent.innerHTML = `
            <div class="analysis-summary">
                <h4>Diagnosis: ${conditionData.name}</h4>
                <div class="analysis-item">
                    <strong>Confidence Level:</strong> ${confidence}%
                </div>
            </div>
            <div class="symptoms-section">
                <h4>Common Symptoms</h4>
                <ul>
                    ${conditionData.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
                </ul>
            </div>
            <div class="treatments-section">
                <h4>Recommended Treatments</h4>
                <ul>
                    ${conditionData.treatments.map(treatment => `<li>${treatment}</li>`).join('')}
                </ul>
            </div>
            <div class="doctor-consultation">
                <h4>When to See a Doctor</h4>
                <p><strong>${conditionData.whenToSeeDoctor}</strong></p>
            </div>
            <div class="disclaimer">
                <p><em><strong>Important:</strong> This is an AI-generated analysis. Always consult a qualified dermatologist for diagnosis and treatment.</em></p>
            </div>
        `;

        analysisResult.style.display = 'block';

    } catch (error) {
        console.error('Analysis failed:', error);
        resultContent.innerHTML = `<p class="error-message">Error during analysis: ${error.message}. Please try again.</p>`;
        analysisResult.style.display = 'block';

    } finally {
        // Reset upload box
        uploadBox.innerHTML = `
            <i class="fas fa-cloud-upload-alt"></i>
            <p>Upload another image for analysis</p>
            <button class="upload-btn" onclick="document.getElementById('imageUpload').click()">Choose Image</button>
        `;
    }
}

// Function to map API labels to your local database keys.
function mapHuggingFaceLabelToDatabaseKey(label) {
    // The techtop/skin-disease-detect model has labels with underscores and different casings.
    // We'll normalize the label to match our database keys.
    const normalizedLabel = label.toLowerCase().replace(/[^a-z0-9]+/g, '_');

    // Add more mappings here as you customize your database
    const mapping = {
        'acne_or_pimple': 'acne',
        'atopic_dermatitis': 'eczema',
        'rosacea_skin': 'rosacea',
        'psoriasis_patches': 'psoriasis',
        'basal_cell_carcinoma': 'basal_cell_carcinoma',
        'melanoma': 'skin_cancer'
    };

    return mapping[normalizedLabel] || normalizedLabel;
}

// ⚠️ YOUR EXISTING SKIN_CONDITIONS_DATABASE GOES HERE ⚠️
// Ensure the keys match the mapped labels from the function above.
// The code will use this to populate the details.
const SKIN_CONDITIONS_DATABASE = {
    'acne': {
        name: 'Acne Vulgaris',
        description: 'Common skin condition characterized by clogged pores, blackheads, whiteheads, and inflamed lesions',
        symptoms: ['Blackheads', 'Whiteheads', 'Papules', 'Pustules', 'Cysts', 'Scarring'],
        treatments: ['Salicylic acid', 'Benzoyl peroxide', 'Retinoids'],
        severity: 'Mild to Severe',
        whenToSeeDoctor: 'For persistent or severe cystic acne.',
        prevalence: 'Very common'
    },
    'eczema': {
        name: 'Atopic Dermatitis (Eczema)',
        description: 'Chronic inflammatory skin condition causing itchy, red, and dry patches',
        symptoms: ['Intense itching', 'Red inflamed patches', 'Dry scaly skin'],
        treatments: ['Moisturizers', 'Topical corticosteroids'],
        severity: 'Mild to Severe',
        whenToSeeDoctor: 'For persistent symptoms or signs of infection.',
        prevalence: 'Common'
    },
    'basal_cell_carcinoma': {
        name: 'Basal Cell Carcinoma',
        description: 'The most common type of skin cancer. It often appears as a pearly or waxy bump on sun-exposed areas.',
        symptoms: ['Pearly or waxy bump', 'Flat, flesh-colored lesion', 'Bleeding or scabbing sore'],
        treatments: ['Surgical excision', 'Mohs surgery', 'Cryotherapy'],
        severity: 'Serious but treatable',
        whenToSeeDoctor: 'Immediately for any suspicious lesion.',
        prevalence: 'Very common'
    },
    'skin_cancer': {
        name: 'Skin Cancer (General)',
        description: 'Malignant growth of skin cells, including melanoma, basal cell, and squamous cell carcinomas',
        symptoms: ['New or changing moles', 'Asymmetrical lesions', 'Irregular borders', 'Color variations'],
        treatments: ['Surgical excision', 'Immunotherapy', 'Chemotherapy'],
        severity: 'Serious to Life-threatening',
        whenToSeeDoctor: 'Immediately for any suspicious or changing skin lesion.',
        prevalence: 'Very common'
    },
    // Add other conditions from the techtop model's output here
    'ringworm': {
        name: 'Ringworm (Tinea)',
        description: 'A common fungal infection of the skin that causes a circular rash.',
        symptoms: ['Ring-shaped rash with raised, scaly borders', 'Itching', 'Redness'],
        treatments: ['Topical antifungal creams', 'Oral antifungal medications'],
        severity: 'Mild',
        whenToSeeDoctor: 'If the rash does not improve with over-the-counter creams.',
        prevalence: 'Common'
    },
    'psoriasis': {
        name: 'Psoriasis',
        description: 'An autoimmune condition causing red, flaky patches of skin covered with silvery scales.',
        symptoms: ['Thick red patches', 'Silvery scales', 'Itching', 'Burning'],
        treatments: ['Topical corticosteroids', 'Light therapy', 'Biologics'],
        severity: 'Mild to Severe',
        whenToSeeDoctor: 'For persistent patches or if joint pain occurs.',
        prevalence: 'Common'
    },
    'rosacea': {
        name: 'Rosacea',
        description: 'A chronic skin condition causing redness and visible blood vessels in your face.',
        symptoms: ['Facial redness', 'Visible blood vessels', 'Swollen red bumps'],
        treatments: ['Topical gels', 'Oral antibiotics', 'Laser therapy'],
        severity: 'Mild to Severe',
        whenToSeeDoctor: 'For persistent facial redness or eye symptoms.',
        prevalence: 'Common'
    }
};

// ... Your existing event listeners and other code
// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// AI Analyzer functionality
document.addEventListener('DOMContentLoaded', function() {
    const imageUpload = document.getElementById('imageUpload');
    const uploadBox = document.getElementById('uploadBox');
    
    if (imageUpload) {
        imageUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                analyzeImage(file);
            }
        });
    }
    
    // Drag and drop functionality
    if (uploadBox) {
        uploadBox.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadBox.style.backgroundColor = '#f0f9ff';
        });
        
        uploadBox.addEventListener('dragleave', function(e) {
            e.preventDefault();
            uploadBox.style.backgroundColor = '';
        });
        
        uploadBox.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadBox.style.backgroundColor = '';
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                analyzeImage(files[0]);
            }
        });
    }
});
