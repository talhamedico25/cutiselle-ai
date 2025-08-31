// Comprehensive Skin Conditions Database
const skinConditions = [
    // Normal Skin Conditions
    { name: "Normal Skin", category: "normal", description: "Healthy, balanced skin with good texture and tone", symptoms: "Even texture, balanced oil production, few imperfections", treatments: "Maintain with gentle cleansing, moisturizing, and sun protection" },
    { name: "Healthy Complexion", category: "normal", description: "Clear, radiant skin with natural glow", symptoms: "Even skin tone, smooth texture, natural radiance", treatments: "Gentle skincare routine, adequate hydration, sun protection" },
    
    // Common Conditions
    { name: "Acne Vulgaris", category: "common", description: "Common skin condition causing pimples and blemishes", symptoms: "Whiteheads, blackheads, pimples, cysts", treatments: "Benzoyl peroxide, salicylic acid, retinoids, antibiotics" },
    { name: "Eczema (Atopic Dermatitis)", category: "common", description: "Chronic inflammatory skin condition", symptoms: "Red, itchy, dry patches, thickened skin", treatments: "Moisturizers, topical steroids, antihistamines, avoiding triggers" },
    { name: "Psoriasis", category: "common", description: "Autoimmune condition causing rapid skin cell turnover", symptoms: "Red, scaly patches, silvery scales, itching", treatments: "Topical treatments, phototherapy, systemic medications" },
    { name: "Rosacea", category: "common", description: "Chronic inflammatory condition affecting facial skin", symptoms: "Facial redness, visible blood vessels, bumps", treatments: "Topical medications, oral antibiotics, laser therapy" },
    { name: "Dermatitis", category: "common", description: "General term for skin inflammation", symptoms: "Redness, itching, swelling, rash", treatments: "Identifying triggers, topical steroids, moisturizers" },
    { name: "Hives (Urticaria)", category: "common", description: "Raised, itchy welts on the skin", symptoms: "Red or white raised bumps, itching, swelling", treatments: "Antihistamines, avoiding triggers, cool compresses" },
    { name: "Contact Dermatitis", category: "common", description: "Skin reaction to irritants or allergens", symptoms: "Red, itchy rash, blisters, dry skin", treatments: "Avoiding triggers, topical steroids, antihistamines" },
    { name: "Seborrheic Dermatitis", category: "common", description: "Scaly, flaky skin condition", symptoms: "Greasy, scaly patches, dandruff, itching", treatments: "Medicated shampoos, topical antifungals, steroids" },
    { name: "Vitiligo", category: "common", description: "Loss of skin pigment causing white patches", symptoms: "White patches on skin, premature graying", treatments: "Topical steroids, phototherapy, camouflage makeup" },
    { name: "Melasma", category: "common", description: "Dark patches on facial skin", symptoms: "Brown or gray patches, usually on face", treatments: "Sunscreen, hydroquinone, chemical peels, laser therapy" },
    { name: "Hyperpigmentation", category: "common", description: "Darkening of skin areas", symptoms: "Dark spots, uneven skin tone", treatments: "Sunscreen, vitamin C, hydroquinone, chemical peels" },
    { name: "Hypopigmentation", category: "common", description: "Lightening of skin areas", symptoms: "Light spots, loss of skin color", treatments: "Topical treatments, phototherapy, camouflage" },
    { name: "Warts", category: "common", description: "Small, rough growths caused by HPV", symptoms: "Small, rough bumps, may be painful", treatments: "Cryotherapy, salicylic acid, laser treatment" },
    { name: "Moles", category: "common", description: "Pigmented skin growths", symptoms: "Brown or black spots, may be raised", treatments: "Monitoring for changes, surgical removal if needed" },
    { name: "Freckles", category: "common", description: "Small, concentrated areas of melanin", symptoms: "Small brown spots, often on sun-exposed areas", treatments: "Sunscreen, laser therapy, chemical peels" },
    { name: "Age Spots", category: "common", description: "Dark spots from sun damage and aging", symptoms: "Brown spots on sun-exposed areas", treatments: "Sunscreen, laser therapy, chemical peels, retinoids" },
    { name: "Stretch Marks", category: "common", description: "Scarring from rapid skin stretching", symptoms: "Pink, red, or white streaks on skin", treatments: "Retinoids, laser therapy, microneedling" },
    { name: "Cellulite", category: "common", description: "Dimpled appearance of skin", symptoms: "Lumpy, dimpled skin texture", treatments: "Exercise, massage, laser therapy, radiofrequency" },
    
    // Inflammatory Conditions
    { name: "Lupus", category: "inflammatory", description: "Autoimmune disease affecting multiple organs", symptoms: "Butterfly rash, joint pain, fatigue, fever", treatments: "Corticosteroids, immunosuppressants, antimalarials" },
    { name: "Dermatomyositis", category: "inflammatory", description: "Inflammatory muscle disease with skin involvement", symptoms: "Purple rash, muscle weakness, fatigue", treatments: "Corticosteroids, immunosuppressants, physical therapy" },
    { name: "Scleroderma", category: "inflammatory", description: "Hardening and tightening of skin and connective tissues", symptoms: "Hard, tight skin, Raynaud's phenomenon", treatments: "Immunosuppressants, vasodilators, physical therapy" },
    { name: "Lichen Planus", category: "inflammatory", description: "Inflammatory condition affecting skin and mucous membranes", symptoms: "Purple, flat-topped bumps, itching", treatments: "Topical steroids, oral steroids, antihistamines" },
    { name: "Granuloma Annulare", category: "inflammatory", description: "Ring-shaped skin lesions", symptoms: "Red or skin-colored rings, usually on hands/feet", treatments: "Topical steroids, cryotherapy, laser therapy" },
    { name: "Sarcoidosis", category: "inflammatory", description: "Inflammatory disease affecting multiple organs", symptoms: "Red or purple bumps, fatigue, shortness of breath", treatments: "Corticosteroids, immunosuppressants, monitoring" },
    { name: "Pyoderma Gangrenosum", category: "inflammatory", description: "Rare inflammatory skin condition", symptoms: "Painful ulcers, rapid progression", treatments: "Corticosteroids, immunosuppressants, wound care" },
    { name: "Sweet Syndrome", category: "inflammatory", description: "Acute febrile neutrophilic dermatosis", symptoms: "Fever, painful red bumps, fatigue", treatments: "Corticosteroids, colchicine, dapsone" },
    { name: "Behçet's Disease", category: "inflammatory", description: "Rare inflammatory disorder", symptoms: "Mouth sores, genital ulcers, eye inflammation", treatments: "Corticosteroids, immunosuppressants, colchicine" },
    { name: "Erythema Nodosum", category: "inflammatory", description: "Inflammation of fat cells under skin", symptoms: "Red, painful lumps on shins", treatments: "Rest, compression, anti-inflammatory medications" },
    
    // Infectious Conditions
    { name: "Ringworm", category: "infectious", description: "Fungal infection causing ring-shaped rash", symptoms: "Red, scaly rings, itching", treatments: "Antifungal creams, oral antifungals" },
    { name: "Athlete's Foot", category: "infectious", description: "Fungal infection of feet", symptoms: "Itching, burning, scaling between toes", treatments: "Antifungal creams, keeping feet dry" },
    { name: "Jock Itch", category: "infectious", description: "Fungal infection of groin area", symptoms: "Red, itchy rash in groin", treatments: "Antifungal creams, keeping area dry" },
    { name: "Candidiasis", category: "infectious", description: "Yeast infection of skin", symptoms: "Red, itchy rash, white patches", treatments: "Antifungal creams, oral antifungals" },
    { name: "Impetigo", category: "infectious", description: "Bacterial skin infection", symptoms: "Honey-colored crusts, blisters", treatments: "Antibiotic creams, oral antibiotics" },
    { name: "Cellulitis", category: "infectious", description: "Bacterial infection of deeper skin layers", symptoms: "Red, swollen, warm skin, fever", treatments: "Oral or IV antibiotics" },
    { name: "Folliculitis", category: "infectious", description: "Infection of hair follicles", symptoms: "Small red bumps around hair follicles", treatments: "Antibacterial soaps, antibiotics if severe" },
    { name: "Herpes Simplex", category: "infectious", description: "Viral infection causing cold sores", symptoms: "Painful blisters, tingling, fever", treatments: "Antiviral medications, pain relief" },
    { name: "Shingles", category: "infectious", description: "Viral infection causing painful rash", symptoms: "Painful blisters, nerve pain, fever", treatments: "Antiviral medications, pain relief, vaccination" },
    { name: "Molluscum Contagiosum", category: "infectious", description: "Viral infection causing small bumps", symptoms: "Small, flesh-colored bumps", treatments: "Cryotherapy, laser therapy, topical treatments" },
    { name: "Scabies", category: "infectious", description: "Mite infestation causing intense itching", symptoms: "Intense itching, small bumps, burrows", treatments: "Permethrin cream, ivermectin" },
    { name: "Lice", category: "infectious", description: "Parasitic infestation of hair", symptoms: "Itching, visible nits, crawling sensation", treatments: "Permethrin, malathion, combing" },
    { name: "Bed Bugs", category: "infectious", description: "Insect bites causing itchy welts", symptoms: "Itchy red welts, often in lines", treatments: "Antihistamines, topical steroids, pest control" },
    { name: "Tinea Versicolor", category: "infectious", description: "Fungal infection causing discolored patches", symptoms: "Light or dark patches, mild scaling", treatments: "Antifungal shampoos, creams" },
    { name: "Onychomycosis", category: "infectious", description: "Fungal nail infection", symptoms: "Thickened, discolored nails", treatments: "Oral antifungals, topical treatments" },
    { name: "Paronychia", category: "infectious", description: "Infection around nail", symptoms: "Red, swollen, painful nail area", treatments: "Warm soaks, antibiotics if bacterial" },
    { name: "Erysipelas", category: "infectious", description: "Bacterial skin infection", symptoms: "Bright red, raised patches, fever", treatments: "Antibiotics, rest, elevation" },
    { name: "Necrotizing Fasciitis", category: "infectious", description: "Severe bacterial infection", symptoms: "Severe pain, swelling, fever, skin changes", treatments: "Emergency surgery, IV antibiotics" },
    
    // Genetic Conditions
    { name: "Ichthyosis", category: "genetic", description: "Group of genetic skin disorders", symptoms: "Dry, scaly skin, thickened skin", treatments: "Moisturizers, keratolytics, retinoids" },
    { name: "Epidermolysis Bullosa", category: "genetic", description: "Group of genetic blistering disorders", symptoms: "Fragile skin, blisters, wounds", treatments: "Wound care, pain management, gene therapy" },
    { name: "Albinism", category: "genetic", description: "Genetic condition affecting pigment production", symptoms: "Very light skin, hair, eyes", treatments: "Sun protection, vision care, support" },
    { name: "Neurofibromatosis", category: "genetic", description: "Genetic disorder causing nerve tumors", symptoms: "Café-au-lait spots, neurofibromas", treatments: "Monitoring, surgery for complications" },
    { name: "Tuberous Sclerosis", category: "genetic", description: "Genetic disorder affecting multiple organs", symptoms: "Facial angiofibromas, hypopigmented spots", treatments: "Monitoring, treatment of complications" },
    { name: "Sturge-Weber Syndrome", category: "genetic", description: "Rare genetic disorder", symptoms: "Port-wine stain, neurological symptoms", treatments: "Laser therapy, seizure management" },
    { name: "Klippel-Trenaunay Syndrome", category: "genetic", description: "Rare congenital disorder", symptoms: "Port-wine stain, varicose veins, limb overgrowth", treatments: "Compression therapy, laser therapy, surgery" },
    { name: "Ehlers-Danlos Syndrome", category: "genetic", description: "Group of connective tissue disorders", symptoms: "Hyperelastic skin, joint hypermobility", treatments: "Physical therapy, pain management, monitoring" },
    { name: "Marfan Syndrome", category: "genetic", description: "Genetic connective tissue disorder", symptoms: "Tall stature, long limbs, stretch marks", treatments: "Monitoring, medication, surgery if needed" },
    { name: "Pseudoxanthoma Elasticum", category: "genetic", description: "Rare genetic disorder affecting elastic tissue", symptoms: "Yellowish bumps, loose skin", treatments: "Monitoring, treatment of complications" },
    { name: "Xeroderma Pigmentosum", category: "genetic", description: "Rare genetic disorder affecting DNA repair", symptoms: "Severe sun sensitivity, skin cancer risk", treatments: "Sun protection, monitoring, early treatment" },
    { name: "Gorlin Syndrome", category: "genetic", description: "Genetic disorder increasing cancer risk", symptoms: "Multiple basal cell carcinomas, jaw cysts", treatments: "Regular monitoring, early treatment" },
    { name: "Darier Disease", category: "genetic", description: "Genetic skin disorder", symptoms: "Greasy, crusted papules, nail changes", treatments: "Retinoids, antibiotics, laser therapy" },
    { name: "Hailey-Hailey Disease", category: "genetic", description: "Genetic blistering disorder", symptoms: "Blisters, erosions in skin folds", treatments: "Antibiotics, steroids, laser therapy" },
    { name: "Pachyonychia Congenita", category: "genetic", description: "Rare genetic disorder", symptoms: "Thickened nails, painful calluses", treatments: "Pain management, nail care, monitoring" },
    { name: "Dyskeratosis Congenita", category: "genetic", description: "Rare genetic disorder", symptoms: "Abnormal skin pigmentation, nail dystrophy", treatments: "Monitoring, bone marrow transplant if needed" },
    { name: "Rothmund-Thomson Syndrome", category: "genetic", description: "Rare genetic disorder", symptoms: "Poikiloderma, sparse hair, cataracts", treatments: "Sun protection, monitoring, cataract surgery" },
    { name: "Bloom Syndrome", category: "genetic", description: "Rare genetic disorder", symptoms: "Short stature, sun sensitivity, cancer risk", treatments: "Sun protection, monitoring, cancer screening" },
    { name: "Cockayne Syndrome", category: "genetic", description: "Rare genetic disorder", symptoms: "Premature aging, photosensitivity, dwarfism", treatments: "Supportive care, sun protection" },
    
    // Cancer and Pre-cancerous Conditions
    { name: "Basal Cell Carcinoma", category: "cancer", description: "Most common type of skin cancer", symptoms: "Pearly bump, sore that doesn't heal, pink growth", treatments: "Surgery, radiation, topical treatments" },
    { name: "Squamous Cell Carcinoma", category: "cancer", description: "Second most common skin cancer", symptoms: "Red, scaly patch, wart-like growth", treatments: "Surgery, radiation, chemotherapy" },
    { name: "Melanoma", category: "cancer", description: "Most serious type of skin cancer", symptoms: "Asymmetric mole, irregular borders, color changes", treatments: "Surgery, immunotherapy, targeted therapy" },
    { name: "Actinic Keratosis", category: "cancer", description: "Pre-cancerous skin growths", symptoms: "Rough, scaly patches, usually on sun-exposed areas", treatments: "Cryotherapy, topical treatments, photodynamic therapy" },
    { name: "Bowen's Disease", category: "cancer", description: "Early form of squamous cell carcinoma", symptoms: "Red, scaly patch that grows slowly", treatments: "Surgery, topical treatments, cryotherapy" },
    { name: "Merkel Cell Carcinoma", category: "cancer", description: "Rare, aggressive skin cancer", symptoms: "Firm, painless nodule, rapid growth", treatments: "Surgery, radiation, chemotherapy" },
    { name: "Kaposi Sarcoma", category: "cancer", description: "Cancer affecting blood vessels", symptoms: "Purple or red patches, nodules", treatments: "Antiretroviral therapy, chemotherapy, radiation" },
    { name: "Cutaneous T-cell Lymphoma", category: "cancer", description: "Type of lymphoma affecting skin", symptoms: "Red, scaly patches, itching", treatments: "Topical treatments, phototherapy, chemotherapy" },
    { name: "Dermatofibrosarcoma Protuberans", category: "cancer", description: "Rare skin cancer", symptoms: "Firm, raised growth, slow growing", treatments: "Wide surgical excision, radiation" },
    { name: "Sebaceous Carcinoma", category: "cancer", description: "Rare cancer of oil glands", symptoms: "Yellowish nodule, may be mistaken for chalazion", treatments: "Surgery, radiation, monitoring" },
    { name: "Atypical Fibroxanthoma", category: "cancer", description: "Rare skin cancer", symptoms: "Rapidly growing nodule, usually on head/neck", treatments: "Surgical excision, monitoring" },
    { name: "Angiosarcoma", category: "cancer", description: "Rare cancer of blood vessels", symptoms: "Bruise-like area, swelling, pain", treatments: "Surgery, radiation, chemotherapy" },
    { name: "Leiomyosarcoma", category: "cancer", description: "Rare cancer of smooth muscle", symptoms: "Firm mass, pain, rapid growth", treatments: "Surgery, radiation, chemotherapy" },
    { name: "Dermatofibroma", category: "cancer", description: "Benign skin growth", symptoms: "Firm, brown or pink bump", treatments: "Usually no treatment needed, surgical removal if desired" },
    { name: "Lipoma", category: "cancer", description: "Benign fatty tumor", symptoms: "Soft, movable lump under skin", treatments: "Usually no treatment needed, surgical removal if large" },
    { name: "Seborrheic Keratosis", category: "cancer", description: "Benign skin growth", symptoms: "Waxy, stuck-on appearance, brown or black", treatments: "Cryotherapy, curettage, laser therapy" },
    { name: "Cherry Angioma", category: "cancer", description: "Benign blood vessel growth", symptoms: "Small, bright red bump", treatments: "Usually no treatment needed, laser removal if desired" },
    { name: "Skin Tags", category: "cancer", description: "Benign skin growths", symptoms: "Small, flesh-colored growths", treatments: "Cryotherapy, surgical removal, ligation" },
    { name: "Milia", category: "cancer", description: "Small white cysts", symptoms: "Small, white bumps, usually on face", treatments: "Usually resolve on own, extraction if persistent" },
    { name: "Epidermal Cyst", category: "cancer", description: "Benign cyst under skin", symptoms: "Round, firm lump, may have central pore", treatments: "Surgical removal if infected or bothersome" },
    { name: "Pilar Cyst", category: "cancer", description: "Benign cyst of hair follicle", symptoms: "Smooth, round lump on scalp", treatments: "Surgical removal if desired" },
    { name: "Ganglion Cyst", category: "cancer", description: "Fluid-filled cyst near joints", symptoms: "Soft, round lump, may cause pain", treatments: "Aspiration, surgical removal if persistent" },
    { name: "Keloid", category: "cancer", description: "Excessive scar tissue", symptoms: "Raised, thick scar, may be itchy", treatments: "Steroid injections, laser therapy, surgery" },
    { name: "Hypertrophic Scar", category: "cancer", description: "Raised scar that stays within wound boundaries", symptoms: "Raised, red scar", treatments: "Silicone sheets, steroid injections, laser therapy" }
];

