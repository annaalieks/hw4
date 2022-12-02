'use strict';

// const btn = document.querySelector('.btn');
// const bg = document.querySelector('.bg');
// const textLog = document.querySelector('.text-log');
// const timeLog = document.querySelector('.time-log');

// btn.addEventListener('click', function() {
//     let btnText = btn.textContent;
//     btn.textContent = btnText === 'Turn off' ? 'Turn on' : 'Turn off';

//     bg.classList.toggle('dark');

//     let logText = textLog.textContent;
//     textLog.textContent = logText === `Last turn off: ` ? `Last turn on: ` : `Last turn off: `;

    // let date = new Date().toISOString().split(/[T.]/);
    // let newDate = date[0].split('-').reverse().join('-') + ' ' + date[1];
    // timeLog.textContent = newDate;
// });

// JSON.parse(localStorage.getItem('state'));

const state = {
    isOn: true,
    lastChange: '2022-02-12 19:19:19'
};
const btn = document.querySelector('.btn');
const bg = document.querySelector('.bg');
const textLog = document.querySelector('.text-log');
const timeLog = document.querySelector('.time-log');

function applyState(state) {
    if (state.isOn) {
        btn.textContent = 'Turn off';
        bg.classList.remove('dark');
        textLog.textContent = `Last turn off: `;
    } else {
        btn.textContent = 'Turn on';
        bg.classList.add('dark');
        textLog.textContent = `Last turn on: `;
    }
    state.lastChange = timeLog.textContent;
}

btn.addEventListener('click', function () {
    
})

