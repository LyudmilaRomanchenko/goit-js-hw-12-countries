//import './sass/main.scss';

import API from './fetchCountries';
console.log(API);

const refs = {
    getInput: document.querySelector('.input'),
}


// console.log(fetchCountries());

console.log(refs.getInput);
// console.log(API.fetchCountries);
//======================
// _.debounce(
//     () => {
//         console.log('hhhhhhhhhh');
//     }, 500
// );

refs.getInput.addEventListener('input', onInput);
function onInput(event) {
    event.preventDefault();

    console.log('hhhhhhhhhh');

    const searchQuery = refs.getInput.value;
    console.log(searchQuery);

    API.fetchCountries(searchQuery)
        .then(a =>
        {
            console.log(a);
            });
    
}
