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
    const analysisResult = document.getElementById('analysisResult');
    const resultContent = document.getElementById('resultContent');
    
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

function analyzeImage(file) {
    const analysisResult = document.getElementById('analysisResult');
    const resultContent = document.getElementById('resultContent');
    const uploadBox = document.getElementById('uploadBox');
    
    // Show loading state
    uploadBox.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        <p>Analyzing your image...</p>
        <div class="loading">Please wait while our AI analyzes your skin.</div>
    `;
    
    // Simulate AI analysis with setTimeout
    setTimeout(() => {
        const mockAnalysis = generateMockAnalysis();
        
        resultContent.innerHTML = `
            <div class="analysis-summary">
                <h4>Diagnosis: ${mockAnalysis.conditionName}</h4>
                <div class="analysis-item">
                    <strong>Description:</strong> ${mockAnalysis.description}
                </div>
                <div class="analysis-item">
                    <strong>Severity:</strong> ${mockAnalysis.severity}
                </div>
                <div class="analysis-item">
                    <strong>Confidence Level:</strong> ${mockAnalysis.confidence}%
                </div>
                <div class="analysis-item">
                    <strong>Prevalence:</strong> ${mockAnalysis.prevalence}
                </div>
            </div>
            <div class="symptoms-section">
                <h4>Common Symptoms</h4>
                <ul>
                    ${mockAnalysis.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
                </ul>
            </div>
            <div class="treatments-section">
                <h4>Recommended Treatments</h4>
                <ul>
                    ${mockAnalysis.treatments.map(treatment => `<li>${treatment}</li>`).join('')}
                </ul>
            </div>
            <div class="prevention-section">
                <h4>Prevention Tips</h4>
                <ul>
                    ${mockAnalysis.preventionTips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            <div class="doctor-consultation">
                <h4>When to See a Doctor</h4>
                <p><strong>${mockAnalysis.whenToSeeDoctor}</strong></p>
            </div>
            <div class="disclaimer">
                <p><em><strong>Important:</strong> This is an AI-generated analysis for educational purposes only. Always consult with a qualified dermatologist for proper diagnosis and treatment.</em></p>
            </div>
        `;
        
        analysisResult.style.display = 'block';
        
        // Reset upload box
        uploadBox.innerHTML = `
            <i class="fas fa-cloud-upload-alt"></i>
            <p>Upload another image for analysis</p>
            <button class="upload-btn" onclick="document.getElementById('imageUpload').click()">Choose Image</button>
        `;
    }, 3000);
}

// Comprehensive Skin Conditions Database
const SKIN_CONDITIONS_DATABASE = {
    'normal': {
        name: 'Normal Skin',
        description: 'Healthy skin with balanced oil production, good hydration, and no significant concerns',
        symptoms: ['Even skin tone', 'Balanced moisture', 'No visible pores', 'Smooth texture', 'No irritation'],
        causes: ['Genetic factors', 'Good skincare routine', 'Healthy lifestyle', 'Adequate hydration'],
        treatments: [
            'Maintain current skincare routine',
            'Use gentle cleanser twice daily',
            'Apply moisturizer with SPF during the day',
            'Regular gentle exfoliation',
            'Antioxidant serums for prevention'
        ],
        severity: 'None',
        preventionTips: [
            'Continue consistent skincare routine',
            'Protect from sun exposure',
            'Stay hydrated',
            'Maintain healthy diet',
            'Get adequate sleep'
        ],
        whenToSeeDoctor: 'Annual skin check-ups for prevention',
        commonAgeGroup: 'All ages',
        prevalence: 'Ideal but uncommon'
    },
    'acne': {
        name: 'Acne Vulgaris',
        description: 'Common skin condition characterized by clogged pores, blackheads, whiteheads, and inflamed lesions',
        symptoms: ['Blackheads', 'Whiteheads', 'Papules', 'Pustules', 'Cysts', 'Scarring'],
        causes: ['Hormonal changes', 'Excess oil production', 'Bacteria (P. acnes)', 'Clogged hair follicles', 'Genetics'],
        treatments: [
            'Salicylic acid (BHA) for mild acne',
            'Benzoyl peroxide for bacterial control',
            'Retinoids for cell turnover',
            'Antibiotics for severe inflammatory acne',
            'Hormonal therapy for women',
            'Professional treatments: chemical peels, light therapy'
        ],
        severity: 'Mild to Severe',
        preventionTips: [
            'Gentle cleansing twice daily',
            'Avoid picking or squeezing',
            'Use non-comedogenic products',
            'Change pillowcases regularly',
            'Manage stress levels'
        ],
        whenToSeeDoctor: 'Persistent acne, cystic acne, or scarring concerns',
        commonAgeGroup: 'Teenagers and young adults',
        prevalence: 'Very common (85% of people aged 12-24)'
    },
    'eczema': {
        name: 'Atopic Dermatitis (Eczema)',
        description: 'Chronic inflammatory skin condition causing itchy, red, and dry patches',
        symptoms: ['Intense itching', 'Red inflamed patches', 'Dry scaly skin', 'Thickened skin', 'Small bumps'],
        causes: ['Genetic predisposition', 'Immune system dysfunction', 'Environmental triggers', 'Allergens', 'Stress'],
        treatments: [
            'Moisturizers and emollients',
            'Topical corticosteroids',
            'Calcineurin inhibitors',
            'Antihistamines for itching',
            'Wet wrap therapy',
            'Phototherapy for severe cases'
        ],
        severity: 'Mild to Severe',
        preventionTips: [
            'Moisturize frequently',
            'Avoid known triggers',
            'Use fragrance-free products',
            'Take lukewarm baths',
            'Wear soft, breathable fabrics'
        ],
        whenToSeeDoctor: 'Persistent symptoms, signs of infection, or severe flare-ups',
        commonAgeGroup: 'Children and adults',
        prevalence: 'Common (10-20% of children, 1-3% of adults)'
    },
    'dermatitis': {
        name: 'Contact Dermatitis',
        description: 'Skin inflammation caused by contact with irritants or allergens',
        symptoms: ['Redness', 'Swelling', 'Itching', 'Burning sensation', 'Blisters', 'Dry cracked skin'],
        causes: ['Allergens (poison ivy, metals, cosmetics)', 'Irritants (soaps, chemicals)', 'Occupational exposure'],
        treatments: [
            'Avoid trigger substances',
            'Topical corticosteroids',
            'Cool compresses',
            'Oral antihistamines',
            'Barrier creams',
            'Patch testing to identify allergens'
        ],
        severity: 'Mild to Moderate',
        preventionTips: [
            'Identify and avoid triggers',
            'Use protective gloves',
            'Choose hypoallergenic products',
            'Patch test new products',
            'Maintain skin barrier function'
        ],
        whenToSeeDoctor: 'Severe reactions, widespread rash, or unknown triggers',
        commonAgeGroup: 'All ages',
        prevalence: 'Very common'
    },
    'rosacea': {
        name: 'Rosacea',
        description: 'Chronic inflammatory condition causing facial redness and visible blood vessels',
        symptoms: ['Facial redness', 'Visible blood vessels', 'Swollen red bumps', 'Eye irritation', 'Enlarged nose'],
        causes: ['Unknown exact cause', 'Genetic factors', 'Environmental triggers', 'Demodex mites', 'Immune system abnormalities'],
        treatments: [
            'Topical metronidazole gel',
            'Oral antibiotics (tetracycline, doxycycline)',
            'Laser therapy for blood vessels',
            'IPL (Intense Pulsed Light)',
            'Gentle skincare routine'
        ],
        severity: 'Mild to Severe',
        preventionTips: [
            'Identify and avoid triggers',
            'Use gentle, fragrance-free products',
            'Protect from sun exposure',
            'Avoid extreme temperatures',
            'Manage stress levels'
        ],
        whenToSeeDoctor: 'Persistent facial redness or eye symptoms',
        commonAgeGroup: 'Adults over 30',
        prevalence: 'Common (affects 16 million Americans)'
    },
    'psoriasis': {
        name: 'Psoriasis',
        description: 'Autoimmune condition causing rapid skin cell buildup resulting in thick, scaly patches',
        symptoms: ['Thick red patches', 'Silvery scales', 'Itching', 'Burning', 'Joint pain', 'Nail changes'],
        causes: ['Autoimmune disorder', 'Genetic predisposition', 'Environmental triggers', 'Stress', 'Infections'],
        treatments: [
            'Topical corticosteroids',
            'Vitamin D analogues',
            'Retinoids',
            'Immunosuppressants',
            'Biologics for severe cases',
            'Phototherapy (UV light)'
        ],
        severity: 'Mild to Severe',
        preventionTips: [
            'Manage stress',
            'Avoid triggers (infections, injuries)',
            'Maintain healthy weight',
            'Limit alcohol consumption',
            'Moisturize regularly'
        ],
        whenToSeeDoctor: 'New symptoms, joint pain, or inadequate symptom control',
        commonAgeGroup: 'Adults 15-35 and 50-60',
        prevalence: 'Common (2-3% of population)'
    },
    'vitiligo': {
        name: 'Vitiligo',
        description: 'Autoimmune condition causing loss of skin pigmentation in patches',
        symptoms: ['White patches on skin', 'Premature graying of hair', 'Loss of color in mouth/nose', 'Changes in eye color'],
        causes: ['Autoimmune destruction of melanocytes', 'Genetic factors', 'Stress', 'Sunburn', 'Chemical exposure'],
        treatments: [
            'Topical corticosteroids',
            'Calcineurin inhibitors',
            'Phototherapy (narrowband UVB)',
            'JAK inhibitors',
            'Camouflage cosmetics',
            'Surgical options for stable vitiligo'
        ],
        severity: 'Cosmetic concern',
        preventionTips: [
            'Protect affected areas from sun',
            'Manage stress',
            'Avoid skin trauma',
            'Use sunscreen regularly',
            'Consider counseling for emotional support'
        ],
        whenToSeeDoctor: 'Rapid progression or significant cosmetic concern',
        commonAgeGroup: 'Any age, often before 30',
        prevalence: 'Less common (0.5-1% of population)'
    },
    'alopecia_areata': {
        name: 'Alopecia Areata',
        description: 'Autoimmune condition causing patchy hair loss',
        symptoms: ['Round patches of hair loss', 'Smooth bald spots', 'Nail pitting', 'Complete hair loss (rare)'],
        causes: ['Autoimmune attack on hair follicles', 'Genetic predisposition', 'Stress', 'Other autoimmune conditions'],
        treatments: [
            'Topical corticosteroids',
            'Intralesional steroid injections',
            'Topical immunotherapy',
            'JAK inhibitors',
            'Minoxidil',
            'Hair transplantation (in some cases)'
        ],
        severity: 'Mild to Severe',
        preventionTips: [
            'Manage stress levels',
            'Gentle hair care',
            'Avoid harsh chemicals',
            'Maintain healthy diet',
            'Regular scalp massage'
        ],
        whenToSeeDoctor: 'Sudden hair loss or expanding bald patches',
        commonAgeGroup: 'Any age, often children and young adults',
        prevalence: 'Less common (2% of population)'
    },
    'basal_cell_carcinoma': {
        name: 'Basal Cell Carcinoma',
        description: 'Most common type of skin cancer, usually slow-growing and rarely spreads',
        symptoms: ['Pearly or waxy bump', 'Flat, flesh-colored lesion', 'Bleeding or scabbing sore', 'Brown, black, or blue lesion'],
        causes: ['UV radiation exposure', 'Fair skin', 'Age', 'Family history', 'Previous skin cancer'],
        treatments: [
            'Surgical excision',
            'Mohs surgery',
            'Electrodesiccation and curettage',
            'Cryotherapy',
            'Topical medications (imiquimod)',
            'Radiation therapy'
        ],
        severity: 'Serious but treatable',
        preventionTips: [
            'Use broad-spectrum sunscreen',
            'Avoid peak sun hours',
            'Wear protective clothing',
            'Regular skin self-exams',
            'Annual dermatologist visits'
        ],
        whenToSeeDoctor: 'Any suspicious or changing skin lesion immediately',
        commonAgeGroup: 'Adults over 40',
        prevalence: 'Very common (most common cancer)'
    },
    'hives': {
        name: 'Urticaria (Hives)',
        description: 'Raised, itchy welts on the skin that can appear and disappear quickly',
        symptoms: ['Raised red welts', 'Intense itching', 'Swelling', 'Welts that change shape', 'Burning sensation'],
        causes: ['Allergic reactions', 'Medications', 'Foods', 'Stress', 'Infections', 'Physical triggers'],
        treatments: [
            'Antihistamines (H1 and H2 blockers)',
            'Topical corticosteroids',
            'Cool compresses',
            'Avoid triggers',
            'Epinephrine for severe reactions',
            'Immunosuppressants for chronic cases'
        ],
        severity: 'Mild to Severe (life-threatening if anaphylaxis)',
        preventionTips: [
            'Identify and avoid triggers',
            'Keep a symptom diary',
            'Manage stress',
            'Avoid tight clothing',
            'Use fragrance-free products'
        ],
        whenToSeeDoctor: 'Difficulty breathing, chronic hives, or severe swelling',
        commonAgeGroup: 'Any age',
        prevalence: 'Common (20% experience at some point)'
    },
    'ichthyosis': {
        name: 'Ichthyosis',
        description: 'Group of genetic disorders causing dry, scaly skin resembling fish scales',
        symptoms: ['Dry, scaly skin', 'Thick skin patches', 'Deep cracks', 'Itching', 'Flaking'],
        causes: ['Genetic mutations', 'Acquired (associated with other diseases)', 'Medications'],
        treatments: [
            'Heavy moisturizers and emollients',
            'Keratolytic agents (urea, lactic acid)',
            'Topical retinoids',
            'Humidifiers',
            'Gentle exfoliation',
            'Prescription creams'
        ],
        severity: 'Mild to Severe',
        preventionTips: [
            'Frequent moisturizing',
            'Avoid hot water',
            'Use gentle cleansers',
            'Maintain humidity',
            'Wear breathable fabrics'
        ],
        whenToSeeDoctor: 'Severe scaling, cracking, or signs of infection',
        commonAgeGroup: 'Usually present from birth',
        prevalence: 'Rare (1 in 250-1000 people)'
    },
    'lupus': {
        name: 'Cutaneous Lupus',
        description: 'Autoimmune condition affecting the skin, causing various types of rashes',
        symptoms: ['Butterfly rash on face', 'Disc-shaped lesions', 'Photosensitivity', 'Hair loss', 'Mouth ulcers'],
        causes: ['Autoimmune disorder', 'Genetic predisposition', 'Environmental triggers', 'Sun exposure', 'Infections'],
        treatments: [
            'Topical corticosteroids',
            'Antimalarial drugs (hydroxychloroquine)',
            'Immunosuppressants',
            'Biologics',
            'Sun protection',
            'Systemic corticosteroids'
        ],
        severity: 'Moderate to Severe',
        preventionTips: [
            'Strict sun protection',
            'Avoid known triggers',
            'Regular medical monitoring',
            'Stress management',
            'Healthy lifestyle'
        ],
        whenToSeeDoctor: 'Persistent rash, joint pain, or systemic symptoms',
        commonAgeGroup: 'Women of childbearing age',
        prevalence: 'Less common (affects 1.5 million Americans)'
    },
    'skin_cancer': {
        name: 'Skin Cancer (General)',
        description: 'Malignant growth of skin cells, including melanoma, basal cell, and squamous cell carcinomas',
        symptoms: ['New or changing moles', 'Asymmetrical lesions', 'Irregular borders', 'Color variations', 'Diameter >6mm'],
        causes: ['UV radiation', 'Fair skin', 'Family history', 'Multiple moles', 'Immunosuppression'],
        treatments: [
            'Surgical excision',
            'Mohs surgery',
            'Radiation therapy',
            'Chemotherapy',
            'Immunotherapy',
            'Targeted therapy'
        ],
        severity: 'Serious to Life-threatening',
        preventionTips: [
            'Daily sunscreen use',
            'Avoid tanning beds',
            'Seek shade',
            'Wear protective clothing',
            'Monthly self-exams'
        ],
        whenToSeeDoctor: 'Any suspicious or changing skin lesion immediately',
        commonAgeGroup: 'Adults, risk increases with age',
        prevalence: 'Very common (1 in 5 Americans)'
    },
    'acanthosis_nigricans': {
        name: 'Acanthosis Nigricans',
        description: 'Skin condition characterized by dark, velvety patches in body folds',
        symptoms: ['Dark, velvety patches', 'Thickened skin', 'Itching (sometimes)', 'Odor (rarely)'],
        causes: ['Insulin resistance', 'Diabetes', 'Obesity', 'Hormonal disorders', 'Medications'],
        treatments: [
            'Treat underlying condition',
            'Weight management',
            'Topical retinoids',
            'Keratolytic agents',
            'Laser therapy',
            'Address insulin resistance'
        ],
        severity: 'Cosmetic concern, may indicate serious condition',
        preventionTips: [
            'Maintain healthy weight',
            'Regular exercise',
            'Healthy diet',
            'Monitor blood sugar',
            'Regular medical check-ups'
        ],
        whenToSeeDoctor: 'New dark patches or associated symptoms',
        commonAgeGroup: 'Adults, especially with diabetes/obesity',
        prevalence: 'Common in certain populations'
    },
    'diaper_rash': {
        name: 'Diaper Rash',
        description: 'Common skin irritation in the diaper area of infants and toddlers',
        symptoms: ['Red, inflamed skin', 'Tender areas', 'Papules or pustules', 'Scaling', 'Bright red patches'],
        causes: ['Prolonged wetness', 'Friction', 'Chemical irritation', 'Bacterial/fungal infection', 'New foods'],
        treatments: [
            'Frequent diaper changes',
            'Gentle cleansing',
            'Barrier creams (zinc oxide)',
            'Air drying',
            'Antifungal creams if needed',
            'Avoid fragranced products'
        ],
        severity: 'Mild to Moderate',
        preventionTips: [
            'Change diapers frequently',
            'Use barrier creams',
            'Allow air drying time',
            'Use gentle, fragrance-free products',
            'Proper hygiene'
        ],
        whenToSeeDoctor: 'Severe rash, fever, or signs of infection',
        commonAgeGroup: 'Infants and toddlers',
        prevalence: 'Very common (affects most babies)'
    },
    'epidermolysis_bullosa': {
        name: 'Epidermolysis Bullosa',
        description: 'Rare genetic disorder causing fragile skin that blisters easily',
        symptoms: ['Fragile skin', 'Blisters from minor trauma', 'Scarring', 'Nail abnormalities', 'Dental problems'],
        causes: ['Genetic mutations', 'Defective proteins in skin', 'Inherited condition'],
        treatments: [
            'Wound care and protection',
            'Specialized dressings',
            'Pain management',
            'Nutritional support',
            'Infection prevention',
            'Multidisciplinary care'
        ],
        severity: 'Severe, life-altering',
        preventionTips: [
            'Protect skin from trauma',
            'Use soft clothing',
            'Careful handling',
            'Specialized care products',
            'Regular medical monitoring'
        ],
        whenToSeeDoctor: 'Requires ongoing specialized medical care',
        commonAgeGroup: 'Present from birth',
        prevalence: 'Very rare (1 in 50,000 births)'
    },
    'erythema_multiforme': {
        name: 'Erythema Multiforme',
        description: 'Acute skin condition with distinctive target-like lesions',
        symptoms: ['Target-like lesions', 'Red spots with pale centers', 'Symmetrical distribution', 'Mouth sores', 'Burning sensation'],
        causes: ['Herpes simplex virus', 'Medications', 'Infections', 'Autoimmune reactions'],
        treatments: [
            'Treat underlying cause',
            'Topical corticosteroids',
            'Oral antihistamines',
            'Pain relief',
            'Antiviral medications',
            'Supportive care'
        ],
        severity: 'Mild to Severe',
        preventionTips: [
            'Avoid known triggers',
            'Manage herpes outbreaks',
            'Careful medication use',
            'Good hygiene',
            'Stress management'
        ],
        whenToSeeDoctor: 'New rash, mouth involvement, or systemic symptoms',
        commonAgeGroup: 'Young adults',
        prevalence: 'Uncommon'
    },
    'erythema_nodosum': {
        name: 'Erythema Nodosum',
        description: 'Inflammatory condition causing tender, red bumps, usually on the shins',
        symptoms: ['Tender red bumps', 'Usually on shins', 'Fever', 'Joint pain', 'Fatigue'],
        causes: ['Infections (strep throat)', 'Medications', 'Inflammatory diseases', 'Pregnancy', 'Unknown (50% of cases)'],
        treatments: [
            'Treat underlying cause',
            'NSAIDs for pain/inflammation',
            'Rest and elevation',
            'Compression stockings',
            'Potassium iodide (in some cases)',
            'Corticosteroids (severe cases)'
        ],
        severity: 'Moderate, usually self-limiting',
        preventionTips: [
            'Treat infections promptly',
            'Avoid known triggers',
            'Maintain good health',
            'Regular medical care',
            'Stress management'
        ],
        whenToSeeDoctor: 'Persistent bumps, fever, or joint pain',
        commonAgeGroup: 'Young adults, especially women',
        prevalence: 'Uncommon'
    },
    'raynaud_phenomenon': {
        name: 'Raynaud Phenomenon',
        description: 'Condition causing fingers and toes to feel numb and cold due to blood vessel spasms',
        symptoms: ['Color changes (white, blue, red)', 'Numbness', 'Cold sensation', 'Tingling', 'Pain'],
        causes: ['Cold temperatures', 'Stress', 'Autoimmune diseases', 'Medications', 'Smoking'],
        treatments: [
            'Avoid triggers',
            'Keep warm',
            'Calcium channel blockers',
            'Vasodilators',
            'Stress management',
            'Smoking cessation'
        ],
        severity: 'Mild to Moderate',
        preventionTips: [
            'Dress warmly',
            'Avoid sudden temperature changes',
            'Manage stress',
            'Quit smoking',
            'Regular exercise'
        ],
        whenToSeeDoctor: 'Severe episodes or signs of tissue damage',
        commonAgeGroup: 'Young women',
        prevalence: 'Common (3-5% of population)'
    },
    'ringworm': {
        name: 'Ringworm (Tinea)',
        description: 'Fungal infection causing ring-shaped, scaly patches on the skin',
        symptoms: ['Ring-shaped rash', 'Scaly borders', 'Clear center', 'Itching', 'Hair loss (scalp ringworm)'],
        causes: ['Fungal infection', 'Contact with infected person/animal', 'Contaminated surfaces', 'Warm, moist environments'],
        treatments: [
            'Topical antifungal creams',
            'Oral antifungal medications',
            'Keep area clean and dry',
            'Avoid sharing personal items',
            'Treat pets if infected',
            'Disinfect contaminated items'
        ],
        severity: 'Mild to Moderate',
        preventionTips: [
            'Good hygiene',
            'Avoid sharing personal items',
            'Keep skin dry',
            'Wear breathable clothing',
            'Treat infected pets'
        ],
        whenToSeeDoctor: 'Persistent infection or scalp involvement',
        commonAgeGroup: 'Children and athletes',
        prevalence: 'Common, especially in children'
    },
    'seborrheic_dermatitis': {
        name: 'Seborrheic Dermatitis',
        description: 'Common skin condition causing scaly, itchy rash in oily areas of the body',
        symptoms: ['Scaly, greasy patches', 'Redness', 'Itching', 'Dandruff', 'Yellowish crusts'],
        causes: ['Malassezia yeast', 'Genetics', 'Stress', 'Weather changes', 'Immune system factors'],
        treatments: [
            'Antifungal shampoos/creams',
            'Topical corticosteroids',
            'Calcineurin inhibitors',
            'Selenium sulfide',
            'Coal tar preparations',
            'Regular cleansing'
        ],
        severity: 'Mild to Moderate',
        preventionTips: [
            'Regular hair washing',
            'Manage stress',
            'Avoid harsh products',
            'Maintain good hygiene',
            'Use gentle, fragrance-free products'
        ],
        whenToSeeDoctor: 'Persistent symptoms or secondary infection',
        commonAgeGroup: 'Infants and adults',
        prevalence: 'Common (1-3% of population)'
    },
    'wart': {
        name: 'Warts',
        description: 'Benign skin growths caused by human papillomavirus (HPV)',
        symptoms: ['Rough, raised bumps', 'Flesh-colored or darker', 'Black dots (blood vessels)', 'May be painful'],
        causes: ['HPV infection', 'Direct contact', 'Broken skin', 'Weakened immune system'],
        treatments: [
            'Salicylic acid treatments',
            'Cryotherapy (freezing)',
            'Laser therapy',
            'Immunotherapy',
            'Surgical removal',
            'Duct tape occlusion'
        ],
        severity: 'Mild, cosmetic concern',
        preventionTips: [
            'Avoid direct contact',
            'Keep hands clean',
            'Dont pick at warts',
            'Wear shoes in public areas',
            'Boost immune system'
        ],
        whenToSeeDoctor: 'Painful warts, rapid spreading, or cosmetic concerns',
        commonAgeGroup: 'Children and young adults',
        prevalence: 'Very common (affects 10% of population)'
    }
};

// Enhanced image analysis function
function generateMockAnalysis() {
    // Simulate more sophisticated analysis
    const conditions = Object.keys(SKIN_CONDITIONS_DATABASE);
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const conditionData = SKIN_CONDITIONS_DATABASE[randomCondition];
    
    // Generate realistic confidence based on condition complexity
    let confidence;
    if (randomCondition === 'normal') {
        confidence = Math.floor(Math.random() * 10) + 90; // 90-99%
    } else if (['basal_cell_carcinoma', 'skin_cancer', 'epidermolysis_bullosa'].includes(randomCondition)) {
        confidence = Math.floor(Math.random() * 15) + 75; // 75-89% (requires professional diagnosis)
    } else {
        confidence = Math.floor(Math.random() * 20) + 80; // 80-99%
    }
    
    return {
        condition: randomCondition,
        conditionName: conditionData.name,
        description: conditionData.description,
        symptoms: conditionData.symptoms,
        severity: conditionData.severity,
        confidence: confidence,
        treatments: conditionData.treatments.slice(0, 4), // Show top 4 treatments
        preventionTips: conditionData.preventionTips.slice(0, 3), // Show top 3 prevention tips
        whenToSeeDoctor: conditionData.whenToSeeDoctor,
        prevalence: conditionData.prevalence
    };
}

// AI Question functionality
function askQuestion() {
    const questionInput = document.getElementById('questionInput');
    const aiResponse = document.getElementById('aiResponse');
    const question = questionInput.value.trim();
    
    if (!question) {
        alert('Please enter a question about your skin concerns.');
        return;
    }
    
    // Show loading state
    aiResponse.style.display = 'block';
    aiResponse.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>AI is analyzing your question...</p>
        </div>
    `;
    
    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(question);
        aiResponse.innerHTML = `
            <div class="ai-answer">
                <h4>AI Response:</h4>
                <p>${response}</p>
                <div class="disclaimer">
                    <small><em>Note: This is AI-generated advice. For serious skin concerns, please consult a dermatologist.</em></small>
                </div>
            </div>
        `;
        questionInput.value = '';
    }, 2000);
}

