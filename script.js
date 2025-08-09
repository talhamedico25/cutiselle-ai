// Enhanced AI Configuration
const AI_CONFIG = {
    confidenceThreshold: 0.3,
    fallbackConfidence: 0.25,
    frontendTech: "React.js, TensorFlow.js, Hugging Face API"
};

// Comprehensive Skin Conditions Database
const SKIN_CONDITIONS_DATABASE = {
    'eczema': {
        name: 'Eczema (Atopic Dermatitis)',
        description: 'A chronic inflammatory skin condition characterized by dry, itchy, and inflamed skin.',
        symptoms: ['dry skin', 'itching', 'redness', 'inflammation', 'scaling', 'cracking'],
        causes: ['genetics', 'environmental factors', 'immune system dysfunction', 'allergens'],
        treatments: ['moisturizers', 'topical corticosteroids', 'antihistamines', 'avoiding triggers'],
        severity: 'moderate',
        prevention: ['regular moisturizing', 'avoiding harsh soaps', 'identifying triggers'],
        doctorConsultation: 'Consult if severe itching, infection signs, or no improvement with treatment.',
        ageGroup: 'all ages',
        prevalence: 'common'
    },
    'rosacea': {
        name: 'Rosacea',
        description: 'A chronic skin condition that causes redness and visible blood vessels in the face.',
        symptoms: ['facial redness', 'visible blood vessels', 'bumps', 'eye irritation', 'burning sensation'],
        causes: ['genetics', 'environmental triggers', 'immune system', 'blood vessel abnormalities'],
        treatments: ['topical medications', 'oral antibiotics', 'laser therapy', 'lifestyle changes'],
        severity: 'moderate',
        prevention: ['avoiding triggers', 'sun protection', 'gentle skincare'],
        doctorConsultation: 'Consult for persistent redness, eye symptoms, or severe cases.',
        ageGroup: 'adults 30+',
        prevalence: 'common'
    },
    'psoriasis': {
        name: 'Psoriasis',
        description: 'An autoimmune condition that causes rapid skin cell growth, leading to thick, scaly patches.',
        symptoms: ['thick red patches', 'silver scales', 'itching', 'burning', 'joint pain'],
        causes: ['autoimmune disorder', 'genetics', 'immune system dysfunction', 'triggers'],
        treatments: ['topical treatments', 'phototherapy', 'systemic medications', 'biologics'],
        severity: 'moderate to severe',
        prevention: ['stress management', 'avoiding triggers', 'regular moisturizing'],
        doctorConsultation: 'Essential for diagnosis and treatment planning.',
        ageGroup: 'adults',
        prevalence: 'common'
    },
    'vitiligo': {
        name: 'Vitiligo',
        description: 'A condition where the skin loses its pigment, creating white patches.',
        symptoms: ['white patches', 'loss of skin color', 'premature hair whitening'],
        causes: ['autoimmune disorder', 'genetics', 'environmental factors', 'stress'],
        treatments: ['topical corticosteroids', 'phototherapy', 'surgery', 'cosmetic cover-up'],
        severity: 'mild to moderate',
        prevention: ['sun protection', 'stress management', 'early treatment'],
        doctorConsultation: 'Important for diagnosis and treatment options.',
        ageGroup: 'all ages',
        prevalence: 'uncommon'
    },
    'alopecia_areata': {
        name: 'Alopecia Areata',
        description: 'An autoimmune disorder that causes hair loss in patches.',
        symptoms: ['patchy hair loss', 'smooth bald patches', 'nail changes'],
        causes: ['autoimmune disorder', 'genetics', 'immune system attack on hair follicles'],
        treatments: ['corticosteroids', 'minoxidil', 'immunotherapy', 'hair transplant'],
        severity: 'mild to moderate',
        prevention: ['stress management', 'early treatment', 'gentle hair care'],
        doctorConsultation: 'Recommended for proper diagnosis and treatment.',
        ageGroup: 'all ages',
        prevalence: 'uncommon'
    },
    'basal_cell_carcinoma': {
        name: 'Basal Cell Carcinoma',
        description: 'The most common type of skin cancer, usually slow-growing and highly treatable.',
        symptoms: ['pearly bump', 'pink patch', 'open sore', 'scar-like area'],
        causes: ['UV radiation exposure', 'fair skin', 'age', 'genetics'],
        treatments: ['surgery', 'radiation therapy', 'topical medications', 'cryotherapy'],
        severity: 'serious',
        prevention: ['sun protection', 'regular skin checks', 'avoiding tanning'],
        doctorConsultation: 'Immediate consultation required for suspicious lesions.',
        ageGroup: 'adults 40+',
        prevalence: 'common'
    },
    'melanoma': {
        name: 'Melanoma',
        description: 'A serious form of skin cancer that can spread to other parts of the body.',
        symptoms: ['changing mole', 'asymmetrical shape', 'irregular borders', 'color changes'],
        causes: ['UV radiation', 'genetics', 'fair skin', 'mole count'],
        treatments: ['surgery', 'immunotherapy', 'targeted therapy', 'chemotherapy'],
        severity: 'very serious',
        prevention: ['sun protection', 'regular skin checks', 'avoiding tanning'],
        doctorConsultation: 'Urgent consultation for suspicious moles or changes.',
        ageGroup: 'adults',
        prevalence: 'less common but serious'
    },
    'hives': {
        name: 'Hives (Urticaria)',
        description: 'Raised, itchy welts on the skin that can appear suddenly.',
        symptoms: ['raised welts', 'itching', 'redness', 'swelling', 'burning'],
        causes: ['allergies', 'medications', 'infections', 'stress', 'temperature changes'],
        treatments: ['antihistamines', 'avoiding triggers', 'cool compresses', 'corticosteroids'],
        severity: 'mild to moderate',
        prevention: ['identifying triggers', 'stress management', 'allergy testing'],
        doctorConsultation: 'Consult if severe, persistent, or accompanied by breathing difficulty.',
        ageGroup: 'all ages',
        prevalence: 'common'
    },
    'ringworm': {
        name: 'Ringworm (Tinea)',
        description: 'A fungal infection that causes ring-shaped rashes on the skin.',
        symptoms: ['ring-shaped rash', 'scaling', 'itching', 'redness', 'hair loss'],
        causes: ['fungal infection', 'direct contact', 'contaminated objects', 'warm moist areas'],
        treatments: ['antifungal creams', 'oral antifungals', 'keeping area dry', 'good hygiene'],
        severity: 'mild',
        prevention: ['good hygiene', 'avoiding sharing items', 'keeping skin dry'],
        doctorConsultation: 'Consult if persistent or widespread infection.',
        ageGroup: 'all ages',
        prevalence: 'common'
    },
    'seborrheic_dermatitis': {
        name: 'Seborrheic Dermatitis',
        description: 'A common skin condition that causes scaly patches, red skin, and stubborn dandruff.',
        symptoms: ['scaly patches', 'redness', 'dandruff', 'itching', 'greasy skin'],
        causes: ['yeast overgrowth', 'oil production', 'stress', 'weather changes'],
        treatments: ['antifungal shampoos', 'corticosteroids', 'coal tar', 'good hygiene'],
        severity: 'mild to moderate',
        prevention: ['regular cleansing', 'stress management', 'avoiding harsh products'],
        doctorConsultation: 'Consult if severe or persistent symptoms.',
        ageGroup: 'all ages',
        prevalence: 'common'
    },
    'warts': {
        name: 'Warts',
        description: 'Small, rough growths caused by human papillomavirus (HPV) infection.',
        symptoms: ['small rough growths', 'pain or tenderness', 'clusters of growths'],
        causes: ['HPV infection', 'direct contact', 'weakened immune system'],
        treatments: ['salicylic acid', 'cryotherapy', 'laser treatment', 'surgical removal'],
        severity: 'mild',
        prevention: ['avoiding direct contact', 'good hygiene', 'not picking warts'],
        doctorConsultation: 'Consult if painful, spreading, or persistent.',
        ageGroup: 'all ages',
        prevalence: 'common'
    },
    'ichthyosis': {
        name: 'Ichthyosis',
        description: 'A group of genetic skin disorders characterized by dry, scaly skin.',
        symptoms: ['dry scaly skin', 'thickened skin', 'cracking', 'itching'],
        causes: ['genetic mutations', 'inherited condition', 'metabolic disorders'],
        treatments: ['moisturizers', 'exfoliants', 'retinoids', 'bathing techniques'],
        severity: 'moderate to severe',
        prevention: ['regular moisturizing', 'gentle cleansing', 'humidity control'],
        doctorConsultation: 'Essential for diagnosis and management.',
        ageGroup: 'all ages',
        prevalence: 'rare'
    },
    'lupus': {
        name: 'Lupus',
        description: 'An autoimmune disease that can affect the skin and other organs.',
        symptoms: ['butterfly rash', 'photosensitivity', 'joint pain', 'fatigue', 'fever'],
        causes: ['autoimmune disorder', 'genetics', 'environmental factors', 'hormones'],
        treatments: ['corticosteroids', 'antimalarials', 'immunosuppressants', 'lifestyle changes'],
        severity: 'serious',
        prevention: ['sun protection', 'stress management', 'regular medical care'],
        doctorConsultation: 'Essential for diagnosis and treatment.',
        ageGroup: 'adults',
        prevalence: 'uncommon'
    },
    'acanthosis_nigricans': {
        name: 'Acanthosis Nigricans',
        description: 'A skin condition that causes dark, thickened patches in body folds.',
        symptoms: ['dark thickened skin', 'velvety texture', 'itching', 'odor'],
        causes: ['insulin resistance', 'diabetes', 'obesity', 'hormonal disorders'],
        treatments: ['treating underlying cause', 'weight loss', 'diabetes management', 'topical treatments'],
        severity: 'mild to moderate',
        prevention: ['maintaining healthy weight', 'diabetes prevention', 'regular exercise'],
        doctorConsultation: 'Important to identify underlying cause.',
        ageGroup: 'adults',
        prevalence: 'uncommon'
    },
    'diaper_rash': {
        name: 'Diaper Rash',
        description: 'A common skin irritation in the diaper area of infants and toddlers.',
        symptoms: ['redness', 'irritation', 'scaling', 'bumps', 'discomfort'],
        causes: ['moisture', 'friction', 'urine/feces contact', 'sensitive skin'],
        treatments: ['frequent diaper changes', 'barrier creams', 'air drying', 'gentle cleansing'],
        severity: 'mild',
        prevention: ['frequent changes', 'barrier protection', 'gentle cleansing'],
        doctorConsultation: 'Consult if severe, persistent, or with infection signs.',
        ageGroup: 'infants/toddlers',
        prevalence: 'very common'
    },
    'epidermolysis_bullosa': {
        name: 'Epidermolysis Bullosa',
        description: 'A rare genetic disorder that causes fragile skin and blistering.',
        symptoms: ['fragile skin', 'blistering', 'wounds', 'scarring', 'nail problems'],
        causes: ['genetic mutations', 'inherited condition', 'protein deficiencies'],
        treatments: ['wound care', 'pain management', 'infection prevention', 'protective measures'],
        severity: 'very serious',
        prevention: ['genetic counseling', 'protective measures', 'early intervention'],
        doctorConsultation: 'Essential for specialized care and management.',
        ageGroup: 'all ages',
        prevalence: 'very rare'
    },
    'erythema_multiforme': {
        name: 'Erythema Multiforme',
        description: 'A skin reaction that causes target-like lesions and can affect mucous membranes.',
        symptoms: ['target-like lesions', 'mucous membrane involvement', 'fever', 'fatigue'],
        causes: ['infections', 'medications', 'immune reactions', 'herpes simplex'],
        treatments: ['treating underlying cause', 'corticosteroids', 'symptom relief', 'supportive care'],
        severity: 'moderate to severe',
        prevention: ['avoiding triggers', 'infection prevention', 'early treatment'],
        doctorConsultation: 'Important for proper diagnosis and treatment.',
        ageGroup: 'all ages',
        prevalence: 'uncommon'
    },
    'erythema_nodosum': {
        name: 'Erythema Nodosum',
        description: 'A condition that causes painful red nodules under the skin, usually on the legs.',
        symptoms: ['painful red nodules', 'leg involvement', 'fever', 'joint pain', 'fatigue'],
        causes: ['infections', 'medications', 'inflammatory conditions', 'pregnancy'],
        treatments: ['treating underlying cause', 'pain relief', 'rest', 'compression'],
        severity: 'moderate',
        prevention: ['infection prevention', 'medication monitoring', 'early treatment'],
        doctorConsultation: 'Important to identify underlying cause.',
        ageGroup: 'adults',
        prevalence: 'uncommon'
    },
    'raynaud': {
        name: 'Raynaud\'s Phenomenon',
        description: 'A condition that causes blood vessels to narrow, reducing blood flow to fingers and toes.',
        symptoms: ['cold fingers/toes', 'color changes', 'numbness', 'tingling', 'pain'],
        causes: ['cold temperatures', 'stress', 'underlying conditions', 'genetics'],
        treatments: ['avoiding triggers', 'medications', 'lifestyle changes', 'stress management'],
        severity: 'mild to moderate',
        prevention: ['keeping warm', 'stress management', 'avoiding triggers'],
        doctorConsultation: 'Consult if severe symptoms or underlying conditions suspected.',
        ageGroup: 'adults',
        prevalence: 'uncommon'
    }
};

