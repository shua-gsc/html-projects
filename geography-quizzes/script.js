// World countries data with flag URLs and accepted names
// NOTE: Useful Reference: https://unterm.un.org/unterm2/en/country
const countries = [
    { name: "Afghanistan", code: "af", alternatives: [] },
    { name: "Albania", code: "al", alternatives: [] },
    { name: "Algeria", code: "dz", alternatives: [] },
    { name: "Andorra", code: "ad", alternatives: [] },
    { name: "Angola", code: "ao", alternatives: [] },
    { name: "Antigua & Barbuda", code: "ag", alternatives: [] },
    { name: "Argentina", code: "ar", alternatives: [] },
    { name: "Armenia", code: "am", alternatives: [] },
    { name: "Australia", code: "au", alternatives: [] },
    { name: "Austria", code: "at", alternatives: [] },
    { name: "Azerbaijan", code: "az", alternatives: [] },
    { name: "The Bahamas", code: "bs", alternatives: ["bahamas"] },
    { name: "Bahrain", code: "bh", alternatives: [] },
    { name: "Bangladesh", code: "bd", alternatives: [] },
    { name: "Barbados", code: "bb", alternatives: [] },
    { name: "Belarus", code: "by", alternatives: [] },
    { name: "Belgium", code: "be", alternatives: [] },
    { name: "Belize", code: "bz", alternatives: [] },
    { name: "Benin", code: "bj", alternatives: [] },
    { name: "Bhutan", code: "bt", alternatives: [] },
    { name: "Bolivia", code: "bo", alternatives: [] },
    { name: "Bosnia & Herzegovina", code: "ba", alternatives: [] },
    { name: "Botswana", code: "bw", alternatives: [] },
    { name: "Brazil", code: "br", alternatives: [] },
    { name: "Brunei", code: "bn", alternatives: [] },
    { name: "Bulgaria", code: "bg", alternatives: [] },
    { name: "Burkina Faso", code: "bf", alternatives: [] },
    { name: "Burundi", code: "bi", alternatives: [] },
    { name: "Cambodia", code: "kh", alternatives: [] },
    { name: "Cameroon", code: "cm", alternatives: [] },
    { name: "Canada", code: "ca", alternatives: [] },
    { name: "Cabo Verde", code: "cv", alternatives: ["cape verde"] },
    { name: "Central African Republic", code: "cf", alternatives: ["car"] },
    { name: "Chad", code: "td", alternatives: [] },
    { name: "Chile", code: "cl", alternatives: [] },
    { name: "China", code: "cn", alternatives: [] },
    { name: "Colombia", code: "co", alternatives: [] },
    { name: "Comoros", code: "km", alternatives: [] },
    { name: "Republic of the Congo", code: "cg", alternatives: ["roc", "congo republic", "congo-brazzaville"] },
    { name: "Costa Rica", code: "cr", alternatives: [] },
    { name: "Croatia", code: "hr", alternatives: [] },
    { name: "Cuba", code: "cu", alternatives: [] },
    { name: "Cyprus", code: "cy", alternatives: [] },
    { name: "Czech Republic", code: "cz", alternatives: ["czechia"] },
    { name: "Democratic Republic of the Congo", code: "cd", alternatives: ["drc", "dr congo", "congo-kinshasha"] },
    { name: "Denmark", code: "dk", alternatives: [] },
    { name: "Djibouti", code: "dj", alternatives: [] },
    { name: "Dominica", code: "dm", alternatives: [] },
    { name: "Dominican Republic", code: "do", alternatives: [] },
    { name: "Ecuador", code: "ec", alternatives: [] },
    { name: "Egypt", code: "eg", alternatives: [] },
    { name: "El Salvador", code: "sv", alternatives: ["salvador"] },
    { name: "Equatorial Guinea", code: "gq", alternatives: [] },
    { name: "Eritrea", code: "er", alternatives: [] },
    { name: "Estonia", code: "ee", alternatives: [] },
    { name: "Eswatini", code: "sz", alternatives: ["swaziland"] },
    { name: "Ethiopia", code: "et", alternatives: [] },
    { name: "Fiji", code: "fj", alternatives: [] },
    { name: "Finland", code: "fi", alternatives: [] },
    { name: "France", code: "fr", alternatives: [] },
    { name: "Gabon", code: "ga", alternatives: [] },
    { name: "The Gambia", code: "gm", alternatives: [] },
    { name: "Georgia", code: "ge", alternatives: [] },
    { name: "Germany", code: "de", alternatives: [] },
    { name: "Ghana", code: "gh", alternatives: [] },
    { name: "Greece", code: "gr", alternatives: [] },
    { name: "Grenada", code: "gd", alternatives: [] },
    { name: "Guatemala", code: "gt", alternatives: [] },
    { name: "Guinea", code: "gn", alternatives: [] },
    { name: "Guinea-Bissau", code: "gw", alternatives: [] },
    { name: "Guyana", code: "gy", alternatives: [] },
    { name: "Haiti", code: "ht", alternatives: [] },
    { name: "Honduras", code: "hn", alternatives: [] },
    { name: "Hungary", code: "hu", alternatives: [] },
    { name: "Iceland", code: "is", alternatives: [] },
    { name: "India", code: "in", alternatives: [] },
    { name: "Indonesia", code: "id", alternatives: [] },
    { name: "Iran", code: "ir", alternatives: [] },
    { name: "Iraq", code: "iq", alternatives: [] },
    { name: "Ireland", code: "ie", alternatives: [] },
    { name: "Israel", code: "il", alternatives: [] },
    { name: "Italy", code: "it", alternatives: [] },
    { name: "Côte d'Ivoire", code: "ci", alternatives: ["cote d'ivoire", "ivory coast"] },
    { name: "Jamaica", code: "jm", alternatives: [] },
    { name: "Japan", code: "jp", alternatives: [] },
    { name: "Jordan", code: "jo", alternatives: [] },
    { name: "Kazakhstan", code: "kz", alternatives: [] },
    { name: "Kenya", code: "ke", alternatives: [] },
    { name: "Kiribati", code: "ki", alternatives: [] },
    { name: "Kuwait", code: "kw", alternatives: [] },
    { name: "Kyrgyzstan", code: "kg", alternatives: [] },
    { name: "Laos", code: "la", alternatives: [] },
    { name: "Latvia", code: "lv", alternatives: [] },
    { name: "Lebanon", code: "lb", alternatives: [] },
    { name: "Lesotho", code: "ls", alternatives: [] },
    { name: "Liberia", code: "lr", alternatives: [] },
    { name: "Libya", code: "ly", alternatives: [] },
    { name: "Liechtenstein", code: "li", alternatives: [] },
    { name: "Lithuania", code: "lt", alternatives: [] },
    { name: "Luxembourg", code: "lu", alternatives: [] },
    { name: "Madagascar", code: "mg", alternatives: [] },
    { name: "Malawi", code: "mw", alternatives: [] },
    { name: "Malaysia", code: "my", alternatives: [] },
    { name: "Maldives", code: "mv", alternatives: [] },
    { name: "Mali", code: "ml", alternatives: [] },
    { name: "Malta", code: "mt", alternatives: [] },
    { name: "Marshall Islands", code: "mh", alternatives: [] },
    { name: "Mauritania", code: "mr", alternatives: [] },
    { name: "Mauritius", code: "mu", alternatives: [] },
    { name: "Mexico", code: "mx", alternatives: [] },
    { name: "Micronesia", code: "fm", alternatives: [] },
    { name: "Moldova", code: "md", alternatives: [] },
    { name: "Monaco", code: "mc", alternatives: [] },
    { name: "Mongolia", code: "mn", alternatives: [] },
    { name: "Montenegro", code: "me", alternatives: [] },
    { name: "Morocco", code: "ma", alternatives: [] },
    { name: "Mozambique", code: "mz", alternatives: [] },
    { name: "Myanmar", code: "mm", alternatives: ["burma"] },
    { name: "Namibia", code: "na", alternatives: [] },
    { name: "Nauru", code: "nr", alternatives: [] },
    { name: "Nepal", code: "np", alternatives: [] },
    { name: "Netherlands", code: "nl", alternatives: [] },
    { name: "New Zealand", code: "nz", alternatives: [] },
    { name: "Nicaragua", code: "ni", alternatives: [] },
    { name: "Niger", code: "ne", alternatives: [] },
    { name: "Nigeria", code: "ng", alternatives: [] },
    { name: "North Korea", code: "kp", alternatives: [] },
    { name: "North Macedonia", code: "mk", alternatives: [] },
    { name: "Norway", code: "no", alternatives: [] },
    { name: "Oman", code: "om", alternatives: [] },
    { name: "Pakistan", code: "pk", alternatives: [] },
    { name: "Palau", code: "pw", alternatives: [] },
    { name: "Palestine", code: "ps", alternatives: [] },
    { name: "Panama", code: "pa", alternatives: [] },
    { name: "Papua New Guinea", code: "pg", alternatives: [] },
    { name: "Paraguay", code: "py", alternatives: [] },
    { name: "Peru", code: "pe", alternatives: [] },
    { name: "Philippines", code: "ph", alternatives: [] },
    { name: "Poland", code: "pl", alternatives: [] },
    { name: "Portugal", code: "pt", alternatives: [] },
    { name: "Qatar", code: "qa", alternatives: [] },
    { name: "Romania", code: "ro", alternatives: [] },
    { name: "Russia", code: "ru", alternatives: [] },
    { name: "Rwanda", code: "rw", alternatives: [] },
    { name: "Saint Kitts & Nevis", code: "kn", alternatives: [] },
    { name: "Saint Lucia", code: "lc", alternatives: [] },
    { name: "Saint Vincent & the Grenadines", code: "vc", alternatives: ["svg"] },
    { name: "Samoa", code: "ws", alternatives: [] },
    { name: "San Marino", code: "sm", alternatives: [] },
    { name: "Sao Tome & Principe", code: "st", alternatives: [] },
    { name: "Saudi Arabia", code: "sa", alternatives: [] },
    { name: "Senegal", code: "sn", alternatives: [] },
    { name: "Serbia", code: "rs", alternatives: [] },
    { name: "Seychelles", code: "sc", alternatives: [] },
    { name: "Sierra Leone", code: "sl", alternatives: [] },
    { name: "Singapore", code: "sg", alternatives: [] },
    { name: "Slovakia", code: "sk", alternatives: [] },
    { name: "Slovenia", code: "si", alternatives: [] },
    { name: "Solomon Islands", code: "sb", alternatives: [] },
    { name: "Somalia", code: "so", alternatives: [] },
    { name: "South Africa", code: "za", alternatives: [] },
    { name: "South Korea", code: "kr", alternatives: [] },
    { name: "South Sudan", code: "ss", alternatives: [] },
    { name: "Spain", code: "es", alternatives: [] },
    { name: "Sri Lanka", code: "lk", alternatives: [] },
    { name: "Sudan", code: "sd", alternatives: [] },
    { name: "Suriname", code: "sr", alternatives: [] },
    { name: "Sweden", code: "se", alternatives: [] },
    { name: "Switzerland", code: "ch", alternatives: [] },
    { name: "Syria", code: "sy", alternatives: [] },
    { name: "Tajikistan", code: "tj", alternatives: [] },
    { name: "Tanzania", code: "tz", alternatives: [] },
    { name: "Thailand", code: "th", alternatives: [] },
    { name: "Timor-Leste", code: "tl", alternatives: ["east timor", "timorleste", "democratic republic of timor-leste"] },
    { name: "Togo", code: "tg", alternatives: [] },
    { name: "Tonga", code: "to", alternatives: [] },
    { name: "Trinidad & Tobago", code: "tt", alternatives: [] },
    { name: "Tunisia", code: "tn", alternatives: [] },
    { name: "Turkey", code: "tr", alternatives: [] },
    { name: "Turkmenistan", code: "tm", alternatives: [] },
    { name: "Tuvalu", code: "tv", alternatives: [] },
    { name: "Uganda", code: "ug", alternatives: [] },
    { name: "Ukraine", code: "ua", alternatives: [] },
    { name: "United Arab Emirates", code: "ae", alternatives: ["uae"] },
    { name: "United Kingdom", code: "gb", alternatives: ["uk", "gb", "great britain", "britain"] },
    { name: "United States of America", code: "us", alternatives: ["usa", "america", "united states"] },
    { name: "Uruguay", code: "uy", alternatives: [] },
    { name: "Uzbekistan", code: "uz", alternatives: [] },
    { name: "Vanuatu", code: "vu", alternatives: [] },
    { name: "Vatican City", code: "va", alternatives: ["vatican"] },
    { name: "Venezuela", code: "ve", alternatives: [] },
    { name: "Vietnam", code: "vn", alternatives: [] },
    { name: "Yemen", code: "ye", alternatives: [] },
    { name: "Zambia", code: "zm", alternatives: [] },
    { name: "Zimbabwe", code: "zw", alternatives: [] },
    { name: "Kosovo", code: "xk", alternatives: [] },
    { name: "Taiwan", code: "tw", alternatives: [] },
    { name: "England", code: "gb-eng", alternatives: [] },
    { name: "Northern Ireland", code: "gb-nir", alternatives: [] },
    { name: "Scotland", code: "gb-sct", alternatives: [] },
    { name: "Wales", code: "gb-wls", alternatives: [] }
];

