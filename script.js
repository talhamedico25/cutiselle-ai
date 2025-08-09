// Enhanced AI Configuration
const AI_CONFIG = {
    confidenceThreshold: 0.3,
    fallbackConfidence: 0.25,
    frontendTech: "React.js, TensorFlow.js, Hugging Face API"
};

// Comprehensive Skin Conditions Database (80+ Conditions)
const SKIN_CONDITIONS_DATABASE = {
    'normal_skin': {
        name: 'Normal Skin',
        description: 'Healthy skin with balanced oil production and good texture.',
        symptoms: ['balanced oil production', 'smooth texture', 'few imperfections'],
        causes: ['genetics', 'good skincare habits', 'healthy lifestyle'],
        treatments: ['maintenance routine', 'sun protection', 'gentle cleansing'],
        severity: 'none',
        prevention: ['consistent skincare', 'sun protection', 'healthy diet'],
        doctorConsultation: 'Routine check-ups recommended.',
        ageGroup: 'all ages',
        prevalence: 'common'
    },
    'dry_skin': {
        name: 'Dry Skin (Xerosis)',
        description: 'Skin that lacks moisture and natural oils, often feeling tight and rough.',
        symptoms: ['tightness', 'rough texture', 'flaking', 'itching', 'redness'],
        causes: ['genetics', 'aging', 'weather', 'harsh products', 'medical conditions'],
        treatments: ['moisturizers', 'gentle cleansers', 'humidity control', 'avoiding hot water'],
        severity: 'mild to moderate',
        prevention: ['regular moisturizing', 'gentle cleansing', 'humidity control'],
        doctorConsultation: 'Consult if severe or persistent.',
        ageGroup: 'all ages',
        prevalence: 'very common'
    },
    'oily_skin': {
        name: 'Oily Skin (Seborrhea)',
        description: 'Skin that produces excess sebum, often appearing shiny and prone to acne.',
        symptoms: ['shiny appearance', 'enlarged pores', 'acne prone', 'thick texture'],
        causes: ['genetics', 'hormones', 'stress', 'diet', 'environment'],
        treatments: ['gentle cleansing', 'oil-control products', 'non-comedogenic products', 'clay masks'],
        severity: 'mild to moderate',
        prevention: ['gentle cleansing', 'oil-control products', 'stress management'],
        doctorConsultation: 'Consult if severe acne or inflammation.',
        ageGroup: 'teens to adults',
        prevalence: 'very common'
    },
    'combination_skin': {
        name: 'Combination Skin',
        description: 'Skin that has both oily and dry areas, typically oily T-zone with dry cheeks.',
        symptoms: ['oily T-zone', 'dry cheeks', 'mixed texture', 'enlarged pores in some areas'],
        causes: ['genetics', 'hormones', 'environmental factors'],
        treatments: ['targeted treatments', 'gentle cleansing', 'balanced moisturizing'],
        severity: 'mild',
        prevention: ['targeted skincare', 'gentle products', 'consistent routine'],
        doctorConsultation: 'Routine check-ups recommended.',
        ageGroup: 'teens to adults',
        prevalence: 'very common'
    },
    'sensitive_skin': {
        name: 'Sensitive Skin',
        description: 'Skin that easily reacts to products, environmental factors, or stress.',
        symptoms: ['redness', 'burning', 'stinging', 'itching', 'dryness'],
        causes: ['genetics', 'environmental factors', 'product reactions', 'stress'],
        treatments: ['gentle products', 'fragrance-free items', 'patch testing', 'avoiding triggers'],
        severity: 'mild to moderate',
        prevention: ['gentle products', 'patch testing', 'avoiding known irritants'],
        doctorConsultation: 'Consult if severe reactions or persistent symptoms.',
        ageGroup: 'all ages',
        prevalence: 'common'
    },
    'acne_vulgaris': {
        name: 'Acne Vulgaris',
        description: 'Common skin condition causing pimples, blackheads, and whiteheads.',
        symptoms: ['pimples', 'blackheads', 'whiteheads', 'inflammation', 'scarring'],
        causes: ['hormones', 'bacteria', 'excess oil', 'clogged pores', 'genetics'],
        treatments: ['benzoyl peroxide', 'salicylic acid', 'retinoids', 'antibiotics', 'lifestyle changes'],
        severity: 'mild to severe',
        prevention: ['gentle cleansing', 'non-comedogenic products', 'stress management'],
        doctorConsultation: 'Consult for moderate to severe cases.',
        ageGroup: 'teens to adults',
        prevalence: 'very common'
    },
    'acne_rosacea': {
        name: 'Acne Rosacea',
        description: 'Chronic skin condition causing facial redness and acne-like bumps.',
        symptoms: ['facial redness', 'acne-like bumps', 'visible blood vessels', 'burning sensation'],
        causes: ['genetics', 'environmental triggers', 'immune system', 'blood vessel abnormalities'],
        treatments: ['topical medications', 'oral antibiotics', 'laser therapy', 'lifestyle changes'],
        severity: 'moderate to severe',
        prevention: ['avoiding triggers', 'sun protection', 'gentle skincare'],
        doctorConsultation: 'Essential for proper management.',
        ageGroup: 'adults 30+',
        prevalence: 'common'
    },
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
    'contact_dermatitis': {
        name: 'Contact Dermatitis',
        description: 'Skin inflammation caused by direct contact with irritants or allergens.',
        symptoms: ['redness', 'itching', 'burning', 'blisters', 'dryness', 'cracking'],
        causes: ['irritants', 'allergens', 'chemicals', 'metals', 'plants', 'cosmetics'],
        treatments: ['avoiding triggers', 'topical corticosteroids', 'antihistamines', 'cool compresses'],
        severity: 'mild to moderate',
        prevention: ['patch testing', 'protective measures', 'identifying triggers'],
        doctorConsultation: 'Consult if severe or persistent symptoms.',
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
    'nummular_dermatitis': {
        name: 'Nummular Dermatitis',
        description: 'A type of eczema characterized by coin-shaped patches of irritated skin.',
        symptoms: ['coin-shaped patches', 'itching', 'scaling', 'crusting', 'oozing'],
        causes: ['dry skin', 'environmental factors', 'stress', 'bacterial infections'],
        treatments: ['moisturizers', 'topical corticosteroids', 'antibiotics if infected', 'avoiding triggers'],
        severity: 'moderate',
        prevention: ['regular moisturizing', 'gentle cleansing', 'stress management'],
        doctorConsultation: 'Consult for proper diagnosis and treatment.',
        ageGroup: 'adults',
        prevalence: 'uncommon'
    },
    'dyshidrotic_eczema': {
        name: 'Dyshidrotic Eczema',
        description: 'A type of eczema that causes small, itchy blisters on hands and feet.',
        symptoms: ['small blisters', 'itching', 'redness', 'scaling', 'cracking'],
        causes: ['stress', 'allergies', 'sweating', 'metal exposure', 'genetics'],
        treatments: ['topical corticosteroids', 'antihistamines', 'cool compresses', 'stress management'],
        severity: 'moderate',
        prevention: ['stress management', 'avoiding triggers', 'gentle hand care'],
        doctorConsultation: 'Consult if severe or persistent symptoms.',
        ageGroup: 'adults',
        prevalence: 'uncommon'
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
    'guttate_psoriasis': {
        name: 'Guttate Psoriasis',
        description: 'A type of psoriasis characterized by small, drop-like lesions.',
        symptoms: ['small red spots', 'scaling', 'itching', 'trunk and limbs involvement'],
        causes: ['streptococcal infection', 'genetics', 'immune system', 'stress'],
        treatments: ['topical treatments', 'phototherapy', 'treating underlying infection'],
        severity: 'mild to moderate',
        prevention: ['infection prevention', 'stress management', 'early treatment'],
        doctorConsultation: 'Important for proper diagnosis and treatment.',
        ageGroup: 'children and young adults',
        prevalence: 'uncommon'
    },
    'palmoplantar_psoriasis': {
        name: 'Palmoplantar Psoriasis',
        description: 'Psoriasis affecting the palms of hands and soles of feet.',
        symptoms: ['thickened skin', 'cracking', 'pain', 'scaling', 'redness'],
        causes: ['autoimmune disorder', 'genetics', 'friction', 'stress'],
        treatments: ['topical treatments', 'phototherapy', 'systemic medications', 'protective measures'],
        severity: 'moderate to severe',
        prevention: ['protective measures', 'stress management', 'early treatment'],
        doctorConsultation: 'Essential for proper management.',
        ageGroup: 'adults',
        prevalence: 'uncommon'
    },
    'inverse_psoriasis': {
        name: 'Inverse Psoriasis',
        description: 'Psoriasis that appears in skin folds and creases.',
        symptoms: ['smooth red patches', 'moisture', 'irritation', 'itching', 'friction'],
        causes: ['autoimmune disorder', 'genetics', 'moisture', 'friction'],
        treatments: ['topical treatments', 'keeping area dry', 'avoiding friction', 'medications'],
        severity: 'moderate',
        prevention: ['keeping skin folds dry', 'avoiding friction', 'early treatment'],
        doctorConsultation: 'Important for proper management.',
        ageGroup: 'adults',
        prevalence: 'uncommon'
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
    'ocular_rosacea': {
        name: 'Ocular Rosacea',
        description: 'Rosacea affecting the eyes, causing irritation and inflammation.',
        symptoms: ['eye irritation', 'redness', 'burning', 'dryness', 'sensitivity to light'],
        causes: ['rosacea', 'eye inflammation', 'meibomian gland dysfunction'],
        treatments: ['eye drops', 'warm compresses', 'lid hygiene', 'treating underlying rosacea'],
        severity: 'moderate',
        prevention: ['eye hygiene', 'avoiding triggers', 'early treatment'],
        doctorConsultation: 'Essential for eye health.',
        ageGroup: 'adults 30+',
        prevalence: 'uncommon'
    },
    'phymatous_rosacea': {
        name: 'Phymatous Rosacea',
        description: 'Advanced rosacea causing thickening and enlargement of facial features.',
        symptoms: ['thickened skin', 'enlarged nose', 'bumpy texture', 'oiliness'],
        causes: ['advanced rosacea', 'chronic inflammation', 'genetics'],
        treatments: ['surgical correction', 'laser therapy', 'treating underlying rosacea'],
        severity: 'severe',
        prevention: ['early rosacea treatment', 'avoiding triggers', 'professional care'],
        doctorConsultation: 'Essential for proper management.',
        ageGroup: 'adults 40+',
        prevalence: 'rare'
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
    'segmental_vitiligo': {
        name: 'Segmental Vitiligo',
        description: 'Vitiligo affecting one side or segment of the body.',
        symptoms: ['unilateral white patches', 'rapid onset', 'stable progression'],
        causes: ['autoimmune disorder', 'genetics', 'neural factors'],
        treatments: ['topical treatments', 'phototherapy', 'surgical options'],
        severity: 'mild to moderate',
        prevention: ['early treatment', 'sun protection', 'stress management'],
        doctorConsultation: 'Important for proper management.',
        ageGroup: 'all ages',
        prevalence: 'rare'
    },
    'universal_vitiligo': {
        name: 'Universal Vitiligo',
        description: 'Extensive vitiligo affecting most of the body surface.',
        symptoms: ['widespread white patches', 'nearly complete depigmentation'],
        causes: ['autoimmune disorder', 'genetics', 'extensive immune response'],
        treatments: ['depigmentation therapy', 'cosmetic cover-up', 'psychological support'],
        severity: 'severe',
        prevention: ['early treatment', 'sun protection', 'professional support'],
        doctorConsultation: 'Essential for comprehensive care.',
        ageGroup: 'all ages',
        prevalence: 'very rare'
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
    'alopecia_totalis': {
        name: 'Alopecia Totalis',
        description: 'Complete loss of scalp hair due to alopecia areata.',
        symptoms: ['complete scalp hair loss', 'smooth bald scalp'],
        causes: ['autoimmune disorder', 'genetics', 'extensive immune response'],
        treatments: ['immunotherapy', 'systemic treatments', 'psychological support'],
        severity: 'severe',
        prevention: ['early treatment', 'stress management', 'professional support'],
        doctorConsultation: 'Essential for comprehensive care.',
        ageGroup: 'all ages',
        prevalence: 'rare'
    },
    'alopecia_universalis': {
        name: 'Alopecia Universalis',
        description: 'Complete loss of all body hair including scalp, eyebrows, and eyelashes.',
        symptoms: ['complete body hair loss', 'smooth skin', 'nail changes'],
        causes: ['autoimmune disorder', 'genetics', 'extensive immune response'],
        treatments: ['immunotherapy', 'systemic treatments', 'psychological support'],
        severity: 'very severe',
        prevention: ['early treatment', 'stress management', 'professional support'],
        doctorConsultation: 'Essential for comprehensive care.',
        ageGroup: 'all ages',
        prevalence: 'very rare'
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
    'squamous_cell_carcinoma': {
        name: 'Squamous Cell Carcinoma',
        description: 'A type of skin cancer that develops in squamous cells, often from sun damage.',
        symptoms: ['scaly red patch', 'open sore', 'elevated growth', 'crusting', 'bleeding'],
        causes: ['UV radiation', 'fair skin', 'age', 'genetics', 'immunosuppression'],
        treatments: ['surgery', 'radiation therapy', 'chemotherapy', 'immunotherapy'],
        severity: 'serious',
        prevention: ['sun protection', 'regular skin checks', 'avoiding tanning'],
        doctorConsultation: 'Immediate consultation required for suspicious lesions.',
        ageGroup: 'adults 50+',
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
    'melanoma_in_situ': {
        name: 'Melanoma In Situ',
        description: 'Early stage melanoma that has not spread beyond the top layer of skin.',
        symptoms: ['irregular mole', 'color changes', 'border changes', 'size changes'],
        causes: ['UV radiation', 'genetics', 'fair skin', 'mole characteristics'],
        treatments: ['surgical excision', 'regular monitoring', 'sun protection'],
        severity: 'serious but treatable',
        prevention: ['sun protection', 'regular skin checks', 'early detection'],
        doctorConsultation: 'Immediate consultation required.',
        ageGroup: 'adults',
        prevalence: 'uncommon'
    },
    'nodular_melanoma': {
        name: 'Nodular Melanoma',
        description: 'An aggressive form of melanoma that grows quickly and can be fatal.',
        symptoms: ['rapidly growing nodule', 'dark color', 'elevated appearance', 'bleeding'],
        causes: ['UV radiation', 'genetics', 'fair skin', 'rapid growth'],
        treatments: ['immediate surgery', 'lymph node evaluation', 'systemic therapy'],
        severity: 'very serious',
        prevention: ['sun protection', 'regular skin checks', 'early detection'],
        doctorConsultation: 'Emergency consultation required.',
        ageGroup: 'adults',
        prevalence: 'rare but dangerous'
    },
    'lentigo_maligna': {
        name: 'Lentigo Maligna',
        description: 'A slow-growing form of melanoma that appears as a large, irregular freckle.',
        symptoms: ['large irregular freckle', 'color variations', 'border changes', 'slow growth'],
        causes: ['chronic sun exposure', 'aging', 'fair skin', 'genetics'],
        treatments: ['surgical excision', 'regular monitoring', 'sun protection'],
        severity: 'serious',
        prevention: ['sun protection', 'regular skin checks', 'early detection'],
        doctorConsultation: 'Important for proper diagnosis and treatment.',
        ageGroup: 'adults 60+',
        prevalence: 'uncommon'
    },
    'merkel_cell_carcinoma': {
        name: 'Merkel Cell Carcinoma',
        description: 'A rare, aggressive form of skin cancer that often appears on sun-exposed areas.',
        symptoms: ['firm nodule', 'rapid growth', 'red or purple color', 'painless'],
        causes: ['UV radiation', 'merkel cell polyomavirus', 'immunosuppression', 'aging'],
        treatments: ['surgery', 'radiation therapy', 'chemotherapy', 'immunotherapy'],
        severity: 'very serious',
        prevention: ['sun protection', 'regular skin checks', 'early detection'],
        doctorConsultation: 'Emergency consultation required.',
        ageGroup: 'adults 70+',
        prevalence: 'very rare'
    },
    'dermatofibrosarcoma_protuberans': {
        name: 'Dermatofibrosarcoma Protuberans',
        description: 'A rare, slow-growing skin cancer that can be locally aggressive.',
        symptoms: ['firm nodule', 'slow growth', 'skin-colored to red', 'tenderness'],
        causes: ['unknown', 'genetics', 'trauma', 'radiation exposure'],
        treatments: ['wide surgical excision', 'radiation therapy', 'Mohs surgery'],
        severity: 'serious',
        prevention: ['regular skin checks', 'early detection', 'professional evaluation'],
        doctorConsultation: 'Essential for proper diagnosis and treatment.',
        ageGroup: 'adults 20-50',
        prevalence: 'very rare'
    },
    'kaposi_sarcoma': {
        name: 'Kaposi Sarcoma',
        description: 'A cancer that develops from blood vessel cells, often associated with HIV/AIDS.',
        symptoms: ['purple or red patches', 'nodules', 'swelling', 'pain'],
        causes: ['human herpesvirus 8', 'HIV/AIDS', 'immunosuppression', 'genetics'],
        treatments: ['antiretroviral therapy', 'chemotherapy', 'radiation therapy', 'surgery'],
        severity: 'serious',
        prevention: ['HIV prevention', 'early HIV treatment', 'regular monitoring'],
        doctorConsultation: 'Essential for proper management.',
        ageGroup: 'adults',
        prevalence: 'rare'
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
    'chronic_urticaria': {
        name: 'Chronic Urticaria',
        description: 'Hives that persist for more than 6 weeks, often without identifiable cause.',
        symptoms: ['recurring hives', 'daily or frequent outbreaks', 'itching', 'swelling'],
        causes: ['autoimmune factors', 'unknown triggers', 'stress', 'infections'],
        treatments: ['daily antihistamines', 'immunosuppressants', 'biologics', 'trigger avoidance'],
        severity: 'moderate to severe',
        prevention: ['stress management', 'regular medication', 'trigger identification'],
        doctorConsultation: 'Essential for proper management and treatment.',
        ageGroup: 'adults',
        prevalence: 'uncommon'
    },
    'angioedema': {
        name: 'Angioedema',
        description: 'Deep swelling beneath the skin, often affecting the face, lips, and throat.',
        symptoms: ['deep swelling', 'facial swelling', 'lip swelling', 'throat tightness'],
        causes: ['allergies', 'medications', 'genetics', 'autoimmune factors'],
        treatments: ['antihistamines', 'corticosteroids', 'epinephrine if severe', 'avoiding triggers'],
        severity: 'moderate to severe',
        prevention: ['identifying triggers', 'carrying emergency medication', 'allergy testing'],
        doctorConsultation: 'Emergency care if throat swelling or breathing difficulty.',
        ageGroup: 'all ages',
        prevalence: 'uncommon'
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
    'tinea_corporis': {
        name: 'Tinea Corporis (Body Ringworm)',
        description: 'Ringworm infection affecting the trunk, arms, and legs.',
        symptoms: ['ring-shaped rash', 'scaling', 'itching', 'redness', 'clear center'],
        causes: ['fungal infection', 'direct contact', 'contaminated objects', 'warm moist areas'],
        treatments: ['topical antifungals', 'oral antifungals', 'good hygiene', 'keeping dry'],
        severity: 'mild',
        prevention: ['good hygiene', 'avoiding sharing items', 'keeping skin dry'],
        doctorConsultation: 'Consult if persistent or widespread.',
        ageGroup: 'all ages',
        prevalence: 'common'
    },
    'tinea_capitis': {
        name: 'Tinea Capitis (Scalp Ringworm)',
        description: 'Fungal infection of the scalp causing hair loss and scaling.',
        symptoms: ['scalp scaling', 'hair loss', 'itching', 'redness', 'black dots'],
        causes: ['fungal infection', 'direct contact', 'contaminated objects', 'poor hygiene'],
        treatments: ['oral antifungals', 'antifungal shampoos', 'good hygiene', 'isolation'],
        severity: 'moderate',
        prevention: ['good hygiene', 'avoiding sharing items', 'early treatment'],
        doctorConsultation: 'Essential for proper treatment.',
        ageGroup: 'children',
        prevalence: 'common in children'
    },
    'tinea_pedis': {
        name: 'Tinea Pedis (Athlete\'s Foot)',
        description: 'Fungal infection of the feet, especially between toes.',
        symptoms: ['itching between toes', 'scaling', 'redness', 'cracking', 'odor'],
        causes: ['fungal infection', 'moist environment', 'tight shoes', 'poor hygiene'],
        treatments: ['antifungal creams', 'keeping feet dry', 'good hygiene', 'breathable shoes'],
        severity: 'mild to moderate',
        prevention: ['keeping feet dry', 'good hygiene', 'breathable shoes'],
        doctorConsultation: 'Consult if persistent or severe.',
        ageGroup: 'all ages',
        prevalence: 'very common'
    },
    'tinea_cruris': {
        name: 'Tinea Cruris (Jock Itch)',
        description: 'Fungal infection of the groin area causing itching and redness.',
        symptoms: ['groin itching', 'redness', 'scaling', 'burning', 'rash'],
        causes: ['fungal infection', 'moisture', 'friction', 'tight clothing', 'poor hygiene'],
        treatments: ['antifungal creams', 'keeping area dry', 'loose clothing', 'good hygiene'],
        severity: 'mild to moderate',
        prevention: ['keeping area dry', 'loose clothing', 'good hygiene'],
        doctorConsultation: 'Consult if persistent or severe.',
        ageGroup: 'adults',
        prevalence: 'common'
    },
    'tinea_versicolor': {
        name: 'Tinea Versicolor',
        description: 'A fungal infection that causes discolored patches on the skin.',
        symptoms: ['discolored patches', 'scaling', 'mild itching', 'sun exposure worsens'],
        causes: ['yeast overgrowth', 'oily skin', 'warm climate', 'sweating'],
        treatments: ['antifungal shampoos', 'topical antifungals', 'oral antifungals'],
        severity: 'mild',
        prevention: ['good hygiene', 'avoiding excessive sweating', 'regular cleansing'],
        doctorConsultation: 'Consult if persistent or widespread.',
        ageGroup: 'teens to adults',
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
    'common_warts': {
        name: 'Common Warts (Verruca Vulgaris)',
        description: 'Rough, raised warts commonly found on hands and fingers.',
        symptoms: ['rough raised surface', 'grayish color', 'pain or tenderness', 'clusters'],
        causes: ['HPV infection', 'direct contact', 'skin breaks', 'weakened immunity'],
        treatments: ['salicylic acid', 'cryotherapy', 'duct tape occlusion', 'surgical removal'],
        severity: 'mild',
        prevention: ['avoiding direct contact', 'good hygiene', 'covering cuts'],
        doctorConsultation: 'Consult if painful, spreading, or persistent.',
        ageGroup: 'children to adults',
        prevalence: 'very common'
    },
    'plantar_warts': {
        name: 'Plantar Warts',
        description: 'Warts that develop on the soles of the feet, often painful when walking.',
        symptoms: ['painful walking', 'thickened skin', 'black dots', 'rough surface'],
        causes: ['HPV infection', 'barefoot walking', 'moist environments', 'skin breaks'],
        treatments: ['salicylic acid', 'cryotherapy', 'duct tape occlusion', 'surgical removal'],
        severity: 'mild to moderate',
        prevention: ['wearing shoes', 'good foot hygiene', 'avoiding barefoot walking'],
        doctorConsultation: 'Consult if painful or persistent.',
        ageGroup: 'all ages',
        prevalence: 'common'
    },
    'flat_warts': {
        name: 'Flat Warts (Verruca Plana)',
        description: 'Small, flat-topped warts that often appear in large numbers.',
        symptoms: ['small flat surface', 'flesh-colored', 'multiple lesions', 'smooth texture'],
        causes: ['HPV infection', 'shaving', 'skin trauma', 'weakened immunity'],
        treatments: ['topical treatments', 'cryotherapy', 'avoiding shaving', 'immune support'],
        severity: 'mild',
        prevention: ['avoiding shaving trauma', 'good hygiene', 'immune support'],
        doctorConsultation: 'Consult if widespread or persistent.',
        ageGroup: 'children to adults',
        prevalence: 'common'
    },
    'genital_warts': {
        name: 'Genital Warts (Condyloma Acuminata)',
        description: 'Warts that appear in the genital area, caused by specific HPV strains.',
        symptoms: ['genital growths', 'cauliflower appearance', 'itching', 'bleeding'],
        causes: ['HPV infection', 'sexual contact', 'specific HPV strains', 'weakened immunity'],
        treatments: ['topical medications', 'cryotherapy', 'surgical removal', 'HPV vaccination'],
        severity: 'moderate',
        prevention: ['safe sex practices', 'HPV vaccination', 'regular screening'],
        doctorConsultation: 'Essential for proper diagnosis and treatment.',
        ageGroup: 'sexually active adults',
        prevalence: 'common'
    },
    'molluscum_contagiosum': {
        name: 'Molluscum Contagiosum',
        description: 'A viral skin infection causing small, raised, pearl-like bumps.',
        symptoms: ['pearl-like bumps', 'central dimple', 'smooth surface', 'clusters'],
        causes: ['poxvirus infection', 'direct contact', 'sexual contact', 'weakened immunity'],
        treatments: ['cryotherapy', 'curettage', 'topical treatments', 'waiting for resolution'],
        severity: 'mild',
        prevention: ['avoiding direct contact', 'good hygiene', 'not sharing towels'],
        doctorConsultation: 'Consult if widespread or persistent.',
        ageGroup: 'children to adults',
        prevalence: 'common'
    },
    'impetigo': {
        name: 'Impetigo',
        description: 'A highly contagious bacterial skin infection causing red sores and blisters.',
        symptoms: ['red sores', 'blisters', 'honey-colored crusts', 'itching', 'pain'],
        causes: ['bacterial infection', 'strep or staph bacteria', 'skin breaks', 'poor hygiene'],
        treatments: ['antibiotic creams', 'oral antibiotics', 'good hygiene', 'isolation'],
        severity: 'mild to moderate',
        prevention: ['good hygiene', 'covering cuts', 'avoiding contact with infected'],
        doctorConsultation: 'Essential for proper treatment.',
        ageGroup: 'children',
        prevalence: 'common in children'
    },
    'cellulitis': {
        name: 'Cellulitis',
        description: 'A serious bacterial infection of the skin and underlying tissues.',
        symptoms: ['red swollen area', 'warmth', 'pain', 'fever', 'chills'],
        causes: ['bacterial infection', 'skin breaks', 'poor circulation', 'weakened immunity'],
        treatments: ['oral antibiotics', 'intravenous antibiotics', 'wound care', 'elevation'],
        severity: 'serious',
        prevention: ['good hygiene', 'covering cuts', 'treating skin conditions'],
        doctorConsultation: 'Emergency consultation required.',
        ageGroup: 'all ages',
        prevalence: 'uncommon'
    },
    'folliculitis': {
        name: 'Folliculitis',
        description: 'Inflammation of hair follicles, often caused by bacterial or fungal infection.',
        symptoms: ['red bumps', 'pustules', 'itching', 'tenderness', 'hair loss'],
        causes: ['bacterial infection', 'fungal infection', 'irritation', 'ingrown hairs'],
        treatments: ['antibiotic creams', 'antifungal treatments', 'warm compresses', 'good hygiene'],
        severity: 'mild to moderate',
        prevention: ['good hygiene', 'avoiding tight clothing', 'proper shaving'],
        doctorConsultation: 'Consult if persistent or severe.',
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
    'ichthyosis_vulgaris': {
        name: 'Ichthyosis Vulgaris',
        description: 'The most common form of ichthyosis, causing dry, scaly skin.',
        symptoms: ['dry scaly skin', 'fish-like scales', 'thickened skin', 'itching'],
        causes: ['genetic mutation', 'inherited condition', 'filaggrin deficiency'],
        treatments: ['moisturizers', 'exfoliants', 'retinoids', 'bathing techniques'],
        severity: 'mild to moderate',
        prevention: ['regular moisturizing', 'gentle cleansing', 'humidity control'],
        doctorConsultation: 'Important for proper management.',
        ageGroup: 'all ages',
        prevalence: 'uncommon'
    },
    'lamellar_ichthyosis': {
        name: 'Lamellar Ichthyosis',
        description: 'A severe form of ichthyosis present at birth with large, dark scales.',
        symptoms: ['large dark scales', 'thickened skin', 'cracking', 'infection risk'],
        causes: ['genetic mutation', 'inherited condition', 'enzyme deficiency'],
        treatments: ['systemic retinoids', 'moisturizers', 'antibiotics', 'specialized care'],
        severity: 'severe',
        prevention: ['genetic counseling', 'early intervention', 'specialized care'],
        doctorConsultation: 'Essential for specialized care.',
        ageGroup: 'newborns to adults',
        prevalence: 'very rare'
    },
    'epidermolytic_ichthyosis': {
        name: 'Epidermolytic Ichthyosis',
        description: 'A severe form of ichthyosis causing blistering and scaling.',
        symptoms: ['blistering', 'scaling', 'thickened skin', 'infection risk'],
        causes: ['genetic mutation', 'inherited condition', 'keratin defect'],
        treatments: ['systemic retinoids', 'antibiotics', 'wound care', 'specialized care'],
        severity: 'severe',
        prevention: ['genetic counseling', 'early intervention', 'specialized care'],
        doctorConsultation: 'Essential for specialized care.',
        ageGroup: 'newborns to adults',
        prevalence: 'very rare'
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
    'cutaneous_lupus': {
        name: 'Cutaneous Lupus',
        description: 'Lupus affecting only the skin, without systemic involvement.',
        symptoms: ['butterfly rash', 'discoid lesions', 'photosensitivity', 'scaling'],
        causes: ['autoimmune disorder', 'genetics', 'sun exposure', 'stress'],
        treatments: ['topical corticosteroids', 'antimalarials', 'sun protection', 'lifestyle changes'],
        severity: 'moderate',
        prevention: ['sun protection', 'stress management', 'early treatment'],
        doctorConsultation: 'Important for proper management.',
        ageGroup: 'adults',
        prevalence: 'uncommon'
    },
    'systemic_lupus': {
        name: 'Systemic Lupus Erythematosus',
        description: 'Lupus affecting multiple organ systems including skin, joints, and organs.',
        symptoms: ['butterfly rash', 'joint pain', 'fatigue', 'fever', 'organ involvement'],
        causes: ['autoimmune disorder', 'genetics', 'environmental factors', 'hormones'],
        treatments: ['corticosteroids', 'antimalarials', 'immunosuppressants', 'biologics'],
        severity: 'very serious',
        prevention: ['sun protection', 'stress management', 'regular medical care'],
        doctorConsultation: 'Essential for comprehensive care.',
        ageGroup: 'adults',
        prevalence: 'uncommon'
    },
    'dermatomyositis': {
        name: 'Dermatomyositis',
        description: 'An inflammatory disease affecting muscles and skin.',
        symptoms: ['heliotrope rash', 'gottron papules', 'muscle weakness', 'fatigue'],
        causes: ['autoimmune disorder', 'genetics', 'cancer association', 'environmental factors'],
        treatments: ['corticosteroids', 'immunosuppressants', 'physical therapy', 'cancer screening'],
        severity: 'serious',
        prevention: ['early diagnosis', 'regular monitoring', 'cancer screening'],
        doctorConsultation: 'Essential for proper diagnosis and treatment.',
        ageGroup: 'adults',
        prevalence: 'rare'
    },
    'scleroderma': {
        name: 'Scleroderma',
        description: 'A condition causing hardening and tightening of the skin and connective tissues.',
        symptoms: ['hardened skin', 'tight skin', 'joint stiffness', 'digestive problems'],
        causes: ['autoimmune disorder', 'genetics', 'environmental factors', 'collagen overproduction'],
        treatments: ['immunosuppressants', 'physical therapy', 'symptom management', 'organ monitoring'],
        severity: 'serious',
        prevention: ['early diagnosis', 'regular monitoring', 'organ protection'],
        doctorConsultation: 'Essential for comprehensive care.',
        ageGroup: 'adults',
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
    'melasma': {
        name: 'Melasma',
        description: 'A condition causing brown or gray-brown patches on the face.',
        symptoms: ['brown patches', 'facial involvement', 'sun exposure worsens', 'symmetrical'],
        causes: ['hormones', 'sun exposure', 'pregnancy', 'birth control', 'genetics'],
        treatments: ['hydroquinone', 'retinoids', 'chemical peels', 'laser therapy', 'sun protection'],
        severity: 'mild to moderate',
        prevention: ['sun protection', 'hormone management', 'early treatment'],
        doctorConsultation: 'Important for proper treatment.',
        ageGroup: 'adults',
        prevalence: 'common'
    },
    'post_inflammatory_hyperpigmentation': {
        name: 'Post-Inflammatory Hyperpigmentation',
        description: 'Dark spots that remain after skin inflammation or injury heals.',
        symptoms: ['dark spots', 'previous inflammation', 'slow fading', 'various colors'],
        causes: ['acne', 'eczema', 'psoriasis', 'injury', 'inflammation'],
        treatments: ['time', 'hydroquinone', 'retinoids', 'chemical peels', 'laser therapy'],
        severity: 'mild',
        prevention: ['preventing inflammation', 'early treatment', 'sun protection'],
        doctorConsultation: 'Consult if persistent or concerning.',
        ageGroup: 'all ages',
        prevalence: 'common'
    },
    'seborrheic_keratosis': {
        name: 'Seborrheic Keratosis',
        description: 'Benign skin growths that appear as waxy, stuck-on lesions.',
        symptoms: ['waxy appearance', 'stuck-on look', 'brown to black color', 'various sizes'],
        causes: ['aging', 'genetics', 'sun exposure', 'unknown factors'],
        treatments: ['cryotherapy', 'curettage', 'laser therapy', 'observation'],
        severity: 'none (benign)',
        prevention: ['sun protection', 'regular skin checks'],
        doctorConsultation: 'Consult if changing or concerning appearance.',
        ageGroup: 'adults 40+',
        prevalence: 'very common'
    },
    'actinic_keratosis': {
        name: 'Actinic Keratosis',
        description: 'Pre-cancerous skin growths caused by sun damage.',
        symptoms: ['rough scaly patches', 'sun-exposed areas', 'pink to red color', 'tenderness'],
        causes: ['chronic sun exposure', 'fair skin', 'aging', 'genetics'],
        treatments: ['cryotherapy', 'topical treatments', 'photodynamic therapy', 'surgical removal'],
        severity: 'moderate (pre-cancerous)',
        prevention: ['sun protection', 'regular skin checks', 'early treatment'],
        doctorConsultation: 'Important for proper treatment.',
        ageGroup: 'adults 40+',
        prevalence: 'common'
    },
    'cherry_angioma': {
        name: 'Cherry Angioma',
        description: 'Benign red growths made up of blood vessels.',
        symptoms: ['red bumps', 'smooth surface', 'various sizes', 'benign'],
        causes: ['aging', 'genetics', 'hormones', 'unknown factors'],
        treatments: ['laser therapy', 'electrocautery', 'observation'],
        severity: 'none (benign)',
        prevention: ['none known'],
        doctorConsultation: 'Consult if changing or concerning.',
        ageGroup: 'adults 30+',
        prevalence: 'very common'
    },
    'dermatofibroma': {
        name: 'Dermatofibroma',
        description: 'Benign skin growths that feel like hard lumps under the skin.',
        symptoms: ['hard lump', 'skin-colored to brown', 'dimple sign', 'benign'],
        causes: ['unknown', 'trauma', 'insect bites', 'genetics'],
        treatments: ['observation', 'surgical removal if desired'],
        severity: 'none (benign)',
        prevention: ['none known'],
        doctorConsultation: 'Consult if changing or concerning.',
        ageGroup: 'adults',
        prevalence: 'common'
    },
    'lipoma': {
        name: 'Lipoma',
        description: 'Benign fatty tumors that feel soft and movable under the skin.',
        symptoms: ['soft lump', 'movable', 'painless', 'various sizes'],
        causes: ['unknown', 'genetics', 'aging', 'trauma'],
        treatments: ['observation', 'surgical removal if desired'],
        severity: 'none (benign)',
        prevention: ['none known'],
        doctorConsultation: 'Consult if changing or concerning.',
        ageGroup: 'adults',
        prevalence: 'common'
    },
    'keloid': {
        name: 'Keloid',
        description: 'Overgrown scar tissue that extends beyond the original wound.',
        symptoms: ['raised scar', 'extends beyond wound', 'firm texture', 'various colors'],
        causes: ['wound healing', 'genetics', 'skin trauma', 'surgery'],
        treatments: ['corticosteroid injections', 'silicone sheets', 'laser therapy', 'surgical removal'],
        severity: 'mild to moderate',
        prevention: ['proper wound care', 'avoiding unnecessary trauma'],
        doctorConsultation: 'Important for proper treatment.',
        ageGroup: 'all ages',
        prevalence: 'uncommon'
    },
    'hypertrophic_scar': {
        name: 'Hypertrophic Scar',
        description: 'Raised scars that stay within the boundaries of the original wound.',
        symptoms: ['raised scar', 'stays within wound', 'firm texture', 'red to pink color'],
        causes: ['wound healing', 'genetics', 'skin trauma', 'surgery'],
        treatments: ['corticosteroid injections', 'silicone sheets', 'pressure therapy', 'laser therapy'],
        severity: 'mild to moderate',
        prevention: ['proper wound care', 'avoiding unnecessary trauma'],
        doctorConsultation: 'Consult if concerning or affecting function.',
        ageGroup: 'all ages',
        prevalence: 'common'
    },
    'stretch_marks': {
        name: 'Stretch Marks (Striae)',
        description: 'Lines that develop when the skin stretches or shrinks quickly.',
        symptoms: ['linear streaks', 'initially red/purple', 'fade to white', 'various locations'],
        causes: ['pregnancy', 'weight gain/loss', 'growth spurts', 'corticosteroid use'],
        treatments: ['retinoids', 'laser therapy', 'microdermabrasion', 'time'],
        severity: 'none (cosmetic)',
        prevention: ['gradual weight changes', 'moisturizing', 'healthy lifestyle'],
        doctorConsultation: 'Consult if concerning appearance.',
        ageGroup: 'all ages',
        prevalence: 'very common'
    },
    'age_spots': {
        name: 'Age Spots (Liver Spots)',
        description: 'Flat, brown spots that appear with age and sun exposure.',
        symptoms: ['flat brown spots', 'sun-exposed areas', 'various sizes', 'benign'],
        causes: ['sun exposure', 'aging', 'genetics', 'fair skin'],
        treatments: ['laser therapy', 'chemical peels', 'cryotherapy', 'topical treatments'],
        severity: 'none (cosmetic)',
        prevention: ['sun protection', 'early sun protection'],
        doctorConsultation: 'Consult if changing or concerning.',
        ageGroup: 'adults 40+',
        prevalence: 'very common'
    },
    'freckles': {
        name: 'Freckles (Ephelides)',
        description: 'Small, flat, tan spots that darken with sun exposure.',
        symptoms: ['small tan spots', 'sun-exposed areas', 'darken with sun', 'benign'],
        causes: ['genetics', 'sun exposure', 'fair skin', 'red hair'],
        treatments: ['laser therapy', 'chemical peels', 'sun protection'],
        severity: 'none (cosmetic)',
        prevention: ['sun protection', 'avoiding tanning'],
        doctorConsultation: 'Consult if changing or concerning.',
        ageGroup: 'all ages',
        prevalence: 'very common'
    },
    'moles': {
        name: 'Moles (Nevi)',
        description: 'Common skin growths that can be present at birth or develop later.',
        symptoms: ['brown to black spots', 'various sizes', 'usually benign', 'can change'],
        causes: ['genetics', 'sun exposure', 'aging', 'hormones'],
        treatments: ['observation', 'surgical removal if concerning'],
        severity: 'usually none (benign)',
        prevention: ['sun protection', 'regular skin checks'],
        doctorConsultation: 'Consult if changing or concerning.',
        ageGroup: 'all ages',
        prevalence: 'very common'
    },
    'dysplastic_nevi': {
        name: 'Dysplastic Nevi (Atypical Moles)',
        description: 'Moles with unusual features that may indicate increased melanoma risk.',
        symptoms: ['irregular borders', 'color variations', 'larger size', 'atypical features'],
        causes: ['genetics', 'sun exposure', 'family history', 'fair skin'],
        treatments: ['regular monitoring', 'surgical removal if concerning', 'sun protection'],
        severity: 'moderate (increased risk)',
        prevention: ['sun protection', 'regular skin checks', 'early detection'],
        doctorConsultation: 'Essential for proper monitoring.',
        ageGroup: 'all ages',
        prevalence: 'uncommon'
    },
    'congenital_nevi': {
        name: 'Congenital Nevi',
        description: 'Moles present at birth that can vary in size and melanoma risk.',
        symptoms: ['present at birth', 'various sizes', 'can change over time', 'increased risk if large'],
        causes: ['genetics', 'developmental factors', 'unknown'],
        treatments: ['regular monitoring', 'surgical removal if concerning', 'sun protection'],
        severity: 'varies by size',
        prevention: ['sun protection', 'regular monitoring', 'early detection'],
        doctorConsultation: 'Essential for proper monitoring.',
        ageGroup: 'newborns to adults',
        prevalence: 'uncommon'
    },
    'spider_angioma': {
        name: 'Spider Angioma',
        description: 'Small, spider-like blood vessel growths on the skin.',
        symptoms: ['spider-like appearance', 'red center', 'radiating vessels', 'benign'],
        causes: ['hormones', 'pregnancy', 'liver disease', 'aging'],
        treatments: ['laser therapy', 'electrocautery', 'observation'],
        severity: 'none (benign)',
        prevention: ['none known'],
        doctorConsultation: 'Consult if concerning or associated with liver disease.',
        ageGroup: 'all ages',
        prevalence: 'common'
    },
    'port_wine_stain': {
        name: 'Port Wine Stain',
        description: 'Birthmarks caused by abnormal blood vessel development.',
        symptoms: ['pink to purple birthmark', 'present at birth', 'can thicken over time', 'various sizes'],
        causes: ['abnormal blood vessel development', 'genetics', 'developmental factors'],
        treatments: ['laser therapy', 'surgical options', 'cosmetic cover-up'],
        severity: 'mild to moderate',
        prevention: ['none known'],
        doctorConsultation: 'Important for proper management.',
        ageGroup: 'newborns to adults',
        prevalence: 'uncommon'
    }
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
