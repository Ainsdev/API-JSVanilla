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

import { itemToTop } from "./app";

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