// Initialize skin conditions on page load
document.addEventListener('DOMContentLoaded', function() {
    displaySkinConditions();
});

// Display skin conditions
function displaySkinConditions() {
    const grid = document.getElementById('conditionsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    skinConditions.forEach(condition => {
        const card = document.createElement('div');
        card.className = 'condition-card';
        card.onclick = () => showConditionDetails(condition);
        
        card.innerHTML = `
            <h3>${condition.name}</h3>
            <p>${condition.description}</p>
            <div class="condition-category">${condition.category}</div>
        `;
        
        grid.appendChild(card);
    });
}

// Filter conditions
function filterConditions() {
    const searchTerm = document.getElementById('conditionSearch').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const grid = document.getElementById('conditionsGrid');
    
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filteredConditions = skinConditions.filter(condition => {
        const matchesSearch = condition.name.toLowerCase().includes(searchTerm) || 
                             condition.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || condition.category === categoryFilter;
        
        return matchesSearch && matchesCategory;
    });
    
    filteredConditions.forEach(condition => {
        const card = document.createElement('div');
        card.className = 'condition-card';
        card.onclick = () => showConditionDetails(condition);
        
        card.innerHTML = `
            <h3>${condition.name}</h3>
            <p>${condition.description}</p>
            <div class="condition-category">${condition.category}</div>
        `;
        
        grid.appendChild(card);
    });
}

