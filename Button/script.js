'use strict';

// Variables
const btn = document.querySelector('.btn');
const bg = document.querySelector('.bg');
const textLog = document.querySelector('.text-log');
const timeLog = document.querySelector('.time-log');

// State object variable settings
let currentState = {
    isOn: true,
    lastChange: 'never',
};

// Set page interface options
function applyState(state) {
	// for visual part
	if (state.isOn) {
		//for light theme
		btn.textContent = 'Turn off';
		textLog.textContent = 'Last turn on:';
		bg.classList.remove('dark');
	} else {
		//for dark theme
		btn.textContent = 'Turn on';
		textLog.textContent = 'Last turn off:';
		bg.classList.add('dark');
	};
	// for time log part
	if (state.lastChange === 'never') {
		// for no log
		textLog.textContent = '';
		timeLog.textContent = '';
	} else {
		// for log
		timeLog.textContent = state.lastChange;
	}
}

// Apply state on page loading
function applyInitialState() {

	//Download data from local storage
	let stateJSON = localStorage.getItem('state');
	
	if (stateJSON === null) {
		// for empty storage
        applyState(currentState);
	} else {
		// for local storage with saved data
		let updatedState = JSON.parse(localStorage.getItem('state'));
		applyState(updatedState);
		currentState.isOn = updatedState.isOn;
	} 
}

applyInitialState();

// Adding event listener for the btn
btn.addEventListener('click', () => {
	
	// Date format converting
	const date = new Date().toISOString().split(/[T.]/);
	const newDate = date[0].split('-').reverse().join('-') + ' ' + date[1];

	// New state variable settings
	let newState = {
		isOn: !currentState.isOn,
		lastChange: newDate,
	}

	applyState(newState);
	
	// Current state update
	currentState.isOn = newState.isOn;
	currentState.lastChange = newState.lastChange;

	// Save current state into local storage
	localStorage.setItem('state', JSON.stringify(newState));
});
