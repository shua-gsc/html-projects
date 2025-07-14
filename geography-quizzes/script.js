// Constants to improve maintainability and reduce string duplication
const CATEGORIES = {
  ALL: 'all',
  COUNTRIES: 'countries',
  MULTI_REGION: 'multi-region'
};

const CATEGORY_TITLES = {
  [CATEGORIES.ALL]: 'All Flags',
  [CATEGORIES.COUNTRIES]: 'All Countries',
  'africa': 'Africa',
  'asia': 'Asia',
  'europe': 'Europe',
  'north-america': 'North America',
  'south-america': 'South America',
  'oceania': 'Oceania',
  'territories': 'Territories',
  [CATEGORIES.MULTI_REGION]: 'Multi-Region Quiz'
};

const REGION_CODES = {
  'africa': 'AF',
  'asia': 'AS', 
  'europe': 'EU',
  'north-america': 'NA',
  'south-america': 'SA',
  'oceania': 'OC',
  'territories': 'TR'
};

// Utility functions to reduce code redundancy
const Utils = {
  showElement(elementId) {
    const element = typeof elementId === 'string' ? document.getElementById(elementId) : elementId;
    if (element) element.style.display = 'block';
  },
  
  hideElement(elementId) {
    const element = typeof elementId === 'string' ? document.getElementById(elementId) : elementId;
    if (element) element.style.display = 'none';
  },
  
  toggleScreens(showId, hideIds) {
    this.showElement(showId);
    hideIds.forEach(id => this.hideElement(id));
  }
};