// Show condition details
function showConditionDetails(condition) {
    const modal = document.createElement('div');
    modal.className = 'condition-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>${condition.name}</h2>
            <div class="condition-category-badge">${condition.category}</div>
            <p><strong>Description:</strong> ${condition.description}</p>
            <p><strong>Symptoms:</strong> ${condition.symptoms}</p>
            <p><strong>Treatments:</strong> ${condition.treatments}</p>
            <div class="disclaimer">
                <small><em>Note: This information is for educational purposes only. Please consult a healthcare professional for proper diagnosis and treatment.</em></small>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

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

// Research content toggle
function toggleResearchContent(contentId) {
    const content = document.getElementById(`research-content-${contentId}`);
    if (content) {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            content.scrollIntoView({ behavior: 'smooth' });
        } else {
            content.style.display = 'none';
        }
    }
}

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
                <h4>Analysis Summary</h4>
                <div class="analysis-item">
                    <strong>Skin Type:</strong> ${mockAnalysis.skinType}
                </div>
                <div class="analysis-item">
                    <strong>Primary Concerns:</strong> ${mockAnalysis.concerns.join(', ')}
                </div>
                <div class="analysis-item">
                    <strong>Confidence Level:</strong> ${mockAnalysis.confidence}%
                </div>
            </div>
            <div class="recommendations">
                <h4>Recommendations</h4>
                <ul>
                    ${mockAnalysis.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
            </div>
            <div class="next-steps">
                <h4>Next Steps</h4>
                <p>${mockAnalysis.nextSteps}</p>
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

function generateMockAnalysis() {
    const skinTypes = ['Normal', 'Dry', 'Oily', 'Combination', 'Sensitive'];
    const allConcerns = ['Acne', 'Wrinkles', 'Dark Spots', 'Hyperpigmentation', 'Dryness', 'Enlarged Pores'];
    const recommendations = [
        'Use a gentle cleanser twice daily',
        'Apply moisturizer suitable for your skin type',
        'Use sunscreen with at least SPF 30 daily',
        'Consider incorporating retinol products gradually',
        'Stay hydrated and maintain a healthy diet',
        'Consult with a dermatologist for personalized treatment'
    ];
    
    const randomSkinType = skinTypes[Math.floor(Math.random() * skinTypes.length)];
    const randomConcerns = allConcerns.slice(0, Math.floor(Math.random() * 3) + 1);
    const randomConfidence = Math.floor(Math.random() * 15) + 85; // 85-99%
    const shuffledRecommendations = recommendations.sort(() => 0.5 - Math.random()).slice(0, 4);
    
    return {
        skinType: randomSkinType,
        concerns: randomConcerns,
        confidence: randomConfidence,
        recommendations: shuffledRecommendations,
        nextSteps: 'Continue monitoring your skin progress and maintain a consistent skincare routine. Consider scheduling a follow-up analysis in 4-6 weeks.'
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
    
    if (lowerQuestion.includes('acne')) {
        return 'Acne can be caused by hormones, bacteria, excess oil production, and clogged pores. For mild acne, try using a gentle cleanser with salicylic acid, avoid over-washing, and use non-comedogenic products. Severe acne may require professional treatment with retinoids or antibiotics.';
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
    } else if (lowerQuestion.includes('normal skin')) {
        return 'Normal skin is well-balanced with good hydration, even tone, and minimal sensitivity. Maintain it by cleansing gently, moisturizing daily, wearing sunscreen, and following a balanced diet for long-term skin health.';
    } else if (lowerQuestion.includes('healthy complexion')) {
        return 'A healthy complexion appears radiant, smooth, and even-toned. Achieve it by staying hydrated, eating a nutrient-rich diet, getting enough sleep, protecting skin from sun damage, and following a consistent skincare routine.';
    } else if (lowerQuestion.includes('acne vulgaris')) {
        return 'Acne vulgaris is the most common form of acne, caused by excess oil, clogged pores, bacteria, and inflammation. Mild cases may respond to salicylic acid or benzoyl peroxide, while moderate to severe cases may need retinoids or prescription medications.';
    } else if (lowerQuestion.includes('eczema') || lowerQuestion.includes('atopic dermatitis')) {
        return 'Eczema (atopic dermatitis) is a chronic skin condition that causes dry, itchy, inflamed skin. Management includes using fragrance-free moisturizers, avoiding triggers, and applying topical corticosteroids or prescription treatments during flare-ups.';
    } else if (lowerQuestion.includes('psoriasis')) {
        return 'Psoriasis is an autoimmune skin condition that speeds up cell turnover, leading to red, scaly patches. Treatments include moisturizers, topical steroids, vitamin D analogs, phototherapy, and systemic medications for severe cases.';
    } else if (lowerQuestion.includes('rosacea')) {
        return 'Rosacea is a chronic skin condition causing facial redness, visible blood vessels, and sometimes acne-like bumps. Triggers include sun, stress, spicy foods, and alcohol. Management includes gentle skincare, sun protection, and prescription treatments like topical metronidazole.';
    } else if (lowerQuestion.includes('dermatitis')) {
        return 'Dermatitis refers to skin inflammation that can cause redness, itching, and irritation. Types include contact, seborrheic, and atopic dermatitis. Treatment focuses on identifying triggers, moisturizing, and using topical corticosteroids or medicated creams.';
    } else if (lowerQuestion.includes('hives') || lowerQuestion.includes('urticaria')) {
        return 'Hives (urticaria) are itchy, raised welts caused by allergic reactions, stress, or unknown triggers. They often resolve on their own but can be managed with antihistamines. Severe or persistent cases may require medical evaluation.';
    } else if (lowerQuestion.includes('contact dermatitis')) {
        return 'Contact dermatitis is skin inflammation caused by direct contact with an irritant or allergen. It often presents as redness, itching, and rash. Management includes avoiding triggers, using fragrance-free moisturizers, and applying topical corticosteroids if needed.';
    } else if (lowerQuestion.includes('seborrheic dermatitis')) {
        return 'Seborrheic dermatitis is a chronic skin condition causing red, scaly, itchy patches, often on the scalp, face, and chest. Treatment includes medicated shampoos (zinc pyrithione, ketoconazole), antifungal creams, and low-strength corticosteroids for flare-ups.';
    } else if (lowerQuestion.includes('vitiligo')) {
        return 'Vitiligo is a condition where the immune system attacks pigment-producing cells, leading to white patches on the skin. Treatments include topical corticosteroids, light therapy, depigmentation therapy, and cosmetic camouflage options.';
    } else if (lowerQuestion.includes('melasma')) {
        return 'Melasma is a skin condition that causes brown or gray-brown patches, often on the face, triggered by sun exposure, hormones, or pregnancy. Treatment includes sun protection, hydroquinone creams, retinoids, and chemical peels.';
    } else if (lowerQuestion.includes('hyperpigmentation')) {
        return 'Hyperpigmentation refers to darkened areas of skin caused by excess melanin production from sun damage, inflammation, or hormonal changes. Treatments include sunscreen, topical brightening agents (like vitamin C or hydroquinone), and professional chemical peels or lasers.';
    } else if (lowerQuestion.includes('hypopigmentation')) {
        return 'Hypopigmentation is a loss of skin color due to reduced melanin, often following injury, inflammation, or skin conditions like vitiligo. Treatment depends on the cause and may involve topical steroids, light therapy, or cosmetic camouflage.';
    } else if (lowerQuestion.includes('warts')) {
        return 'Warts are small, rough skin growths caused by human papillomavirus (HPV). They are generally harmless but contagious. Treatments include salicylic acid, cryotherapy (freezing), laser therapy, or surgical removal.';
    } else if (lowerQuestion.includes('moles')) {
        return 'Moles are common clusters of pigmented skin cells that appear as brown or black spots. Most are harmless, but changes in size, shape, or color should be checked by a dermatologist to rule out melanoma.';
    } else if (lowerQuestion.includes('freckles')) {
        return 'Freckles are small, flat, brown spots that develop from sun exposure and genetics. They are harmless but can be minimized with sun protection, topical brightening agents, or laser treatments if desired.';
    } else if (lowerQuestion.includes('age spots') || lowerQuestion.includes('liver spots')) {
        return 'Age spots (liver spots) are flat, brown patches caused by prolonged sun exposure and aging. They are harmless but can be treated with sunscreen, topical lightening creams, chemical peels, or laser therapy for cosmetic improvement.';
    } else if (lowerQuestion.includes('stretch marks')) {
        return 'Stretch marks are streaks on the skin that form when it stretches rapidly, such as during pregnancy, puberty, or weight changes. While harmless, treatments like retinoid creams, laser therapy, and microneedling may help reduce their appearance.';
    } else if (lowerQuestion.includes('cellulite')) {
        return 'Cellulite is the dimpled appearance of skin caused by fat pushing against connective tissue, most common on thighs and buttocks. It is harmless and influenced by genetics, hormones, and lifestyle. Treatments include massage, laser therapy, and topical creams, though results vary.';
    } else if (lowerQuestion.includes('lupus')) {
        return 'Lupus is an autoimmune disease that can affect the skin, causing rashes (often butterfly-shaped on the face), photosensitivity, and sores. Treatment may involve sun protection, corticosteroids, and systemic medications prescribed by a doctor.';
    } else if (lowerQuestion.includes('dermatomyositis')) {
        return 'Dermatomyositis is a rare inflammatory disease causing muscle weakness and distinctive skin rashes, often violet or reddish. Treatment typically includes corticosteroids, immunosuppressants, and physical therapy under medical supervision.';
    } else if (lowerQuestion.includes('scleroderma')) {
        return 'Scleroderma is an autoimmune condition that causes hardening and tightening of the skin and connective tissues. Symptoms may include thickened skin, stiffness, and internal organ involvement. Treatment focuses on managing symptoms with medications and physical therapy.';
    } else if (lowerQuestion.includes('lichen planus')) {
        return 'Lichen planus is an inflammatory skin condition that causes purplish, itchy, flat-topped bumps, sometimes affecting mucous membranes or nails. Treatment may include topical corticosteroids, antihistamines, or phototherapy.';
    } else if (lowerQuestion.includes('granuloma annulare')) {
        return "Granuloma annulare is a chronic skin condition that causes raised, reddish or skin-colored bumps forming ring-shaped patterns. It is usually harmless and may resolve on its own, but topical corticosteroids or light therapy may help in persistent cases.";
    } else if (lowerQuestion.includes('sarcoidosis')) {
        return "Sarcoidosis is an inflammatory disease that can affect multiple organs, including the skin. It may cause reddish or purple bumps, plaques, or scars. Treatment depends on severity and may include corticosteroids or immunosuppressive medications.";
    } else if (lowerQuestion.includes('pyoderma gangrenosum')) {
        return "Pyoderma gangrenosum is a rare inflammatory skin disorder causing painful ulcers, often linked with autoimmune conditions. Treatment usually involves corticosteroids, immunosuppressants, and wound care under specialist supervision.";
    } else if (lowerQuestion.includes('sweet syndrome')) {
        return "Sweet syndrome (acute febrile neutrophilic dermatosis) presents with painful, red skin nodules, fever, and inflammation, often linked to infections, medications, or underlying conditions. Treatment usually includes systemic corticosteroids.";
    } else if (lowerQuestion.includes("behcet's disease")) {
        return "Behçet's disease is a rare autoimmune disorder that causes recurrent mouth and genital ulcers, eye inflammation, and skin lesions. Treatment often involves corticosteroids, immunosuppressive drugs, and symptom management.";
    } else if (lowerQuestion.includes('erythema nodosum')) {
        return "Erythema nodosum is an inflammatory condition causing tender, red nodules usually on the shins. It may be triggered by infections, medications, or autoimmune diseases. Treatment includes rest, anti-inflammatory medications, and addressing underlying causes.";
    } else if (lowerQuestion.includes('ringworm')) {
        return "Ringworm is a contagious fungal infection that causes circular, red, scaly patches with clear centers. It can affect skin, scalp, or nails. Treatment involves antifungal creams, shampoos, or oral antifungal medications.";
    } else if (lowerQuestion.includes("athlete's foot")) {
        return "Athlete's foot (tinea pedis) is a common fungal infection of the feet, causing itching, peeling, and redness between toes. It can be treated with antifungal creams, powders, and proper foot hygiene.";
    } else if (lowerQuestion.includes('jock itch')) {
        return "Jock itch (tinea cruris) is a fungal infection that causes red, itchy, ring-shaped rashes in warm, moist areas like the groin. It is treated with antifungal creams, powders, and keeping the area clean and dry.";
    } else if (lowerQuestion.includes('candidiasis')) {
        return "Candidiasis is a fungal infection caused by Candida yeast, often affecting moist skin folds or mucous membranes. It appears as red, itchy rashes with white patches. Treatment includes antifungal creams or oral antifungal medications.";
    } else if (lowerQuestion.includes('impetigo')) {
        return "Impetigo is a highly contagious bacterial skin infection, common in children, that causes red sores with honey-colored crusts. Treatment includes good hygiene and prescription antibiotic creams or oral antibiotics.";
    } else if (lowerQuestion.includes('cellulitis')) {
        return "Cellulitis is a bacterial skin infection that causes redness, swelling, warmth, and pain. It usually affects the legs and requires prompt medical attention, often with oral or intravenous antibiotics.";
    } else if (lowerQuestion.includes('folliculitis')) {
        return "Folliculitis is the inflammation or infection of hair follicles, leading to small red bumps or pustules. It can result from bacteria, fungi, or irritation. Mild cases improve with hygiene and topical treatments; severe cases may need antibiotics or antifungals.";
    } else if (lowerQuestion.includes('herpes simplex')) {
        return "Herpes simplex virus (HSV) causes recurrent painful blisters, commonly around the mouth (cold sores) or genitals. While incurable, outbreaks can be managed with antiviral medications and symptom relief.";
    } else if (lowerQuestion.includes('shingles')) {
        return "Shingles (herpes zoster) is caused by reactivation of the varicella-zoster virus. It leads to painful, blistering rashes usually on one side of the body. Treatment includes antivirals, pain management, and in some cases, corticosteroids.";
    } else if (lowerQuestion.includes('molluscum contagiosum')) {
        return "Molluscum contagiosum is a viral skin infection that causes small, firm, dome-shaped bumps with a central dimple. It usually resolves on its own but can be treated with cryotherapy, curettage, or topical therapies if needed.";
    } else if (lowerQuestion.includes('scabies')) {
        return "Scabies is a highly contagious skin infestation caused by tiny mites that burrow into the skin, leading to intense itching and rash. Treatment includes prescription scabicidal creams (such as permethrin) and treating close contacts.";
    } else if (lowerQuestion.includes('lice')) {
        return "Lice are parasitic insects that infest the scalp, body, or pubic area, causing itching and irritation. Treatment includes medicated shampoos, lotions, fine-toothed combing, and washing bedding and clothing.";
    } else if (lowerQuestion.includes('bed bugs')) {
        return "Bed bugs are small insects that feed on human blood, causing itchy, red bite marks. They do not spread disease but can cause discomfort. Management involves thorough cleaning, vacuuming, and professional pest control.";
    } else if (lowerQuestion.includes('tinea versicolor')) {
        return "Tinea versicolor is a fungal infection that causes discolored patches on the skin, often lighter or darker than surrounding skin. Treatment includes antifungal creams, shampoos, or oral antifungal medications.";
    } else if (lowerQuestion.includes('onychomycosis')) {
        return "Onychomycosis is a fungal infection of the nails, causing thickening, discoloration, and brittleness. Treatment may include antifungal nail lacquers, oral antifungal medications, and in some cases, nail removal.";
    } else if (lowerQuestion.includes('paronychia')) {
        return "Paronychia is an infection of the skin around the nails, often causing redness, swelling, and pain. It may be acute (bacterial) or chronic (fungal). Treatment includes warm soaks, topical or oral antibiotics, and antifungals if needed.";
    } else if (lowerQuestion.includes('erysipelas')) {
        return "Erysipelas is a bacterial skin infection similar to cellulitis but with more defined, raised borders. It usually affects the face or legs and requires antibiotic treatment.";
    } else if (lowerQuestion.includes('necrotizing fasciitis')) {
        return "Necrotizing fasciitis is a rare but life-threatening bacterial infection that rapidly destroys skin, fat, and muscle tissue. It requires emergency medical care, including surgery and intravenous antibiotics.";
    } else if (lowerQuestion.includes('ichthyosis')) {
        return "Ichthyosis is a group of genetic skin disorders that cause dry, thick, scaly skin. While there is no cure, management includes daily moisturizers, keratolytic agents, and in some cases, prescription retinoids.";
    } else if (lowerQuestion.includes('epidermolysis bullosa')) {
        return "Epidermolysis bullosa is a rare genetic disorder that makes the skin extremely fragile, leading to blistering and wounds from minor friction. There is no cure, but care focuses on wound management, infection prevention, and supportive treatments.";
    } else if (lowerQuestion.includes('albinism')) {
        return "Albinism is a genetic condition where the body produces little or no melanin, leading to very light skin, hair, and eyes, along with vision problems. Management includes sun protection, vision support, and regular skin checks.";
    } else if (lowerQuestion.includes('neurofibromatosis')) {
        return "Neurofibromatosis is a genetic disorder that causes benign tumors to form on nerves, along with skin changes such as café-au-lait spots. Treatment focuses on monitoring tumor growth and managing complications through surgery or medication if needed.";
    } else if (lowerQuestion.includes('tuberous sclerosis')) {
        return "Tuberous sclerosis is a genetic disorder that causes noncancerous tumors to develop in the skin, brain, and other organs. Skin findings include light patches, facial angiofibromas, and thickened plaques. Management involves monitoring and treating organ involvement.";
    } else if (lowerQuestion.includes('sturge-weber syndrome')) {
        return "Sturge-Weber syndrome is a rare condition characterized by a facial port-wine stain birthmark, neurological abnormalities, and eye problems. Management may include laser therapy for the birthmark and treatment for seizures or glaucoma.";
    } else if (lowerQuestion.includes('klippel-trenaunay syndrome')) {
        return "Klippel-Trenaunay syndrome is a rare congenital condition involving port-wine stains, abnormal vein development, and limb overgrowth. Treatment focuses on symptom relief through compression therapy, laser treatment, or surgery.";
    } else if (lowerQuestion.includes('ehlers-danlos syndrome')) {
        return "Ehlers-Danlos syndrome is a group of connective tissue disorders that cause overly flexible joints, fragile skin, and easy bruising. Management focuses on physical therapy, joint protection, and monitoring for complications such as vascular issues.";
    } else if (lowerQuestion.includes('marfan syndrome')) {
        return "Marfan syndrome is a genetic connective tissue disorder that affects the skeleton, eyes, heart, and skin. People with Marfan often have tall stature, long limbs, and stretch marks. Management includes heart monitoring, medications, and sometimes surgery.";
    } else if (lowerQuestion.includes('pseudoxanthoma elasticum')) {
        return "Pseudoxanthoma elasticum is a rare genetic disorder that affects connective tissue, leading to yellowish, pebble-like bumps on the skin, often on the neck and flexural areas. It may also affect the eyes and blood vessels. Management focuses on monitoring and supportive care.";
    } else if (lowerQuestion.includes('xeroderma pigmentosum')) {
        return "Xeroderma pigmentosum is a rare genetic condition where the skin is extremely sensitive to UV light due to impaired DNA repair. It causes severe sunburn, pigmentation changes, and high risk of skin cancers. Strict sun protection and regular dermatologic monitoring are essential.";
    } else if (lowerQuestion.includes('gorlin syndrome')) {
        return "Gorlin syndrome (basal cell nevus syndrome) is a genetic condition that increases the risk of multiple basal cell carcinomas, jaw cysts, and skeletal abnormalities. Management involves regular skin exams, surgery or topical treatments for skin cancers, and monitoring for other complications.";
    } else if (lowerQuestion.includes('darier disease')) {
        return "Darier disease is a rare genetic skin disorder that causes wart-like blemishes, greasy scaly patches, and nail abnormalities. Symptoms worsen with heat and sunlight. Treatment includes retinoids, topical therapies, and sun protection.";
    } else if (lowerQuestion.includes('hailey-hailey disease')) {
        return "Hailey-Hailey disease is a genetic skin disorder causing painful, blistering rashes in skin folds such as the neck, armpits, and groin. Flares are often triggered by heat and friction. Treatment includes topical corticosteroids, antibiotics for infections, and sometimes laser or surgical therapies.";
    } else if (lowerQuestion.includes('pachyonychia congenita')) {
        return "Pachyonychia congenita is a rare genetic disorder that causes thickened nails, painful blisters on the feet, and white patches in the mouth. Treatment focuses on pain management, foot care, and supportive therapies.";
    } else if (lowerQuestion.includes('dyskeratosis congenita')) {
        return "Dyskeratosis congenita is a rare inherited disorder that affects skin, nails, and bone marrow. It causes nail abnormalities, skin pigmentation changes, and white patches inside the mouth. Management often involves monitoring for bone marrow failure and supportive care.";
    } else if (lowerQuestion.includes('rothmund-thomson syndrome')) {
        return "Rothmund-Thomson syndrome is a rare genetic disorder characterized by a distinctive rash, sparse hair, small stature, skeletal abnormalities, and increased risk of skin and bone cancers. Management includes regular monitoring and supportive care.";
    } else if (lowerQuestion.includes('bloom syndrome')) {
        return "Bloom syndrome is a rare genetic disorder characterized by short stature, sun-sensitive skin changes, and an increased risk of cancer. Management focuses on sun protection, regular cancer screening, and supportive care.";
    } else if (lowerQuestion.includes('cockayne syndrome')) {
        return "Cockayne syndrome is a rare genetic condition that causes growth failure, premature aging, sun sensitivity, and neurological decline. There is no cure, and management focuses on supportive treatments and protecting the skin from UV exposure.";
    } else if (lowerQuestion.includes('basal cell carcinoma')) {
        return "Basal cell carcinoma is the most common type of skin cancer, often appearing as a pearly bump or a sore that doesn’t heal. It grows slowly and rarely spreads. Treatment usually involves surgical removal, topical therapy, or targeted treatments.";
    } else if (lowerQuestion.includes('squamous cell carcinoma')) {
        return "Squamous cell carcinoma is a common skin cancer that appears as a scaly red patch, wart-like growth, or sore that may bleed. It can spread if untreated. Treatment includes surgical excision, cryotherapy, radiation, or topical therapy.";
    } else if (lowerQuestion.includes('melanoma')) {
        return "Melanoma is a serious form of skin cancer that develops from pigment-producing cells. It often appears as a changing mole or dark lesion. Early detection is critical, and treatment may involve surgery, immunotherapy, or targeted therapy.";
    } else if (lowerQuestion.includes('actinic keratosis')) {
        return "Actinic keratosis is a precancerous skin lesion caused by long-term sun exposure. It appears as rough, scaly patches, often on the face, scalp, or hands. Treatment includes cryotherapy, topical medications, or photodynamic therapy.";
    } else if (lowerQuestion.includes("bowen's disease")) {
        return "Bowen's disease is an early form of squamous cell carcinoma that appears as a persistent red, scaly patch. It is slow-growing but can develop into invasive cancer. Treatment includes cryotherapy, topical medications, or surgical removal.";
    } else if (lowerQuestion.includes('merkel cell carcinoma')) {
        return "Merkel cell carcinoma is a rare but aggressive skin cancer that appears as a fast-growing, painless, firm nodule. It often spreads quickly, and treatment may involve surgery, radiation, chemotherapy, and immunotherapy.";
    } else if (lowerQuestion.includes('kaposi sarcoma')) {
        return "Kaposi sarcoma is a cancer that develops from the cells lining blood vessels, often appearing as red, purple, or brown skin patches or nodules. It is associated with weakened immunity, such as in HIV/AIDS. Treatment may include antiretroviral therapy, chemotherapy, or radiation.";
    } else if (lowerQuestion.includes('cutaneous t-cell lymphoma')) {
        return "Cutaneous T-cell lymphoma is a rare type of non-Hodgkin lymphoma that starts in the skin, causing patches, plaques, or tumors that may resemble eczema or psoriasis. Treatment depends on stage and may include topical therapy, phototherapy, radiation, or systemic medications.";
    } else if (lowerQuestion.includes('dermatofibrosarcoma protuberans')) {
        return "Dermatofibrosarcoma protuberans is a rare, slow-growing skin cancer that forms firm nodules and can invade surrounding tissue. Treatment usually involves surgical removal, sometimes with Mohs surgery or targeted therapy.";
    } else if (lowerQuestion.includes('sebaceous carcinoma')) {
        return "Sebaceous carcinoma is a rare and aggressive cancer of the oil glands, most commonly found on the eyelids. It may mimic other eye conditions. Treatment typically involves surgery, sometimes with radiation therapy.";
    } else if (lowerQuestion.includes('atypical fibroxanthoma')) {
        return "Atypical fibroxanthoma is a rare skin tumor that usually occurs in sun-damaged skin of older adults. It appears as a red, ulcerated nodule and is generally low-grade with low risk of spread. Surgical removal is the standard treatment.";
    } else if (lowerQuestion.includes('angiosarcoma')) {
        return "Angiosarcoma is a rare and aggressive cancer of blood or lymphatic vessels, often appearing as bruised or purple patches on the skin. It can spread quickly. Treatment may include surgery, radiation, and chemotherapy.";
    } else if (lowerQuestion.includes('leiomyosarcoma')) {
        return "Leiomyosarcoma is a rare cancer of smooth muscle tissue that can occur in the skin or deeper tissues. It often presents as a firm, growing lump. Treatment typically involves surgical excision, sometimes with radiation or chemotherapy.";
    } else if (lowerQuestion.includes('dermatofibroma')) {
        return "Dermatofibroma is a common benign skin growth that appears as a firm, small, brownish nodule, often on the legs. It is harmless and usually does not require treatment unless bothersome, in which case surgical removal is an option.";
    } else if (lowerQuestion.includes('lipoma')) {
        return "A lipoma is a common benign tumor made of fat cells, usually presenting as a soft, movable lump under the skin. It is harmless and only requires removal if painful, large, or bothersome.";
    } else if (lowerQuestion.includes('seborrheic keratosis')) {
        return "Seborrheic keratosis is a common benign skin growth that looks waxy, scaly, or wart-like. They are harmless and often appear with age. Treatment is only needed for cosmetic reasons, using cryotherapy, curettage, or laser removal.";
    } else if (lowerQuestion.includes('cherry angioma')) {
        return "Cherry angiomas are small, bright red skin growths caused by clusters of tiny blood vessels. They are harmless and common with aging. Removal is optional and usually done for cosmetic purposes with laser or electrocautery.";
    } else if (lowerQuestion.includes('skin tag')) {
        return "Skin tags are small, soft, benign skin growths that often appear in skin folds such as the neck, armpits, or groin. They are harmless and can be removed if irritated or for cosmetic reasons.";
    } else if (lowerQuestion.includes('milia')) {
        return "Milia are small, white cysts that form when keratin becomes trapped under the skin, often around the eyes or cheeks. They are harmless and may resolve on their own, though dermatologists can remove them easily.";
    } else if (lowerQuestion.includes('epidermal cyst')) {
        return "An epidermal cyst is a common, slow-growing lump under the skin filled with keratin. They are usually harmless but can become inflamed or infected. Treatment may include drainage or surgical removal.";
    } else if (lowerQuestion.includes('pilar cyst')) {
        return "A pilar cyst is a benign cyst that develops from a hair follicle, most often on the scalp. They are filled with keratin and are usually harmless but can be surgically removed if bothersome.";
    } else if (lowerQuestion.includes('ganglion cyst')) {
        return "A ganglion cyst is a fluid-filled lump that usually develops near joints or tendons, especially on the wrist or hand. They are benign and may resolve on their own, but treatment can include aspiration or surgical removal if painful.";
    } else if (lowerQuestion.includes('keloid')) {
        return "A keloid is an overgrowth of scar tissue that extends beyond the original wound, forming a raised, thickened area. They may be itchy or uncomfortable. Treatment options include corticosteroid injections, silicone sheets, cryotherapy, or laser therapy, though recurrence is common.";
    } else if (lowerQuestion.includes('hypertrophic scar')) {
        return "A hypertrophic scar is a thick, raised scar that remains within the boundaries of the original wound. Unlike keloids, they do not extend beyond the injury site. Treatments include corticosteroid injections, silicone sheets, pressure therapy, and sometimes laser or surgical revision.";
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
    document.querySelectorAll('.research-card, .tool-card, .product-card, .condition-card').forEach(card => {
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
