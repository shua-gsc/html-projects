// World countries data with flag URLs, accepted names, and regions
// Region codes: AF=Africa, AS=Asia, EU=Europe, NA=North America, SA=South America, OC=Oceania
// Multiple regions for transcontinental countries (e.g. Russia, Turkey)
const countries = [
    { name: "Afghanistan", code: "af", region: ["AS"], alternatives: [] },
    { name: "Albania", code: "al", region: ["EU"], alternatives: [] },
    { name: "Algeria", code: "dz", region: ["AF"], alternatives: [] },
    { name: "Andorra", code: "ad", region: ["EU"], alternatives: [] },
    { name: "Angola", code: "ao", region: ["AF"], alternatives: [] },
    { name: "Antigua & Barbuda", code: "ag", region: ["NA"], alternatives: [] },
    { name: "Argentina", code: "ar", region: ["SA"], alternatives: [] },
    { name: "Armenia", code: "am", region: ["AS"], alternatives: [] },
    { name: "Australia", code: "au", region: ["OC"], alternatives: [] },
    { name: "Austria", code: "at", region: ["EU"], alternatives: [] },
    { name: "Azerbaijan", code: "az", region: ["AS"], alternatives: [] },
    { name: "The Bahamas", code: "bs", region: ["NA"], alternatives: [] },
    { name: "Bahrain", code: "bh", region: ["AS"], alternatives: [] },
    { name: "Bangladesh", code: "bd", region: ["AS"], alternatives: [] },
    { name: "Barbados", code: "bb", region: ["NA"], alternatives: [] },
    { name: "Belarus", code: "by", region: ["EU"], alternatives: [] },
    { name: "Belgium", code: "be", region: ["EU"], alternatives: [] },
    { name: "Belize", code: "bz", region: ["NA"], alternatives: [] },
    { name: "Benin", code: "bj", region: ["AF"], alternatives: [] },
    { name: "Bhutan", code: "bt", region: ["AS"], alternatives: [] },
    { name: "Bolivia", code: "bo", region: ["SA"], alternatives: [] },
    { name: "Bosnia & Herzegovina", code: "ba", region: ["EU"], alternatives: [] },
    { name: "Botswana", code: "bw", region: ["AF"], alternatives: [] },
    { name: "Brazil", code: "br", region: ["SA"], alternatives: [] },
    { name: "Brunei", code: "bn", region: ["AS"], alternatives: [] },
    { name: "Bulgaria", code: "bg", region: ["EU"], alternatives: [] },
    { name: "Burkina Faso", code: "bf", region: ["AF"], alternatives: [] },
    { name: "Burundi", code: "bi", region: ["AF"], alternatives: [] },
    { name: "Cambodia", code: "kh", region: ["AS"], alternatives: [] },
    { name: "Cameroon", code: "cm", region: ["AF"], alternatives: [] },
    { name: "Canada", code: "ca", region: ["NA"], alternatives: [] },
    { name: "Cabo Verde", code: "cv", region: ["AF"], alternatives: ["cape verde"] },
    { name: "Central African Republic", code: "cf", region: ["AF"], alternatives: ["car"] },
    { name: "Chad", code: "td", region: ["AF"], alternatives: [] },
    { name: "Chile", code: "cl", region: ["SA"], alternatives: [] },
    { name: "China", code: "cn", region: ["AS"], alternatives: [] },
    { name: "Colombia", code: "co", region: ["SA"], alternatives: [] },
    { name: "Comoros", code: "km", region: ["AF"], alternatives: [] },
    { name: "Republic of the Congo", code: "cg", region: ["AF"], alternatives: ["roc", "congo republic", "congo-brazzaville"] },
    { name: "Costa Rica", code: "cr", region: ["NA"], alternatives: [] },
    { name: "Croatia", code: "hr", region: ["EU"], alternatives: [] },
    { name: "Cuba", code: "cu", region: ["NA"], alternatives: [] },
    { name: "Cyprus", code: "cy", region: ["EU"], alternatives: [] },
    { name: "Czech Republic", code: "cz", region: ["EU"], alternatives: ["czechia"] },
    { name: "Democratic Republic of the Congo", code: "cd", region: ["AF"], alternatives: ["drc", "dr congo", "congo-kinshasha"] },
    { name: "Denmark", code: "dk", region: ["EU"], alternatives: [] },
    { name: "Djibouti", code: "dj", region: ["AF"], alternatives: [] },
    { name: "Dominica", code: "dm", region: ["NA"], alternatives: [] },
    { name: "Dominican Republic", code: "do", region: ["NA"], alternatives: [] },
    { name: "Ecuador", code: "ec", region: ["SA"], alternatives: [] },
    { name: "Egypt", code: "eg", region: ["AF"], alternatives: [] },
    { name: "El Salvador", code: "sv", region: ["NA"], alternatives: ["salvador"] },
    { name: "Equatorial Guinea", code: "gq", region: ["AF"], alternatives: [] },
    { name: "Eritrea", code: "er", region: ["AF"], alternatives: [] },
    { name: "Estonia", code: "ee", region: ["EU"], alternatives: [] },
    { name: "Eswatini", code: "sz", region: ["AF"], alternatives: ["swaziland"] },
    { name: "Ethiopia", code: "et", region: ["AF"], alternatives: [] },
    { name: "Fiji", code: "fj", region: ["OC"], alternatives: [] },
    { name: "Finland", code: "fi", region: ["EU"], alternatives: [] },
    { name: "France", code: "fr", region: ["EU"], alternatives: [] },
    { name: "Gabon", code: "ga", region: ["AF"], alternatives: [] },
    { name: "The Gambia", code: "gm", region: ["AF"], alternatives: [] },
    { name: "Georgia", code: "ge", region: ["AS"], alternatives: [] },
    { name: "Germany", code: "de", region: ["EU"], alternatives: [] },
    { name: "Ghana", code: "gh", region: ["AF"], alternatives: [] },
    { name: "Greece", code: "gr", region: ["EU"], alternatives: [] },
    { name: "Grenada", code: "gd", region: ["NA"], alternatives: [] },
    { name: "Guatemala", code: "gt", region: ["NA"], alternatives: [] },
    { name: "Guinea", code: "gn", region: ["AF"], alternatives: [] },
    { name: "Guinea-Bissau", code: "gw", region: ["AF"], alternatives: [] },
    { name: "Guyana", code: "gy", region: ["SA"], alternatives: [] },
    { name: "Haiti", code: "ht", region: ["NA"], alternatives: [] },
    { name: "Honduras", code: "hn", region: ["NA"], alternatives: [] },
    { name: "Hungary", code: "hu", region: ["EU"], alternatives: [] },
    { name: "Iceland", code: "is", region: ["EU"], alternatives: [] },
    { name: "India", code: "in", region: ["AS"], alternatives: [] },
    { name: "Indonesia", code: "id", region: ["AS"], alternatives: [] },
    { name: "Iran", code: "ir", region: ["AS"], alternatives: [] },
    { name: "Iraq", code: "iq", region: ["AS"], alternatives: [] },
    { name: "Ireland", code: "ie", region: ["EU"], alternatives: [] },
    { name: "Israel", code: "il", region: ["AS"], alternatives: [] },
    { name: "Italy", code: "it", region: ["EU"], alternatives: [] },
    { name: "Côte d'Ivoire", code: "ci", region: ["AF"], alternatives: ["cote d'ivoire", "ivory coast"] },
    { name: "Jamaica", code: "jm", region: ["NA"], alternatives: [] },
    { name: "Japan", code: "jp", region: ["AS"], alternatives: [] },
    { name: "Jordan", code: "jo", region: ["AS"], alternatives: [] },
    { name: "Kazakhstan", code: "kz", region: ["AS"], alternatives: [] },
    { name: "Kenya", code: "ke", region: ["AF"], alternatives: [] },
    { name: "Kiribati", code: "ki", region: ["OC"], alternatives: [] },
    { name: "Kuwait", code: "kw", region: ["AS"], alternatives: [] },
    { name: "Kyrgyzstan", code: "kg", region: ["AS"], alternatives: [] },
    { name: "Laos", code: "la", region: ["AS"], alternatives: [] },
    { name: "Latvia", code: "lv", region: ["EU"], alternatives: [] },
    { name: "Lebanon", code: "lb", region: ["AS"], alternatives: [] },
    { name: "Lesotho", code: "ls", region: ["AF"], alternatives: [] },
    { name: "Liberia", code: "lr", region: ["AF"], alternatives: [] },
    { name: "Libya", code: "ly", region: ["AF"], alternatives: [] },
    { name: "Liechtenstein", code: "li", region: ["EU"], alternatives: [] },
    { name: "Lithuania", code: "lt", region: ["EU"], alternatives: [] },
    { name: "Luxembourg", code: "lu", region: ["EU"], alternatives: [] },
    { name: "Madagascar", code: "mg", region: ["AF"], alternatives: [] },
    { name: "Malawi", code: "mw", region: ["AF"], alternatives: [] },
    { name: "Malaysia", code: "my", region: ["AS"], alternatives: [] },
    { name: "Maldives", code: "mv", region: ["AS"], alternatives: [] },
    { name: "Mali", code: "ml", region: ["AF"], alternatives: [] },
    { name: "Malta", code: "mt", region: ["EU"], alternatives: [] },
    { name: "Marshall Islands", code: "mh", region: ["OC"], alternatives: [] },
    { name: "Mauritania", code: "mr", region: ["AF"], alternatives: [] },
    { name: "Mauritius", code: "mu", region: ["AF"], alternatives: [] },
    { name: "Mexico", code: "mx", region: ["NA"], alternatives: [] },
    { name: "Micronesia", code: "fm", region: ["OC"], alternatives: [] },
    { name: "Moldova", code: "md", region: ["EU"], alternatives: [] },
    { name: "Monaco", code: "mc", region: ["EU"], alternatives: [] },
    { name: "Mongolia", code: "mn", region: ["AS"], alternatives: [] },
    { name: "Montenegro", code: "me", region: ["EU"], alternatives: [] },
    { name: "Morocco", code: "ma", region: ["AF"], alternatives: [] },
    { name: "Mozambique", code: "mz", region: ["AF"], alternatives: [] },
    { name: "Myanmar", code: "mm", region: ["AS"], alternatives: ["burma"] },
    { name: "Namibia", code: "na", region: ["AF"], alternatives: [] },
    { name: "Nauru", code: "nr", region: ["OC"], alternatives: [] },
    { name: "Nepal", code: "np", region: ["AS"], alternatives: [] },
    { name: "Netherlands", code: "nl", region: ["EU"], alternatives: [] },
    { name: "New Zealand", code: "nz", region: ["OC"], alternatives: [] },
    { name: "Nicaragua", code: "ni", region: ["NA"], alternatives: [] },
    { name: "Niger", code: "ne", region: ["AF"], alternatives: [] },
    { name: "Nigeria", code: "ng", region: ["AF"], alternatives: [] },
    { name: "North Korea", code: "kp", region: ["AS"], alternatives: [] },
    { name: "North Macedonia", code: "mk", region: ["EU"], alternatives: ["macedonia"] },
    { name: "Norway", code: "no", region: ["EU"], alternatives: [] },
    { name: "Oman", code: "om", region: ["AS"], alternatives: [] },
    { name: "Pakistan", code: "pk", region: ["AS"], alternatives: [] },
    { name: "Palau", code: "pw", region: ["OC"], alternatives: [] },
    { name: "Panama", code: "pa", region: ["NA"], alternatives: [] },
    { name: "Papua New Guinea", code: "pg", region: ["OC"], alternatives: [] },
    { name: "Paraguay", code: "py", region: ["SA"], alternatives: [] },
    { name: "Peru", code: "pe", region: ["SA"], alternatives: [] },
    { name: "Philippines", code: "ph", region: ["AS"], alternatives: [] },
    { name: "Poland", code: "pl", region: ["EU"], alternatives: [] },
    { name: "Portugal", code: "pt", region: ["EU"], alternatives: [] },
    { name: "Qatar", code: "qa", region: ["AS"], alternatives: [] },
    { name: "Romania", code: "ro", region: ["EU"], alternatives: [] },
    { name: "Russia", code: "ru", region: ["EU", "AS"], alternatives: [] },
    { name: "Rwanda", code: "rw", region: ["AF"], alternatives: [] },
    { name: "Saint Kitts & Nevis", code: "kn", region: ["NA"], alternatives: [] },
    { name: "Saint Lucia", code: "lc", region: ["NA"], alternatives: [] },
    { name: "Saint Vincent & the Grenadines", code: "vc", region: ["NA"], alternatives: [] },
    { name: "Samoa", code: "ws", region: ["OC"], alternatives: [] },
    { name: "San Marino", code: "sm", region: ["EU"], alternatives: [] },
    { name: "Sao Tome & Principe", code: "st", region: ["AF"], alternatives: [] },
    { name: "Saudi Arabia", code: "sa", region: ["AS"], alternatives: [] },
    { name: "Senegal", code: "sn", region: ["AF"], alternatives: [] },
    { name: "Serbia", code: "rs", region: ["EU"], alternatives: [] },
    { name: "Seychelles", code: "sc", region: ["AF"], alternatives: [] },
    { name: "Sierra Leone", code: "sl", region: ["AF"], alternatives: [] },
    { name: "Singapore", code: "sg", region: ["AS"], alternatives: [] },
    { name: "Slovakia", code: "sk", region: ["EU"], alternatives: [] },
    { name: "Slovenia", code: "si", region: ["EU"], alternatives: [] },
    { name: "Solomon Islands", code: "sb", region: ["OC"], alternatives: [] },
    { name: "Somalia", code: "so", region: ["AF"], alternatives: [] },
    { name: "South Africa", code: "za", region: ["AF"], alternatives: [] },
    { name: "South Korea", code: "kr", region: ["AS"], alternatives: [] },
    { name: "South Sudan", code: "ss", region: ["AF"], alternatives: [] },
    { name: "Spain", code: "es", region: ["EU"], alternatives: [] },
    { name: "Sri Lanka", code: "lk", region: ["AS"], alternatives: [] },
    { name: "Sudan", code: "sd", region: ["AF"], alternatives: [] },
    { name: "Suriname", code: "sr", region: ["SA"], alternatives: [] },
    { name: "Sweden", code: "se", region: ["EU"], alternatives: [] },
    { name: "Switzerland", code: "ch", region: ["EU"], alternatives: [] },
    { name: "Syria", code: "sy", region: ["AS"], alternatives: [] },
    { name: "Taiwan", code: "tw", region: ["AS"], alternatives: [] },
    { name: "Tajikistan", code: "tj", region: ["AS"], alternatives: [] },
    { name: "Tanzania", code: "tz", region: ["AF"], alternatives: [] },
    { name: "Thailand", code: "th", region: ["AS"], alternatives: [] },
    { name: "Timor-Leste", code: "tl", region: ["AS"], alternatives: ["east timor"] },
    { name: "Togo", code: "tg", region: ["AF"], alternatives: [] },
    { name: "Tonga", code: "to", region: ["OC"], alternatives: [] },
    { name: "Trinidad & Tobago", code: "tt", region: ["NA"], alternatives: [] },
    { name: "Tunisia", code: "tn", region: ["AF"], alternatives: [] },
    { name: "Turkey", code: "tr", region: ["EU", "AS"], alternatives: [] },
    { name: "Turkmenistan", code: "tm", region: ["AS"], alternatives: [] },
    { name: "Tuvalu", code: "tv", region: ["OC"], alternatives: [] },
    { name: "Uganda", code: "ug", region: ["AF"], alternatives: [] },
    { name: "Ukraine", code: "ua", region: ["EU"], alternatives: [] },
    { name: "United Arab Emirates", code: "ae", region: ["AS"], alternatives: ["uae"] },
    { name: "United Kingdom", code: "gb", region: ["EU"], alternatives: ["uk", "britain"] },
    { name: "United States", code: "us", region: ["NA"], alternatives: ["usa", "america"] },
    { name: "Uruguay", code: "uy", region: ["SA"], alternatives: [] },
    { name: "Uzbekistan", code: "uz", region: ["AS"], alternatives: [] },
    { name: "Vanuatu", code: "vu", region: ["OC"], alternatives: [] },
    { name: "Vatican City", code: "va", region: ["EU"], alternatives: ["vatican"] },
    { name: "Venezuela", code: "ve", region: ["SA"], alternatives: [] },
    { name: "Vietnam", code: "vn", region: ["AS"], alternatives: [] },
    { name: "Yemen", code: "ye", region: ["AS"], alternatives: [] },
    { name: "Zambia", code: "zm", region: ["AF"], alternatives: [] },
    { name: "Zimbabwe", code: "zw", region: ["AF"], alternatives: [] },
    { name: "Kosovo", code: "xk", region: ["EU"], alternatives: [] },
    { name: "England", code: "gb-eng", region: ["EU"], alternatives: [] },
    { name: "Scotland", code: "gb-sct", region: ["EU"], alternatives: [] },
    { name: "Wales", code: "gb-wls", region: ["EU"], alternatives: [] },
    { name: "Northern Ireland", code: "gb-nir", region: ["EU"], alternatives: [] },
    { name: "Palestine", code: "ps", region: ["AS"], alternatives: [] }
];

