(function () {
    'use strict';

    // Degree-to-specialty mapping
    const degreeSpecialties = {
        MBBS: [
            'GP or Freelance',
            'Medical Coding',
            'Family Medicine Diploma',
            'Telemedicine',
            'Emergency Medicine Diploma',
            'Clinical Research Assistant',
            'Insurance coder'
        ],
        'PG first year': [
            'Community Medicine', 'Internal Medicine', 'Pediatrics', 'Dermatology', 'Pathology',
            'Psychiatry', 'Radiology', 'Anesthesiology', 'Microbiology', 'Pharmacology',
            'Hospital Administration', 'General Surgery', 'Orthopedics', 'ENT', 'Ophthalmology',
            'Nuclear Medicine', 'Radiotherapy'
        ],
        'PG second year': [
            'Community Medicine', 'Internal Medicine', 'Pediatrics', 'Dermatology', 'Pathology',
            'Psychiatry', 'Radiology', 'Anesthesiology', 'Microbiology', 'Pharmacology',
            'Hospital Administration', 'General Surgery', 'Orthopedics', 'ENT', 'Ophthalmology',
            'Nuclear Medicine', 'Radiotherapy'
        ],
        'PG third year': [
            'Community Medicine', 'Internal Medicine', 'Pediatrics', 'Dermatology', 'Pathology',
            'Psychiatry', 'Radiology', 'Anesthesiology', 'Microbiology', 'Pharmacology',
            'Hospital Administration', 'General Surgery', 'Orthopedics', 'ENT', 'Ophthalmology',
            'Nuclear Medicine', 'Radiotherapy'
        ],
        'PG Diploma': [
            'Community Medicine', 'Internal Medicine', 'Pediatrics', 'Dermatology', 'Pathology',
            'Psychiatry', 'Radiology', 'Anesthesiology', 'Microbiology', 'Pharmacology',
            'Hospital Administration', 'General Surgery', 'Orthopedics', 'ENT', 'Ophthalmology',
            'Nuclear Medicine', 'Radiotherapy'
        ],
        MD: [
            'Community Medicine', 'Internal Medicine', 'Pediatrics', 'Dermatology', 'Pathology',
            'Psychiatry', 'Radiology', 'Anesthesiology', 'Microbiology', 'Pharmacology',
            'Hospital Administration', 'Nuclear Medicine', 'Radiotherapy', 'Family Medicine',
            'Forensic Medicine', 'Physical Medicine and Rehabilitation', 'Tuberculosis and Respiratory Diseases',
            'Sports Medicine', 'Emergency Medicine', 'Geriatrics', 'Palliative Medicine', 'Sleep Medicine',
            'Transfusion Medicine'
        ],
        MS: ['General Surgery', 'Orthopedics', 'Otorhinolaryngology', 'Ophthalmology','Obstetrics'],
        'SS First year': [
            'Cardiology', 'Neurology', 'Gastroenterology', 'Nephrology',
            'Cardiothoracic Surgery', 'Neurosurgery', 'Urology', 'Plastic Surgery'
        ],
        'SS Second year': [
            'Cardiology', 'Neurology', 'Gastroenterology', 'Nephrology',
            'Cardiothoracic Surgery', 'Neurosurgery', 'Urology', 'Plastic Surgery'
        ],
        DM: [
            'Cardiology', 'Neurology', 'Gastroenterology', 'Nephrology', 'Endocrinology', 'Hematology',
            'Medical Oncology', 'Neonatology', 'Nephrology', 'Neurology', 'Pediatric Cardiology',
            'Pediatric Gastroenterology', 'Pediatric Nephrology', 'Pediatric Neurology', 'Pediatric Oncology',
            'Pediatric Pulmonology', 'Pediatric Rheumatology', 'Pediatric Surgery', 'Pediatric Urology',
            'Pulmonology', 'Rheumatology', 'Cardiac Anesthesia', 'Vascular Medicine',
            'Critical Care Medicine', 'Intensive Care Medicine', 'Hepatology', 'Clinical Pharmacology',
            'Clinical Hematology', 'Clinical Genetics', 'Clinical Nutrition', 'Clinical Oncology',
            'Clinical Pathology', 'Clinical Psychology', 'Clinical Neurophysiology', 'Clinical Neurology',
            'Infectious Diseases', 'Allergy and Immunology', 'Clinical Immunology'
        ],
        MCh: [
            'Cardiothoracic Surgery', 'Neurosurgery', 'Urology', 'Plastic Surgery', 'Pediatric Surgery',
            'Surgical Oncology', 'Vascular Surgery', 'Endocrine Surgery', 'Gynecological Oncology',
            'Hand Surgery', 'Head and Neck Surgery', 'Hepatobiliary Surgery', 'Laparoscopic Surgery',
            'Maxillofacial Surgery', 'Orthopedic Surgery', 'Pediatric Surgery', 'Reconstructive Surgery',
            'Thoracic Surgery', 'Transplant Surgery', 'Trauma Surgery', 'Vascular Surgery', 'Cardiac Surgery',
            'Colorectal Surgery', 'Cosmetic Surgery', 'Craniofacial Surgery', 'Dental Surgery',
            'Dermatologic Surgery', 'Emergency Surgery', 'Endocrine Surgery', 'Endovascular Surgery',
            'Facial Plastic Surgery', 'Foot and Ankle Surgery', 'General Surgery', 'Gynecologic Surgery',
            'Hand Surgery', 'Head and Neck Surgery', 'Hernia Surgery', 'Hepatobiliary Surgery',
            'Laparoscopic Surgery', 'Liver Surgery', 'Lung Surgery', 'Maxillofacial Surgery'
        ],
        MBA: ['Healthcare Management', 'General MBA', 'Marketing and Finance', 'Hospital Administration'],
        MPH: ['Masters in Public Health'],
        FMGE: ['Observer', 'Medical Coding'],
        BAMS: ['Ayurveda specialties'],
        BHMS: ['Homeopathy specialties'],
        BYNS: ['Yoga and Naturopathy specialties'],
        BDS: ['General Dentistry', 'Cosmetologist'],
        MDS: [
            'Oral and Maxillofacial Surgery', 'Orthodontics', 'Periodontology', 'Prosthodontics',
            'Endodontics', 'Pediatric Dentistry', 'Oral Pathology', 'Oral Medicine and Diagnosis',
            'Oral Public Health', 'Forensic Odontology', 'Geriatric Dentistry',
            'Dental Implantology', 'Dental Sleep Medicine', 'Dental Esthetics and Cosmetic Dentistry',
            'Dental Education and Research', 'Dental Public Relations and Marketing'
        ],
        'B.V.Sc & AH': ['Veterinary Medicine specialties']
    };

    // State-to-district mapping
    const districtsByState = {
        'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool'],
        'Arunachal Pradesh': ['Tawang', 'West Kameng', 'East Kameng', 'Papum Pare', 'Kurung Kumey'],
        'Assam': ['Dispur', 'Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat'],
        'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga'],
        'Chhattisgarh': ['Raipur', 'Bilaspur', 'Durg', 'Korba', 'Rajnandgaon'],
        'Goa': ['Panaji', 'Margao', 'Mapusa', 'Ponda', 'Vasco da Gama'],
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
        'Haryana': ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Hisar'],
        'Himachal Pradesh': ['Shimla', 'Dharamshala', 'Mandi', 'Solan', 'Kullu'],
        'Jharkhand': ['Ranchi', 'Dhanbad', 'Bokaro', 'Jamshedpur', 'Giridih'],
        'Karnataka': ['Bengaluru', 'Mysuru', 'Hubli', 'Belagavi', 'Mangalore'],
        'Kerala': [
            'Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam',
            'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta',
            'Thiruvananthapuram', 'Thrissur', 'Wayanad'
        ],
        'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain'],
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik'],
        'Manipur': ['Imphal', 'Churachandpur', 'Thoubal', 'Senapati', 'Bishnupur'],
        'Meghalaya': ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Baghmara'],
        'Mizoram': ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip', 'Kolasib'],
        'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Zunheboto'],
        'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Sambalpur', 'Puri', 'Rayagada'],
        'Punjab': ['Chandigarh', 'Amritsar', 'Jalandhar', 'Ludhiana', 'Patiala'],
        'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Ajmer', 'Bikaner'],
        'Sikkim': ['Gangtok', 'Mangan', 'Pelling', 'Namchi', 'Geyzing'],
        'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
        'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Mahbubnagar'],
        'Tripura': ['Agartala', 'Udaipur', 'Belonia', 'Dharmanagar', 'Kailasahar'],
        'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut'],
        'Uttarakhand': ['Dehradun', 'Haridwar', 'Nainital', 'Haldwani', 'Roorkee'],
        'West Bengal': ['Kolkata', 'Siliguri', 'Asansol', 'Durgapur', 'Kharagpur'],
        'Andaman and Nicobar Islands': ['Port Blair'],
        'Chandigarh': ['Chandigarh'],
        'Dadra and Nagar Haveli and Daman and Diu': ['Silvassa', 'Daman', 'Diu'],
        'Delhi': ['New Delhi'],
        'Jammu and Kashmir': ['Srinagar', 'Jammu'],
        'Ladakh': ['Leh', 'Kargil'],
        'Lakshadweep': ['Kavaratti'],
        'Puducherry': ['Pondicherry', 'Karaikal', 'Mahe', 'Yanam']
    };

    // Make mappings globally accessible for search functionality
    window.degreeSpecialties = degreeSpecialties;
    window.districtsByState = districtsByState;

    // Enhanced popup creation function
    function createEnhancedPopup(item) {
        console.log('Creating popup for item:', item);

        // Determine the best name to display
        const name = item.name || item.hospital_name || item.location || 'Unknown Location';

        let content = `<div class="marker-popup">`;
        content += `<h4>${name}</h4>`;

        // Add location information
        if (item.location && item.location !== name) {
            content += `<p><strong>Location:</strong> ${item.location}</p>`;
        }
        if (item.district) {
            content += `<p><strong>District:</strong> ${item.district}</p>`;
        }
        if (item.state) {
            content += `<p><strong>State:</strong> ${item.state}</p>`;
        }

        // Add salary information
        if (item.average_salary) {
            content += `<p><strong>Average Salary:</strong> ₹${item.average_salary.toLocaleString()}</p>`;
        }
        if (item.mbbs_average_salary) {
            content += `<p><strong>MBBS Salary:</strong> ₹${item.mbbs_average_salary.toLocaleString()}</p>`;
        }
        if (item.md_average_salary) {
            content += `<p><strong>MD Salary:</strong> ₹${item.md_average_salary.toLocaleString()}</p>`;
        }
        if (item.ms_average_salary) {
            content += `<p><strong>MS Salary:</strong> ₹${item.ms_average_salary.toLocaleString()}</p>`;
        }
        if (item.dm_average_salary) {
            content += `<p><strong>DM Salary:</strong> ₹${item.dm_average_salary.toLocaleString()}</p>`;
        }
        if (item.mch_average_salary) {
            content += `<p><strong>MCh Salary:</strong> ₹${item.mch_average_salary.toLocaleString()}</p>`;
        }

        // Add degree and specialty information
        if (item.degree) {
            content += `<p><strong>Degree:</strong> ${item.degree}</p>`;
        }
        if (item.specialty) {
            content += `<p><strong>Specialty:</strong> ${item.specialty}</p>`;
        }
        if (item.workplace) {
            content += `<p><strong>Workplace:</strong> ${item.workplace}</p>`;
        }

        // Add quality metrics if available
        if (item.quality_of_life !== undefined) {
            content += `<p><strong>Quality of Life:</strong> ${item.quality_of_life}/10</p>`;
        }
        if (item.toxicity !== undefined) {
            content += `<p><strong>Toxicity Level:</strong> ${item.toxicity}/10</p>`;
        }
        if (item.work_hecticity !== undefined) {
            content += `<p><strong>Work Intensity:</strong> ${item.work_hecticity}/10</p>`;
        }

        // Add Google Maps link
        if (item.latitude && item.longitude) {
            content += `<p><a href="https://www.google.com/maps?q=${item.latitude},${item.longitude}" target="_blank" style="color: #007BFF;">📍 View on Google Maps</a></p>`;
        }

        content += `</div>`;
        return content;
    }

    // Make functions globally accessible for search functionality
    window.updateStatistics = updateStatistics;
    window.updateMap = updateMap;
    window.createEnhancedPopup = createEnhancedPopup;
    window.initializeMap = initializeMap;

    // Data for static markers (state capitals)
    const stateCapitals = [
        { state: 'Andhra Pradesh', capital: 'Amaravati', latitude: 16.5062, longitude: 80.6480, mbbs_average_salary: 80000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
        { state: 'Arunachal Pradesh', capital: 'Itanagar', latitude: 27.0844, longitude: 93.6053, mbbs_average_salary: 75000, md_average_salary: 110000, ms_average_salary: 140000, dm_average_salary: 190000, mch_average_salary: 240000 },
        { state: 'Assam', capital: 'Dispur', latitude: 26.1433, longitude: 91.7933, mbbs_average_salary: 85000, md_average_salary: 130000, ms_average_salary: 160000, dm_average_salary: 210000, mch_average_salary: 260000 },
        { state: 'Bihar', capital: 'Patna', latitude: 25.5941, longitude: 85.1376, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
        { state: 'Chhattisgarh', capital: 'Raipur', latitude: 21.2514, longitude: 81.6296, mbbs_average_salary: 80000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
        { state: 'Goa', capital: 'Panaji', latitude: 15.4909, longitude: 73.8278, mbbs_average_salary: 35000, md_average_salary: 140000, ms_average_salary: 170000, dm_average_salary: 220000, mch_average_salary: 270000 },
        { state: 'Gujarat', capital: 'Gandhinagar', latitude: 23.2156, longitude: 72.6369, mbbs_average_salary: 75000, md_average_salary: 130000, ms_average_salary: 160000, dm_average_salary: 210000, mch_average_salary: 260000 },
        { state: 'Haryana', capital: 'Chandigarh', latitude: 30.7333, longitude: 76.7794, mbbs_average_salary: 90000, md_average_salary: 140000, ms_average_salary: 170000, dm_average_salary: 220000, mch_average_salary: 270000 },
        { state: 'Himachal Pradesh', capital: 'Shimla', latitude: 31.1048, longitude: 77.1734, mbbs_average_salary: 80000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
        { state: 'Jharkhand', capital: 'Ranchi', latitude: 23.3441, longitude: 85.3096, mbbs_average_salary: 75000, md_average_salary: 110000, ms_average_salary: 140000, dm_average_salary: 190000, mch_average_salary: 240000 },
        { state: 'Karnataka', capital: 'Bengaluru', latitude: 12.9716, longitude: 77.5946, mbbs_average_salary: 80000, md_average_salary: 150000, ms_average_salary: 180000, dm_average_salary: 230000, mch_average_salary: 280000 },
        { state: 'Kerala', capital: 'Thiruvananthapuram', latitude: 8.5241, longitude: 76.9366, mbbs_average_salary: 40000, md_average_salary: 140000, ms_average_salary: 170000, dm_average_salary: 220000, mch_average_salary: 270000 },
        { state: 'Madhya Pradesh', capital: 'Bhopal', latitude: 23.2599, longitude: 77.4126, mbbs_average_salary: 50000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
        { state: 'Maharashtra', capital: 'Mumbai', latitude: 19.0760, longitude: 72.8777, mbbs_average_salary: 100000, md_average_salary: 160000, ms_average_salary: 190000, dm_average_salary: 240000, mch_average_salary: 290000 },
        { state: 'Manipur', capital: 'Imphal', latitude: 24.8170, longitude: 93.9368, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
        { state: 'Meghalaya', capital: 'Shillong', latitude: 25.5788, longitude: 91.8933, mbbs_average_salary: 75000, md_average_salary: 110000, ms_average_salary: 140000, dm_average_salary: 190000, mch_average_salary: 240000 },
        { state: 'Mizoram', capital: 'Aizawl', latitude: 23.7271, longitude: 92.7176, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
        { state: 'Nagaland', capital: 'Kohima', latitude: 25.6751, longitude: 94.1105, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
        { state: 'Odisha', capital: 'Bhubaneswar', latitude: 20.2961, longitude: 85.8245, mbbs_average_salary: 90000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
        { state: 'Punjab', capital: 'Chandigarh', latitude: 30.7333, longitude: 76.7794, mbbs_average_salary: 90000, md_average_salary: 140000, ms_average_salary: 170000, dm_average_salary: 220000, mch_average_salary: 270000 },
        { state: 'Rajasthan', capital: 'Jaipur', latitude: 26.9124, longitude: 75.7873, mbbs_average_salary: 85000, md_average_salary: 130000, ms_average_salary: 160000, dm_average_salary: 210000, mch_average_salary: 260000 },
        { state: 'Sikkim', capital: 'Gangtok', latitude: 27.3314, longitude: 88.6138, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
        { state: 'Tamil Nadu', capital: 'Chennai', latitude: 13.0827, longitude: 80.2707, mbbs_average_salary: 45000, md_average_salary: 150000, ms_average_salary: 180000, dm_average_salary: 230000, mch_average_salary: 280000 },
        { state: 'Telangana', capital: 'Hyderabad', latitude: 17.3850, longitude: 78.4867, mbbs_average_salary: 65000, md_average_salary: 150000, ms_average_salary: 180000, dm_average_salary: 230000, mch_average_salary: 280000 },
        { state: 'Tripura', capital: 'Agartala', latitude: 23.8315, longitude: 91.2868, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
        { state: 'Uttar Pradesh', capital: 'Lucknow', latitude: 26.8467, longitude: 80.9462, mbbs_average_salary: 85000, md_average_salary: 130000, ms_average_salary: 160000, dm_average_salary: 210000, mch_average_salary: 260000 },
        { state: 'Uttarakhand', capital: 'Dehradun', latitude: 30.3165, longitude: 78.0322, mbbs_average_salary: 80000, md_average_salary: 120000, ms_average_salary: 150000, dm_average_salary: 200000, mch_average_salary: 250000 },
        { state: 'West Bengal', capital: 'Kolkata', latitude: 22.5726, longitude: 88.3639, mbbs_average_salary: 50000, md_average_salary: 140000, ms_average_salary: 170000, dm_average_salary: 220000, mch_average_salary: 270000 },
        { state: 'Andaman and Nicobar Islands', capital: 'Port Blair', latitude: 11.6287, longitude: 92.7258, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
        { state: 'Chandigarh', capital: 'Chandigarh', latitude: 30.7333, longitude: 76.7794, mbbs_average_salary: 70000, md_average_salary: 140000, ms_average_salary: 170000, dm_average_salary: 220000, mch_average_salary: 270000 },
        { state: 'Dadra and Nagar Haveli and Daman and Diu', capital: 'Daman', latitude: 20.4283, longitude: 72.8397, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
        { state: 'Delhi', capital: 'New Delhi', latitude: 28.6139, longitude: 77.2090, mbbs_average_salary: 100000, md_average_salary: 160000, ms_average_salary: 190000, dm_average_salary: 240000, mch_average_salary: 290000 },
        { state: 'Jammu and Kashmir', capital: 'Srinagar', latitude: 34.0837, longitude: 74.7973, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
        { state: 'Ladakh', capital: 'Leh', latitude: 34.1526, longitude: 77.5770, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
        { state: 'Lakshadweep', capital: 'Kavaratti', latitude: 10.5667, longitude: 72.6417, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 },
        { state: 'Puducherry', capital: 'Pondicherry', latitude: 11.9139, longitude: 79.8145, mbbs_average_salary: 70000, md_average_salary: 100000, ms_average_salary: 130000, dm_average_salary: 180000, mch_average_salary: 230000 }
    ];

    // Make stateCapitals globally accessible after definition
    window.stateCapitals = stateCapitals;

    // List of degrees for "All degree" scenario
    // Collections that actually exist based on Firebase indexes
    const allDegrees = [
        "MBBS", "MD", "MS", "General Surgery", "Internal Medicine",
        "Pediatrics", "Ophthalmology", "Dermatology", "GP or Freelance"
    ];

    // 1) Initialize the Leaflet map
    function initializeMap() {
        console.log('Initializing map...');
        
        const mapContainer = document.getElementById('india-map');
        if (!mapContainer) {
            console.error('Map container not found');
            return;
        }
        
        console.log('Map container found:', mapContainer);
        console.log('Container dimensions:', mapContainer.offsetWidth, 'x', mapContainer.offsetHeight);
        
        if (typeof L === 'undefined') {
            console.error('Leaflet library not loaded.');
            return;
        }
        
        console.log('Leaflet library loaded successfully');

        // Clear any existing map
        if (window.map) {
            console.log('Removing existing map instance');
            window.map.remove();
        }

        try {
            console.log('Creating new map instance...');
            window.map = L.map(mapContainer, {
                center: [22.5937, 78.9629],
                zoom: 5,
                zoomControl: true,
                scrollWheelZoom: true
            });
            
            console.log('Map instance created, adding tile layer...');
            
            const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18,
                tileSize: 256
            });
            
            tileLayer.addTo(window.map);
            
            // Force map to invalidate size after a short delay
            setTimeout(() => {
                if (window.map) {
                    window.map.invalidateSize();
                    console.log('Map size invalidated');
                }
            }, 100);
            
            window.markers = [];

            console.log('Adding markers for state capitals...');
            // Add markers for state capitals
            stateCapitals.forEach((capital, index) => {
                try {
                    const marker = L.marker([capital.latitude, capital.longitude]).addTo(window.map);
                    marker.bindPopup(
                        `<div style="font-family: Arial, sans-serif;">
                            <h4 style="margin: 0 0 8px 0; color: #1f2937;">${capital.state} - ${capital.capital}</h4>
                            <p style="margin: 4px 0;"><strong>MBBS Average Salary:</strong> ₹${capital.mbbs_average_salary.toLocaleString()}</p>
                            <p style="margin: 4px 0;"><strong>MD Average Salary:</strong> ₹${capital.md_average_salary.toLocaleString()}</p>
                            <p style="margin: 4px 0;"><strong>MS Average Salary:</strong> ₹${capital.ms_average_salary.toLocaleString()}</p>
                            <p style="margin: 4px 0;"><strong>DM Average Salary:</strong> ₹${capital.dm_average_salary.toLocaleString()}</p>
                            <p style="margin: 4px 0;"><strong>MCh Average Salary:</strong> ₹${capital.mch_average_salary.toLocaleString()}</p>
                            <p style="margin: 8px 0 0 0;"><a href="https://www.google.com/maps?q=${capital.latitude},${capital.longitude}" target="_blank" style="color: #2563eb; text-decoration: none;">📍 View on Google Maps</a></p>
                        </div>`
                    );
                    window.markers.push(marker);
                } catch (markerError) {
                    console.error(`Error creating marker for ${capital.state}:`, markerError);
                }
            });

            console.log('Map initialized successfully with', window.markers.length, 'markers');
            
            // Add event listeners for debugging
            window.map.on('load', () => {
                console.log('Map load event fired');
            });
            
            window.map.on('zoomend', () => {
                console.log('Map zoom level:', window.map.getZoom());
            });
            
        } catch (error) {
            console.error('Error initializing map:', error);
            console.error('Error stack:', error.stack);
        }
    }

    // 2) Aggregates the data into simple numeric stats to display in the side panel
    function updateStatistics(data) {
        if (!data.length) {
            [
                'name', 'average-salary', 'lowest-salary', 'highest-salary', 'toxicity', 'work-hecticity',
                'outsider-harassment', 'entrance-coaching-feasibility', 'quality-of-life', 'preparation-to-go-abroad',
                'patient-density', 'doctor-density', 'job-vacancy-density', 'pharma-rep-density',
                'schooling-for-kids', 'internet', 'cost'
            ].forEach(id => {
                document.getElementById(id).textContent = '-';
            });
            return;
        }

        const metrics = {
            name: data[0].name,
            average_salary: { sum: 0, min: Infinity, max: -Infinity, count: 0 },
            toxicity: { sum: 0, count: 0 },
            work_hecticity: { sum: 0, count: 0 },
            outsider_harassment: { sum: 0, count: 0 },
            entrance_coaching_feasibility: { sum: 0, count: 0 },
            quality_of_life: { sum: 0, count: 0 },
            preparation_to_go_abroad: { sum: 0, count: 0 },
            patient_density: { sum: 0, count: 0 },
            doctor_density: { sum: 0, count: 0 },
            job_vacancy_density: { sum: 0, count: 0 },
            pharma_rep_density: { sum: 0, count: 0 },
            schooling_for_kids: { sum: 0, count: 0 },
            internet: { sum: 0, count: 0 },
            cost: { sum: 0, count: 0 }
        };

        data.forEach(item => {
            if (item.name) {
                metrics.name = item.name;
            }
            if (item.average_salary && item.average_salary > 0) {
                metrics.average_salary.sum += item.average_salary;
                metrics.average_salary.count += 1;
                if (item.lowest_salary) {
                    metrics.average_salary.min = Math.min(metrics.average_salary.min, item.lowest_salary);
                }
                if (item.highest_salary) {
                    metrics.average_salary.max = Math.max(metrics.average_salary.max, item.highest_salary);
                }
            }
            if (item.toxicity !== undefined) {
                metrics.toxicity.sum += item.toxicity;
                metrics.toxicity.count += 1;
            }
            if (item.work_hecticity !== undefined) {
                metrics.work_hecticity.sum += item.work_hecticity;
                metrics.work_hecticity.count += 1;
            }
            if (item.outsider_harassment !== undefined) {
                metrics.outsider_harassment.sum += item.outsider_harassment;
                metrics.outsider_harassment.count += 1;
            }
            if (item.entrance_coaching_feasibility !== undefined) {
                metrics.entrance_coaching_feasibility.sum += item.entrance_coaching_feasibility;
                metrics.entrance_coaching_feasibility.count += 1;
            }
            if (item.quality_of_life !== undefined) {
                metrics.quality_of_life.sum += item.quality_of_life;
                metrics.quality_of_life.count += 1;
            }
            if (item.preparation_to_go_abroad !== undefined) {
                metrics.preparation_to_go_abroad.sum += item.preparation_to_go_abroad;
                metrics.preparation_to_go_abroad.count += 1;
            }
            if (item.patient_density !== undefined) {
                metrics.patient_density.sum += item.patient_density;
                metrics.patient_density.count += 1;
            }
            if (item.doctor_density !== undefined) {
                metrics.doctor_density.sum += item.doctor_density;
                metrics.doctor_density.count += 1;
            }
            if (item.job_vacancy_density !== undefined) {
                metrics.job_vacancy_density.sum += item.job_vacancy_density;
                metrics.job_vacancy_density.count += 1;
            }
            if (item.pharma_rep_density !== undefined) {
                metrics.pharma_rep_density.sum += item.pharma_rep_density;
                metrics.pharma_rep_density.count += 1;
            }
            if (item.schooling_for_kids !== undefined) {
                metrics.schooling_for_kids.sum += item.schooling_for_kids;
                metrics.schooling_for_kids.count += 1;
            }
            if (item.internet !== undefined) {
                metrics.internet.sum += item.internet;
                metrics.internet.count += 1;
            }
            if (item.cost !== undefined) {
                metrics.cost.sum += item.cost;
                metrics.cost.count += 1;
            }
        });

        const count = data.length;

        // Display the aggregated stats
        document.getElementById('name').textContent = metrics.name || '-';
        
        // Calculate and display average salary (FIXED VERSION)
        const avgSalary = metrics.average_salary.count > 0 
            ? (metrics.average_salary.sum / metrics.average_salary.count).toFixed(2)
            : '-';
        document.getElementById('average-salary').textContent = avgSalary !== '-' ? avgSalary + ' INR' : '-';
        
        // Debug logging to show the fix working
        if (metrics.average_salary.count > 0) {
            const oldWrongAvg = (metrics.average_salary.sum / count).toFixed(2);
            const newCorrectAvg = (metrics.average_salary.sum / metrics.average_salary.count).toFixed(2);
            console.log(`📊 SALARY CALCULATION FIX:`);
            console.log(`   Total records: ${count}`);
            console.log(`   Records with salary: ${metrics.average_salary.count}`);
            console.log(`   Salary sum: ₹${metrics.average_salary.sum.toLocaleString()}`);
            console.log(`   ❌ Old (wrong) average: ₹${oldWrongAvg} (÷${count})`);
            console.log(`   ✅ New (correct) average: ₹${newCorrectAvg} (÷${metrics.average_salary.count})`);
            console.log(`   💡 Difference: ₹${(newCorrectAvg - oldWrongAvg).toFixed(2)}`);
        }
        document.getElementById('lowest-salary').textContent =
            metrics.average_salary.min !== Infinity
                ? metrics.average_salary.min.toFixed(2) + ' INR'
                : '-';
        document.getElementById('highest-salary').textContent =
            metrics.average_salary.max !== -Infinity
                ? metrics.average_salary.max.toFixed(2) + ' INR'
                : '-';

        // Function to compute average for a sum+count
        function avgOrDash(sum, cnt) {
            return cnt > 0 ? (sum / cnt).toFixed(2) : '-';
        }

        document.getElementById('toxicity').textContent =
            avgOrDash(metrics.toxicity.sum, metrics.toxicity.count);
        document.getElementById('work-hecticity').textContent =
            avgOrDash(metrics.work_hecticity.sum, metrics.work_hecticity.count);
        document.getElementById('outsider-harassment').textContent =
            avgOrDash(metrics.outsider_harassment.sum, metrics.outsider_harassment.count);
        document.getElementById('entrance-coaching-feasibility').textContent =
            avgOrDash(metrics.entrance_coaching_feasibility.sum, metrics.entrance_coaching_feasibility.count);
        document.getElementById('quality-of-life').textContent =
            avgOrDash(metrics.quality_of_life.sum, metrics.quality_of_life.count);
        document.getElementById('preparation-to-go-abroad').textContent =
            avgOrDash(metrics.preparation_to_go_abroad.sum, metrics.preparation_to_go_abroad.count);
        document.getElementById('patient-density').textContent =
            avgOrDash(metrics.patient_density.sum, metrics.patient_density.count);
        document.getElementById('doctor-density').textContent =
            avgOrDash(metrics.doctor_density.sum, metrics.doctor_density.count);
        document.getElementById('job-vacancy-density').textContent =
            avgOrDash(metrics.job_vacancy_density.sum, metrics.job_vacancy_density.count);
        document.getElementById('pharma-rep-density').textContent =
            avgOrDash(metrics.pharma_rep_density.sum, metrics.pharma_rep_density.count);
        document.getElementById('schooling-for-kids').textContent =
            avgOrDash(metrics.schooling_for_kids.sum, metrics.schooling_for_kids.count);
        document.getElementById('internet').textContent =
            avgOrDash(metrics.internet.sum, metrics.internet.count);
        document.getElementById('cost').textContent =
            metrics.cost.count > 0 ? (metrics.cost.sum / metrics.cost.count).toFixed(2) + ' INR' : '-';
    }

    // 3) Clear existing markers from map, then add markers for the final data
    function updateMap(data) {
        console.log('updateMap called with data:', data);
        if (!window.map) return;
        if (!window.markers) window.markers = [];
        // Remove old markers
        window.markers.forEach(marker => window.map.removeLayer(marker));
        window.markers = [];

        if (!data.length) {
            console.log('No data to display on the map.');
            return;
        }

        data.forEach((item, index) => {
            console.log(`Processing item ${index + 1}:`, item);
            if (item.latitude && item.longitude) {
                try {
                    const coords = [parseFloat(item.latitude), parseFloat(item.longitude)];
                    console.log(`Creating marker at coordinates:`, coords);
                    const marker = L.marker(coords).addTo(window.map);

                    // Create enhanced popup content
                    const popupContent = createEnhancedPopup(item);
                    console.log(`Popup content created:`, popupContent);
                    marker.bindPopup(popupContent);
                    window.markers.push(marker);
                    console.log(`✓ Marker created successfully for ${item.name || 'Unknown'}`);
                } catch (error) {
                    console.error(`Error creating marker for item ${index + 1}:`, error, item);
                }
            } else {
                console.warn(`⚠ Item ${index + 1} missing coordinates:`, item);
            }
        });

        if (window.markers.length > 0) {
            const group = new L.featureGroup(window.markers);
            window.map.fitBounds(group.getBounds());
        }
    }

    // 4) Main entry point
    function initializeApp() {
        initializeMap();
    }

    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM Content Loaded');
        
        // DOM references
        const showButton = document.getElementById('show');
        const stateDropdown = document.getElementById('state-dropdown');
        const districtDropdown = document.getElementById('district-dropdown');
        const specialtyDropdown = document.getElementById('specialty-dropdown');
        const degreeDropdown = document.getElementById('degree-dropdown');
        const workplaceDropdown = document.getElementById('workplace-dropdown');

        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');

        // Comments
        const toggleCommentsButton = document.getElementById('toggle-comments');
        const commentsDiv = document.getElementById('comments');
        const submitCommentButton = document.getElementById('submit-comment');

        // Toggle comments functionality
        if (toggleCommentsButton && commentsDiv) {
            toggleCommentsButton.addEventListener('click', function() {
                const isVisible = commentsDiv.style.display !== 'none';
                commentsDiv.style.display = isVisible ? 'none' : 'block';
                
                const icon = toggleCommentsButton.querySelector('i');
                if (icon) {
                    icon.className = isVisible ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
                }
            });
        }
        const commentBox = document.getElementById('comment-box');
        const commentList = document.getElementById('comment-list');

        // Hide paywall, show content, load map
        const paywallOverlay = document.getElementById('paywall-overlay');
        const content = document.getElementById('content');
        if (paywallOverlay && content) {
            paywallOverlay.style.display = 'none';
            content.style.display = 'block';
        }

        // Initialize map with delay to ensure all resources are loaded
        console.log('Initializing app...');
        setTimeout(() => {
            initializeApp();

        }, 500);

        // District population on state change
        stateDropdown.addEventListener('change', () => {
            const st = stateDropdown.value;
            districtDropdown.innerHTML = '<option value="">Select a District</option>';
            if (districtsByState[st]) {
                districtsByState[st].forEach(d => {
                    const opt = document.createElement('option');
                    opt.value = d;
                    opt.textContent = d;
                    districtDropdown.appendChild(opt);
                });
            }
        });

        // Specialty population on degree change
        degreeDropdown.addEventListener('change', () => {
            const deg = degreeDropdown.value;
            specialtyDropdown.innerHTML = '<option value="">Select a Specialty</option>';
            if (degreeSpecialties[deg]) {
                degreeSpecialties[deg].forEach(sp => {
                    let opt = document.createElement('option');
                    opt.value = sp;
                    opt.text = sp;
                    specialtyDropdown.appendChild(opt);
                });
            }
        });

        // If user presses Enter in search input
        searchInput.addEventListener('keypress', (evt) => {
            if (evt.key === 'Enter') {
                searchButton.click();
            }
        });

        // Basic search button logic (searchKeywords in top-level collection)
        searchButton.addEventListener('click', async () => {
            const searchTerm = searchInput.value.trim().toLowerCase();
            if (!searchTerm) return;

            try {
                let allResults = [];

                // Collections that exist based on your Firebase indexes
                const existingCollections = [
                    'MBBS', 'MD', 'MS', 'General Surgery', 'Internal Medicine',
                    'Pediatrics', 'Ophthalmology', 'Dermatology', 'GP or Freelance'
                ];

                // Search in metrics collection first
                try {
                    const metricsSnapshot = await db.collection('metrics')
                        .where('searchKeywords', 'array-contains', searchTerm)
                        .get();
                    metricsSnapshot.forEach(doc => allResults.push(doc.data()));
                } catch (err) {
                    console.log('No searchKeywords field in metrics collection or no matches');
                }

                // Search across all collection groups
                for (const collectionName of existingCollections) {
                    try {
                        // Strategy 1: Search by searchKeywords array if it exists
                        try {
                            const keywordSnapshot = await db.collectionGroup(collectionName)
                                .where('searchKeywords', 'array-contains', searchTerm)
                                .get();
                            keywordSnapshot.forEach(doc => allResults.push(doc.data()));
                        } catch (keywordErr) {
                            console.log(`No searchKeywords field in ${collectionName} collection`);
                        }

                        // Strategy 2: Search by individual fields
                        const fieldQueries = [
                            db.collectionGroup(collectionName).where('state', '>=', searchTerm).where('state', '<=', searchTerm + '\uf8ff'),
                            db.collectionGroup(collectionName).where('district', '>=', searchTerm).where('district', '<=', searchTerm + '\uf8ff'),
                            db.collectionGroup(collectionName).where('workplace', '>=', searchTerm).where('workplace', '<=', searchTerm + '\uf8ff')
                        ];

                        for (const query of fieldQueries) {
                            try {
                                const snapshot = await query.get();
                                snapshot.forEach(doc => {
                                    const data = doc.data();
                                    // Avoid duplicates by checking if this document is already in results
                                    const isDuplicate = allResults.some(existing =>
                                        existing.state === data.state &&
                                        existing.district === data.district &&
                                        existing.workplace === data.workplace &&
                                        existing.degree === data.degree
                                    );
                                    if (!isDuplicate) {
                                        allResults.push(data);
                                    }
                                });
                            } catch (fieldErr) {
                                console.log(`Field search failed for ${collectionName}:`, fieldErr);
                            }
                        }
                    } catch (collectionErr) {
                        console.log(`Error searching collection ${collectionName}:`, collectionErr);
                    }
                }

                console.log(`Search for "${searchTerm}" found ${allResults.length} results`);
                updateStatistics(allResults);
                updateMap(allResults);

                if (allResults.length === 0) {
                    alert(`No results found for "${searchTerm}". Try searching for state names, districts, or workplace names.`);
                }

            } catch (err) {
                console.error('Error searching data:', err);
                alert('An error occurred while searching. Please try again later.');
            }
        });

        // Utility to apply AND filters for state/district/workplace
        function applyFilters(query, stateVal, distVal, workplaceVal) {
            // We'll only apply to that query if user has actually chosen them
            // (ex: empty or "All States" means no filter)
            if (stateVal && stateVal !== "All States") {
                query = query.where("state", "==", stateVal);
            }
            if (distVal && distVal !== "Select a District") {
                query = query.where("district", "==", distVal);
            }
            if (workplaceVal && workplaceVal !== "") {
                query = query.where("workplace", "==", workplaceVal);
            }
            return query;
        }

        // "Show" button for advanced dropdown logic
        showButton.addEventListener('click', async () => {
            const stateVal = stateDropdown.value;
            const districtVal = districtDropdown.value;
            const specialtyVal = specialtyDropdown.value;
            const degreeVal = degreeDropdown.value;
            const workplaceVal = workplaceDropdown.value;

            let finalData = [];

            try {
                // CASE 1: If NO degree chosen or it's empty => search ONLY top-level /metrics docs
                //         (with state/district/workplace filters).
                //         So the user wants to see docs from the top-level collection,
                //         ignoring subcollections (e.g. MBBS, MD, etc.).
                if (!degreeVal || degreeVal === "") {
                    let topQuery = db.collection("metrics");
                    topQuery = applyFilters(topQuery, stateVal, districtVal, workplaceVal);
                    const topSnap = await topQuery.get();
                    topSnap.forEach(doc => finalData.push(doc.data()));
                }
                // CASE 2: If the user picks "All degree", we want to query top-level again if needed
                //         plus *all subcollectionGroup* queries for each known degree.
                else if (degreeVal === "All degree") {
                    // 2A) top-level:
                    let topQ = db.collection("metrics");
                    topQ = applyFilters(topQ, stateVal, districtVal, workplaceVal);
                    const topSnap = await topQ.get();
                    topSnap.forEach(doc => finalData.push(doc.data()));

                    // 2B) For each known degree, do a collectionGroup query:
                    for (const deg of allDegrees) {
                        let subQ = db.collectionGroup(deg);
                        subQ = applyFilters(subQ, stateVal, districtVal, workplaceVal);
                        const snap = await subQ.get();
                        snap.forEach(d => finalData.push(d.data()));
                    }
                }
                // CASE 3: If user picks a specific degree (not All degree) => query just that subcollection
                else {
                    // 3A) Possibly also fetch top-level if you want to combine them
                    //     but you said you only want fields from subcollections if degree is chosen.
                    //     If you do *not* want top-level docs in that scenario, skip.
                    // (If you want them anyway, uncomment below):
                    /*
                    {
                        let topQ = db.collection("metrics");
                        topQ = applyFilters(topQ, stateVal, districtVal, workplaceVal);
                        const topSnap = await topQ.get();
                        topSnap.forEach(doc => finalData.push(doc.data()));
                    }
                    */

                    // 3B) Now fetch from the degree subcollection group:
                    let degQ = db.collectionGroup(degreeVal);
                    degQ = applyFilters(degQ, stateVal, districtVal, workplaceVal);
                    const degSnap = await degQ.get();
                    degSnap.forEach(doc => finalData.push(doc.data()));

                    // 3C) If user selected a specialty => that might be another sub-subcollection
                    //     but let's assume your naming is consistent. If you keep sub-subcollections
                    //     literally named after the specialty, we can do a second collectionGroup query:
                    if (specialtyVal && specialtyVal !== "Select a Degree First") {
                        let specQ = db.collectionGroup(specialtyVal);
                        specQ = applyFilters(specQ, stateVal, districtVal, workplaceVal);
                        const specSnap = await specQ.get();
                        specSnap.forEach(doc => finalData.push(doc.data()));
                    }
                }

                // Summarize & show on map
                updateStatistics(finalData);
                updateMap(finalData);

            } catch (err) {
                console.error("Error fetching data with dropdown filters:", err);
                alert('An error occurred while fetching subcollection data. Please try again later.');
            }
        });

        // Comments toggle
        if (toggleCommentsButton && commentsDiv) {
            toggleCommentsButton.addEventListener('click', () => {
                if (commentsDiv.style.display === 'none') {
                    commentsDiv.style.display = 'block';
                    toggleCommentsButton.textContent = 'Minimize';
                } else {
                    commentsDiv.style.display = 'none';
                    toggleCommentsButton.textContent = 'Expand';
                }
            });
        }

        // Comment submission
        if (submitCommentButton && commentBox && commentList) {
            submitCommentButton.addEventListener('click', () => {
                const commentText = commentBox.value.trim();
                if (commentText !== '') {
                    db.collection('comments').add({
                        text: commentText,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    })
                        .then(() => {
                            // Insert the new comment at the *top* of the list
                            const li = document.createElement('li');
                            li.textContent = commentText;
                            // Instead of appendChild(li), do insertBefore at top
                            commentList.insertBefore(li, commentList.firstChild);

                            commentBox.value = '';
                        })
                        .catch(error => {
                            console.error('Error adding comment:', error);
                            alert('An error occurred while adding your comment. Please try again later.');
                        });
                }
            });
        }

        // Fetch existing comments on load
        function fetchComments() {
            db.collection('comments')
                .orderBy('timestamp', 'desc')
                .get()
                .then((querySnapshot) => {
                    commentList.innerHTML = '';
                    querySnapshot.forEach((doc) => {
                        const comment = doc.data();
                        const li = document.createElement('li');
                        li.textContent = comment.text;
                        commentList.appendChild(li);
                    });
                })
                .catch((error) => {
                    console.error('Error fetching comments:', error);
                    alert('An error occurred while fetching comments. Please try again later.');
                });
        }
        fetchComments();
    });

    // Make debug function available globally
    window.debugMap = function() {
        console.log('=== MAP DEBUG INFO ===');
        const mapContainer = document.getElementById('india-map');
        console.log('Map container:', mapContainer);
        console.log('Container dimensions:', mapContainer ? `${mapContainer.offsetWidth}x${mapContainer.offsetHeight}` : 'N/A');
        console.log('Leaflet loaded:', typeof L !== 'undefined');
        console.log('Map instance:', window.map);
        console.log('Markers count:', window.markers ? window.markers.length : 'N/A');
        console.log('=== END DEBUG INFO ===');
    };

    // Debug function to check available collections
    window.debugCollections = async function() {
        console.log('=== FIRESTORE COLLECTIONS DEBUG ===');
        
        if (!window.db) {
            console.error('Firebase not initialized');
            return;
        }

        const collectionsToCheck = ['MD', 'MS', 'MBBS', 'Internal Medicine', 'General Surgery', 'Pediatrics','Ophthalmology','Dermatology', 'metrics'];
        
        for (const collection of collectionsToCheck) {
            try {
                console.log(`Checking collection: ${collection}`);
                
                // Try direct collection access
                const snapshot = await window.db.collection(collection).limit(1).get();
                console.log(`✅ ${collection}: ${snapshot.size} documents (showing first 1)`);
                
                if (snapshot.size > 0) {
                    snapshot.forEach(doc => {
                        console.log(`Sample document from ${collection}:`, doc.data());
                    });
                }
            } catch (error) {
                console.log(`❌ ${collection}: Error - ${error.message}`);
            }
        }
        
        console.log('=== END COLLECTIONS DEBUG ===');
    };

    // Function to fetch specific degree data for sidebar
    window.fetchDegreeData = async function(degree) {
        console.log(`Fetching data for degree: ${degree}`);
        
        if (!window.db) {
            console.error('Firebase not initialized');
            return;
        }

        try {
            let data = [];
            
            // Try multiple approaches to fetch data
            console.log(`Attempting to fetch from collection group: ${degree}`);
            
            try {
                // Method 1: Try collectionGroup query (requires indexes)
                const snapshot = await window.db.collectionGroup(degree).limit(50).get();
                snapshot.forEach(doc => {
                    const docData = doc.data();
                    if (docData) {
                        data.push(docData);
                    }
                });
                console.log(`CollectionGroup query found ${data.length} records`);
            } catch (indexError) {
                console.warn(`CollectionGroup query failed for ${degree}:`, indexError);
                
                // Method 2: Try direct collection query
                try {
                    const directSnapshot = await window.db.collection(degree).limit(50).get();
                    directSnapshot.forEach(doc => {
                        const docData = doc.data();
                        if (docData) {
                            data.push(docData);
                        }
                    });
                    console.log(`Direct collection query found ${data.length} records`);
                } catch (directError) {
                    console.warn(`Direct collection query failed for ${degree}:`, directError);
                    
                    // Method 3: Try searching in metrics collection
                    try {
                        const metricsSnapshot = await window.db.collection('metrics').where('degree', '==', degree).limit(50).get();
                        metricsSnapshot.forEach(doc => {
                            const docData = doc.data();
                            if (docData) {
                                data.push(docData);
                            }
                        });
                        console.log(`Metrics collection query found ${data.length} records`);
                    } catch (metricsError) {
                        console.warn(`Metrics collection query failed for ${degree}:`, metricsError);
                    }
                }
            }

            console.log(`Total found ${data.length} records for ${degree}`);
            
            // Update sidebar with the data
            if (data.length > 0) {
                updateStatistics(data);
                updateMap(data);
                
                // Show success message
                if (window.showToast) {
                    window.showToast(`Loaded ${data.length} ${degree} records`, 'success');
                }
            } else {
                // Show no data message
                if (window.showToast) {
                    window.showToast(`No data found for ${degree}. Check console for details.`, 'info');
                }
                
                // Clear sidebar
                updateStatistics([]);
            }
            
            return data;
            
        } catch (error) {
            console.error(`Error fetching ${degree} data:`, error);
            if (window.showToast) {
                window.showToast(`Error loading ${degree} data: ${error.message}`, 'error');
            }
        }
    };

})();

// Salary Calculator Data and Functions
const salaryData = {
    specialties: {
        'general-medicine': { base: 60000, multiplier: 1.0, name: 'General Medicine' },
        'surgery': { base: 80000, multiplier: 1.4, name: 'Surgery' },
        'pediatrics': { base: 65000, multiplier: 1.1, name: 'Pediatrics' },
        'ophthalmology': { base: 70000, multiplier: 1.2, name: 'Ophthalmology' },
        'dermatology': { base: 75000, multiplier: 1.3, name: 'Dermatology' },
        'gynecology': { base: 70000, multiplier: 1.2, name: 'Gynecology' },
        'orthopedics': { base: 85000, multiplier: 1.5, name: 'Orthopedics' },
        'cardiology': { base: 100000, multiplier: 1.8, name: 'Cardiology' },
        'neurology': { base: 95000, multiplier: 1.7, name: 'Neurology' },
        'dermatology': { base: 75000, multiplier: 1.3, name: 'Dermatology' },
        'psychiatry': { base: 70000, multiplier: 1.2, name: 'Psychiatry' },
        'radiology': { base: 90000, multiplier: 1.6, name: 'Radiology' },
        'anesthesiology': { base: 85000, multiplier: 1.5, name: 'Anesthesiology' },
        'emergency': { base: 75000, multiplier: 1.3, name: 'Emergency Medicine' }
    },
    experience: {
        '0-1': { multiplier: 0.8, name: '0-1 years' },
        '2-3': { multiplier: 1.0, name: '2-3 years' },
        '4-6': { multiplier: 1.3, name: '4-6 years' },
        '7-10': { multiplier: 1.6, name: '7-10 years' },
        '11-15': { multiplier: 2.0, name: '11-15 years' },
        '15+': { multiplier: 2.5, name: '15+ years' }
    },
    locations: {
        'mumbai': { multiplier: 1.4, cost: 'Very High', name: 'Mumbai' },
        'delhi': { multiplier: 1.3, cost: 'High', name: 'Delhi NCR' },
        'bangalore': { multiplier: 1.2, cost: 'High', name: 'Bangalore' },
        'chennai': { multiplier: 1.1, cost: 'Medium', name: 'Chennai' },
        'hyderabad': { multiplier: 1.0, cost: 'Medium', name: 'Hyderabad' },
        'pune': { multiplier: 1.1, cost: 'Medium', name: 'Pune' },
        'kolkata': { multiplier: 0.9, cost: 'Medium', name: 'Kolkata' },
        'ahmedabad': { multiplier: 0.9, cost: 'Medium', name: 'Ahmedabad' },
        'tier2': { multiplier: 0.7, cost: 'Low', name: 'Tier-2 Cities' },
        'tier3': { multiplier: 0.5, cost: 'Very Low', name: 'Tier-3 Cities' }
    },
    workplace: {
        'government': { multiplier: 0.7, name: 'Government Hospital' },
        'private': { multiplier: 1.0, name: 'Private Hospital' },
        'corporate': { multiplier: 1.3, name: 'Corporate Hospital' },
        'clinic': { multiplier: 0.8, name: 'Private Clinic' },
        'nursing-home': { multiplier: 0.6, name: 'Nursing Home' }
    }
};

// Location Comparison Data
const locationData = {
    'mumbai': {
        name: 'Mumbai',
        avgSalary: 120000,
        costOfLiving: 'Very High',
        qualityOfLife: 'Good',
        jobOpportunities: 'Excellent',
        healthcareInfrastructure: 'Excellent',
        score: 8.5
    },
    'delhi': {
        name: 'Delhi NCR',
        avgSalary: 110000,
        costOfLiving: 'High',
        qualityOfLife: 'Good',
        jobOpportunities: 'Excellent',
        healthcareInfrastructure: 'Excellent',
        score: 8.3
    },
    'bangalore': {
        name: 'Bangalore',
        avgSalary: 105000,
        costOfLiving: 'High',
        qualityOfLife: 'Very Good',
        jobOpportunities: 'Excellent',
        healthcareInfrastructure: 'Very Good',
        score: 8.8
    },
    'chennai': {
        name: 'Chennai',
        avgSalary: 95000,
        costOfLiving: 'Medium',
        qualityOfLife: 'Good',
        jobOpportunities: 'Very Good',
        healthcareInfrastructure: 'Very Good',
        score: 8.2
    },
    'hyderabad': {
        name: 'Hyderabad',
        avgSalary: 90000,
        costOfLiving: 'Medium',
        qualityOfLife: 'Very Good',
        jobOpportunities: 'Very Good',
        healthcareInfrastructure: 'Good',
        score: 8.0
    },
    'pune': {
        name: 'Pune',
        avgSalary: 85000,
        costOfLiving: 'Medium',
        qualityOfLife: 'Very Good',
        jobOpportunities: 'Good',
        healthcareInfrastructure: 'Good',
        score: 7.8
    },
    'kolkata': {
        name: 'Kolkata',
        avgSalary: 75000,
        costOfLiving: 'Medium',
        qualityOfLife: 'Good',
        jobOpportunities: 'Good',
        healthcareInfrastructure: 'Good',
        score: 7.5
    },
    'ahmedabad': {
        name: 'Ahmedabad',
        avgSalary: 80000,
        costOfLiving: 'Medium',
        qualityOfLife: 'Good',
        jobOpportunities: 'Good',
        healthcareInfrastructure: 'Good',
        score: 7.6
    },
    'jaipur': {
        name: 'Jaipur',
        avgSalary: 70000,
        costOfLiving: 'Low',
        qualityOfLife: 'Good',
        jobOpportunities: 'Fair',
        healthcareInfrastructure: 'Fair',
        score: 7.2
    },
    'lucknow': {
        name: 'Lucknow',
        avgSalary: 65000,
        costOfLiving: 'Low',
        qualityOfLife: 'Good',
        jobOpportunities: 'Fair',
        healthcareInfrastructure: 'Fair',
        score: 7.0
    }
};

// Salary Calculator Functions
function calculateSalary() {
    const specialty = document.getElementById('calc-specialty').value;
    const experience = document.getElementById('calc-experience').value;
    const location = document.getElementById('calc-location').value;
    const workplace = document.getElementById('calc-workplace').value;

    if (!specialty || !experience || !location || !workplace) {
        alert('Please fill in all fields to calculate salary');
        return;
    }

    const specialtyData = salaryData.specialties[specialty];
    const experienceData = salaryData.experience[experience];
    const locationData = salaryData.locations[location];
    const workplaceData = salaryData.workplace[workplace];

    // Calculate base salary
    const baseSalary = specialtyData.base * specialtyData.multiplier * experienceData.multiplier * locationData.multiplier * workplaceData.multiplier;

    // Calculate range (±20% for min/max)
    const minSalary = Math.round(baseSalary * 0.8);
    const maxSalary = Math.round(baseSalary * 1.2);
    const avgSalary = Math.round(baseSalary);

    // Display results
    document.getElementById('min-salary').textContent = formatCurrency(minSalary);
    document.getElementById('avg-salary').textContent = formatCurrency(avgSalary);
    document.getElementById('max-salary').textContent = formatCurrency(maxSalary);

    // Generate factors
    const factors = [
        `${specialtyData.name} specialty premium applied`,
        `${experienceData.name} experience level`,
        `${locationData.name} location adjustment`,
        `${workplaceData.name} workplace type`,
        `Cost of living: ${locationData.cost}`
    ];

    const factorsList = document.getElementById('salary-factors');
    factorsList.innerHTML = factors.map(factor => `<li>${factor}</li>`).join('');

    // Show result
    document.getElementById('salary-result').style.display = 'block';
    document.getElementById('salary-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Location Comparison Functions
function compareLocations() {
    const city1 = document.getElementById('compare-city1').value;
    const city2 = document.getElementById('compare-city2').value;

    if (!city1 || !city2) {
        alert('Please select both cities to compare');
        return;
    }

    if (city1 === city2) {
        alert('Please select different cities to compare');
        return;
    }

    const city1Data = locationData[city1];
    const city2Data = locationData[city2];

    // Update city names
    document.getElementById('city1-name').textContent = city1Data.name;
    document.getElementById('city2-name').textContent = city2Data.name;

    // Update city 1 data
    document.getElementById('city1-salary').textContent = formatCurrency(city1Data.avgSalary);
    document.getElementById('city1-cost').textContent = city1Data.costOfLiving;
    document.getElementById('city1-quality').textContent = city1Data.qualityOfLife;
    document.getElementById('city1-jobs').textContent = city1Data.jobOpportunities;
    document.getElementById('city1-healthcare').textContent = city1Data.healthcareInfrastructure;

    // Update city 2 data
    document.getElementById('city2-salary').textContent = formatCurrency(city2Data.avgSalary);
    document.getElementById('city2-cost').textContent = city2Data.costOfLiving;
    document.getElementById('city2-quality').textContent = city2Data.qualityOfLife;
    document.getElementById('city2-jobs').textContent = city2Data.jobOpportunities;
    document.getElementById('city2-healthcare').textContent = city2Data.healthcareInfrastructure;

    // Generate comparison insights
    const insights = generateComparisonInsights(city1Data, city2Data);
    document.getElementById('comparison-insights').innerHTML = insights;

    // Show result
    document.getElementById('comparison-result').style.display = 'block';
    document.getElementById('comparison-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function generateComparisonInsights(city1, city2) {
    let insights = [];

    // Salary comparison
    if (city1.avgSalary > city2.avgSalary) {
        const diff = ((city1.avgSalary - city2.avgSalary) / city2.avgSalary * 100).toFixed(1);
        insights.push(`💰 <strong>${city1.name}</strong> offers ${diff}% higher average salary than ${city2.name}`);
    } else if (city2.avgSalary > city1.avgSalary) {
        const diff = ((city2.avgSalary - city1.avgSalary) / city1.avgSalary * 100).toFixed(1);
        insights.push(`💰 <strong>${city2.name}</strong> offers ${diff}% higher average salary than ${city1.name}`);
    } else {
        insights.push(`💰 Both cities offer similar average salaries`);
    }

    // Overall score comparison
    if (city1.score > city2.score) {
        insights.push(`🏆 <strong>${city1.name}</strong> has a higher overall livability score (${city1.score}/10 vs ${city2.score}/10)`);
    } else if (city2.score > city1.score) {
        insights.push(`🏆 <strong>${city2.name}</strong> has a higher overall livability score (${city2.score}/10 vs ${city1.score}/10)`);
    }

    // Cost of living insights
    const costLevels = { 'Very Low': 1, 'Low': 2, 'Medium': 3, 'High': 4, 'Very High': 5 };
    if (costLevels[city1.costOfLiving] < costLevels[city2.costOfLiving]) {
        insights.push(`💸 <strong>${city1.name}</strong> has lower cost of living, making it more affordable`);
    } else if (costLevels[city2.costOfLiving] < costLevels[city1.costOfLiving]) {
        insights.push(`💸 <strong>${city2.name}</strong> has lower cost of living, making it more affordable`);
    }

    // Job opportunities
    if (city1.jobOpportunities === 'Excellent' && city2.jobOpportunities !== 'Excellent') {
        insights.push(`🎯 <strong>${city1.name}</strong> offers excellent job opportunities in healthcare`);
    } else if (city2.jobOpportunities === 'Excellent' && city1.jobOpportunities !== 'Excellent') {
        insights.push(`🎯 <strong>${city2.name}</strong> offers excellent job opportunities in healthcare`);
    }

    return insights.map(insight => `<p>${insight}</p>`).join('');
}

// Utility Functions
function formatCurrency(amount) {
    if (amount >= 100000) {
        return `₹${(amount / 100000).toFixed(1)}L`;
    } else if (amount >= 1000) {
        return `₹${(amount / 1000).toFixed(0)}K`;
    } else {
        return `₹${amount}`;
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Salary Calculator
    const calculateButton = document.getElementById('calculate-salary');
    if (calculateButton) {
        calculateButton.addEventListener('click', calculateSalary);
    }

    // Location Comparison
    const compareButton = document.getElementById('compare-locations');
    if (compareButton) {
        compareButton.addEventListener('click', compareLocations);
    }

    // Enter key support for forms
    const calcInputs = document.querySelectorAll('.calc-input');
    calcInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateSalary();
            }
        });
    });

    const compareInputs = document.querySelectorAll('.compare-input');
    compareInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                compareLocations();
            }
        });
    });
});