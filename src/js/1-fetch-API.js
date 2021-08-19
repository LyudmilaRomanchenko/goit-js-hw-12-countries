import countre from '../templates/countre.hbs';
console.log(countre);
import countriesList from '../templates/countries-list.hbs';
console.log(countriesList);

import API from './fetchCountries';
console.log(API);

const refs = {
    getInput: document.querySelector('.input'),
    getCountriesList: document.querySelector('.countries-list'),
}

console.log(refs.getInput);

refs.getInput.addEventListener('input', onInput);

function onInput(event) {
    event.preventDefault();

    console.log('hhhhhhhhhh');

    const searchQuery = refs.getInput.value;
    console.log(searchQuery);

    if (searchQuery.trim() === '') {
        return;
    }

    API.fetchCountries(searchQuery)
        .then(handlUserQuery);
    
};
function handlUserQuery(countries) {
    const arrayLength = [...countries].length;

    if (arrayLength >= 2 && arrayLength <= 10) {
        renderCountriesList(countries);
    };

    if (arrayLength === 1) {
      
        renderCountreMarkUP(countries);
    };

    if (arrayLength > 10) {
        console.log('>10 countre');
    };
            
            
}

function renderCountriesList(countries) {
    const markUp = countriesList(countries);
    refs.getCountriesList.innerHTML = markUp;

    //===============
    console.log('2-10 countre');

    countries.map(countre => {
        console.log(countre.name);
        
    });
};

function renderCountreMarkUP(countries) {
    // const markUp = countre(countries);
    // refs.getCountriesList.innerHTML = markUp;

    

    //=========
    console.log('one countre');
    console.log(countries.name);

    // countries.map(countre => {
    //     console.log(countre.name);
    //     name = countre.name;
    //     console.log(name);
        
        
    // });
    let name = 22222222;
    const markUp = countre(name);
    refs.getCountriesList.innerHTML = markUp;
    
}



// console.log(API.fetchCountries);
//======================
// _.debounce(
//     () => {
//         console.log('hhhhhhhhhh');
//     }, 500
// );

// function aaaa() {
//       _.debounce(() => {
//     console.log(
//       'Input event handler invocation after 300ms of inactivity past burst.',
//     );
//   }, 300)
// }
// aaaa();