class FlagQuiz {
    constructor(category = 'all', customRegions = null) {
        this.allCountries = [...countries];
        this.preprocessCountries(); // Add special case alternatives upfront
        this.category = category;
        this.customRegions = customRegions;
        this.countries = this.filterCountriesByCategory(category, customRegions);
        this.currentCountryIndex = 0;
        this.score = 0;
        this.guessedCountries = new Set();
        this.shuffledCountries = [];
        
        this.initializeElements();
        this.setupEventListeners();
        this.startNewQuiz();
    }

    // Filter countries by category
    filterCountriesByCategory(category, customRegions = null) {
        if (category === 'all') {
            return [...this.allCountries];
        }
        
        // Handle custom multi-region quiz
        if (category === 'custom' && customRegions && customRegions.length > 0) {
            return this.allCountries.filter(country => 
                country.region && country.region.some(region => customRegions.includes(region))
            );
        }
        
        const regionCode = this.getCategoryRegionCode(category);
        // Filter countries that have the region code in their region array
        return this.allCountries.filter(country => 
            country.region && country.region.includes(regionCode)
        );
    }

    // Convert category slug to region code
    getCategoryRegionCode(category) {
        const categoryMap = {
            'africa': 'AF',
            'asia': 'AS',
            'europe': 'EU',
            'north-america': 'NA',
            'south-america': 'SA',
            'oceania': 'OC'
        };
        return categoryMap[category] || 'AF';
    }

