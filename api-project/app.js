//functions to create html Elements
import axios from "axios";
import { createItem, createItemSearch, createItemHist } from "./createHTML.js";
//Api call to get data of  top100
export async function itemToTop() {
  for (let index = 0; index < 100; index++) {
    await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(function (response) {
      let res = response.data[index];
      return createItem(res, 'top100_content');
    })
      .catch(e => document.getElementById('top100').appendChild(document.createElement('div')).innerHTML = `<p>${e}</p>`);

  }
}
//function to create html Element(search)
export const searchCoin = async (name) => {
  let link = `https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;
  await axios.get(link)
    .then(response => {
      let data = response.data[`${name}`];
      return createItemSearch(data, name);
    })
    .catch(e => console.log(e));
}

// function to create html Element(search-historical)
export const searchHistDataCoin = async (name,currency,date) => {
  let link = `https://api.coingecko.com/api/v3/coins/${name}/history?date=${date}`;
  await axios.get(link)
    .then(response => {
      let data = response.data;
      return createItemHist(data,currency,date);
    })
    .catch(e => console.log(e));
}