class FlagQuiz {
    constructor() {
        this.countries = [...countries];
        this.preprocessCountries(); // Add special case alternatives upfront
        this.currentCountryIndex = 0;
        this.score = 0;
        this.guessedCountries = new Set();
        this.shuffledCountries = [];
        
        this.initializeElements();
        this.setupEventListeners();
        this.startNewQuiz();
    }

    // Pre-process all countries once on load - just store normalized versions
    preprocessCountries() {
        this.countries.forEach(country => {
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
                   .replace(/^the /g, '')          // remove "the " at the beginning
                   .replace(/saint/g, 'st')        // saint → st
                   .replace(/st\./g, 'st')         // st. → st  
                   .replace(/\s+and\s+/g, ' & ')   // and → &
                   .replace(/-/g, ' ')             // replace dashes with spaces
                   .replace(/'/g, '')              // remove apostrophes
                   .replace(/\s+/g, ' ')           // normalize whitespace
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
        this.countryInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer();
            }
        });
        
        this.prevBtn.addEventListener('click', () => this.navigateFlag(-1));
        this.nextBtn.addEventListener('click', () => this.navigateFlag(1));
        this.restartBtn.addEventListener('click', () => this.startNewQuiz());
    }

    startNewQuiz() {
        this.score = 0;
        this.guessedCountries.clear();
        this.shuffledCountries = this.shuffleArray([...this.countries]);
        this.currentCountryIndex = 0;
        this.completionScreen.style.display = 'none';
        this.updateDisplay();
        this.showCurrentFlag();
        this.countryInput.focus();
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    showCurrentFlag() {
        if (this.getUnguessedCountries().length === 0) {
            this.showCompletionScreen();
            return;
        }

        const unguessedCountries = this.getUnguessedCountries();
        const currentCountry = unguessedCountries[this.currentCountryIndex];
        
        // Try flag sources in order of reliability and speed
        const flagSources = [
            `https://flagpedia.net/data/flags/w580/${currentCountry.code.toLowerCase()}.png`,
            `https://flagcdn.com/256x192/${currentCountry.code.toLowerCase()}.png`,
            `https://restcountries.com/data/${currentCountry.code.toLowerCase()}.svg`
        ];
        
        this.loadFlagImage(flagSources, 0, currentCountry.name);
        
        this.updateNavigationButtons();
        this.clearFeedback();
        this.countryInput.value = '';
        this.countryInput.focus();
    }

    loadFlagImage(sources, index, countryName) {
        if (index >= sources.length) {
            // If all sources fail, show a placeholder
            this.flagImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDI1NiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMTkyIiBmaWxsPSIjRjVGNUY1IiBzdHJva2U9IiNEREQiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIxMjgiIHk9Ijk2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+RmxhZyBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPgo=';
            this.flagImage.alt = `Flag of ${countryName}`;
            console.warn(`Could not load flag for ${countryName}`);
            return;
        }
        
        const img = new Image();
        img.onload = () => {
            this.flagImage.src = sources[index];
            this.flagImage.alt = `Flag of ${countryName}`;
        };
        img.onerror = () => {
            console.warn(`Failed to load flag from ${sources[index]}, trying next source...`);
            this.loadFlagImage(sources, index + 1, countryName);
        };
        img.src = sources[index];
    }

    getUnguessedCountries() {
        return this.shuffledCountries.filter(country => !this.guessedCountries.has(country.name));
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

    checkAnswer() {
        // This function is now mainly for Enter key presses
        // The real-time checking is handled by checkAnswerRealtime()
        this.checkAnswerRealtime();
    }

    handleCorrectAnswer(country) {
        this.score++;
        this.guessedCountries.add(country.name);
        
        this.updateDisplay();
        
        // Immediately advance to next flag
        this.navigateToNextUnguessed();
    }

    handleIncorrectAnswer() {
        this.feedback.textContent = 'Try again!';
        this.feedback.className = 'feedback incorrect';
        this.countryInput.value = '';
    }

    navigateFlag(direction) {
        const unguessedCountries = this.getUnguessedCountries();
        if (unguessedCountries.length === 0) return;

        this.currentCountryIndex += direction;
        
        if (this.currentCountryIndex < 0) {
            this.currentCountryIndex = unguessedCountries.length - 1;
        } else if (this.currentCountryIndex >= unguessedCountries.length) {
            this.currentCountryIndex = 0;
        }
        
        this.showCurrentFlag();
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
        this.finalScore.textContent = this.countries.length;
        this.completionScreen.style.display = 'block';
        document.querySelector('.quiz-container').style.display = 'none';
    }

    // ...existing code...
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FlagQuiz();
});