    // Pre-process all countries once on load - just store normalized versions
    preprocessCountries() {
        this.allCountries.forEach(country => {
            // Store the normalized version of the country name for fast comparison
            country.normalizedName = this.normalizeForComparison(country.name);
            
            // Also normalize existing alternatives
            country.normalizedAlternatives = country.alternatives.map(alt => 
                this.normalizeForComparison(alt)
            );
        });
    }

    // Normalize a name to a standard format for comparison
    normalizeForComparison(name) {
        return name.toLowerCase()
                   .replace(/\bthe\b/g, '')         // remove "the" anywhere in the name
                   .replace(/saint/g, 'st')         // saint → st
                   .replace(/st\./g, 'st')          // st. → st  
                   .replace(/\s+and\s+/g, ' & ')    // and → &
                   .replace(/-/g, ' ')              // replace dashes with spaces
                   .replace(/'/g, '')               // remove apostrophes
                   .replace(/\s+/g, ' ')            // normalize whitespace
                   .trim();
    }

    initializeElements() {
        this.flagImage = document.getElementById('flag-image');
        this.countryInput = document.getElementById('country-input');
        this.feedback = document.getElementById('feedback');
        this.progressDisplay = document.getElementById('progress');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.completionScreen = document.getElementById('completion-screen');
        this.restartBtn = document.getElementById('restart-btn');
        this.finalScore = document.getElementById('final-score');
    }

    setupEventListeners() {
        this.countryInput.addEventListener('input', (e) => this.handleInput(e));

        this.prevBtn.addEventListener('click', () => this.navigateFlag(-1));
        this.nextBtn.addEventListener('click', () => this.navigateFlag(1));
        this.restartBtn.addEventListener('click', () => this.restartQuiz());

        // Focus on input when page loads
        setTimeout(() => this.countryInput.focus(), 100);
    }

    startNewQuiz() {
        // Shuffle the countries array 
        this.shuffledCountries = [...this.countries].sort(() => Math.random() - 0.5);
        this.currentCountryIndex = 0;
        this.score = 0;
        this.guessedCountries.clear();
        
        this.showCurrentFlag();
        this.updateDisplay();
        this.updateNavigationButtons();
    }

    showCurrentFlag() {
        const unguessedCountries = this.getUnguessedCountries();
        if (unguessedCountries.length === 0) {
            this.showCompletionScreen();
            return;
        }

        const currentCountry = unguessedCountries[this.currentCountryIndex];
        this.flagImage.src = `https://flagcdn.com/w1160/${currentCountry.code}.png`;
        this.flagImage.alt = `Flag of ${currentCountry.name}`;
        
        // Clear input and feedback
        this.countryInput.value = '';
        this.clearFeedback();
        this.countryInput.focus();
    }

    getUnguessedCountries() {
        return this.shuffledCountries.filter(country => 
            !this.guessedCountries.has(country.code)
        );
    }

    handleInput(e) {
        // Clear feedback when user starts typing
        this.clearFeedback();
        
        // Check if the current input matches the correct answer
        this.checkAnswerRealtime();
    }

    checkAnswerRealtime() {
        const userInput = this.countryInput.value.trim();
        if (!userInput) return;

        // Normalize user input once
        const normalizedInput = this.normalizeForComparison(userInput);

        const unguessedCountries = this.getUnguessedCountries();
        const currentCountry = unguessedCountries[this.currentCountryIndex];
        
        // Simple comparison using pre-normalized values
        if (currentCountry.normalizedName === normalizedInput) {
            this.handleCorrectAnswer(currentCountry);
            return;
        }
        
        // Check normalized alternatives
        const alternativeMatch = currentCountry.normalizedAlternatives.some(alt => 
            alt === normalizedInput
        );

        if (alternativeMatch) {
            this.handleCorrectAnswer(currentCountry);
        }
    }

    handleCorrectAnswer(country) {
        this.score++;
        this.guessedCountries.add(country.code);
        
        this.updateDisplay();
        
        // Immediately advance to next flag
        this.navigateToNextUnguessed();
    }

    navigateFlag(direction) {
        const unguessedCountries = this.getUnguessedCountries();
        if (unguessedCountries.length === 0) {
            this.showCompletionScreen();
            return;
        }

        this.currentCountryIndex += direction;
        
        if (this.currentCountryIndex < 0) {
            this.currentCountryIndex = unguessedCountries.length - 1;
        } else if (this.currentCountryIndex >= unguessedCountries.length) {
            this.currentCountryIndex = 0;
        }
        
        this.showCurrentFlag();
        this.updateNavigationButtons();
    }

    navigateToNextUnguessed() {
        const unguessedCountries = this.getUnguessedCountries();
        if (unguessedCountries.length === 0) {
            this.showCompletionScreen();
            return;
        }

        // Stay at the same index, but since we removed a country, we'll see the next one
        if (this.currentCountryIndex >= unguessedCountries.length) {
            this.currentCountryIndex = 0;
        }
        
        this.showCurrentFlag();
    }

    restartQuiz() {
        this.completionScreen.style.display = 'none';
        document.querySelector('.quiz-container').style.display = 'block';
        this.startNewQuiz();
    }

    skipFlag() {
        const unguessedCountries = this.getUnguessedCountries();
        if (unguessedCountries.length === 0) {
            this.showCompletionScreen();
            return;
        }

        // Stay at the same index, but since we removed a country, we'll see the next one
        if (this.currentCountryIndex >= unguessedCountries.length) {
            this.currentCountryIndex = 0;
        }
        
        this.showCurrentFlag();
    }

    updateNavigationButtons() {
        const unguessedCountries = this.getUnguessedCountries();
        this.prevBtn.disabled = unguessedCountries.length <= 1;
        this.nextBtn.disabled = unguessedCountries.length <= 1;
    }

    updateDisplay() {
        this.progressDisplay.textContent = `${this.score} / ${this.countries.length}`;
    }

    clearFeedback() {
        this.feedback.textContent = '';
        this.feedback.className = 'feedback';
    }

    showCompletionScreen() {
        const finalScoreElement = document.getElementById('final-score');
        const completionMessageElement = document.getElementById('completion-message');
        const completionDetailsElement = document.getElementById('completion-details');
        
        finalScoreElement.textContent = this.countries.length;
        
        // Show different messages based on quiz type
        if (this.category === 'custom' && this.customRegions) {
            const regionNames = {
                'AF': 'Africa',
                'AS': 'Asia', 
                'EU': 'Europe',
                'NA': 'North America',
                'SA': 'South America',
                'OC': 'Oceania'
            };
            
            const regionList = this.customRegions.map(code => regionNames[code] || code);
            let regionsText;
            
            if (regionList.length === 1) {
                regionsText = regionList[0];
            } else if (regionList.length === 2) {
                regionsText = regionList.join(' and ');
            } else {
                regionsText = regionList.slice(0, -1).join(', ') + ', and ' + regionList.slice(-1);
            }
            
            completionMessageElement.innerHTML = `Congratulations! You've correctly identified all <span id="final-score">${this.countries.length}</span> flags!`;
            completionDetailsElement.textContent = `Custom quiz: ${regionsText}`;
            completionDetailsElement.style.display = 'block';
        } else {
            completionMessageElement.innerHTML = `You've correctly identified all <span id="final-score">${this.countries.length}</span> flags!`;
            completionDetailsElement.style.display = 'none';
        }
        
        this.completionScreen.style.display = 'block';
        document.querySelector('.quiz-container').style.display = 'none';
    }
}

// Category Selection and Menu Management
class QuizManager {
    constructor() {
        this.currentQuiz = null;
        this.initializeCategoryCounts();
        this.setupMenuListeners();
    }