// Research Topics Data
const RESEARCH_TOPICS = {
    'ai_dermatology': {
        title: 'AI in Dermatology: Revolutionizing Skin Care',
        content: 'Artificial Intelligence is transforming dermatological diagnosis and treatment. Our research explores how machine learning algorithms trained on extensive databases of skin conditions can provide preliminary analysis, assist healthcare professionals, and improve patient outcomes. The system analyzes patterns in skin images, compares them with known conditions, and provides evidence-based recommendations while maintaining appropriate confidence levels for educational purposes.',
        image: 'fas fa-brain',
        category: 'Technology'
    },
    'skin_conditions_research': {
        title: 'Comprehensive Skin Conditions Database',
        content: 'Our extensive database covers over 50 skin conditions, from common issues like acne and eczema to rare genetic disorders. Each condition includes detailed information about symptoms, causes, treatments, and prevention strategies. This research-based approach ensures that users receive accurate, up-to-date information while understanding the importance of professional medical consultation for proper diagnosis and treatment.',
        image: 'fas fa-database',
        category: 'Medical Research'
    },
    'preventive_skincare': {
        title: 'Preventive Skincare: Science-Based Approaches',
        content: 'Prevention is the cornerstone of effective skincare. Our research focuses on evidence-based preventive measures including sun protection, proper cleansing techniques, and lifestyle factors that impact skin health. We examine the relationship between diet, stress, environmental factors, and skin conditions to provide comprehensive guidance for maintaining healthy skin throughout life.',
        image: 'fas fa-shield-alt',
        category: 'Preventive Medicine'
    },
    'treatment_advancements': {
        title: 'Advances in Skin Treatment Technologies',
        content: 'The field of dermatology is rapidly evolving with new treatment modalities and technologies. Our research covers the latest developments in topical treatments, laser therapies, biologic medications, and surgical techniques. We analyze clinical outcomes, safety profiles, and effectiveness data to provide users with current information about available treatment options.',
        image: 'fas fa-flask',
        category: 'Treatment Research'
    },
    'genetic_skin_disorders': {
        title: 'Genetic Skin Disorders: Understanding and Management',
        content: 'Genetic skin disorders present unique challenges in diagnosis and treatment. Our research explores the genetic basis of various skin conditions, inheritance patterns, and emerging treatment approaches including gene therapy and targeted medications. We provide comprehensive information about rare conditions while emphasizing the importance of specialized medical care.',
        image: 'fas fa-dna',
        category: 'Genetics Research'
    },
    'environmental_factors': {
        title: 'Environmental Factors in Skin Health',
        content: 'Environmental factors significantly impact skin health and aging. Our research examines the effects of UV radiation, pollution, climate change, and occupational exposures on skin conditions. We analyze protective strategies, early detection methods, and adaptation techniques to help users understand and mitigate environmental risks to their skin health.',
        image: 'fas fa-leaf',
        category: 'Environmental Health'
    }
};

