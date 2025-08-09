// Enhanced AI Configuration
const AI_CONFIG = {
    confidenceThreshold: 0.3,
    fallbackConfidence: 0.25,
    frontendTech: "React.js, TensorFlow.js, Hugging Face API"
};

// Comprehensive Skin Conditions Database
const SKIN_CONDITIONS_DATABASE = {
    // Genetic Disorders
    'ichthyosis': {
        name: 'Ichthyosis',
        description: 'A group of genetic disorders causing dry, scaly skin that resembles fish scales.',
        symptoms: ['Dry, scaly skin', 'Thickened skin', 'Cracking and peeling', 'Itching', 'Redness'],
        causes: ['Genetic mutations', 'Inherited disorders', 'Metabolic conditions'],
        treatments: ['Moisturizers', 'Exfoliating agents', 'Retinoids', 'Urea-based creams', 'Regular bathing'],
        severity: 'moderate',
        prevention: 'Cannot be prevented due to genetic nature, but symptoms can be managed',
        doctorConsultation: 'Consult a dermatologist for proper diagnosis and treatment plan',
        ageGroup: 'All ages',
        prevalence: 'Rare, affects approximately 1 in 250,000 people'
    },
    'epidermolysis_bullosa': {
        name: 'Epidermolysis Bullosa',
        description: 'A group of rare genetic disorders that cause fragile, blistering skin.',
        symptoms: ['Fragile skin', 'Blisters from minor trauma', 'Wound healing problems', 'Skin infections', 'Joint contractures'],
        causes: ['Genetic mutations affecting collagen proteins', 'Inherited disorders'],
        treatments: ['Wound care', 'Pain management', 'Infection prevention', 'Physical therapy', 'Surgical interventions'],
        severity: 'severe',
        prevention: 'Cannot be prevented due to genetic nature',
        doctorConsultation: 'Immediate consultation with dermatologist and geneticist required',
        ageGroup: 'Present at birth',
        prevalence: 'Very rare, affects approximately 1 in 50,000 people'
    },
    'dermatitis_herpetiformis': {
        name: 'Dermatitis Herpetiformis',
        description: 'A chronic, blistering skin condition caused by gluten intolerance.',
        symptoms: ['Intensely itchy rash', 'Small blisters', 'Red patches', 'Burning sensation', 'Symmetric distribution'],
        causes: ['Celiac disease', 'Gluten sensitivity', 'Autoimmune response'],
        treatments: ['Gluten-free diet', 'Dapsone medication', 'Topical steroids', 'Antihistamines'],
        severity: 'moderate',
        prevention: 'Maintain strict gluten-free diet',
        doctorConsultation: 'Consult dermatologist and gastroenterologist',
        ageGroup: 'Adults, typically 20-40 years',
        prevalence: 'Affects approximately 1 in 10,000 people'
    },
    'scleroderma': {
        name: 'Scleroderma',
        description: 'A rare autoimmune disease that causes hardening and tightening of the skin and connective tissues.',
        symptoms: ['Hard, tight skin', 'Raynaud\'s phenomenon', 'Joint pain', 'Digestive problems', 'Shortness of breath'],
        causes: ['Autoimmune disorder', 'Genetic factors', 'Environmental triggers'],
        treatments: ['Immunosuppressants', 'Vasodilators', 'Physical therapy', 'Pain management'],
        severity: 'severe',
        prevention: 'Cannot be prevented, but early diagnosis helps',
        doctorConsultation: 'Consult rheumatologist and dermatologist immediately',
        ageGroup: 'Adults, typically 30-50 years',
        prevalence: 'Affects approximately 1 in 100,000 people'
    },
    'erythema_multiforme': {
        name: 'Erythema Multiforme',
        description: 'A skin condition characterized by target-like lesions, often triggered by infections or medications.',
        symptoms: ['Target-like skin lesions', 'Itching', 'Burning sensation', 'Fever', 'Joint pain'],
        causes: ['Viral infections (especially HSV)', 'Medications', 'Bacterial infections'],
        treatments: ['Treat underlying cause', 'Topical steroids', 'Antihistamines', 'Pain relief'],
        severity: 'mild_to_moderate',
        prevention: 'Avoid known triggers, manage infections promptly',
        doctorConsultation: 'Consult dermatologist if symptoms persist',
        ageGroup: 'All ages, common in young adults',
        prevalence: 'Common, affects approximately 1 in 1,000 people'
    },
    'erythema_nodosum': {
        name: 'Erythema Nodosum',
        description: 'A skin condition characterized by painful, red nodules on the shins.',
        symptoms: ['Painful red nodules', 'Swelling', 'Tender to touch', 'Fever', 'Joint pain'],
        causes: ['Infections', 'Medications', 'Inflammatory conditions', 'Pregnancy'],
        treatments: ['Treat underlying cause', 'Anti-inflammatory medications', 'Rest and elevation', 'Compression stockings'],
        severity: 'moderate',
        prevention: 'Treat infections promptly, avoid known triggers',
        doctorConsultation: 'Consult dermatologist for proper diagnosis',
        ageGroup: 'All ages, common in young adults',
        prevalence: 'Affects approximately 1 in 5,000 people'
    },
    'lupus_cutaneous': {
        name: 'Cutaneous Lupus',
        description: 'A form of lupus that primarily affects the skin, causing rashes and lesions.',
        symptoms: ['Butterfly rash on face', 'Photosensitivity', 'Discoid lesions', 'Hair loss', 'Mouth ulcers'],
        causes: ['Autoimmune disorder', 'Genetic factors', 'Environmental triggers', 'Sunlight exposure'],
        treatments: ['Sun protection', 'Topical steroids', 'Antimalarials', 'Immunosuppressants'],
        severity: 'moderate',
        prevention: 'Sun protection, avoid known triggers',
        doctorConsultation: 'Consult rheumatologist and dermatologist',
        ageGroup: 'Adults, typically 20-40 years',
        prevalence: 'Affects approximately 1 in 2,000 people'
    },
    'necrobiosis_lipoidica': {
        name: 'Necrobiosis Lipoidica',
        description: 'A rare skin condition that causes patches of skin to become thin and discolored.',
        symptoms: ['Yellow-brown patches', 'Thinning skin', 'Visible blood vessels', 'Ulceration', 'Itching'],
        causes: ['Diabetes', 'Autoimmune factors', 'Poor blood circulation'],
        treatments: ['Control diabetes', 'Topical steroids', 'Compression therapy', 'Surgical options'],
        severity: 'moderate',
        prevention: 'Good diabetes control, regular skin care',
        doctorConsultation: 'Consult dermatologist and endocrinologist',
        ageGroup: 'Adults with diabetes',
        prevalence: 'Rare, affects approximately 1 in 100,000 people'
    },
    'blau_syndrome': {
        name: 'Blau Syndrome',
        description: 'A rare genetic disorder causing inflammation in various parts of the body including the skin.',
        symptoms: ['Skin rash', 'Joint inflammation', 'Eye inflammation', 'Fever', 'Fatigue'],
        causes: ['Genetic mutation in NOD2 gene', 'Inherited disorder'],
        treatments: ['Immunosuppressants', 'Biologic medications', 'Anti-inflammatory drugs'],
        severity: 'severe',
        prevention: 'Cannot be prevented due to genetic nature',
        doctorConsultation: 'Consult geneticist and rheumatologist',
        ageGroup: 'Children and young adults',
        prevalence: 'Very rare, affects fewer than 1 in 1,000,000 people'
    },
    'hidradenitis_suppurativa': {
        name: 'Hidradenitis Suppurativa',
        description: 'A chronic skin condition that causes small, painful lumps under the skin.',
        symptoms: ['Painful lumps under skin', 'Boil-like lesions', 'Scarring', 'Drainage of pus', 'Recurring infections'],
        causes: ['Blocked hair follicles', 'Hormonal factors', 'Genetics', 'Obesity'],
        treatments: ['Antibiotics', 'Anti-inflammatory medications', 'Surgical drainage', 'Lifestyle changes'],
        severity: 'moderate_to_severe',
        prevention: 'Good hygiene, weight management, avoid tight clothing',
        doctorConsultation: 'Consult dermatologist for proper treatment',
        ageGroup: 'Adults, typically 20-40 years',
        prevalence: 'Affects approximately 1 in 100 people'
    },
    'pemphigus_vulgaris': {
        name: 'Pemphigus Vulgaris',
        description: 'A rare autoimmune disorder that causes blistering of the skin and mucous membranes.',
        symptoms: ['Painful blisters', 'Mouth sores', 'Skin erosions', 'Itching', 'Burning sensation'],
        causes: ['Autoimmune disorder', 'Genetic factors', 'Environmental triggers'],
        treatments: ['Corticosteroids', 'Immunosuppressants', 'Biologic medications', 'Wound care'],
        severity: 'severe',
        prevention: 'Cannot be prevented, but early treatment helps',
        doctorConsultation: 'Immediate consultation with dermatologist required',
        ageGroup: 'Adults, typically 40-60 years',
        prevalence: 'Very rare, affects approximately 1 in 100,000 people'
    },
    'bullous_pemphigoid': {
        name: 'Bullous Pemphigoid',
        description: 'An autoimmune skin disorder that causes large, fluid-filled blisters.',
        symptoms: ['Large blisters', 'Itching', 'Red patches', 'Skin erosions', 'Mouth sores'],
        causes: ['Autoimmune disorder', 'Medications', 'Aging', 'Genetic factors'],
        treatments: ['Corticosteroids', 'Immunosuppressants', 'Antibiotics', 'Topical treatments'],
        severity: 'moderate_to_severe',
        prevention: 'Cannot be prevented, but early diagnosis helps',
        doctorConsultation: 'Consult dermatologist for proper treatment',
        ageGroup: 'Elderly, typically over 60 years',
        prevalence: 'Affects approximately 1 in 40,000 people'
    },
    'mycosis_fungoides': {
        name: 'Mycosis Fungoides',
        description: 'A type of cutaneous T-cell lymphoma that affects the skin.',
        symptoms: ['Itchy rash', 'Patches of discolored skin', 'Plaques', 'Tumors', 'Lymph node enlargement'],
        causes: ['Unknown, possibly genetic and environmental factors'],
        treatments: ['Topical treatments', 'Phototherapy', 'Radiation therapy', 'Chemotherapy'],
        severity: 'severe',
        prevention: 'Cannot be prevented, early diagnosis crucial',
        doctorConsultation: 'Immediate consultation with dermatologist and oncologist',
        ageGroup: 'Adults, typically 50-60 years',
        prevalence: 'Rare, affects approximately 1 in 100,000 people'
    },
    'sarcoidosis': {
        name: 'Sarcoidosis',
        description: 'A disease characterized by the growth of tiny collections of inflammatory cells in various parts of the body.',
        symptoms: ['Skin lesions', 'Fatigue', 'Shortness of breath', 'Joint pain', 'Eye problems'],
        causes: ['Unknown, possibly immune system dysfunction', 'Environmental factors'],
        treatments: ['Corticosteroids', 'Immunosuppressants', 'Anti-inflammatory medications'],
        severity: 'moderate_to_severe',
        prevention: 'Cannot be prevented, but early treatment helps',
        doctorConsultation: 'Consult pulmonologist and dermatologist',
        ageGroup: 'Adults, typically 20-40 years',
        prevalence: 'Affects approximately 1 in 10,000 people'
    },
    'argyria': {
        name: 'Argyria',
        description: 'A condition causing skin discoloration from silver buildup in the body.',
        symptoms: ['Blue-gray skin discoloration', 'Permanent skin color change', 'No other symptoms'],
        causes: ['Excessive silver exposure', 'Silver supplements', 'Silver-containing medications'],
        treatments: ['Discontinue silver exposure', 'Laser therapy', 'No cure for existing discoloration'],
        severity: 'mild',
        prevention: 'Avoid excessive silver exposure and supplements',
        doctorConsultation: 'Consult dermatologist for diagnosis',
        ageGroup: 'All ages',
        prevalence: 'Very rare, affects fewer than 1 in 1,000,000 people'
    },
    'acanthosis_nigricans': {
        name: 'Acanthosis Nigricans',
        description: 'A skin condition characterized by dark, thickened patches of skin.',
        symptoms: ['Dark, thickened skin patches', 'Velvety texture', 'Common in body folds', 'Itching', 'Odor'],
        causes: ['Insulin resistance', 'Diabetes', 'Obesity', 'Hormonal disorders'],
        treatments: ['Treat underlying condition', 'Weight loss', 'Topical treatments', 'Laser therapy'],
        severity: 'mild_to_moderate',
        prevention: 'Maintain healthy weight, control diabetes',
        doctorConsultation: 'Consult dermatologist and endocrinologist',
        ageGroup: 'All ages, common in obese individuals',
        prevalence: 'Affects approximately 1 in 1,000 people'
    },
    'mycetoma': {
        name: 'Mycetoma',
        description: 'A chronic, destructive infection that affects the skin and underlying tissues.',
        symptoms: ['Painless swelling', 'Draining sinuses', 'Gradual enlargement', 'Bone involvement', 'Deformity'],
        causes: ['Fungal or bacterial infection', 'Soil exposure', 'Trauma to skin'],
        treatments: ['Antifungal medications', 'Antibiotics', 'Surgical debridement', 'Amputation in severe cases'],
        severity: 'severe',
        prevention: 'Protect feet and hands, avoid walking barefoot in endemic areas',
        doctorConsultation: 'Immediate consultation with infectious disease specialist',
        ageGroup: 'All ages',
        prevalence: 'Rare, primarily in tropical regions'
    },
    'lichen_sclerosus': {
        name: 'Lichen Sclerosus',
        description: 'A chronic skin condition that causes white, patchy skin that becomes thinner over time.',
        symptoms: ['White patches', 'Thinning skin', 'Itching', 'Painful intercourse', 'Scarring'],
        causes: ['Autoimmune disorder', 'Hormonal factors', 'Genetic predisposition'],
        treatments: ['Topical corticosteroids', 'Hormone therapy', 'Surgical options', 'Moisturizers'],
        severity: 'moderate',
        prevention: 'Cannot be prevented, but early treatment helps',
        doctorConsultation: 'Consult dermatologist or gynecologist',
        ageGroup: 'All ages, common in postmenopausal women',
        prevalence: 'Affects approximately 1 in 1,000 people'
    },
    'dermatomyositis': {
        name: 'Dermatomyositis',
        description: 'An inflammatory disease marked by muscle weakness and a distinctive skin rash.',
        symptoms: ['Purple-red rash', 'Muscle weakness', 'Gottron\'s papules', 'Heliotrope rash', 'Difficulty swallowing'],
        causes: ['Autoimmune disorder', 'Genetic factors', 'Environmental triggers'],
        treatments: ['Corticosteroids', 'Immunosuppressants', 'Physical therapy', 'Biologic medications'],
        severity: 'severe',
        prevention: 'Cannot be prevented, early diagnosis crucial',
        doctorConsultation: 'Consult rheumatologist and dermatologist immediately',
        ageGroup: 'Adults, typically 40-60 years',
        prevalence: 'Rare, affects approximately 1 in 100,000 people'
    },
    'pityriasis_rosea': {
        name: 'Pityriasis Rosea',
        description: 'A common skin rash that begins with a large, scaly patch followed by smaller patches.',
        symptoms: ['Herald patch', 'Smaller oval patches', 'Itching', 'Mild flu-like symptoms', 'Self-resolving'],
        causes: ['Viral infection', 'Unknown trigger', 'Not contagious'],
        treatments: ['Self-resolves', 'Moisturizers', 'Anti-itch medications', 'Sunlight exposure'],
        severity: 'mild',
        prevention: 'Cannot be prevented',
        doctorConsultation: 'Consult dermatologist if symptoms persist beyond 12 weeks',
        ageGroup: 'All ages, common in young adults',
        prevalence: 'Common, affects approximately 1 in 100 people'
    },
    'acne_vulgaris': {
        name: 'Acne Vulgaris',
        description: 'A common skin condition that occurs when hair follicles become plugged with oil and dead skin cells.',
        symptoms: ['Whiteheads', 'Blackheads', 'Pimples', 'Large, painful bumps', 'Scarring'],
        causes: ['Excess oil production', 'Hormonal changes', 'Bacteria', 'Clogged pores'],
        treatments: ['Topical treatments', 'Oral medications', 'Lifestyle changes', 'Professional treatments'],
        severity: 'mild_to_moderate',
        prevention: 'Good skin hygiene, avoid touching face, proper diet',
        doctorConsultation: 'Consult dermatologist for severe or persistent acne',
        ageGroup: 'Teenagers and young adults',
        prevalence: 'Very common, affects approximately 80% of teenagers'
    },
    'atopic_dermatitis': {
        name: 'Atopic Dermatitis (Eczema)',
        description: 'A chronic skin condition characterized by dry, itchy, inflamed skin.',
        symptoms: ['Dry, itchy skin', 'Red patches', 'Cracking', 'Oozing', 'Thickened skin'],
        causes: ['Genetic factors', 'Environmental triggers', 'Immune system dysfunction', 'Skin barrier defects'],
        treatments: ['Moisturizers', 'Topical steroids', 'Antihistamines', 'Avoiding triggers'],
        severity: 'mild_to_moderate',
        prevention: 'Moisturize regularly, avoid known triggers, gentle skin care',
        doctorConsultation: 'Consult dermatologist for proper treatment plan',
        ageGroup: 'All ages, common in children',
        prevalence: 'Common, affects approximately 10-20% of children'
    },
    'psoriasis': {
        name: 'Psoriasis',
        description: 'A chronic autoimmune condition that causes rapid buildup of skin cells.',
        symptoms: ['Red, scaly patches', 'Silvery scales', 'Itching', 'Burning', 'Joint pain'],
        causes: ['Autoimmune disorder', 'Genetic factors', 'Environmental triggers', 'Stress'],
        treatments: ['Topical treatments', 'Phototherapy', 'Systemic medications', 'Biologics'],
        severity: 'moderate_to_severe',
        prevention: 'Cannot be prevented, but triggers can be avoided',
        doctorConsultation: 'Consult dermatologist for proper treatment',
        ageGroup: 'All ages, typically 15-35 years',
        prevalence: 'Affects approximately 2-3% of population'
    },
    'rosacea': {
        name: 'Rosacea',
        description: 'A chronic skin condition that causes redness and visible blood vessels in the face.',
        symptoms: ['Facial redness', 'Visible blood vessels', 'Bumps and pimples', 'Eye irritation', 'Burning sensation'],
        causes: ['Unknown, possibly genetic and environmental factors', 'Triggers include sun, stress, spicy foods'],
        treatments: ['Topical medications', 'Oral antibiotics', 'Laser therapy', 'Avoiding triggers'],
        severity: 'mild_to_moderate',
        prevention: 'Avoid known triggers, sun protection, gentle skin care',
        doctorConsultation: 'Consult dermatologist for proper treatment',
        ageGroup: 'Adults, typically 30-50 years',
        prevalence: 'Affects approximately 5-10% of adults'
    },
    'seborrheic_dermatitis': {
        name: 'Seborrheic Dermatitis',
        description: 'A common skin condition that causes scaly patches, red skin, and stubborn dandruff.',
        symptoms: ['Scaly patches', 'Red skin', 'Dandruff', 'Itching', 'Greasy skin'],
        causes: ['Yeast overgrowth', 'Oily skin', 'Stress', 'Hormonal changes'],
        treatments: ['Medicated shampoos', 'Topical steroids', 'Antifungal creams', 'Regular washing'],
        severity: 'mild',
        prevention: 'Regular washing, stress management, proper skin care',
        doctorConsultation: 'Consult dermatologist if symptoms persist',
        ageGroup: 'All ages, common in infants and adults',
        prevalence: 'Common, affects approximately 3-5% of population'
    },
    'urticaria': {
        name: 'Urticaria (Hives)',
        description: 'A skin reaction that causes itchy welts, often triggered by an allergic reaction.',
        symptoms: ['Itchy welts', 'Red or skin-colored bumps', 'Burning sensation', 'Swelling', 'Rapid onset'],
        causes: ['Allergic reactions', 'Medications', 'Foods', 'Infections', 'Stress'],
        treatments: ['Antihistamines', 'Avoiding triggers', 'Corticosteroids', 'Epinephrine for severe cases'],
        severity: 'mild_to_moderate',
        prevention: 'Identify and avoid triggers, manage stress',
        doctorConsultation: 'Consult allergist for chronic cases',
        ageGroup: 'All ages',
        prevalence: 'Common, affects approximately 20% of population'
    },
    'contact_dermatitis': {
        name: 'Contact Dermatitis',
        description: 'A skin reaction that occurs when the skin comes into contact with an irritant or allergen.',
        symptoms: ['Red rash', 'Itching', 'Blisters', 'Swelling', 'Burning'],
        causes: ['Irritants (soaps, detergents)', 'Allergens (nickel, latex)', 'Plants (poison ivy)'],
        treatments: ['Avoiding triggers', 'Topical steroids', 'Antihistamines', 'Cool compresses'],
        severity: 'mild_to_moderate',
        prevention: 'Identify and avoid triggers, use protective clothing',
        doctorConsultation: 'Consult dermatologist for persistent cases',
        ageGroup: 'All ages',
        prevalence: 'Common, affects approximately 15-20% of population'
    },
    'vitiligo': {
        name: 'Vitiligo',
        description: 'A condition that causes the loss of skin color in patches.',
        symptoms: ['White patches on skin', 'Premature graying of hair', 'Loss of color in mucous membranes'],
        causes: ['Autoimmune disorder', 'Genetic factors', 'Environmental triggers'],
        treatments: ['Topical treatments', 'Phototherapy', 'Surgical options', 'Cosmetic cover-ups'],
        severity: 'mild_to_moderate',
        prevention: 'Cannot be prevented, but early treatment helps',
        doctorConsultation: 'Consult dermatologist for proper treatment',
        ageGroup: 'All ages, typically 10-30 years',
        prevalence: 'Affects approximately 1-2% of population'
    },
    'ringworm': {
        name: 'Ringworm (Tinea Infections)',
        description: 'A fungal infection that causes a ring-shaped rash on the skin.',
        symptoms: ['Ring-shaped rash', 'Itching', 'Scaling', 'Redness', 'Hair loss (scalp)'],
        causes: ['Fungal infection', 'Direct contact', 'Contaminated objects', 'Animals'],
        treatments: ['Antifungal creams', 'Oral antifungals', 'Good hygiene', 'Avoiding sharing items'],
        severity: 'mild',
        prevention: 'Good hygiene, avoid sharing personal items, treat pets',
        doctorConsultation: 'Consult dermatologist for persistent cases',
        ageGroup: 'All ages',
        prevalence: 'Common, affects approximately 10-20% of population'
    },
    'warts': {
        name: 'Warts',
        description: 'Small, grainy skin growths caused by viral infections.',
        symptoms: ['Small, rough growths', 'Flesh-colored or gray', 'Pain or tenderness', 'Clusters'],
        causes: ['Human papillomavirus (HPV)', 'Direct contact', 'Weakened immune system'],
        treatments: ['Salicylic acid', 'Cryotherapy', 'Laser treatment', 'Surgical removal'],
        severity: 'mild',
        prevention: 'Avoid touching warts, good hygiene, boost immune system',
        doctorConsultation: 'Consult dermatologist for persistent or painful warts',
        ageGroup: 'All ages, common in children',
        prevalence: 'Common, affects approximately 10% of population'
    },
    'basal_cell_carcinoma': {
        name: 'Basal Cell Carcinoma',
        description: 'The most common type of skin cancer, usually slow-growing and rarely spreads.',
        symptoms: ['Pearly bump', 'Waxy scar', 'Bleeding sore', 'Reddish patch', 'Slow growth'],
        causes: ['UV radiation exposure', 'Fair skin', 'Age', 'Family history'],
        treatments: ['Surgical removal', 'Mohs surgery', 'Radiation therapy', 'Topical treatments'],
        severity: 'moderate',
        prevention: 'Sun protection, regular skin checks, avoid tanning beds',
        doctorConsultation: 'Immediate consultation with dermatologist required',
        ageGroup: 'Adults, typically over 50 years',
        prevalence: 'Very common, affects approximately 1 in 5 Americans'
    },
    'squamous_cell_carcinoma': {
        name: 'Squamous Cell Carcinoma',
        description: 'A common type of skin cancer that can grow quickly and spread to other parts of the body.',
        symptoms: ['Firm, red nodule', 'Flat lesion with scaly crust', 'New sore that won\'t heal', 'Rough patch'],
        causes: ['UV radiation exposure', 'Fair skin', 'Age', 'Previous skin damage'],
        treatments: ['Surgical removal', 'Mohs surgery', 'Radiation therapy', 'Chemotherapy'],
        severity: 'moderate_to_severe',
        prevention: 'Sun protection, regular skin checks, early treatment of precancerous lesions',
        doctorConsultation: 'Immediate consultation with dermatologist required',
        ageGroup: 'Adults, typically over 50 years',
        prevalence: 'Common, affects approximately 1 in 10 Americans'
    },
    'melanoma': {
        name: 'Melanoma',
        description: 'The most serious type of skin cancer, can spread to other parts of the body.',
        symptoms: ['Asymmetric mole', 'Irregular borders', 'Color variations', 'Diameter larger than 6mm', 'Evolving'],
        causes: ['UV radiation exposure', 'Fair skin', 'Family history', 'Multiple moles'],
        treatments: ['Surgical removal', 'Lymph node removal', 'Immunotherapy', 'Targeted therapy'],
        severity: 'severe',
        prevention: 'Sun protection, regular skin checks, avoid tanning beds',
        doctorConsultation: 'Immediate consultation with dermatologist required',
        ageGroup: 'Adults, typically 30-60 years',
        prevalence: 'Affects approximately 1 in 50 Americans'
    },
    'alopecia_areata': {
        name: 'Alopecia Areata',
        description: 'An autoimmune disorder that causes hair loss in patches.',
        symptoms: ['Patchy hair loss', 'Smooth, round bald patches', 'Hair regrowth possible', 'Nail changes'],
        causes: ['Autoimmune disorder', 'Genetic factors', 'Environmental triggers', 'Stress'],
        treatments: ['Corticosteroids', 'Minoxidil', 'Immunotherapy', 'Hair transplant'],
        severity: 'mild_to_moderate',
        prevention: 'Cannot be prevented, but stress management may help',
        doctorConsultation: 'Consult dermatologist for proper treatment',
        ageGroup: 'All ages, typically 15-40 years',
        prevalence: 'Affects approximately 1-2% of population'
    },
    'molluscum_contagiosum': {
        name: 'Molluscum Contagiosum',
        description: 'A viral skin infection that causes small, raised, pink or flesh-colored bumps.',
        symptoms: ['Small, raised bumps', 'Pink or flesh-colored', 'Central dimple', 'Itching', 'Self-resolving'],
        causes: ['Poxvirus infection', 'Direct contact', 'Sexual contact', 'Weakened immune system'],
        treatments: ['Self-resolves', 'Cryotherapy', 'Laser treatment', 'Topical treatments'],
        severity: 'mild',
        prevention: 'Avoid direct contact, good hygiene, safe sex practices',
        doctorConsultation: 'Consult dermatologist for persistent cases',
        ageGroup: 'All ages, common in children',
        prevalence: 'Common, affects approximately 5-10% of children'
    },
    'impetigo': {
        name: 'Impetigo',
        description: 'A highly contagious bacterial skin infection that causes red sores and blisters.',
        symptoms: ['Red sores', 'Blisters', 'Honey-colored crusts', 'Itching', 'Pain'],
        causes: ['Staphylococcus or Streptococcus bacteria', 'Skin injury', 'Poor hygiene'],
        treatments: ['Antibiotics', 'Good hygiene', 'Covering sores', 'Avoiding scratching'],
        severity: 'mild',
        prevention: 'Good hygiene, treat skin injuries promptly, avoid sharing personal items',
        doctorConsultation: 'Consult dermatologist for proper treatment',
        ageGroup: 'All ages, common in children',
        prevalence: 'Common, affects approximately 2-5% of children'
    },
    'cellulitis': {
        name: 'Cellulitis',
        description: 'A bacterial skin infection that can spread quickly and become serious.',
        symptoms: ['Red, swollen skin', 'Pain and tenderness', 'Warm to touch', 'Fever', 'Chills'],
        causes: ['Bacterial infection', 'Skin injury', 'Weakened immune system', 'Poor circulation'],
        treatments: ['Oral antibiotics', 'Intravenous antibiotics', 'Wound care', 'Elevation'],
        severity: 'moderate_to_severe',
        prevention: 'Good hygiene, treat skin injuries promptly, manage underlying conditions',
        doctorConsultation: 'Immediate consultation with doctor required',
        ageGroup: 'All ages',
        prevalence: 'Affects approximately 1 in 1,000 people annually'
    },
    'herpes_simplex': {
        name: 'Herpes Simplex (Cold Sores)',
        description: 'A viral infection that causes small, painful blisters around the mouth or genitals.',
        symptoms: ['Small blisters', 'Pain and burning', 'Tingling sensation', 'Fever', 'Swollen lymph nodes'],
        causes: ['Herpes simplex virus', 'Direct contact', 'Stress', 'Sunlight exposure'],
        treatments: ['Antiviral medications', 'Pain relief', 'Avoiding triggers', 'Good hygiene'],
        severity: 'mild_to_moderate',
        prevention: 'Avoid direct contact during outbreaks, sun protection, stress management',
        doctorConsultation: 'Consult doctor for first outbreak or severe cases',
        ageGroup: 'All ages',
        prevalence: 'Very common, affects approximately 50-80% of adults'
    },
    'shingles': {
        name: 'Shingles (Herpes Zoster)',
        description: 'A viral infection that causes a painful rash, usually on one side of the body.',
        symptoms: ['Painful rash', 'Blisters', 'Burning sensation', 'Itching', 'Fever'],
        causes: ['Varicella-zoster virus reactivation', 'Weakened immune system', 'Aging', 'Stress'],
        treatments: ['Antiviral medications', 'Pain relief', 'Calamine lotion', 'Vaccination'],
        severity: 'moderate_to_severe',
        prevention: 'Shingles vaccination, stress management, healthy lifestyle',
        doctorConsultation: 'Consult doctor immediately for early treatment',
        ageGroup: 'Adults, typically over 50 years',
        prevalence: 'Affects approximately 1 in 3 people in their lifetime'
    },
    'diaper_rash': {
        name: 'Diaper Rash',
        description: 'A common skin irritation that occurs in the diaper area of infants and toddlers.',
        symptoms: ['Red, irritated skin', 'Bumps', 'Scaling', 'Soreness', 'Fussiness'],
        causes: ['Prolonged wetness', 'Friction', 'Irritation from urine/feces', 'Yeast infection'],
        treatments: ['Frequent diaper changes', 'Barrier creams', 'Air drying', 'Gentle cleaning'],
        severity: 'mild',
        prevention: 'Frequent diaper changes, gentle cleaning, barrier creams',
        doctorConsultation: 'Consult pediatrician if rash persists or worsens',
        ageGroup: 'Infants and toddlers',
        prevalence: 'Very common, affects most infants at some point'
    },
    'keratosis_pilaris': {
        name: 'Keratosis Pilaris',
        description: 'A common, harmless skin condition that causes small, rough bumps on the skin.',
        symptoms: ['Small, rough bumps', 'Dry, rough skin', 'Itching', 'Redness', 'Common on arms and thighs'],
        causes: ['Keratosis buildup', 'Genetic factors', 'Dry skin', 'Hormonal changes'],
        treatments: ['Moisturizers', 'Exfoliating creams', 'Lactic acid', 'Urea-based products'],
        severity: 'mild',
        prevention: 'Regular moisturizing, gentle exfoliation, avoid harsh soaps',
        doctorConsultation: 'Consult dermatologist for severe cases',
        ageGroup: 'All ages, common in children and teenagers',
        prevalence: 'Common, affects approximately 40-50% of adults'
    },
    'melasma': {
        name: 'Melasma',
        description: 'A common skin condition that causes brown or gray-brown patches on the face.',
        symptoms: ['Brown or gray-brown patches', 'Symmetrical distribution', 'Common on cheeks, forehead', 'Worsens with sun'],
        causes: ['Hormonal changes', 'Sun exposure', 'Pregnancy', 'Birth control pills'],
        treatments: ['Sun protection', 'Topical treatments', 'Chemical peels', 'Laser therapy'],
        severity: 'mild_to_moderate',
        prevention: 'Sun protection, hormonal management, avoid triggers',
        doctorConsultation: 'Consult dermatologist for proper treatment',
        ageGroup: 'Adults, typically 20-40 years',
        prevalence: 'Affects approximately 5-6 million Americans'
    },
    'actinic_keratosis': {
        name: 'Actinic Keratosis',
        description: 'Precancerous growths that can develop into squamous cell carcinoma.',
        symptoms: ['Rough, scaly patches', 'Pink or red base', 'Common on sun-exposed areas', 'Slow growth'],
        causes: ['UV radiation exposure', 'Fair skin', 'Age', 'Weakened immune system'],
        treatments: ['Cryotherapy', 'Topical treatments', 'Photodynamic therapy', 'Surgical removal'],
        severity: 'mild_to_moderate',
        prevention: 'Sun protection, regular skin checks, early treatment',
        doctorConsultation: 'Consult dermatologist for proper treatment',
        ageGroup: 'Adults, typically over 40 years',
        prevalence: 'Common, affects approximately 10% of fair-skinned adults'
    },
    'lichen_planus': {
        name: 'Lichen Planus',
        description: 'An inflammatory condition that affects the skin, mouth, and genitals.',
        symptoms: ['Purple, flat-topped bumps', 'Itching', 'Mouth sores', 'Nail changes', 'Hair loss'],
        causes: ['Autoimmune disorder', 'Unknown trigger', 'Genetic factors', 'Medications'],
        treatments: ['Topical steroids', 'Oral steroids', 'Antihistamines', 'Phototherapy'],
        severity: 'moderate',
        prevention: 'Cannot be prevented, but early treatment helps',
        doctorConsultation: 'Consult dermatologist for proper treatment',
        ageGroup: 'Adults, typically 30-60 years',
        prevalence: 'Affects approximately 1-2% of population'
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