    // Calculate and display category counts
    initializeCategoryCounts() {
        const counts = {
            all: countries.length,
            africa: countries.filter(c => c.region && c.region.includes('AF')).length,
            asia: countries.filter(c => c.region && c.region.includes('AS')).length,
            europe: countries.filter(c => c.region && c.region.includes('EU')).length,
            'north-america': countries.filter(c => c.region && c.region.includes('NA')).length,
            'south-america': countries.filter(c => c.region && c.region.includes('SA')).length,
            oceania: countries.filter(c => c.region && c.region.includes('OC')).length
        };

        // Update count displays for single categories
        Object.entries(counts).forEach(([category, count]) => {
            const countElement = document.getElementById(`count-${category}`);
            if (countElement) {
                countElement.textContent = count;
            }
        });

        // Update multi-region counts
        const multiCounts = {
            'af': counts.africa,
            'as': counts.asia,
            'eu': counts.europe,
            'na': counts['north-america'],
            'sa': counts['south-america'],
            'oc': counts.oceania
        };

        Object.entries(multiCounts).forEach(([region, count]) => {
            const countElement = document.getElementById(`multi-count-${region}`);
            if (countElement) {
                countElement.textContent = count;
            }
        });

        this.setupMultiRegionListeners();
    }

    // Setup menu event listeners
    setupMenuListeners() {
        // Category selection buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.startQuiz(category);
            });
        });

        // Back to menu button
        document.getElementById('back-to-menu').addEventListener('click', () => {
            this.showMenu();
        });

        // Menu button in completion screen
        document.getElementById('menu-btn').addEventListener('click', () => {
            this.showMenu();
        });
    }

    // Setup multi-region selection listeners
    setupMultiRegionListeners() {
        // Checkbox change listeners
        const checkboxes = document.querySelectorAll('.region-checkbox input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateMultiRegionCount();
                this.updateCustomQuizButton();
            });
        });

        // Select all button
        document.getElementById('select-all-regions').addEventListener('click', () => {
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
            this.updateMultiRegionCount();
            this.updateCustomQuizButton();
        });

        // Clear all button
        document.getElementById('clear-all-regions').addEventListener('click', () => {
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            this.updateMultiRegionCount();
            this.updateCustomQuizButton();
        });

        // Start custom quiz button
        document.getElementById('start-custom-quiz').addEventListener('click', () => {
            this.startMultiRegionQuiz();
        });
        
        // Keyboard shortcuts for region selection
        document.addEventListener('keydown', (e) => {
            // Only apply shortcuts when on the menu screen
            if (document.getElementById('category-selection').style.display !== 'none') {
                this.handleMenuKeyboard(e);
            }
        });
    }
    
    // Handle keyboard shortcuts for menu navigation
    handleMenuKeyboard(e) {
        const key = e.key.toLowerCase();
        
        // Number keys 1-6 for regions
        const regionKeys = {
            '1': 'region-af',
            '2': 'region-as', 
            '3': 'region-eu',
            '4': 'region-na',
            '5': 'region-sa',
            '6': 'region-oc'
        };
        
        if (regionKeys[key]) {
            e.preventDefault();
            const checkbox = document.getElementById(regionKeys[key]);
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                this.updateMultiRegionCount();
                this.updateCustomQuizButton();
            }
        }
        
        // 'a' for select all, 'c' for clear all
        if (key === 'a' && e.ctrlKey) {
            e.preventDefault();
            document.getElementById('select-all-regions').click();
        } else if (key === 'c' && e.ctrlKey) {
            e.preventDefault();
            document.getElementById('clear-all-regions').click();
        }
    }

    // Update the count of selected countries
    updateMultiRegionCount() {
        const selectedRegions = this.getSelectedRegions();
        const selectedCountries = this.getCountriesForRegions(selectedRegions);
        
        const countElement = document.getElementById('multi-selected-count');
        countElement.textContent = selectedCountries.length;
    }

    // Get currently selected region codes
    getSelectedRegions() {
        const checkboxes = document.querySelectorAll('.region-checkbox input[type="checkbox"]:checked');
        return Array.from(checkboxes).map(cb => cb.value);
    }

    // Get countries that belong to any of the selected regions
    getCountriesForRegions(regionCodes) {
        if (regionCodes.length === 0) return [];
        
        return countries.filter(country => 
            country.region && country.region.some(region => regionCodes.includes(region))
        );
    }

    // Update custom quiz button state
    updateCustomQuizButton() {
        const selectedRegions = this.getSelectedRegions();
        const button = document.getElementById('start-custom-quiz');
        
        if (selectedRegions.length === 0) {
            button.disabled = true;
            button.textContent = 'Start Custom Quiz';
        } else {
            button.disabled = false;
            const selectedCountries = this.getCountriesForRegions(selectedRegions);
            button.textContent = `Start Quiz (${selectedCountries.length} countries)`;
        }
    }

    // Start a quiz with the selected category
    startQuiz(category) {
        // Hide menu, show quiz
        document.getElementById('category-selection').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        
        // Update quiz title
        const titles = {
            'all': 'All Countries',
            'africa': 'Africa',
            'asia': 'Asia',
            'europe': 'Europe',
            'north-america': 'North America',
            'south-america': 'South America',
            'oceania': 'Oceania'
        };
        document.getElementById('quiz-title').textContent = titles[category] || 'Quiz';
        
        // Start the quiz
        this.currentQuiz = new FlagQuiz(category);
    }

    // Show the category selection menu
    showMenu() {
        document.getElementById('category-selection').style.display = 'block';
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('completion-screen').style.display = 'none';
        
        // Clean up current quiz
        if (this.currentQuiz) {
            this.currentQuiz = null;
        }
    }

    // Start a multi-region quiz
    startMultiRegionQuiz() {
        const selectedRegions = this.getSelectedRegions();
        if (selectedRegions.length === 0) return;

        // Get countries for verification
        const selectedCountries = this.getCountriesForRegions(selectedRegions);

        // Hide menu, show quiz
        document.getElementById('category-selection').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        
        // Create custom title
        const regionNames = {
            'AF': 'Africa',
            'AS': 'Asia', 
            'EU': 'Europe',
            'NA': 'North America',
            'SA': 'South America',
            'OC': 'Oceania'
        };
        
        const titleParts = selectedRegions.map(code => regionNames[code]);
        let title;
        if (titleParts.length === 1) {
            title = titleParts[0];
        } else if (titleParts.length === 2) {
            title = titleParts.join(' + ');
        } else if (titleParts.length <= 4) {
            title = titleParts.slice(0, -1).join(', ') + ' + ' + titleParts.slice(-1);
        } else {
            title = `${titleParts.length} Regions`;
        }
        
        document.getElementById('quiz-title').textContent = title;
        
        // Start the quiz with custom regions
        this.currentQuiz = new FlagQuiz('custom', selectedRegions);
    }
}

// Initialize the quiz manager when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizManager();
});