function generateAIResponse(question) {
    const lowerQuestion = question.toLowerCase();
    
    // Check for specific conditions in the database
    for (const [conditionKey, conditionData] of Object.entries(SKIN_CONDITIONS_DATABASE)) {
        const conditionNames = [
            conditionData.name.toLowerCase(),
            conditionKey.replace('_', ' ').toLowerCase(),
            ...conditionData.symptoms.map(s => s.toLowerCase())
        ];
        
        if (conditionNames.some(name => lowerQuestion.includes(name))) {
            return `${conditionData.name}: ${conditionData.description} 

Common symptoms include: ${conditionData.symptoms.slice(0, 3).join(', ')}.

Treatment options: ${conditionData.treatments.slice(0, 3).join('; ')}.

${conditionData.whenToSeeDoctor ? 'When to see a doctor: ' + conditionData.whenToSeeDoctor : ''}

Remember: This is AI-generated information. Always consult with a dermatologist for proper diagnosis and treatment.`;
        }
    }
    
    // Legacy keyword-based responses for general terms
    if (lowerQuestion.includes('acne')) {
        return SKIN_CONDITIONS_DATABASE.acne.description + ' Treatment includes: ' + SKIN_CONDITIONS_DATABASE.acne.treatments.slice(0, 3).join(', ') + '. See a doctor if: ' + SKIN_CONDITIONS_DATABASE.acne.whenToSeeDoctor;
    } else if (lowerQuestion.includes('eczema') || lowerQuestion.includes('dermatitis')) {
        return SKIN_CONDITIONS_DATABASE.eczema.description + ' Treatment includes: ' + SKIN_CONDITIONS_DATABASE.eczema.treatments.slice(0, 3).join(', ') + '. See a doctor if: ' + SKIN_CONDITIONS_DATABASE.eczema.whenToSeeDoctor;
    } else if (lowerQuestion.includes('psoriasis')) {
        return SKIN_CONDITIONS_DATABASE.psoriasis.description + ' Treatment includes: ' + SKIN_CONDITIONS_DATABASE.psoriasis.treatments.slice(0, 3).join(', ') + '. See a doctor if: ' + SKIN_CONDITIONS_DATABASE.psoriasis.whenToSeeDoctor;
    } else if (lowerQuestion.includes('rosacea')) {
        return SKIN_CONDITIONS_DATABASE.rosacea.description + ' Treatment includes: ' + SKIN_CONDITIONS_DATABASE.rosacea.treatments.slice(0, 3).join(', ') + '. See a doctor if: ' + SKIN_CONDITIONS_DATABASE.rosacea.whenToSeeDoctor;
    } else if (lowerQuestion.includes('vitiligo')) {
        return SKIN_CONDITIONS_DATABASE.vitiligo.description + ' Treatment includes: ' + SKIN_CONDITIONS_DATABASE.vitiligo.treatments.slice(0, 3).join(', ') + '. See a doctor if: ' + SKIN_CONDITIONS_DATABASE.vitiligo.whenToSeeDoctor;
    } else if (lowerQuestion.includes('hives') || lowerQuestion.includes('urticaria')) {
        return SKIN_CONDITIONS_DATABASE.hives.description + ' Treatment includes: ' + SKIN_CONDITIONS_DATABASE.hives.treatments.slice(0, 3).join(', ') + '. See a doctor if: ' + SKIN_CONDITIONS_DATABASE.hives.whenToSeeDoctor;
    } else if (lowerQuestion.includes('wart')) {
        return SKIN_CONDITIONS_DATABASE.wart.description + ' Treatment includes: ' + SKIN_CONDITIONS_DATABASE.wart.treatments.slice(0, 3).join(', ') + '. See a doctor if: ' + SKIN_CONDITIONS_DATABASE.wart.whenToSeeDoctor;
    } else if (lowerQuestion.includes('ringworm') || lowerQuestion.includes('tinea')) {
        return SKIN_CONDITIONS_DATABASE.ringworm.description + ' Treatment includes: ' + SKIN_CONDITIONS_DATABASE.ringworm.treatments.slice(0, 3).join(', ') + '. See a doctor if: ' + SKIN_CONDITIONS_DATABASE.ringworm.whenToSeeDoctor;
    } else if (lowerQuestion.includes('skin cancer') || lowerQuestion.includes('melanoma') || lowerQuestion.includes('basal cell')) {
        return SKIN_CONDITIONS_DATABASE.skin_cancer.description + ' Treatment includes: ' + SKIN_CONDITIONS_DATABASE.skin_cancer.treatments.slice(0, 3).join(', ') + '. IMPORTANT: ' + SKIN_CONDITIONS_DATABASE.skin_cancer.whenToSeeDoctor;
    } else if (lowerQuestion.includes('alopecia') || lowerQuestion.includes('hair loss')) {
        return SKIN_CONDITIONS_DATABASE.alopecia_areata.description + ' Treatment includes: ' + SKIN_CONDITIONS_DATABASE.alopecia_areata.treatments.slice(0, 3).join(', ') + '. See a doctor if: ' + SKIN_CONDITIONS_DATABASE.alopecia_areata.whenToSeeDoctor;
    } else if (lowerQuestion.includes('wrinkle') || lowerQuestion.includes('aging')) {
        return 'Wrinkles are primarily caused by aging, sun exposure, and repetitive facial expressions. Prevention includes daily sunscreen use, moisturizing, and antioxidant serums. Treatment options include retinoids, peptides, and professional procedures like chemical peels or laser treatments.';
    } else if (lowerQuestion.includes('dark spot') || lowerQuestion.includes('pigmentation')) {
        return 'Dark spots and hyperpigmentation are often caused by sun damage, acne scarring, or hormonal changes. Treatment includes vitamin C serums, niacinamide, gentle exfoliation, and strict sun protection. Consistent use of these ingredients over 8-12 weeks typically shows results.';
    } else if (lowerQuestion.includes('dry') || lowerQuestion.includes('moisture')) {
        return 'Dry skin can be caused by genetics, weather, age, or harsh products. Focus on gentle cleansing, using a humidifier, applying moisturizer to damp skin, and looking for ingredients like hyaluronic acid, ceramides, and glycerin. Avoid hot showers and alcohol-based products.';
    } else if (lowerQuestion.includes('sensitive')) {
        return 'Sensitive skin requires gentle, fragrance-free products with minimal ingredients. Look for soothing ingredients like aloe vera, chamomile, and niacinamide. Always patch test new products, introduce one new product at a time, and avoid known irritants like alcohol and strong fragrances.';
    } else if (lowerQuestion.includes('pore')) {
        return 'Large pores are primarily genetic but can appear worse with oil buildup and sun damage. Regular cleansing with salicylic acid, using retinoids, and maintaining good sun protection can help minimize their appearance. Professional treatments include chemical peels and laser therapy.';
    } else {
        return 'Thank you for your question about skin care. For the most accurate and personalized advice, I recommend consulting with a board-certified dermatologist who can examine your skin and provide treatment recommendations based on your specific needs and skin type.';
    }
}