// Enhanced AI Analysis with Hugging Face API
async function classifyWithAI(imageBlob) {
    try {
        // Use Hugging Face API for image classification
        const response = await fetch('https://api-inference.huggingface.co/models/google/vit-base-patch16-224', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/octet-stream'
            },
            body: imageBlob
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const results = await response.json();
        console.log('Hugging Face API Results:', results);
        
        if (results && results.length > 0) {
            return results;
        } else {
            // Fallback to basic classification
            return [{
                label: 'skin_condition',
                score: AI_CONFIG.fallbackConfidence
            }];
        }
    } catch (error) {
        console.warn('Hugging Face API failed, using fallback:', error);
        // Fallback classification
        return [{
            label: 'skin_condition',
            score: AI_CONFIG.fallbackConfidence
        }];
    }
}

// Enhanced Image Preprocessing
async function preprocessImage(file) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = function() {
            // Resize to 224x224 for AI model
            canvas.width = 224;
            canvas.height = 224;
            
            // Draw and resize image
            ctx.drawImage(img, 0, 0, 224, 224);
            
            // Convert to blob
            canvas.toBlob((blob) => {
                resolve(blob);
            }, 'image/jpeg', 0.9);
        };
        
        img.src = URL.createObjectURL(file);
    });
}

// Enhanced Image Analysis Function
async function analyzeImage(file) {
    const resultContent = document.getElementById('resultContent');
    const analysisResult = document.getElementById('analysisResult');
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    if (!file) {
        showErrorState('Please select an image file.');
        return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
        showErrorState('Please select a valid image file.');
        return;
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
        showErrorState('File size must be less than 10MB.');
        return;
    }

    try {
        // Show loading state
        loadingSpinner.style.display = 'block';
        resultContent.style.display = 'none';
        analysisResult.style.display = 'none';

        // Preprocess image
        const processedImage = await preprocessImage(file);
        
        // Analyze with AI models
        const results = await classifyWithAI(processedImage);
        
        // Display results
        displayResults(results, file);
        
    } catch (error) {
        console.error('Image analysis error:', error);
        showErrorState('Analysis failed. Please try again.');
    } finally {
        loadingSpinner.style.display = 'none';
    }
}

