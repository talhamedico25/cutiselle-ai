// Blog Posts Database
const blogPosts = [
    {
        id: 1,
        title: "Breakthrough in Psoriasis Treatment: New Biologic Shows 90% Clearance Rate",
        excerpt: "A revolutionary biologic therapy targeting IL-23 has demonstrated unprecedented efficacy in treating moderate-to-severe psoriasis, with 90% of patients achieving clear or almost clear skin within 16 weeks.",
        content: "The latest clinical trial results published in the Journal of the American Academy of Dermatology reveal a groundbreaking advancement in psoriasis treatment. The new biologic therapy, which specifically targets interleukin-23 (IL-23), has shown remarkable efficacy in treating moderate-to-severe psoriasis patients. The phase 3 clinical trial involved over 1,200 participants across multiple centers worldwide. Results showed that 90% of patients achieved a 90% improvement in their Psoriasis Area and Severity Index (PASI 90) score within 16 weeks of treatment. Additionally, 75% of patients achieved complete skin clearance (PASI 100). The treatment also demonstrated excellent safety profiles with minimal side effects compared to existing therapies. This represents a significant advancement in the management of psoriasis and offers new hope for patients who have not responded adequately to current treatments.",
        category: "treatment",
        journal: "JAAD",
        year: "2025",
        author: "Dr. Sarah Chen et al.",
        date: "2025-01-15",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
        tags: ["psoriasis", "biologic", "IL-23", "clinical trial"]
    },
    {
        id: 2,
        title: "AI-Powered Melanoma Detection Achieves Dermatologist-Level Accuracy",
        excerpt: "Deep learning algorithms trained on over 100,000 dermatoscopic images now match the diagnostic accuracy of board-certified dermatologists in detecting melanoma.",
        content: "A landmark study published in Nature Dermatology demonstrates that artificial intelligence systems can now achieve diagnostic accuracy comparable to board-certified dermatologists in detecting melanoma. The research team trained deep learning algorithms on a dataset of over 100,000 high-quality dermatoscopic images from multiple international centers. The AI system was then tested against 58 board-certified dermatologists from 17 countries in a blinded study. Results showed that the AI system achieved a sensitivity of 95.1% and specificity of 94.5% in detecting melanoma, matching the performance of the dermatologists. The system also demonstrated superior performance in detecting early-stage melanomas, which are often more challenging to diagnose. This breakthrough has significant implications for improving early detection rates and reducing melanoma mortality, particularly in areas with limited access to dermatological expertise.",
        category: "diagnosis",
        journal: "Nature",
        year: "2025",
        author: "Dr. Michael Rodriguez et al.",
        date: "2025-01-10",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
        tags: ["AI", "melanoma", "diagnosis", "deep learning"]
    },
    {
        id: 3,
        title: "Novel Gene Therapy Shows Promise for Epidermolysis Bullosa",
        excerpt: "First successful gene therapy treatment for recessive dystrophic epidermolysis bullosa demonstrates significant wound healing and improved quality of life.",
        content: "A groundbreaking gene therapy approach for recessive dystrophic epidermolysis bullosa (RDEB) has shown remarkable results in a phase 1/2 clinical trial. The therapy involves using a modified virus to deliver the correct COL7A1 gene to skin cells, which is defective in RDEB patients. Results published in the Journal of Investigative Dermatology show that treated patients experienced significant improvements in wound healing, with some achieving complete closure of chronic wounds that had persisted for years. The therapy also led to improved skin strength and reduced blistering frequency. Most importantly, patients reported substantial improvements in quality of life, including reduced pain and improved mobility. This represents the first successful gene therapy for a genetic skin disorder and opens new possibilities for treating other inherited skin conditions.",
        category: "genetics",
        journal: "JID",
        year: "2024",
        author: "Dr. Elena Martinez et al.",
        date: "2024-12-20",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
        tags: ["gene therapy", "epidermolysis bullosa", "COL7A1", "genetic disorder"]
    },
    {
        id: 4,
        title: "Environmental Pollution Linked to Accelerated Skin Aging",
        excerpt: "New research reveals that air pollution exposure significantly accelerates skin aging and increases the risk of inflammatory skin conditions.",
        content: "A comprehensive study published in the British Journal of Dermatology has established a clear link between environmental pollution and accelerated skin aging. The research, conducted over 10 years with over 5,000 participants, found that exposure to particulate matter (PM2.5) and polycyclic aromatic hydrocarbons (PAHs) was associated with increased signs of aging, including wrinkles, age spots, and loss of skin elasticity. The study also found that pollution exposure increased the risk of inflammatory skin conditions such as eczema and psoriasis. Researchers discovered that pollution particles can penetrate the skin barrier and trigger inflammatory responses, leading to oxidative stress and collagen degradation. The findings highlight the importance of protective measures, including antioxidant skincare products and barrier protection, particularly for individuals living in urban areas with high pollution levels.",
        category: "prevention",
        journal: "BJD",
        year: "2024",
        author: "Dr. James Wilson et al.",
        date: "2024-12-15",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
        tags: ["pollution", "aging", "environmental", "prevention"]
    },
    {
        id: 5,
        title: "Revolutionary Atopic Dermatitis Treatment Shows Long-term Efficacy",
        excerpt: "New JAK inhibitor demonstrates sustained improvement in atopic dermatitis symptoms with minimal side effects over 2-year follow-up period.",
        content: "A long-term study of a novel JAK inhibitor for atopic dermatitis has shown sustained efficacy and safety over a 2-year period. Published in the Journal of the American Academy of Dermatology, the study followed 800 patients with moderate-to-severe atopic dermatitis who received the treatment. Results showed that 85% of patients maintained at least 75% improvement in their Eczema Area and Severity Index (EASI-75) score at 2 years. Importantly, the treatment demonstrated an excellent safety profile with no significant increase in adverse events over time. Patients also reported sustained improvements in quality of life measures, including sleep quality and daily activities. The study provides strong evidence for the long-term effectiveness of JAK inhibitors in managing atopic dermatitis and supports their use as a first-line treatment option for severe cases.",
        category: "treatment",
        journal: "JAAD",
        year: "2024",
        author: "Dr. Lisa Thompson et al.",
        date: "2024-12-10",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
        tags: ["atopic dermatitis", "JAK inhibitor", "eczema", "long-term study"]
    },
    {
        id: 6,
        title: "Microbiome-Based Therapy Shows Promise for Acne Treatment",
        excerpt: "Novel probiotic-based treatment targeting skin microbiome demonstrates significant reduction in acne lesions and improved skin barrier function.",
        content: "A revolutionary approach to acne treatment using microbiome-based therapy has shown promising results in a clinical trial. The treatment involves applying a carefully selected probiotic formulation that restores the balance of beneficial bacteria on the skin. Results published in Dermatology show that patients treated with the microbiome therapy experienced a 70% reduction in inflammatory acne lesions compared to placebo. The treatment also improved skin barrier function and reduced inflammation markers. Unlike traditional acne treatments that can cause dryness and irritation, the microbiome therapy was well-tolerated with minimal side effects. The study suggests that targeting the skin microbiome could represent a new paradigm in acne treatment, offering a more natural and sustainable approach to managing this common skin condition.",
        category: "treatment",
        journal: "Dermatology",
        year: "2024",
        author: "Dr. Anna Kim et al.",
        date: "2024-12-05",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
        tags: ["acne", "microbiome", "probiotics", "skin barrier"]
    },
    {
        id: 7,
        title: "Breakthrough in Vitiligo Treatment: New Repigmentation Therapy",
        excerpt: "Novel combination therapy achieves significant repigmentation in vitiligo patients, offering new hope for this challenging condition.",
        content: "A new combination therapy for vitiligo has achieved unprecedented results in repigmentation, according to a study published in the British Journal of Dermatology. The treatment combines a JAK inhibitor with targeted phototherapy and has shown remarkable efficacy in restoring skin color in vitiligo patients. The clinical trial involved 200 patients with stable vitiligo affecting 5-50% of their body surface area. Results showed that 65% of patients achieved at least 50% repigmentation within 6 months, with 40% achieving 75% or greater repigmentation. The treatment was particularly effective on facial and hand lesions, areas that are typically most challenging to treat. The therapy works by targeting the immune system's attack on melanocytes while stimulating the remaining pigment cells to proliferate and migrate to depigmented areas.",
        category: "treatment",
        journal: "BJD",
        year: "2024",
        author: "Dr. David Park et al.",
        date: "2024-11-30",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
        tags: ["vitiligo", "repigmentation", "JAK inhibitor", "phototherapy"]
    },
    {
        id: 8,
        title: "AI-Powered Skin Cancer Screening Program Reduces Mortality by 30%",
        excerpt: "Large-scale implementation of AI-assisted skin cancer screening shows significant reduction in melanoma mortality rates.",
        content: "A comprehensive study evaluating the impact of AI-powered skin cancer screening programs has demonstrated a 30% reduction in melanoma mortality rates. The research, published in Nature Dermatology, analyzed data from over 100,000 patients across multiple healthcare systems that implemented AI-assisted screening. The AI system was used to triage suspicious lesions, allowing dermatologists to focus on high-risk cases while reducing unnecessary biopsies. The program also improved early detection rates, with 85% of melanomas being detected at stage 0 or 1, compared to 65% in traditional screening programs. The study highlights the potential of AI to transform skin cancer screening on a population level, particularly in areas with limited access to dermatological expertise. The findings support the integration of AI tools into routine skin cancer screening protocols.",
        category: "diagnosis",
        journal: "Nature",
        year: "2024",
        author: "Dr. Robert Johnson et al.",
        date: "2024-11-25",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
        tags: ["AI screening", "melanoma", "mortality", "early detection"]
    },
    {
        id: 9,
        title: "Novel Drug Delivery System for Psoriasis: Nanoparticle Technology",
        excerpt: "Innovative nanoparticle-based drug delivery system shows enhanced efficacy and reduced side effects in psoriasis treatment.",
        content: "A breakthrough in drug delivery technology for psoriasis treatment has been reported in the Journal of Investigative Dermatology. Researchers have developed a nanoparticle-based delivery system that targets inflamed skin cells more precisely than traditional topical treatments. The nanoparticles are designed to release medication only in areas of active inflammation, reducing systemic absorption and side effects. Clinical trials showed that the nanoparticle treatment achieved 80% improvement in psoriasis symptoms compared to 60% with standard topical treatments. The new delivery system also reduced the frequency of application from twice daily to once daily, improving patient compliance. This technology represents a significant advancement in topical drug delivery and could be applied to other inflammatory skin conditions.",
        category: "treatment",
        journal: "JID",
        year: "2024",
        author: "Dr. Maria Garcia et al.",
        date: "2024-11-20",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
        tags: ["nanoparticles", "drug delivery", "psoriasis", "topical treatment"]
    },
    {
        id: 10,
        title: "Lifestyle Factors and Skin Health: Comprehensive Meta-Analysis",
        excerpt: "Large-scale meta-analysis reveals the impact of diet, exercise, and stress management on skin health and aging.",
        content: "A comprehensive meta-analysis of over 50 studies examining the relationship between lifestyle factors and skin health has been published in the British Journal of Dermatology. The analysis included data from over 100,000 participants and examined the effects of diet, exercise, stress management, and sleep on various skin conditions and aging. Results showed that a Mediterranean diet rich in antioxidants was associated with reduced signs of aging and improved skin barrier function. Regular exercise was linked to better skin circulation and reduced inflammation. Stress management techniques, including meditation and yoga, were associated with improved outcomes in inflammatory skin conditions. The study provides strong evidence for the importance of lifestyle modifications in maintaining skin health and preventing skin aging.",
        category: "prevention",
        journal: "BJD",
        year: "2024",
        author: "Dr. Jennifer Lee et al.",
        date: "2024-11-15",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
        tags: ["lifestyle", "diet", "exercise", "stress management"]
    }
];

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