// Skincare Planner functionality
document.addEventListener('DOMContentLoaded', function() {
    const planForm = document.getElementById('skincarePlanForm');
    
    if (planForm) {
        planForm.addEventListener('submit', function(e) {
            e.preventDefault();
            generateSkincareplan();
        });
    }
});

function generateSkincareplan() {
    const skinType = document.getElementById('skinType').value;
    const ageRange = document.getElementById('ageRange').value;
    const concerns = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    
    const planResult = document.getElementById('planResult');
    const planContent = document.getElementById('planContent');
    
    // Show loading
    planContent.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i><p>Creating your personalized plan...</p></div>';
    planResult.style.display = 'block';
    
    setTimeout(() => {
        const plan = createPersonalizedPlan(skinType, ageRange, concerns);
        
        planContent.innerHTML = `
            <div class="plan-overview">
                <h4>Your Skin Profile</h4>
                <p><strong>Skin Type:</strong> ${skinType}</p>
                <p><strong>Age Range:</strong> ${ageRange}</p>
                <p><strong>Primary Concerns:</strong> ${concerns.length ? concerns.join(', ') : 'General maintenance'}</p>
            </div>
            
            <div class="routine-section">
                <h4>Morning Routine</h4>
                <ol>
                    ${plan.morning.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
            
            <div class="routine-section">
                <h4>Evening Routine</h4>
                <ol>
                    ${plan.evening.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
            
            <div class="weekly-treatments">
                <h4>Weekly Treatments</h4>
                <ul>
                    ${plan.weekly.map(treatment => `<li>${treatment}</li>`).join('')}
                </ul>
            </div>
            
            <div class="tips">
                <h4>Additional Tips</h4>
                <ul>
                    ${plan.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;
    }, 2000);
}

function createPersonalizedPlan(skinType, ageRange, concerns) {
    const plan = {
        morning: [
            'Gentle cleanser',
            'Vitamin C serum (optional)',
            'Moisturizer suitable for your skin type',
            'Broad-spectrum sunscreen SPF 30+'
        ],
        evening: [
            'Gentle cleanser or oil cleanser',
            'Treatment serum (based on concerns)',
            'Moisturizer or night cream'
        ],
        weekly: [
            'Gentle exfoliation 1-2 times per week'
        ],
        tips: [
            'Always patch test new products',
            'Introduce new products gradually',
            'Stay consistent with your routine',
            'Drink plenty of water and get adequate sleep'
        ]
    };
    
    // Customize based on skin type
    if (skinType === 'dry') {
        plan.morning.splice(2, 0, 'Hydrating serum with hyaluronic acid');
        plan.evening.splice(2, 0, 'Hydrating serum');
        plan.tips.push('Use a humidifier in dry climates');
    } else if (skinType === 'oily') {
        plan.morning[0] = 'Foaming cleanser with salicylic acid';
        plan.evening[0] = 'Oil cleanser followed by foaming cleanser';
        plan.tips.push('Avoid over-cleansing which can increase oil production');
    } else if (skinType === 'sensitive') {
        plan.morning[0] = 'Fragrance-free gentle cleanser';
        plan.tips.push('Avoid products with alcohol, fragrances, and harsh sulfates');
    }
    
    // Customize based on age
    if (ageRange === '35+' || ageRange === '45+' || ageRange === '55+') {
        plan.evening.splice(1, 0, 'Retinol serum (start slowly)');
        plan.tips.push('Consider anti-aging ingredients like retinol and peptides');
    }
    
    // Customize based on concerns
    if (concerns.includes('acne')) {
        plan.evening[1] = 'Salicylic acid or benzoyl peroxide treatment';
        plan.weekly.push('Clay mask for oil control');
    }
    
    if (concerns.includes('hyperpigmentation') || concerns.includes('dark-spots')) {
        plan.morning[1] = 'Vitamin C serum';
        plan.evening.splice(1, 0, 'Niacinamide serum');
        plan.weekly.push('Gentle chemical exfoliant with AHA');
    }
    
    if (concerns.includes('wrinkles')) {
        plan.evening.splice(1, 0, 'Retinol serum (gradually increase frequency)');
        plan.tips.push('Be patient - anti-aging results take 12-16 weeks to show');
    }
    
    return plan;
}

// Tool interactions
document.addEventListener('DOMContentLoaded', function() {
    const toolButtons = document.querySelectorAll('.tool-btn');
    
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            const toolCard = this.closest('.tool-card');
            const toolName = toolCard.querySelector('h3').textContent;
            
            // Show mock functionality
            alert(`${toolName} feature will be available soon! This is a preview of our upcoming tools.`);
        });
    });
});

// Add enter key support for AI question input
document.addEventListener('DOMContentLoaded', function() {
    const questionInput = document.getElementById('questionInput');
    
    if (questionInput) {
        questionInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                askQuestion();
            }
        });
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe cards for animation
    document.querySelectorAll('.research-card, .tool-card, .product-card').forEach(card => {
        observer.observe(card);
    });
});

// Add mobile navigation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            z-index: 999;
            padding: 2rem 0;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
    
    .animate {
        animation: fadeInUp 0.6s ease-out;
    }
`;
document.head.appendChild(style);