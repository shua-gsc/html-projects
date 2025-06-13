const keys = [
	// ...first row...
	['`','1','2','3','4','5','6','7','8','9','0','-','=','_backspace'],
	['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','_backslash'], 
	['Caps','A','S','D','F','G','H','J','K','L',';','\'','Enter'],
	['_lshift','Z','X','C','V','B','N','M',',','.','/','_rshift'],  
	['Ctrl','Win','Alt','Space','Alt','Fn','Menu','Ctrl']
];

const keyDisplayOverrides = {
	'_backslash': '\\',
	'_backspace': 'Back',
	'_lshift' : "Shift",
	'_rshift' : "Shift"
};

const keySizeOverrides = {
	'_backspace': 3,   
	'_backslash': 1,
	'Tab': 1,       
	'Caps': 3,     
	'Enter': 3,    
	'_lshift': 5,   
	'_rshift': 5,        
	'Ctrl': 1,      
	'Win': 1,      
	'Alt': 1,      
	'Space': 8,    
	'Fn': 1,       
	'Menu': 1     
};

const keyboard = document.getElementById('keyboard');
const modal = document.getElementById('modal');
const bindInput = document.getElementById('bindInput');
const modalTitle = document.getElementById('modal-title');
let currentKeyDiv = null;
const bindings = {};

keys.forEach((row) => {
	row.forEach(key => {
		const keyDiv = document.createElement('div');
		keyDiv.classList.add('key');
		keyDiv.dataset.key = key;
		keyDiv.innerText = keyDisplayOverrides[key] || key;
		keyDiv.setAttribute('role', 'button');
		keyDiv.setAttribute('tabindex', '0');
		keyDiv.setAttribute('aria-label', `Key ${key}`);
		//keyDiv.innerText = key;

		//if (keySizeOverrides[key]) keyDiv.dataset.size = keySizeOverrides[key];
		keyDiv.dataset.size = keySizeOverrides[key] || keyDiv.size;

		const tooltip = document.createElement('div');
		tooltip.classList.add('tooltip');
		tooltip.innerText = '';
		keyDiv.appendChild(tooltip);

		keyDiv.addEventListener('click', () => openModal(keyDiv));
		keyDiv.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				openModal(keyDiv);
			}
		});

		keyboard.appendChild(keyDiv);
	});
		
	const spacer = document.createElement('div');
	spacer.classList.add('row-spacer');
	spacer.style.gridColumn = '1 / -1';  // Span full width
	keyboard.appendChild(spacer);
});

function openModal(keyDiv) {
	modal.style.display = 'flex';
  const keyName = keyDisplayOverrides[keyDiv.dataset.key] || keyDiv.dataset.key;
	modalTitle.innerText = `Bind for [ ${keyName} ]`;
	bindInput.value = keyDiv.querySelector('.tooltip').innerText;
	currentKeyDiv = keyDiv;
	setTimeout(() => bindInput.focus(), 10);
	trapFocus(modal);
}

function closeModal() {
	modal.style.display = 'none';
	bindInput.value = '';
	currentKeyDiv = null;
}

function saveBinding() {
	const value = bindInput.value.trim();
	if (!currentKeyDiv) return;

	const key = currentKeyDiv.dataset.key;
	currentKeyDiv.querySelector('.tooltip').innerText = value;
	currentKeyDiv.classList.toggle('used', !!value);
	bindings[key] = value;

	closeModal();
}

function deleteBinding() {
	if (!currentKeyDiv) return;

	const key = currentKeyDiv.dataset.key;
	currentKeyDiv.querySelector('.tooltip').innerText = '';
	currentKeyDiv.classList.remove('used');
	bindings[key] = '';

	closeModal();
}

function toggleTheme() {
	document.body.classList.toggle('light');
}

function exportKeybinds() {
	const data = JSON.stringify(bindings, null, 2);
	const blob = new Blob([data], { type: 'application/json' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = 'keybinds.json';
	a.click();
	URL.revokeObjectURL(url);
}

function importKeybinds() {
	document.getElementById('importFile').click();
}

function resetKeybinds() {
	if (confirm('Are you sure you want to reset all keybindings?')) {
		Object.keys(bindings).forEach(key => {
			const el = document.querySelector(`.key[data-key="${key}"]`);
			if (el) {
				el.querySelector('.tooltip').innerText = '';
				el.classList.remove('used');
				delete bindings[key];
			}
		});
	}
}

document.getElementById('importFile').addEventListener('change', function () {
	const file = this.files[0];
	if (!file) return;

	const reader = new FileReader();
	reader.onload = function (e) {
		try {
			const imported = JSON.parse(e.target.result);
			Object.entries(imported).forEach(([key, binding]) => {
				const el = document.querySelector(`.key[data-key="${key}"]`);
				if (el) {
					el.querySelector('.tooltip').innerText = binding;
					el.classList.toggle('used', !!binding);
					bindings[key] = binding;
				}
			});
		} catch {
			alert('Invalid file format');
		}
	};
	reader.readAsText(file);
});

function trapFocus(modalElement) {
	const focusable = modalElement.querySelectorAll('input, button');
	const first = focusable[0];
	const last = focusable[focusable.length - 1];

	modalElement.addEventListener('click', function (e) {
		if (e.target === modal) {
			closeModal();
		}
	});

	modalElement.addEventListener('keydown', function (e) {
		if (e.key === 'Tab') {
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		} else if (e.key === 'Enter') {
			saveBinding();  
		} else if (e.key === 'Delete') {
			deleteBinding();
		} else if (e.key === 'Escape') {
			closeModal();
		}
	});
}