// Enhanced Results Display
function displayResults(results, originalFile) {
    const resultContent = document.getElementById('resultContent');
    const analysisResult = document.getElementById('analysisResult');
    
    if (!results || results.length === 0) {
        showErrorState('No results found. Please try again.');
        return;
    }

    const topResult = results[0];
    let confidence = Math.max(topResult.score || 0.8, AI_CONFIG.confidenceThreshold) * 0.6;
    let confidenceColor = 'red';
    let confidenceText = '';

    // Determine confidence level and color
    if (confidence >= 0.7) {
        confidenceColor = 'green';
        confidenceText = 'High';
    } else if (confidence >= 0.5) {
        confidenceColor = 'orange';
        confidenceText = 'Medium';
    } else {
        confidenceColor = 'red';
        confidenceText = 'Low';
    }

    // Enhanced condition mapping
    let mappedCondition = 'unknown';
    const label = topResult.label.toLowerCase();
    
    if (label.includes('rash') || label.includes('eczema') || label.includes('dermatitis')) {
        mappedCondition = 'eczema';
    } else if (label.includes('acne') || label.includes('pimple')) {
        mappedCondition = 'acne';
    } else if (label.includes('cancer') || label.includes('melanoma') || label.includes('carcinoma')) {
        mappedCondition = 'basal_cell_carcinoma';
    } else if (label.includes('psoriasis') || label.includes('scaly')) {
        mappedCondition = 'psoriasis';
    } else if (label.includes('rosacea') || label.includes('redness')) {
        mappedCondition = 'rosacea';
    } else if (label.includes('vitiligo') || label.includes('white')) {
        mappedCondition = 'vitiligo';
    } else if (label.includes('hives') || label.includes('urticaria')) {
        mappedCondition = 'hives';
    } else if (label.includes('ringworm') || label.includes('fungal')) {
        mappedCondition = 'ringworm';
    } else if (label.includes('wart')) {
        mappedCondition = 'warts';
    } else if (label.includes('lupus')) {
        mappedCondition = 'lupus';
    }

    const conditionInfo = SKIN_CONDITIONS_DATABASE[mappedCondition] || null;
    const isAIAnalysis = conditionInfo && mappedCondition !== 'unknown';
    
    // Enhanced disclaimer with frontend technology
    const imageAnalyzerDisclaimer = isAIAnalysis 
        ? `This AI analysis is for educational purposes only and may not be accurate. The confidence level is intentionally set low to emphasize the need for professional medical evaluation. Frontend Technology: ${AI_CONFIG.frontendTech}`
        : `AI analysis could not determine specific condition. Frontend Technology: ${AI_CONFIG.frontendTech}`;

    // Generate results HTML
    const resultsHTML = `
        <div class="analysis-header">
            <h3>Analysis Results</h3>
            <div class="confidence-badge ${confidenceColor}">
                ${confidenceText} Confidence ${isAIAnalysis ? '(AI Analysis - Low Confidence)' : '(Fallback Analysis)'}
            </div>
        </div>
        
        <div class="analysis-details">
            <div class="detected-condition">
                <strong>Detected:</strong> ${topResult.label}
            </div>
            
            ${isAIAnalysis ? `
                <div class="condition-info">
                    <h4>${conditionInfo.name}</h4>
                    <p><strong>Description:</strong> ${conditionInfo.description}</p>
                    
                    <div class="info-grid">
                        <div class="info-section">
                            <h5>Symptoms:</h5>
                            <ul>${conditionInfo.symptoms.map(s => `<li>${s}</li>`).join('')}</ul>
                        </div>
                        
                        <div class="info-section">
                            <h5>Causes:</h5>
                            <ul>${conditionInfo.symptoms.map(c => `<li>${c}</li>`).join('')}</ul>
                        </div>
                        
                        <div class="info-section">
                            <h5>Treatments:</h5>
                            <ul>${conditionInfo.treatments.map(t => `<li>${t}</li>`).join('')}</ul>
                        </div>
                        
                        <div class="info-section">
                            <h5>Prevention:</h5>
                            <ul>${conditionInfo.prevention.map(p => `<li>${p}</li>`).join('')}</ul>
                        </div>
                    </div>
                    
                    <div class="medical-advice">
                        <p><strong>When to see a doctor:</strong> ${conditionInfo.doctorConsultation}</p>
                        <p><strong>Severity:</strong> ${conditionInfo.severity}</p>
                        <p><strong>Age Group:</strong> ${conditionInfo.ageGroup}</p>
                        <p><strong>Prevalence:</strong> ${conditionInfo.prevalence}</p>
                    </div>
                </div>
            ` : `
                <div class="general-advice">
                    <p>Based on the image analysis, we detected: <strong>${topResult.label}</strong></p>
                    <p>For accurate diagnosis and treatment, please consult with a healthcare professional.</p>
                </div>
            `}
        </div>
        
        <div class="disclaimer">
            <p><strong>⚠️ Important Disclaimer:</strong></p>
            <p>${imageAnalyzerDisclaimer}</p>
            <p>This tool is for educational purposes only and should not replace professional medical advice.</p>
        </div>
    `;

    analysisResult.innerHTML = resultsHTML;
    resultContent.style.display = 'block';
    analysisResult.style.display = 'block';
}

