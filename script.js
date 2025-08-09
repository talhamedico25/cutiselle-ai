// Enhanced AI Configuration
const AI_CONFIG = {
    frontendTech: "React.js, TensorFlow.js, Hugging Face API"
};

// Comprehensive Skin Conditions Database
window.SKIN_CONDITIONS_DATABASE = {
    // Common Skin Concerns
    "acne": {
        name: "Acne Vulgaris",
        description: "A common skin condition that occurs when hair follicles become plugged with oil and dead skin cells.",
        symptoms: ["Whiteheads", "Blackheads", "Pimples", "Large painful bumps", "Oily skin"],
        causes: ["Excess oil production", "Bacteria", "Hormonal changes", "Diet", "Stress"],
        treatments: ["Benzoyl peroxide", "Salicylic acid", "Retinoids", "Antibiotics", "Hormonal therapy"],
        severity: "Mild to Severe",
        prevention: ["Keep skin clean", "Avoid touching face", "Use non-comedogenic products", "Manage stress"],
        doctorConsultation: "Consult if severe, persistent, or causing scarring",
        ageGroup: "Teens to Adults",
        prevalence: "Very Common"
    },
    "wrinkles": {
        name: "Wrinkles and Fine Lines",
        description: "Natural creases, folds, or ridges in the skin that develop with age and sun exposure.",
        symptoms: ["Fine lines", "Deep creases", "Loose skin", "Loss of elasticity"],
        causes: ["Aging", "Sun exposure", "Smoking", "Facial expressions", "Gravity"],
        treatments: ["Retinoids", "Chemical peels", "Botox", "Fillers", "Laser therapy"],
        severity: "Cosmetic",
        prevention: ["Sun protection", "Moisturize", "Don't smoke", "Healthy diet"],
        doctorConsultation: "Consult for treatment options",
        ageGroup: "Adults 25+",
        prevalence: "Very Common"
    },
    "dark_spots": {
        name: "Hyperpigmentation (Dark Spots)",
        description: "Darkened areas of skin caused by excess melanin production.",
        symptoms: ["Brown spots", "Age spots", "Sun spots", "Uneven skin tone"],
        causes: ["Sun exposure", "Hormonal changes", "Acne scars", "Inflammation", "Aging"],
        treatments: ["Hydroquinone", "Vitamin C", "Chemical peels", "Laser therapy", "Microdermabrasion"],
        severity: "Cosmetic",
        prevention: ["Sun protection", "Avoid picking acne", "Gentle skincare"],
        doctorConsultation: "Consult if spots change shape or color",
        ageGroup: "All ages",
        prevalence: "Very Common"
    },
    "oily_skin": {
        name: "Oily Skin",
        description: "Skin that produces excess sebum, making it appear shiny and greasy.",
        symptoms: ["Shiny appearance", "Large pores", "Blackheads", "Acne-prone", "Greasy feel"],
        causes: ["Genetics", "Hormones", "Humidity", "Over-washing", "Harsh products"],
        treatments: ["Gentle cleansers", "Oil-free moisturizers", "Clay masks", "Salicylic acid", "Blotting papers"],
        severity: "Mild",
        prevention: ["Don't over-wash", "Use appropriate products", "Manage stress"],
        doctorConsultation: "Consult if causing severe acne or irritation",
        ageGroup: "All ages",
        prevalence: "Very Common"
    },
    "dry_skin": {
        name: "Dry Skin (Xerosis)",
        description: "Skin that lacks moisture and natural oils, often feeling tight and rough.",
        symptoms: ["Rough texture", "Flaking", "Itching", "Tight feeling", "Redness"],
        causes: ["Weather", "Hot showers", "Harsh soaps", "Medical conditions", "Aging"],
        treatments: ["Gentle cleansers", "Rich moisturizers", "Humidifiers", "Avoid hot water", "Occlusive products"],
        severity: "Mild to Moderate",
        prevention: ["Moisturize regularly", "Use gentle products", "Avoid hot water"],
        doctorConsultation: "Consult if severe itching or cracking",
        ageGroup: "All ages",
        prevalence: "Very Common"
    },
    "sensitive_skin": {
        name: "Sensitive Skin",
        description: "Skin that easily reacts to products, environmental factors, or physical irritation.",
        symptoms: ["Redness", "Burning", "Itching", "Stinging", "Rash"],
        causes: ["Genetics", "Environmental factors", "Harsh products", "Medical conditions"],
        treatments: ["Gentle products", "Fragrance-free", "Patch testing", "Avoid triggers", "Barrier repair"],
        severity: "Mild to Moderate",
        prevention: ["Use gentle products", "Patch test new items", "Avoid known triggers"],
        doctorConsultation: "Consult if severe reactions or persistent symptoms",
        ageGroup: "All ages",
        prevalence: "Common"
    },
    "sweaty_skin": {
        name: "Excessive Sweating (Hyperhidrosis)",
        description: "Abnormal sweating that exceeds the body's normal cooling needs.",
        symptoms: ["Excessive sweating", "Wet palms", "Wet feet", "Sweaty underarms", "Social anxiety"],
        causes: ["Genetics", "Medical conditions", "Medications", "Anxiety", "Heat"],
        treatments: ["Antiperspirants", "Botox injections", "Iontophoresis", "Medications", "Surgery"],
        severity: "Mild to Severe",
        prevention: ["Avoid triggers", "Wear breathable fabrics", "Manage stress"],
        doctorConsultation: "Consult for treatment options",
        ageGroup: "All ages",
        prevalence: "Common"
    },
    "large_pores": {
        name: "Large Pores",
        description: "Enlarged openings of hair follicles that can make skin appear rough and uneven.",
        symptoms: ["Visible pores", "Rough texture", "Oily skin", "Blackheads"],
        causes: ["Genetics", "Oily skin", "Aging", "Sun damage", "Acne"],
        treatments: ["Retinoids", "Chemical peels", "Laser therapy", "Clay masks", "Proper cleansing"],
        severity: "Cosmetic",
        prevention: ["Sun protection", "Gentle cleansing", "Avoid picking"],
        doctorConsultation: "Consult for treatment options",
        ageGroup: "All ages",
        prevalence: "Common"
    },
    "blackheads": {
        name: "Blackheads (Open Comedones)",
        description: "Small bumps that appear when hair follicles become clogged with oil and dead skin cells.",
        symptoms: ["Small dark spots", "Bumpy texture", "Oily skin", "Enlarged pores"],
        causes: ["Excess oil", "Dead skin buildup", "Bacteria", "Hormonal changes"],
        treatments: ["Salicylic acid", "Benzoyl peroxide", "Retinoids", "Chemical peels", "Extraction"],
        severity: "Mild",
        prevention: ["Gentle cleansing", "Exfoliation", "Oil control"],
        doctorConsultation: "Consult if severe or causing scarring",
        ageGroup: "Teens to Adults",
        prevalence: "Very Common"
    },
    "whiteheads": {
        name: "Whiteheads (Closed Comedones)",
        description: "Small white bumps that form when hair follicles become clogged and closed.",
        symptoms: ["Small white bumps", "Bumpy texture", "Closed pores", "Oily skin"],
        causes: ["Excess oil", "Dead skin buildup", "Bacteria", "Hormonal changes"],
        treatments: ["Salicylic acid", "Retinoids", "Chemical peels", "Gentle exfoliation"],
        severity: "Mild",
        prevention: ["Gentle cleansing", "Regular exfoliation", "Oil control"],
        doctorConsultation: "Consult if severe or persistent",
        ageGroup: "Teens to Adults",
        prevalence: "Very Common"
    },
    "rosacea": {
        name: "Rosacea",
        description: "A chronic skin condition that causes redness and visible blood vessels in the face.",
        symptoms: ["Facial redness", "Visible blood vessels", "Bumps and pimples", "Eye irritation", "Flushing"],
        causes: ["Genetics", "Environmental triggers", "Demodex mites", "Bacteria", "Immune system"],
        treatments: ["Metronidazole", "Azelaic acid", "Ivermectin", "Laser therapy", "Avoid triggers"],
        severity: "Mild to Severe",
        prevention: ["Identify triggers", "Gentle skincare", "Sun protection"],
        doctorConsultation: "Consult for proper diagnosis and treatment",
        ageGroup: "Adults 30+",
        prevalence: "Common"
    },
    "eczema": {
        name: "Atopic Dermatitis (Eczema)",
        description: "A chronic inflammatory skin condition that causes dry, itchy, and inflamed skin.",
        symptoms: ["Dry skin", "Itching", "Red patches", "Cracking", "Thickened skin"],
        causes: ["Genetics", "Immune system", "Environmental factors", "Allergies", "Stress"],
        treatments: ["Moisturizers", "Topical steroids", "Antihistamines", "Wet wrap therapy", "Avoid triggers"],
        severity: "Mild to Severe",
        prevention: ["Moisturize regularly", "Avoid triggers", "Gentle products"],
        doctorConsultation: "Consult for proper treatment plan",
        ageGroup: "All ages",
        prevalence: "Common"
    },
    "psoriasis": {
        name: "Psoriasis",
        description: "A chronic autoimmune condition that causes rapid skin cell growth, leading to thick, scaly patches.",
        symptoms: ["Red patches", "Silvery scales", "Itching", "Burning", "Thickened skin"],
        causes: ["Autoimmune disorder", "Genetics", "Triggers (stress, infection)", "Immune system"],
        treatments: ["Topical steroids", "Vitamin D analogs", "Light therapy", "Systemic medications", "Biologics"],
        severity: "Mild to Severe",
        prevention: ["Avoid triggers", "Stress management", "Skin care"],
        doctorConsultation: "Consult for proper diagnosis and treatment",
        ageGroup: "All ages",
        prevalence: "Common"
    },
    "vitiligo": {
        name: "Vitiligo",
        description: "A condition that causes loss of skin color in patches due to destruction of melanocytes.",
        symptoms: ["White patches", "Loss of skin color", "Premature gray hair", "Loss of eye color"],
        causes: ["Autoimmune disorder", "Genetics", "Environmental factors", "Stress"],
        treatments: ["Topical steroids", "Light therapy", "Surgery", "Cosmetic cover-up", "Support groups"],
        severity: "Mild to Severe",
        prevention: "No known prevention",
        doctorConsultation: "Consult for proper diagnosis and treatment",
        ageGroup: "All ages",
        prevalence: "Uncommon"
    },
    "melasma": {
        name: "Melasma",
        description: "A common skin condition that causes brown or gray-brown patches on the face.",
        symptoms: ["Brown patches", "Symmetrical distribution", "Sun-exposed areas", "Worsens with sun"],
        causes: ["Hormonal changes", "Sun exposure", "Pregnancy", "Birth control", "Genetics"],
        treatments: ["Hydroquinone", "Vitamin C", "Chemical peels", "Laser therapy", "Sun protection"],
        severity: "Cosmetic",
        prevention: ["Sun protection", "Hormone management"],
        doctorConsultation: "Consult for treatment options",
        ageGroup: "Adults, especially women",
        prevalence: "Common"
    },
    "keratosis_pilaris": {
        name: "Keratosis Pilaris",
        description: "A common skin condition that causes small, rough bumps on the skin, often on the arms and thighs.",
        symptoms: ["Small rough bumps", "Chicken skin appearance", "Dry patches", "Itching"],
        causes: ["Keratin buildup", "Genetics", "Dry skin", "Environmental factors"],
        treatments: ["Moisturizers", "Exfoliation", "Lactic acid", "Urea creams", "Gentle cleansing"],
        severity: "Mild",
        prevention: ["Keep skin moisturized", "Gentle exfoliation"],
        doctorConsultation: "Consult if severe or causing distress",
        ageGroup: "All ages",
        prevalence: "Common"
    },
    "actinic_keratosis": {
        name: "Actinic Keratosis",
        description: "Precancerous growths that develop from years of sun exposure.",
        symptoms: ["Rough patches", "Scaly texture", "Pink or red base", "Crusting", "Itching"],
        causes: ["Sun exposure", "UV damage", "Fair skin", "Age", "Weakened immune system"],
        treatments: ["Cryotherapy", "Topical medications", "Chemical peels", "Laser therapy", "Surgery"],
        severity: "Moderate to Severe",
        prevention: ["Sun protection", "Regular skin checks", "Avoid tanning"],
        doctorConsultation: "Consult immediately - precancerous condition",
        ageGroup: "Adults 40+",
        prevalence: "Common in sun-exposed areas"
    },
    "basal_cell_carcinoma": {
        name: "Basal Cell Carcinoma",
        description: "The most common type of skin cancer, usually slow-growing and rarely spreads.",
        symptoms: ["Pearly bump", "Pink patch", "Sore that doesn't heal", "Shiny bump", "Scar-like area"],
        causes: ["Sun exposure", "UV damage", "Fair skin", "Age", "Weakened immune system"],
        treatments: ["Surgery", "Mohs surgery", "Radiation", "Topical medications", "Cryotherapy"],
        severity: "Serious - requires treatment",
        prevention: ["Sun protection", "Regular skin checks", "Avoid tanning"],
        doctorConsultation: "Consult immediately - skin cancer",
        ageGroup: "Adults 50+",
        prevalence: "Very Common"
    },
    "squamous_cell_carcinoma": {
        name: "Squamous Cell Carcinoma",
        description: "A type of skin cancer that can grow quickly and spread to other parts of the body.",
        symptoms: ["Red scaly patch", "Sore that doesn't heal", "Wart-like growth", "Crusting", "Bleeding"],
        causes: ["Sun exposure", "UV damage", "Fair skin", "Age", "Chemical exposure"],
        treatments: ["Surgery", "Mohs surgery", "Radiation", "Chemotherapy", "Immunotherapy"],
        severity: "Serious - requires immediate treatment",
        prevention: ["Sun protection", "Regular skin checks", "Avoid tanning"],
        doctorConsultation: "Consult immediately - skin cancer",
        ageGroup: "Adults 50+",
        prevalence: "Common"
    },
    "melanoma": {
        name: "Melanoma",
        description: "The most serious type of skin cancer that can spread quickly to other organs.",
        symptoms: ["Asymmetric mole", "Irregular borders", "Color variation", "Diameter >6mm", "Evolution"],
        causes: ["Sun exposure", "UV damage", "Fair skin", "Genetics", "Mole count"],
        treatments: ["Surgery", "Immunotherapy", "Targeted therapy", "Chemotherapy", "Radiation"],
        severity: "Very Serious - requires immediate treatment",
        prevention: ["Sun protection", "Regular skin checks", "Avoid tanning"],
        doctorConsultation: "Consult immediately - serious skin cancer",
        ageGroup: "All ages",
        prevalence: "Less common but deadly"
    },
    "ringworm": {
        name: "Ringworm (Tinea)",
        description: "A fungal infection that causes a ring-shaped rash on the skin.",
        symptoms: ["Ring-shaped rash", "Red scaly patches", "Itching", "Clear center", "Blisters"],
        causes: ["Fungal infection", "Direct contact", "Warm moist environments", "Weakened immune system"],
        treatments: ["Antifungal creams", "Oral antifungals", "Keep area dry", "Avoid sharing items"],
        severity: "Mild to Moderate",
        prevention: ["Keep skin dry", "Don't share personal items", "Wear breathable clothing"],
        doctorConsultation: "Consult if severe or persistent",
        ageGroup: "All ages",
        prevalence: "Common"
    },
    "warts": {
        name: "Warts",
        description: "Small, rough growths caused by the human papillomavirus (HPV).",
        symptoms: ["Small rough growths", "Flesh-colored", "May be painful", "Can spread"],
        causes: ["HPV virus", "Direct contact", "Weakened immune system", "Skin breaks"],
        treatments: ["Salicylic acid", "Cryotherapy", "Laser therapy", "Surgery", "Immunotherapy"],
        severity: "Mild",
        prevention: ["Don't pick warts", "Keep hands clean", "Avoid direct contact"],
        doctorConsultation: "Consult if painful or spreading",
        ageGroup: "All ages",
        prevalence: "Common"
    },
    "impetigo": {
        name: "Impetigo",
        description: "A highly contagious bacterial skin infection that causes red sores and blisters.",
        symptoms: ["Red sores", "Blisters", "Honey-colored crusts", "Itching", "Pain"],
        causes: ["Bacteria (Staph/Strep)", "Skin breaks", "Poor hygiene", "Close contact"],
        treatments: ["Antibiotic creams", "Oral antibiotics", "Keep clean", "Avoid scratching"],
        severity: "Mild to Moderate",
        prevention: ["Good hygiene", "Keep wounds clean", "Avoid contact with infected"],
        doctorConsultation: "Consult for proper treatment",
        ageGroup: "Children most common",
        prevalence: "Common in children"
    },
    "cellulitis": {
        name: "Cellulitis",
        description: "A serious bacterial infection of the skin and underlying tissues.",
        symptoms: ["Red swollen area", "Pain", "Warmth", "Fever", "Chills"],
        causes: ["Bacterial infection", "Skin breaks", "Poor circulation", "Weakened immune system"],
        treatments: ["Oral antibiotics", "IV antibiotics", "Wound care", "Elevation", "Rest"],
        severity: "Serious - requires immediate treatment",
        prevention: ["Keep wounds clean", "Good hygiene", "Treat skin conditions"],
        doctorConsultation: "Consult immediately - serious infection",
        ageGroup: "All ages",
        prevalence: "Common"
    },
    "herpes_simplex": {
        name: "Herpes Simplex (Cold Sores)",
        description: "A viral infection that causes painful blisters around the mouth or genitals.",
        symptoms: ["Painful blisters", "Tingling", "Itching", "Fever", "Swollen glands"],
        causes: ["HSV-1 or HSV-2 virus", "Direct contact", "Stress", "Sun exposure", "Illness"],
        treatments: ["Antiviral medications", "Pain relievers", "Keep clean", "Avoid triggers"],
        severity: "Mild to Moderate",
        prevention: ["Avoid contact during outbreaks", "Sun protection", "Stress management"],
        doctorConsultation: "Consult for first outbreak or severe symptoms",
        ageGroup: "All ages",
        prevalence: "Very Common"
    },
    "shingles": {
        name: "Shingles (Herpes Zoster)",
        description: "A painful rash caused by reactivation of the chickenpox virus.",
        symptoms: ["Painful rash", "Blisters", "Burning", "Tingling", "Fever"],
        causes: ["Varicella-zoster virus", "Weakened immune system", "Stress", "Aging"],
        treatments: ["Antiviral medications", "Pain relievers", "Calamine lotion", "Rest"],
        severity: "Moderate to Severe",
        prevention: ["Shingles vaccine", "Stress management", "Healthy lifestyle"],
        doctorConsultation: "Consult immediately for treatment",
        ageGroup: "Adults 50+",
        prevalence: "Common in older adults"
    },
    "diaper_rash": {
        name: "Diaper Rash",
        description: "A common skin irritation in the diaper area of babies and young children.",
        symptoms: ["Red irritated skin", "Bumps", "Scaling", "Pain", "Discomfort"],
        causes: ["Wet diapers", "Friction", "Irritating products", "Yeast infection", "Bacteria"],
        treatments: ["Frequent diaper changes", "Barrier creams", "Air time", "Gentle cleansing"],
        severity: "Mild",
        prevention: ["Frequent changes", "Barrier protection", "Gentle products"],
        doctorConsultation: "Consult if severe or persistent",
        ageGroup: "Infants and toddlers",
        prevalence: "Very Common in babies"
    },
    "molluscum_contagiosum": {
        name: "Molluscum Contagiosum",
        description: "A viral skin infection that causes small, raised, pearl-like bumps.",
        symptoms: ["Small pearly bumps", "Central dimple", "Itching", "Can spread", "Painless"],
        causes: ["Poxvirus", "Direct contact", "Sexual contact", "Weakened immune system"],
        treatments: ["Cryotherapy", "Laser therapy", "Topical medications", "Surgery", "Wait for resolution"],
        severity: "Mild",
        prevention: ["Avoid contact", "Don't scratch", "Good hygiene"],
        doctorConsultation: "Consult for treatment options",
        ageGroup: "Children and young adults",
        prevalence: "Common in children"
    },
    "alopecia_areata": {
        name: "Alopecia Areata",
        description: "An autoimmune condition that causes hair loss in patches.",
        symptoms: ["Patchy hair loss", "Smooth bald patches", "Nail changes", "Regrowth possible"],
        causes: ["Autoimmune disorder", "Genetics", "Stress", "Environmental factors"],
        treatments: ["Corticosteroids", "Minoxidil", "Immunotherapy", "Light therapy", "Support groups"],
        severity: "Mild to Severe",
        prevention: "No known prevention",
        doctorConsultation: "Consult for proper diagnosis and treatment",
        ageGroup: "All ages",
        prevalence: "Uncommon"
    },
    "seborrheic_dermatitis": {
        name: "Seborrheic Dermatitis",
        description: "A common skin condition that causes scaly patches, red skin, and stubborn dandruff.",
        symptoms: ["Scaly patches", "Red skin", "Dandruff", "Itching", "Greasy appearance"],
        causes: ["Yeast overgrowth", "Oily skin", "Stress", "Weather changes", "Medical conditions"],
        treatments: ["Antifungal shampoos", "Corticosteroids", "Coal tar", "Salicylic acid", "Light therapy"],
        severity: "Mild to Moderate",
        prevention: ["Regular cleansing", "Stress management", "Avoid triggers"],
        doctorConsultation: "Consult if severe or persistent",
        ageGroup: "All ages",
        prevalence: "Common"
    },
    "urticaria": {
        name: "Urticaria (Hives)",
        description: "A skin reaction that causes itchy welts and can be triggered by many factors.",
        symptoms: ["Itchy welts", "Red patches", "Swelling", "Burning", "Stinging"],
        causes: ["Allergies", "Medications", "Infections", "Stress", "Physical triggers"],
        treatments: ["Antihistamines", "Corticosteroids", "Avoid triggers", "Cool compresses"],
        severity: "Mild to Severe",
        prevention: ["Identify triggers", "Avoid known causes", "Stress management"],
        doctorConsultation: "Consult if severe or persistent",
        ageGroup: "All ages",
        prevalence: "Common"
    },
    "contact_dermatitis": {
        name: "Contact Dermatitis",
        description: "A skin reaction caused by contact with an irritating substance or allergen.",
        symptoms: ["Red rash", "Itching", "Blisters", "Swelling", "Burning"],
        causes: ["Irritants", "Allergens", "Chemicals", "Metals", "Plants"],
        treatments: ["Avoid triggers", "Corticosteroids", "Antihistamines", "Cool compresses", "Barrier creams"],
        severity: "Mild to Moderate",
        prevention: ["Identify triggers", "Patch testing", "Protective clothing"],
        doctorConsultation: "Consult if severe or persistent",
        ageGroup: "All ages",
        prevalence: "Common"
    },
    "pityriasis_rosea": {
        name: "Pityriasis Rosea",
        description: "A common skin condition that causes a rash with a distinctive pattern.",
        symptoms: ["Herald patch", "Rash spreading", "Itching", "Oval patches", "Self-resolving"],
        causes: ["Viral infection", "Unknown trigger", "Seasonal changes", "Stress"],
        treatments: ["Moisturizers", "Antihistamines", "Light therapy", "Wait for resolution"],
        severity: "Mild",
        prevention: "No known prevention",
        doctorConsultation: "Consult for proper diagnosis",
        ageGroup: "Teens to young adults",
        prevalence: "Common"
    },
    "dermatomyositis": {
        name: "Dermatomyositis",
        description: "A rare inflammatory disease that causes muscle weakness and skin rash.",
        symptoms: ["Muscle weakness", "Skin rash", "Joint pain", "Fatigue", "Difficulty swallowing"],
        causes: ["Autoimmune disorder", "Genetics", "Environmental factors", "Cancer association"],
        treatments: ["Corticosteroids", "Immunosuppressants", "Physical therapy", "Sun protection"],
        severity: "Serious - requires treatment",
        prevention: "No known prevention",
        doctorConsultation: "Consult immediately - serious condition",
        ageGroup: "Adults 40+",
        prevalence: "Rare"
    },
    "lichen_sclerosus": {
        name: "Lichen Sclerosus",
        description: "A chronic skin condition that causes white, patchy skin that's thinner than normal.",
        symptoms: ["White patches", "Thin skin", "Itching", "Pain", "Scarring"],
        causes: ["Autoimmune disorder", "Genetics", "Hormonal changes", "Unknown trigger"],
        treatments: ["Topical steroids", "Moisturizers", "Avoid scratching", "Regular monitoring"],
        severity: "Mild to Moderate",
        prevention: "No known prevention",
        doctorConsultation: "Consult for proper diagnosis and treatment",
        ageGroup: "All ages, more common in women",
        prevalence: "Uncommon"
    },
    "mycetoma": {
        name: "Mycetoma",
        description: "A chronic, destructive infection that affects the skin and underlying tissues.",
        symptoms: ["Swelling", "Nodules", "Sinus tracts", "Discharge", "Deformity"],
        causes: ["Fungal or bacterial infection", "Soil exposure", "Trauma", "Poor hygiene"],
        treatments: ["Antifungals", "Antibiotics", "Surgery", "Wound care", "Amputation if severe"],
        severity: "Serious - can cause disability",
        prevention: ["Protective footwear", "Good hygiene", "Avoid trauma"],
        doctorConsultation: "Consult immediately - serious infection",
        ageGroup: "All ages",
        prevalence: "Rare in developed countries"
    },
    "acanthosis_nigricans": {
        name: "Acanthosis Nigricans",
        description: "A skin condition that causes dark, thickened patches in body folds and creases.",
        symptoms: ["Dark patches", "Thickened skin", "Velvety texture", "Body folds affected"],
        causes: ["Insulin resistance", "Diabetes", "Obesity", "Hormonal disorders", "Medications"],
        treatments: ["Treat underlying cause", "Weight loss", "Diabetes management", "Topical treatments"],
        severity: "Mild to Moderate",
        prevention: ["Maintain healthy weight", "Manage diabetes", "Healthy lifestyle"],
        doctorConsultation: "Consult to identify underlying cause",
        ageGroup: "All ages",
        prevalence: "Common in obese/diabetic individuals"
    },
    "argyria": {
        name: "Argyria",
        description: "A rare condition that causes the skin to turn blue-gray due to silver buildup.",
        symptoms: ["Blue-gray skin", "Blue-gray nails", "Blue-gray eyes", "Permanent discoloration"],
        causes: ["Silver exposure", "Silver medications", "Silver supplements", "Occupational exposure"],
        treatments: ["Stop silver exposure", "Laser therapy", "Dermabrasion", "Support groups"],
        severity: "Cosmetic but permanent",
        prevention: ["Avoid silver products", "Check medications", "Occupational safety"],
        doctorConsultation: "Consult for proper diagnosis",
        ageGroup: "All ages",
        prevalence: "Very Rare"
    },
    "sarcoidosis": {
        name: "Sarcoidosis",
        description: "A disease that causes inflammation and can affect multiple organs including the skin.",
        symptoms: ["Red bumps", "Purple patches", "Scarring", "Systemic symptoms", "Fatigue"],
        causes: ["Unknown", "Immune system", "Genetics", "Environmental factors"],
        treatments: ["Corticosteroids", "Immunosuppressants", "Light therapy", "Monitor organs"],
        severity: "Mild to Severe",
        prevention: "No known prevention",
        doctorConsultation: "Consult for proper diagnosis and treatment",
        ageGroup: "Adults 20-40",
        prevalence: "Rare"
    },
    "mycosis_fungoides": {
        name: "Mycosis Fungoides",
        description: "A rare type of cutaneous T-cell lymphoma that affects the skin.",
        symptoms: ["Red patches", "Plaques", "Tumors", "Itching", "Systemic symptoms"],
        causes: ["Unknown", "Genetic mutations", "Environmental factors", "Immune system"],
        treatments: ["Topical treatments", "Light therapy", "Chemotherapy", "Radiation", "Stem cell transplant"],
        severity: "Serious - cancer",
        prevention: "No known prevention",
        doctorConsultation: "Consult immediately - cancer diagnosis",
        ageGroup: "Adults 40+",
        prevalence: "Rare"
    },
    "bullous_pemphigoid": {
        name: "Bullous Pemphigoid",
        description: "A rare autoimmune blistering disease that affects the skin.",
        symptoms: ["Large blisters", "Itching", "Red patches", "Skin fragility", "Mouth sores"],
        causes: ["Autoimmune disorder", "Genetics", "Medications", "Unknown trigger"],
        treatments: ["Corticosteroids", "Immunosuppressants", "Antibiotics", "Wound care"],
        severity: "Serious - requires treatment",
        prevention: "No known prevention",
        doctorConsultation: "Consult immediately - serious condition",
        ageGroup: "Adults 60+",
        prevalence: "Rare"
    },
    "pemphigus_vulgaris": {
        name: "Pemphigus Vulgaris",
        description: "A rare autoimmune disease that causes painful blisters on the skin and mucous membranes.",
        symptoms: ["Painful blisters", "Mouth sores", "Skin fragility", "Itching", "Pain"],
        causes: ["Autoimmune disorder", "Genetics", "Unknown trigger", "Medications"],
        treatments: ["Corticosteroids", "Immunosuppressants", "Rituximab", "Wound care"],
        severity: "Serious - requires treatment",
        prevention: "No known prevention",
        doctorConsultation: "Consult immediately - serious condition",
        ageGroup: "Adults 40-60",
        prevalence: "Very Rare"
    },
    "hidradenitis_suppurativa": {
        name: "Hidradenitis Suppurativa",
        description: "A chronic skin condition that causes painful lumps under the skin, often in areas with sweat glands.",
        symptoms: ["Painful lumps", "Boil-like lesions", "Scarring", "Drainage", "Recurring"],
        causes: ["Unknown", "Genetics", "Hormones", "Obesity", "Smoking"],
        treatments: ["Antibiotics", "Anti-inflammatory medications", "Surgery", "Lifestyle changes"],
        severity: "Moderate to Severe",
        prevention: ["Weight management", "Don't smoke", "Good hygiene"],
        doctorConsultation: "Consult for proper treatment plan",
        ageGroup: "Teens to adults",
        prevalence: "Uncommon"
    },
    "blau_syndrome": {
        name: "Blau Syndrome",
        description: "A rare genetic disorder that causes inflammation in various parts of the body including the skin.",
        symptoms: ["Skin rash", "Joint inflammation", "Eye inflammation", "Fever", "Fatigue"],
        causes: ["Genetic mutation", "Inherited disorder", "Autoinflammatory"],
        treatments: ["Corticosteroids", "Immunosuppressants", "Biologics", "Supportive care"],
        severity: "Serious - requires treatment",
        prevention: "No prevention - genetic",
        doctorConsultation: "Consult immediately - rare genetic condition",
        ageGroup: "Children and young adults",
        prevalence: "Very Rare"
    },
    "necrobiosis_lipoidica": {
        name: "Necrobiosis Lipoidica",
        description: "A rare skin condition that causes patches of skin to become thin and discolored.",
        symptoms: ["Red-brown patches", "Thin skin", "Yellow center", "Ulceration", "Itching"],
        causes: ["Diabetes", "Unknown", "Autoimmune", "Circulation problems"],
        treatments: ["Diabetes management", "Topical steroids", "Light therapy", "Wound care"],
        severity: "Moderate to Severe",
        prevention: ["Manage diabetes", "Good circulation", "Protect skin"],
        doctorConsultation: "Consult for proper diagnosis and treatment",
        ageGroup: "Adults with diabetes",
        prevalence: "Rare"
    },
    "lupus_cutaneous": {
        name: "Lupus (Cutaneous)",
        description: "A form of lupus that primarily affects the skin, causing various rashes and lesions.",
        symptoms: ["Butterfly rash", "Photosensitivity", "Discoid lesions", "Hair loss", "Mouth sores"],
        causes: ["Autoimmune disorder", "Genetics", "Environmental factors", "Hormones", "Medications"],
        treatments: ["Sun protection", "Topical steroids", "Antimalarials", "Immunosuppressants"],
        severity: "Mild to Severe",
        prevention: ["Sun protection", "Stress management", "Avoid triggers"],
        doctorConsultation: "Consult for proper diagnosis and treatment",
        ageGroup: "Adults 15-45",
        prevalence: "Uncommon"
    },
    "erythema_nodosum": {
        name: "Erythema Nodosum",
        description: "A skin condition that causes painful red bumps, usually on the shins.",
        symptoms: ["Painful red bumps", "Shin location", "Fever", "Joint pain", "Fatigue"],
        causes: ["Infections", "Medications", "Pregnancy", "Inflammatory conditions", "Unknown"],
        treatments: ["Treat underlying cause", "Pain relievers", "Rest", "Compression stockings"],
        severity: "Mild to Moderate",
        prevention: "Treat underlying conditions",
        doctorConsultation: "Consult to identify underlying cause",
        ageGroup: "All ages",
        prevalence: "Uncommon"
    },
    "erythema_multiforme": {
        name: "Erythema Multiforme",
        description: "A skin reaction that causes target-like lesions, often triggered by infections or medications.",
        symptoms: ["Target lesions", "Red patches", "Blisters", "Itching", "Fever"],
        causes: ["Infections", "Medications", "Allergies", "Unknown trigger"],
        treatments: ["Treat underlying cause", "Corticosteroids", "Pain relievers", "Supportive care"],
        severity: "Mild to Severe",
        prevention: ["Avoid known triggers", "Treat infections promptly"],
        doctorConsultation: "Consult for proper diagnosis and treatment",
        ageGroup: "All ages",
        prevalence: "Uncommon"
    },
    "scleroderma": {
        name: "Scleroderma",
        description: "A rare autoimmune disease that causes hardening and tightening of the skin and connective tissues.",
        symptoms: ["Hardened skin", "Tight skin", "Raynaud's phenomenon", "Joint pain", "Difficulty swallowing"],
        causes: ["Autoimmune disorder", "Genetics", "Environmental factors", "Unknown trigger"],
        treatments: ["Immunosuppressants", "Physical therapy", "Pain management", "Organ monitoring"],
        severity: "Serious - requires treatment",
        prevention: "No known prevention",
        doctorConsultation: "Consult immediately - serious condition",
        ageGroup: "Adults 30-50",
        prevalence: "Rare"
    },
    "dermatitis_herpetiformis": {
        name: "Dermatitis Herpetiformis",
        description: "A chronic skin condition characterized by intensely itchy, blistering skin, often associated with celiac disease.",
        symptoms: ["Intense itching", "Blisters", "Red patches", "Symmetrical rash", "Burning"],
        causes: ["Celiac disease", "Gluten sensitivity", "Autoimmune response", "Genetics"],
        treatments: ["Gluten-free diet", "Dapsone", "Topical treatments", "Celiac disease management"],
        severity: "Moderate - requires treatment",
        prevention: ["Gluten-free diet if celiac", "Avoid gluten"],
        doctorConsultation: "Consult for proper diagnosis and treatment",
        ageGroup: "All ages",
        prevalence: "Uncommon"
    },
    "epidermolysis_bullosa": {
        name: "Epidermolysis Bullosa",
        description: "A group of rare genetic disorders that cause the skin to be very fragile and blister easily.",
        symptoms: ["Fragile skin", "Easy blistering", "Wound healing problems", "Scarring", "Pain"],
        causes: ["Genetic mutations", "Inherited disorder", "Collagen defects"],
        treatments: ["Wound care", "Pain management", "Protective measures", "Genetic counseling"],
        severity: "Very Serious - life-threatening",
        prevention: "No prevention - genetic",
        doctorConsultation: "Consult immediately - serious genetic condition",
        ageGroup: "All ages, often from birth",
        prevalence: "Very Rare"
    },
    "ichthyosis": {
        name: "Ichthyosis",
        description: "A group of genetic disorders that cause dry, scaly skin that resembles fish scales.",
        symptoms: ["Dry scaly skin", "Fish scale appearance", "Itching", "Cracking", "Thickened skin"],
        causes: ["Genetic mutations", "Inherited disorder", "Metabolic disorders"],
        treatments: ["Moisturizers", "Exfoliation", "Retinoids", "Urea creams", "Supportive care"],
        severity: "Mild to Severe",
        prevention: "No prevention - genetic",
        doctorConsultation: "Consult for proper diagnosis and treatment",
        ageGroup: "All ages, often from birth",
        prevalence: "Rare"
    },
    "lichen_planus": {
        name: "Lichen Planus",
        description: "An inflammatory condition that can affect the skin, mouth, and other areas.",
        symptoms: ["Purple flat bumps", "Itching", "Mouth sores", "Nail changes", "Scalp involvement"],
        causes: ["Autoimmune disorder", "Unknown trigger", "Medications", "Hepatitis C"],
        treatments: ["Topical steroids", "Oral steroids", "Light therapy", "Antihistamines"],
        severity: "Mild to Moderate",
        prevention: "No known prevention",
        doctorConsultation: "Consult for proper diagnosis and treatment",
        ageGroup: "Adults 30-60",
        prevalence: "Uncommon"
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
                score: 0.6
            }];
        }
    } catch (error) {
        console.warn('Hugging Face API failed, using fallback:', error);
        // Fallback classification
        return [{
            label: 'skin_condition',
            score: 0.6
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
        ? `Database match found. Frontend Technology: ${AI_CONFIG.frontendTech}. This analysis is for educational purposes only.`
        : `No database match found. Frontend Technology: ${AI_CONFIG.frontendTech}.`;

    // Generate results HTML
    const resultsHTML = `
        <div class="analysis-header">
            <h3>Analysis Results</h3>
            <div class="confidence-badge red">
                Database Search Result (Educational Purposes Only)
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
                    <p>Detected: <strong>${topResult.label}</strong></p>
                    <p>No database match found. Consult a healthcare professional.</p>
                </div>
            `}
        </div>
        
        <div class="disclaimer">
            <p><strong>⚠️ Disclaimer:</strong></p>
            <p>${imageAnalyzerDisclaimer}</p>
            <p>Educational purposes only. Not medical advice.</p>
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
// Global AI Response Function
window.generateAIResponse = function(question) {
    const lowerQuestion = question.toLowerCase();
    let bestMatch = null;
    let bestSimilarity = 0;

    // Search through all conditions for matches with fuzzy matching
    Object.entries(SKIN_CONDITIONS_DATABASE).forEach(([key, condition]) => {
        // Direct key match
        if (lowerQuestion.includes(key.toLowerCase()) || lowerQuestion.includes(key.replace('_', ' ').toLowerCase())) {
            bestMatch = { key, condition };
            return; // Exit early for exact match
        }
        
        // Direct name match
        if (lowerQuestion.includes(condition.name.toLowerCase())) {
            bestMatch = { key, condition };
            return; // Exit early for exact match
        }
        
        // Fuzzy matching for spelling mistakes
        const keyWords = key.toLowerCase().split('_');
        const nameWords = condition.name.toLowerCase().split(' ');
        
        // Check if any word from the question matches any word from key or name
        const questionWords = lowerQuestion.split(' ');
        
        questionWords.forEach(qWord => {
            if (qWord.length < 3) return; // Skip very short words
            
            keyWords.forEach(kWord => {
                if (kWord.length < 3) return;
                // Check if words are similar (handle common spelling mistakes)
                if (kWord.includes(qWord) || qWord.includes(kWord) || 
                    kWord.startsWith(qWord) || qWord.startsWith(kWord) ||
                    kWord.endsWith(qWord) || qWord.endsWith(kWord)) {
                    const similarity = Math.min(qWord.length, kWord.length) / Math.max(qWord.length, kWord.length);
                    if (similarity > bestSimilarity) {
                        bestSimilarity = similarity;
                        bestMatch = { key, condition };
                    }
                }
            });
            
            nameWords.forEach(nWord => {
                if (nWord.length < 3) return;
                // Check if words are similar (handle common spelling mistakes)
                if (nWord.includes(qWord) || qWord.includes(nWord) || 
                    nWord.startsWith(qWord) || qWord.startsWith(nWord) ||
                    nWord.endsWith(qWord) || qWord.endsWith(nWord)) {
                    const similarity = Math.min(qWord.length, nWord.length) / Math.max(qWord.length, nWord.length);
                    if (similarity > bestSimilarity) {
                        bestSimilarity = similarity;
                        bestMatch = { key, condition };
                    }
                }
            });
        });
    });

    if (bestMatch) {
        const { condition } = bestMatch;
        return {
            answer: `${condition.name}\n\n${condition.description}\n\n**Symptoms:** ${condition.symptoms.join(', ')}\n**Causes:** ${condition.causes.join(', ')}\n**Treatments:** ${condition.treatments.join(', ')}\n**Prevention:** ${condition.prevention.join(', ')}\n\n**When to see a doctor:** ${condition.doctorConsultation}\n\n**Severity:** ${condition.severity}\n**Age Group:** ${condition.ageGroup}\n**Prevalence:** ${condition.prevalence}`,
            confidence: 'High',
            source: 'Database'
        };
    }

    // Fallback response
    return {
        answer: `No information found for "${question}". Try searching for: acne, wrinkles, dark spots, eczema, psoriasis, or other skin conditions.`,
        confidence: 'Low',
        source: 'Database'
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
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
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
    const questionInput = document.getElementById('questionInput');
    const askButton = document.getElementById('askAIButton');
    const aiResponse = document.getElementById('aiResponse');
    
    if (askButton && questionInput && aiResponse) {
        askButton.addEventListener('click', function() {
            const question = questionInput.value.trim();
            
            if (question) {
                try {
                    const response = generateAIResponse(question);
                    
                    aiResponse.innerHTML = response.answer;
                    aiResponse.style.display = 'block';
                    questionInput.value = '';
                } catch (error) {
                    console.error('Error in generateAIResponse:', error);
                    aiResponse.innerHTML = `Error: ${error.message}`;
                    aiResponse.style.display = 'block';
                }
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
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    

});

// AI Q&A functionality is handled by event listeners in DOMContentLoaded

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
    

}


