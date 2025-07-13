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