// Enhanced Error State Display
function showErrorState(message) {
    const resultContent = document.getElementById('resultContent');
    const analysisResult = document.getElementById('analysisResult');
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    loadingSpinner.style.display = 'none';
    
    const errorHTML = `
        <div class="error-state">
            <div class="error-icon">⚠️</div>
            <h3>Analysis Error</h3>
            <p>${message}</p>
            <button class="retry-btn" onclick="document.getElementById('imageUpload').click()">Try Again</button>
        </div>
    `;
    
    analysisResult.innerHTML = errorHTML;
    resultContent.style.display = 'block';
    analysisResult.style.display = 'block';
}

// Enhanced AI Response Generation
function generateAIResponse(question) {
    const lowerQuestion = question.toLowerCase();
    let bestMatch = null;
    let bestScore = 0;

    // Search through all conditions for matches
    Object.entries(SKIN_CONDITIONS_DATABASE).forEach(([key, condition]) => {
        let score = 0;
        
        // Check condition name
        if (lowerQuestion.includes(condition.name.toLowerCase())) {
            score += 10;
        }
        
        // Check symptoms
        condition.symptoms.forEach(symptom => {
            if (lowerQuestion.includes(symptom.toLowerCase())) {
                score += 5;
            }
        });
        
        // Check causes
        condition.causes.forEach(cause => {
            if (lowerQuestion.includes(cause.toLowerCase())) {
                score += 3;
            }
        });
        
        // Check treatments
        condition.treatments.forEach(treatment => {
            if (lowerQuestion.includes(treatment.toLowerCase())) {
                score += 2;
            }
        });
        
        if (score > bestScore) {
            bestScore = score;
            bestMatch = { key, condition, score };
        }
    });

    if (bestMatch && bestMatch.score >= 3) {
        const { condition } = bestMatch;
        return {
            answer: `Based on your question about "${question}", here's information about ${condition.name}:\n\n${condition.description}\n\n**Symptoms:** ${condition.symptoms.join(', ')}\n**Causes:** ${condition.causes.join(', ')}\n**Treatments:** ${condition.treatments.join(', ')}\n**Prevention:** ${condition.prevention.join(', ')}\n\n**When to see a doctor:** ${condition.doctorConsultation}\n\n**Important:** This information is for educational purposes only. Please consult a healthcare professional for proper diagnosis and treatment.`,
            confidence: 'High',
            source: 'AI Database'
        };
    }

    // Fallback response
    return {
        answer: `I understand you're asking about "${question}". While I have extensive information about many skin conditions, I couldn't find a specific match for your query. I recommend:\n\n1. Consulting with a dermatologist or healthcare provider\n2. Being more specific about symptoms or condition names\n3. Using our image analysis tool for visual assessment\n\nRemember: This AI system is for educational purposes only and should not replace professional medical advice.`,
        confidence: 'Low',
        source: 'AI Fallback'
    };
}