// Countries data - kept inline for compatibility with file:// protocol
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
  { name: "Palestine", code: "ps", region: ["AS"], alternatives: [] },
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
  { name: "Taiwan", code: "tw", region: ["AS"], alternatives: [] },

  { name: "Åland Islands", code: "ax", region: ["TR"], alternatives: ["aland islands"] },
  { name: "American Samoa", code: "as", region: ["TR"], alternatives: [] },
  { name: "Anguilla", code: "ai", region: ["TR"], alternatives: [] },
  { name: "Antarctica", code: "aq", region: ["TR"], alternatives: [] },
  { name: "Aruba", code: "aw", region: ["TR"], alternatives: [] },
  { name: "Bermuda", code: "bm", region: ["TR"], alternatives: [] },
  { name: "Bouvet Island", code: "bv", region: ["TR"], alternatives: [] },
  { name: "British Indian Ocean Territory", code: "io", region: ["TR"], alternatives: ["biot"] },
  { name: "Caribbean Netherlands", code: "bq", region: ["TR"], alternatives: [] },
  { name: "Cayman Islands", code: "ky", region: ["TR"], alternatives: [] },
  { name: "Christmas Island", code: "cx", region: ["TR"], alternatives: [] },
  { name: "Cocos (Keeling) Islands", code: "cc", region: ["TR"], alternatives: ["cocos islands", "keeling islands"] },
  { name: "Cook Islands", code: "ck", region: ["TR"], alternatives: [] },
  { name: "Curaçao", code: "cw", region: ["TR"], alternatives: ["curacao"] },
  { name: "England", code: "gb-eng", region: ["TR"], alternatives: [] },
  { name: "Falkland Islands", code: "fk", region: ["TR"], alternatives: [] },
  { name: "Faroe Islands", code: "fo", region: ["TR"], alternatives: [] },
  { name: "French Guiana", code: "gf", region: ["TR"], alternatives: [] },
  { name: "French Polynesia", code: "pf", region: ["TR"], alternatives: [] },
  { name: "French Southern and Antarctic Lands", code: "tf", region: ["TR"], alternatives: ["fsat"] },
  { name: "Gibraltar", code: "gi", region: ["TR"], alternatives: [] },
  { name: "Greenland", code: "gl", region: ["TR"], alternatives: [] },
  { name: "Guadeloupe", code: "gp", region: ["TR"], alternatives: [] },
  { name: "Guam", code: "gu", region: ["TR"], alternatives: [] },
  { name: "Guernsey", code: "gg", region: ["TR"], alternatives: [] },
  { name: "Heard Island and McDonald Islands", code: "hm", region: ["TR"], alternatives: [] },
  { name: "Hong Kong", code: "hk", region: ["TR"], alternatives: [] },
  { name: "Isle of Man", code: "im", region: ["TR"], alternatives: [] },
  { name: "Jersey", code: "je", region: ["TR"], alternatives: [] },
  { name: "Macau", code: "mo", region: ["TR"], alternatives: ["macao"] },
  { name: "Martinique", code: "mq", region: ["TR"], alternatives: [] },
  { name: "Mayotte", code: "yt", region: ["TR"], alternatives: [] },
  { name: "Montserrat", code: "ms", region: ["TR"], alternatives: [] },
  { name: "New Caledonia", code: "nc", region: ["TR"], alternatives: [] },
  { name: "Niue", code: "nu", region: ["TR"], alternatives: [] },
  { name: "Norfolk Island", code: "nf", region: ["TR"], alternatives: [] },
  { name: "Northern Ireland", code: "gb-nir", region: ["TR"], alternatives: [] },
  { name: "Northern Mariana Islands", code: "mp", region: ["TR"], alternatives: [] },
  { name: "Pitcairn Islands", code: "pn", region: ["TR"], alternatives: [] },
  { name: "Puerto Rico", code: "pr", region: ["TR"], alternatives: [] },
  { name: "Réunion", code: "re", region: ["TR"], alternatives: ["reunion"] },
  { name: "Saint Barthélemy", code: "bl", region: ["TR"], alternatives: ["saint barthelemy"] },
  { name: "Saint Helena, Ascension and Tristan da Cunha", code: "sh", region: ["TR"], alternatives: ["saint helena"] },
  { name: "Saint Martin", code: "mf", region: ["TR"], alternatives: [] },
  { name: "Saint Pierre and Miquelon", code: "pm", region: ["TR"], alternatives: [] },
  { name: "Sint Maarten", code: "sx", region: ["TR"], alternatives: [] },
  { name: "Scotland", code: "gb-sct", region: ["TR"], alternatives: [] },
  { name: "South Georgia", code: "gs", region: ["TR"], alternatives: ["south georgia and the south sandwich islands"] },
  { name: "Svalbard and Jan Mayen", code: "sj", region: ["TR"], alternatives: [] },
  { name: "Tokelau", code: "tk", region: ["TR"], alternatives: [] },
  { name: "Turks and Caicos Islands", code: "tc", region: ["TR"], alternatives: [] },
  { name: "United States Minor Outlying Islands", code: "um", region: ["TR"], alternatives: [] },
  { name: "British Virgin Islands", code: "vg", region: ["TR"], alternatives: [] },
  { name: "United States Virgin Islands", code: "vi", region: ["TR"], alternatives: [] },
  { name: "Wales", code: "gb-wls", region: ["TR"], alternatives: [] },
  { name: "Wallis and Futuna", code: "wf", region: ["TR"], alternatives: [] },
  { name: "Western Sahara", code: "eh", region: ["TR"], alternatives: [] }
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
    this.skippedCountries = new Set();
    this.shuffledCountries = [];

    // Flag preloading cache
    this.preloadedFlags = new Map();
    this.isPreloading = false;

    this.initializeElements();
    this.setupEventListeners();
    this.startNewQuiz();
  }

  // Filter countries by category
  filterCountriesByCategory(category, customRegions = null) {
    if (category === CATEGORIES.ALL) {
      return [...this.allCountries];
    }

    if (category === CATEGORIES.COUNTRIES) {
      // Return all countries except territories (TR region)
      return this.allCountries.filter(country =>
        !country.region || !country.region.includes('TR')
      );
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
    return REGION_CODES[category] || 'AF';
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
    this.scoreDisplay = document.getElementById('score-display');
    this.remainingDisplay = document.getElementById('remaining-display');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');
    this.skipBtn = document.getElementById('skip-btn');
    this.restartBtn = document.getElementById('restart-btn');
    this.flagGrid = document.getElementById('flag-grid');
  }

  setupEventListeners() {
    this.countryInput.addEventListener('input', (e) => this.handleInput(e));

    this.prevBtn.addEventListener('click', () => this.navigateFlag(-1));
    this.nextBtn.addEventListener('click', () => this.navigateFlag(1));
    this.skipBtn.addEventListener('click', () => this.skipFlag());
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
    this.skippedCountries.clear();

    // Ensure all controls are enabled and cleared for the new quiz
    this.countryInput.disabled = false;
    this.skipBtn.disabled = false;
    this.countryInput.value = '';
    this.clearFeedback();

    this.createFlagGrid();
    this.showCurrentFlag();
    this.updateDisplay();
    this.updateNavigationButtons();
  }

  async showCurrentFlag() {
    const unguessedCountries = this.getUnguessedCountries();
    if (unguessedCountries.length === 0) {
      this.showCompletionScreen();
      return;
    }

    const currentCountry = unguessedCountries[this.currentCountryIndex];

    // Check if flag is preloaded, otherwise load with fallback
    let flagSrc;
    if (this.preloadedFlags.has(currentCountry.code)) {
      flagSrc = this.preloadedFlags.get(currentCountry.code);
      this.flagImage.src = flagSrc;
      this.flagImage.alt = `Flag of ${currentCountry.name}`;
    } else {
      // Fallback to original loading method for immediate display
      const flagSources = [
        `https://flagpedia.net/data/flags/w1160/${currentCountry.code}.png`,
        `https://flagcdn.com/w1160/${currentCountry.code}.png`,
        `https://restcountries.com/data/${currentCountry.code}.svg`
      ];

      this.loadFlagImage(flagSources, 0, currentCountry.name);
    }

    // Clear input and feedback
    this.countryInput.value = '';
    this.clearFeedback();
    this.countryInput.focus();

    // Trigger preloading of next flags
    this.preloadNextFlags();
  }

  loadFlagImage(sources, index, countryName) {
    if (index >= sources.length) {
      // If all sources fail, show a simple placeholder
      this.flagImage.src = 'data:image/svg+xml;charset=utf-8,' +
        '<svg width="320" height="240" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="100%" height="100%" fill="#f0f0f0"/>' +
        '<text x="50%" y="50%" font-family="Arial" font-size="14" fill="#999" text-anchor="middle" dy=".3em">Flag not found</text>' +
        '</svg>';
      this.flagImage.alt = `Flag of ${countryName} (not available)`;
      return;
    }

    this.flagImage.onload = () => {
      // Image loaded successfully
      this.flagImage.alt = `Flag of ${countryName}`;
    };

    this.flagImage.onerror = () => {
      // Try next source
      this.loadFlagImage(sources, index + 1, countryName);
    };

    this.flagImage.src = sources[index];
  }

  // Enhanced flag loading with preloading support
  async loadFlagWithFallback(country) {
    // Check if flag is already preloaded
    if (this.preloadedFlags.has(country.code)) {
      return this.preloadedFlags.get(country.code);
    }

    const flagSources = [
      `https://flagpedia.net/data/flags/w1160/${country.code}.png`,
      `https://flagcdn.com/w1160/${country.code}.png`,
      `https://restcountries.com/data/${country.code}.svg`
    ];

    for (const source of flagSources) {
      try {
        await this.loadImage(source);
        // Cache successful load
        this.preloadedFlags.set(country.code, source);
        return source;
      } catch (error) {
        console.warn(`Failed to load flag from ${source}`);
      }
    }

    // Return placeholder if all sources fail
    const placeholder = this.generatePlaceholderFlag(country.name);
    this.preloadedFlags.set(country.code, placeholder);
    return placeholder;
  }

  // Load image and return promise
  loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  // Generate placeholder flag for failed loads
  generatePlaceholderFlag(countryName) {
    return 'data:image/svg+xml;charset=utf-8,' +
      '<svg width="320" height="240" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="100%" height="100%" fill="#f0f0f0" stroke="#ddd" stroke-width="2"/>' +
      `<text x="50%" y="40%" font-family="Arial" font-size="12" fill="#666" text-anchor="middle">${countryName}</text>` +
      '<text x="50%" y="60%" font-family="Arial" font-size="10" fill="#999" text-anchor="middle">Flag not available</text>' +
      '</svg>';
  }

  // Preload next flags for better UX
  preloadNextFlags(count = 3) {
    if (this.isPreloading) return;

    const unguessed = this.getUnguessedCountries();
    const startIndex = Math.min(this.currentCountryIndex + 1, unguessed.length);
    const endIndex = Math.min(startIndex + count, unguessed.length);

    const nextFlags = unguessed.slice(startIndex, endIndex);

    if (nextFlags.length === 0) return;

    this.isPreloading = true;

    // Preload flags in background without blocking UI
    setTimeout(async () => {
      for (const country of nextFlags) {
        if (!this.preloadedFlags.has(country.code)) {
          try {
            await this.loadFlagWithFallback(country);
          } catch (error) {
            console.warn(`Preload failed for ${country.name}:`, error);
          }
        }
      }
      this.isPreloading = false;
    }, 100);
  }

  getUnguessedCountries() {
    return this.shuffledCountries.filter(country =>
      !this.guessedCountries.has(country.code) && !this.skippedCountries.has(country.code)
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

    this.countryInput.value = '';
    this.countryInput.focus();

    this.updateDisplay();
    this.updateFlagGrid();

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
    this.updateFlagGrid();
  }

  navigateToNextUnguessed() {
    const unguessedCountries = this.getUnguessedCountries();
    if (unguessedCountries.length === 0) {
      this.showCompletionScreen();
      return;
    }

    // After removing a country (guessed or skipped), stay at the same index
    // but if that index is now out of bounds, wrap to the beginning
    if (this.currentCountryIndex >= unguessedCountries.length) {
      this.currentCountryIndex = 0;
    }

    this.showCurrentFlag();
    this.updateNavigationButtons();
  }

  restartQuiz() {
    // Remove completion state and hide completion banner
    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) quizContainer.classList.remove('quiz-completed');
    Utils.hideElement('completion-banner');
    
    this.startNewQuiz();
  }

  skipFlag() {
    const unguessedCountries = this.getUnguessedCountries();
    if (unguessedCountries.length === 0) {
      this.showCompletionScreen();
      return;
    }

    const currentCountry = unguessedCountries[this.currentCountryIndex];

    // Mark as skipped
    this.skippedCountries.add(currentCountry.code);

    // Update display immediately to show new progress
    this.updateDisplay();
    
    // Update the flag grid to show the skipped state
    this.updateFlagGrid();

    // Show the correct answer with a distinct style
    this.feedback.textContent = `${currentCountry.name}`;
    this.feedback.className = 'feedback skipped';

    // Clear input and disable it temporarily
    this.countryInput.value = '';
    this.countryInput.disabled = true;
    this.skipBtn.disabled = true;

    // Check if quiz is complete after skipping this flag
    const remainingUnguessed = this.getUnguessedCountries();
    if (remainingUnguessed.length === 0) {
      // Quiz is complete, show completion after a brief delay
      setTimeout(() => {
        this.showCompletionScreen();
      }, 2500);
    } else {
      // Auto-advance to next flag after 2.5 seconds
      setTimeout(() => {
        this.clearFeedback();
        this.countryInput.disabled = false;
        this.skipBtn.disabled = false;
        this.countryInput.focus();
        this.navigateToNextUnguessed();
      }, 2500);
    }
  }

  createFlagGrid() {
    this.flagGrid.innerHTML = '';
    
    this.shuffledCountries.forEach((country, index) => {
      const flagItem = document.createElement('div');
      flagItem.className = 'flag-item';
      flagItem.dataset.countryCode = country.code;
      flagItem.dataset.index = index;
      
      const img = document.createElement('img');
      img.src = this.getFlagUrl(country.code);
      img.alt = `Flag of ${country.name}`;
      img.loading = 'lazy';
      
      const label = document.createElement('div');
      label.className = 'flag-label';
      label.textContent = country.name;
      
      flagItem.appendChild(img);
      flagItem.appendChild(label);
      
      flagItem.addEventListener('click', () => this.jumpToFlag(index));
      
      this.flagGrid.appendChild(flagItem);
    });
    
    this.updateFlagGrid();
  }

  // Generate the primary flag URL for a country code
  getFlagUrl(countryCode) {
    return `https://flagpedia.net/data/flags/w1160/${countryCode}.png`;
  }

  jumpToFlag(index) {
    const unguessedCountries = this.getUnguessedCountries();
    const targetCountry = this.shuffledCountries[index];
    
    // Only allow jumping to unguessed flags
    if (this.guessedCountries.has(targetCountry.code) || this.skippedCountries.has(targetCountry.code)) {
      return;
    }
    
    // Find the index in the unguessed array
    const unguessedIndex = unguessedCountries.findIndex(c => c.code === targetCountry.code);
    if (unguessedIndex !== -1) {
      this.currentCountryIndex = unguessedIndex;
      this.showCurrentFlag();
      this.updateNavigationButtons();
      this.updateFlagGrid();
      this.countryInput.focus();
    }
  }

  // Update the score and remaining count display
  updateDisplay() {
    const unguessedCount = this.getUnguessedCountries().length;
    const totalCount = this.countries.length;
    
    // Score should only show correctly guessed flags, not skipped ones
    this.scoreDisplay.textContent = `${this.score} / ${totalCount}`;
    this.remainingDisplay.textContent = `${unguessedCount} remaining`;
  }
  
  // Clear any feedback messages
  clearFeedback() {
    this.feedback.textContent = '';
    this.feedback.className = 'feedback';
  }
  
  // Update navigation button states
  updateNavigationButtons() {
    const unguessedCountries = this.getUnguessedCountries();
    const hasMultiple = unguessedCountries.length > 1;
    
    this.prevBtn.disabled = !hasMultiple;
    this.nextBtn.disabled = !hasMultiple;
  }

  updateFlagGrid() {
    const unguessedCountries = this.getUnguessedCountries();
    const currentCountry = unguessedCountries[this.currentCountryIndex];
    
    this.flagGrid.querySelectorAll('.flag-item').forEach(item => {
      const countryCode = item.dataset.countryCode;
      
      // Remove all state classes
      item.classList.remove('current', 'completed', 'skipped');
      
      if (this.guessedCountries.has(countryCode)) {
        item.classList.add('completed');
      } else if (this.skippedCountries.has(countryCode)) {
        item.classList.add('skipped');
      } else if (currentCountry && currentCountry.code === countryCode) {
        item.classList.add('current');
      }
    });
  }

  showCompletionScreen() {
    // Hide the quiz controls by adding a CSS class
    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) quizContainer.classList.add('quiz-completed');

    // Show completion banner
    const completionBanner = document.getElementById('completion-banner');
    const completionTitle = document.getElementById('completion-title');
    const completionStats = document.getElementById('completion-stats');

    const correctlyGuessed = this.score;
    const skipped = this.skippedCountries.size;
    const total = this.countries.length;

    // Create detailed statistics message
    let statsMessage = '';
    if (skipped > 0) {
      statsMessage = `Correctly guessed: ${correctlyGuessed} | Skipped: ${skipped} | Total: ${total}`;
    } else {
      statsMessage = `Perfect score! You correctly identified all ${total} flags without skipping any!`;
    }

    // Show different messages based on quiz type
    if (this.category === 'custom' && this.customRegions) {
      const regionNames = {
        'AF': 'Africa',
        'AS': 'Asia',
        'EU': 'Europe',
        'NA': 'North America',
        'SA': 'South America',
        'OC': 'Oceania',
        'TR': 'Territories'
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

      completionTitle.textContent = `🎉 Custom Quiz Complete!`;
      completionStats.innerHTML = `${regionsText}<br>${statsMessage}`;
    } else {
      completionTitle.textContent = `🎉 Quiz Complete!`;
      completionStats.textContent = statsMessage;
    }

    // Show the completion banner
    Utils.showElement(completionBanner);
  }

  // Clean up resources to prevent memory leaks
  cleanup() {
    // Clear preloaded flags cache
    this.preloadedFlags.clear();
    this.isPreloading = false;

    // Remove event listeners
    if (this.countryInput) {
      this.countryInput.removeEventListener('input', this.handleInput);
    }

    // Cancel any pending image loads
    if (this.flagImage) {
      this.flagImage.src = '';
    }
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
      countries: countries.filter(c => !c.region || !c.region.includes('TR')).length,
      africa: countries.filter(c => c.region && c.region.includes('AF')).length,
      asia: countries.filter(c => c.region && c.region.includes('AS')).length,
      europe: countries.filter(c => c.region && c.region.includes('EU')).length,
      'north-america': countries.filter(c => c.region && c.region.includes('NA')).length,
      'south-america': countries.filter(c => c.region && c.region.includes('SA')).length,
      oceania: countries.filter(c => c.region && c.region.includes('OC')).length,
      territories: countries.filter(c => c.region && c.region.includes('TR')).length
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
      'oc': counts.oceania,
      'tr': counts.territories
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
    if (countElement) {
      countElement.textContent = selectedCountries.length;
    }
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
    Utils.toggleScreens('quiz-container', ['category-selection']);
    
    // Remove completion state and hide completion banner (in case coming from completed quiz)
    Utils.hideElement('completion-banner');
    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) quizContainer.classList.remove('quiz-completed');

    // Update quiz title
    const title = CATEGORY_TITLES[category] || 'Quiz';
    document.getElementById('quiz-title').textContent = title;

    // Start the quiz
    this.currentQuiz = new FlagQuiz(category);
  }

  // Show the category selection menu
  showMenu() {
    Utils.toggleScreens('category-selection', ['quiz-container']);
    
    // Hide completion banner and remove completion state for next quiz
    Utils.hideElement('completion-banner');
    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) quizContainer.classList.remove('quiz-completed');

    // Clean up current quiz
    if (this.currentQuiz) {
      this.currentQuiz.cleanup();
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
    Utils.toggleScreens('quiz-container', ['category-selection']);
    
    // Remove completion state and hide completion banner (in case coming from completed quiz)
    Utils.hideElement('completion-banner');
    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) quizContainer.classList.remove('quiz-completed');

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
