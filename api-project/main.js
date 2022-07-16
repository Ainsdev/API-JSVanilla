// //button dark mode
// const darkBtn = document.getElementById('dark_btn');
// const html = document.getElementById('html');
// darkBtn.addEventListener('click', () => {
//     if (html.classList.contains('dark') == true) {
//         html.classList.remove('dark');
//         console.log('dark mode off');
//     } else{
//         html.classList.add('dark');
//     }
// });
// //button dark mode

import { itemToTop, searchCoin, searchHistDataCoin } from "./app";

window.onload = function async() {
    document.getElementById('top100').classList.remove('hidden');
    itemToTop();
}
//btns
const top100Btn = document.getElementById('top100_btn');
const searchBtn = document.getElementById('search_btn');
const historicalBtn = document.getElementById('historical_btn');
//btns
//contents
const top100Cont = document.getElementById('top100_content');
const searchCont = document.getElementById('search_content');
const historicalCont = document.getElementById('historical_content');
//contents
//functions NAV
top100Btn.addEventListener('click', () => {
    document.getElementById('top100').classList.remove('hidden');
    document.getElementById('search').classList.add('hidden');
    document.getElementById('historical').classList.add('hidden');
})
searchBtn.addEventListener('click', () => {
    document.getElementById('search').classList.remove('hidden');
    document.getElementById('top100').classList.add('hidden');
    document.getElementById('historical').classList.add('hidden');
});
historicalBtn.addEventListener('click', () => {
    document.getElementById('historical').classList.remove('hidden');
    document.getElementById('top100').classList.add('hidden');
    document.getElementById('search').classList.add('hidden');
})
//functions NAV
//function of searching by name
const button = document.getElementById('input_btn');
const input = document.getElementById('input');
//click on button
button.addEventListener('click', () => {
    searchCoin(input.value);
    input.value = '';
});
//enter key
input.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        searchCoin(input.value);
        input.value = '';
    }
});
//function of searching historical data by name
const buttonHistorical = document.getElementById('input_hist_btn');
const inputTextHistorical = document.getElementById('input_text_hist');
const inputDateHist = document.getElementById('input_date_hist');
const inputCurrencyHist = document.getElementById('input_currency_hist');
    //click on button
buttonHistorical.addEventListener('click', () => {
    searchHistDataCoin(inputTextHistorical.value,inputCurrencyHist.value,inputDateHist.value);
});
    //enter key
inputDateHist.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        searchHistDataCoin(inputTextHistorical.value, inputCurrencyHist.value, inputDateHist.value);
    }
});


