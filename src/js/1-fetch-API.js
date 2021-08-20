import countre from '../templates/countre.hbs';
console.log(countre);
import countriesList from '../templates/countries-list.hbs';
console.log(countriesList);

import API from './fetchCountries';
console.log(API);

//Импортируем библиотеку lodash
import debounce from 'lodash.debounce';

//Импортируем плагин уведомлений pnotify
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';


const refs = {
    getInput: document.querySelector('.input'),
    getCountriesList: document.querySelector('.countries-list'),
}
console.log(refs.getInput);

refs.getInput.addEventListener('input',  debounce(onInput, 500));

function onInput(event) {
    event.preventDefault();

    const searchQuery = refs.getInput.value;
    console.log(searchQuery);

    if (searchQuery.trim() === '') {
        return;
    }

    API.fetchCountries(searchQuery)
        .then(handlUserQuery)
        .catch(onFetchQuery); 
};

function handlUserQuery(countries) {
    const arrayLength = [...countries].length;

    refs.getCountriesList.innerHTML = '';

    if (arrayLength > 10) {
        console.log('>10 countres');
        renderNotify();
    }

    if (arrayLength >= 2 && arrayLength <= 10) {
        renderCountriesList(countries);
    }

    if (arrayLength === 1) {
        renderCountryMarkUP(countries);
    }      
}

function renderNotify() {
    defaultModules.set(PNotifyMobile, {});

    alert({
    text: 'Too many matches found. Please enter a more specific query!'
    });
}

function renderCountriesList(countries) {
    const markUp = countriesList(countries);
    refs.getCountriesList.innerHTML = markUp;

    console.log('2-10 countre');
}

function renderCountryMarkUP(countries) {
    const markUp = countre(countries);
    refs.getCountriesList.innerHTML = markUp;

    console.log('one country');
}

function onFetchQuery(error) {
    alert('Sorry, something went wrong! 0_0');
}



// console.log(API.fetchCountries);
//======================
// _.debounce(
//     () => {
//         console.log('debounce');
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



    // countries.map(countre => {
    //     console.log(countre.name);
        
    // });