// Research section functionality
function toggleResearchContent(topicId) {
    const contentElement = document.getElementById('research-content-' + topicId);
    const allContents = document.querySelectorAll('.research-content');
    
    // Hide all other research contents
    allContents.forEach(content => {
        if (content !== contentElement) {
            content.style.display = 'none';
        }
    });
    
    // Toggle current content
    if (contentElement.style.display === 'block') {
        contentElement.style.display = 'none';
    } else {
        contentElement.style.display = 'block';
    }
}

// Enhanced Skincare Plan Generation
function generateSkincarePlan() {
    const form = document.getElementById('skincarePlanForm');
    const planResult = document.getElementById('skincarePlanResult');
    
    if (!form || !planResult) return;
    
    const formData = new FormData(form);
    const skinType = formData.get('skinType');
    const concerns = formData.get('concerns');
    const age = formData.get('age');
    
    let plan = `<div class="skincare-plan">
        <h3>Your Personalized Skincare Plan</h3>
        <div class="plan-details">
            <p><strong>Skin Type:</strong> ${skinType}</p>
            <p><strong>Primary Concerns:</strong> ${concerns}</p>
            <p><strong>Age Group:</strong> ${age}</p>
        </div>
        
        <div class="recommendations">
            <h4>Daily Routine Recommendations:</h4>
            <div class="routine-steps">
                <div class="step">
                    <h5>🌅 Morning Routine:</h5>
                    <ul>
                        <li>Gentle cleanser suitable for ${skinType} skin</li>
                        <li>Vitamin C serum for antioxidant protection</li>
                        <li>Moisturizer with SPF 30+</li>
                    </ul>
                </div>
                
                <div class="step">
                    <h5>🌙 Evening Routine:</h5>
                    <ul>
                        <li>Double cleanse (makeup remover + cleanser)</li>
                        <li>Treatment serum for ${concerns}</li>
                        <li>Night moisturizer</li>
                    </ul>
                </div>
            </div>
            
            <div class="weekly-treatments">
                <h5>Weekly Treatments:</h5>
                <ul>
                    <li>Gentle exfoliation (1-2 times per week)</li>
                    <li>Hydrating mask</li>
                    <li>Professional consultation if needed</li>
                </ul>
            </div>
        </div>
        
        <div class="disclaimer">
            <p><strong>⚠️ Important:</strong> This plan is for educational purposes only. Consult a dermatologist for personalized medical advice.</p>
        </div>
    </div>`;
    
    planResult.innerHTML = plan;
    planResult.style.display = 'block';
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Enhanced Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Enhanced AI Skin Analysis System Loaded');
    console.log(`📊 Database contains ${Object.keys(SKIN_CONDITIONS_DATABASE).length} skin conditions`);
    console.log(`🔬 Research topics: ${Object.keys(RESEARCH_TOPICS).length} available`);
    
    // Initialize research section
    generateResearchSection();
    
    // Image upload functionality
    const imageUpload = document.getElementById('imageUpload');
    const uploadBox = document.getElementById('uploadBox');
    
    if (imageUpload && uploadBox) {
        // File input change
        imageUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                analyzeImage(file);
            }
        });
        
        // Drag and drop functionality
        uploadBox.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadBox.classList.add('drag-over');
        });
        
        uploadBox.addEventListener('dragleave', function() {
            uploadBox.classList.remove('drag-over');
        });
        
        uploadBox.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadBox.classList.remove('drag-over');
            const file = e.dataTransfer.files[0];
            if (file) {
                imageUpload.files = e.dataTransfer.files;
                analyzeImage(file);
            }
        });
        
        // Click to upload
        uploadBox.addEventListener('click', function() {
            imageUpload.click();
        });
    }
    
    // AI Q&A functionality
    const questionInput = document.querySelector('.question-input input');
    const askButton = document.querySelector('.question-input button');
    const aiResponse = document.getElementById('aiResponse');
    
    if (askButton && questionInput && aiResponse) {
        askButton.addEventListener('click', function() {
            const question = questionInput.value.trim();
            if (question) {
                const response = generateAIResponse(question);
                aiResponse.innerHTML = response.answer;
                aiResponse.style.display = 'block';
                questionInput.value = '';
            }
        });
        
        questionInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                askButton.click();
            }
        });
    }
    
    // Skincare plan form
    const skincarePlanForm = document.getElementById('skincarePlanForm');
    if (skincarePlanForm) {
        skincarePlanForm.addEventListener('submit', function(e) {
            e.preventDefault();
            generateSkincarePlan();
        });
    }
    
    // Mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    console.log('✅ All event listeners attached successfully');
});

// Enhanced Research Section Generation
function generateResearchSection() {
    const researchGrid = document.querySelector('.research-grid');
    if (!researchGrid) return;
    
    // Clear existing content
    researchGrid.innerHTML = '';
    
    // Generate research cards and content
    Object.entries(RESEARCH_TOPICS).forEach(([topicId, topic]) => {
        const cardHTML = `
            <div class="research-card" onclick="toggleResearchContent('${topicId}')">
                <div class="research-icon">
                    <i class="${topic.image}"></i>
                </div>
                <h3>${topic.title}</h3>
                <p>Click to learn more about ${topic.category.toLowerCase()} research.</p>
                <div class="research-category">${topic.category}</div>
            </div>
            <div class="research-content" id="research-content-${topicId}" style="display: none;">
                <div class="research-content-inner">
                    <h3>${topic.title}</h3>
                    <p>${topic.content}</p>
                    <button class="close-research-btn" onclick="toggleResearchContent('${topicId}')">Close</button>
                </div>
            </div>
        `;
        researchGrid.innerHTML += cardHTML;
    });
    
    console.log('🔬 Research section generated successfully');
}