// Initialize blog posts and skin conditions on page load
document.addEventListener('DOMContentLoaded', function() {
    displayBlogPosts();
    displaySkinConditions();
});

// Blog functionality
let currentBlogPage = 1;
const postsPerPage = 6;
let filteredBlogPosts = [...blogPosts];

// Display blog posts
function displayBlogPosts() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    const startIndex = (currentBlogPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = filteredBlogPosts.slice(startIndex, endIndex);
    
    if (currentBlogPage === 1) {
        grid.innerHTML = '';
    }
    
    postsToShow.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.onclick = () => showBlogPostDetails(post);
        
        card.innerHTML = `
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-category">${post.category}</div>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-journal">${post.journal}</span>
                    <span class="blog-date">${formatDate(post.date)}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-author">By ${post.author}</div>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    // Update load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (endIndex >= filteredBlogPosts.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

// Filter blog posts
function filterBlogPosts() {
    const categoryFilter = document.getElementById('blogCategoryFilter').value;
    const journalFilter = document.getElementById('blogJournalFilter').value;
    const yearFilter = document.getElementById('blogYearFilter').value;
    
    filteredBlogPosts = blogPosts.filter(post => {
        const matchesCategory = !categoryFilter || post.category === categoryFilter;
        const matchesJournal = !journalFilter || post.journal === journalFilter;
        const matchesYear = !yearFilter || post.year === yearFilter;
        
        return matchesCategory && matchesJournal && matchesYear;
    });
    
    currentBlogPage = 1;
    displayBlogPosts();
}

// Load more posts
function loadMorePosts() {
    currentBlogPage++;
    displayBlogPosts();
}

// Show blog post details
function showBlogPostDetails(post) {
    const modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.innerHTML = `
        <div class="modal-content blog-modal-content">
            <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <div class="blog-header">
                <div class="blog-image-large">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="blog-meta-large">
                    <span class="blog-category-badge">${post.category}</span>
                    <span class="blog-journal-badge">${post.journal}</span>
                    <span class="blog-date-large">${formatDate(post.date)}</span>
                </div>
            </div>
            <h2>${post.title}</h2>
            <div class="blog-author-large">By ${post.author}</div>
            <div class="blog-content-full">
                <p>${post.content}</p>
            </div>
            <div class="blog-tags-large">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="disclaimer">
                <small><em>Note: This article summarizes recent research findings. For medical advice, please consult a healthcare professional.</em></small>
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

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

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
