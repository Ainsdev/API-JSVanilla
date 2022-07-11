//functions to create html Elements
import axios from "axios";
export async function itemToTop() {
  return await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(function(response) {
    for (let index = 0; index < 100; index++) {
      let res = response.data[index];
      let div = document.createElement('div');
      div.innerHTML = `<article id="top100_content" class=" max-h-screen overflow-y-auto m-2 rounded-2xl  bg-gradient-to-r from-tertiary via-secondary to-blue-700">
        <div class="flex items-center justify-start p-3">
          <div><img src="${res.image}" width="20px" height="20px"></div>
          <div class="text-center px-3">
            <h1 class="font-light text-sm">Name:</h1>
            <p class="font-bold text-base">${res.name}</p>
          </div>
          <div class="border-l-2 border-white flex flex-col items-center justify-center px-3">
              <h1 class="font-light text-sm">Price:</h1>
              <p class="font-bold text-base">$${res.current_price}</p>
          </div>
          <div class="border-l-2 border-white flex flex-col items-center justify-center px-3">
          <h1 class="font-light text-sm">MarketCap:</h1>
          <p class="font-bold text-base">${marketCap(res.market_cap)}</p>
        </div>
          <div class="border-l-2 border-white flex flex-col items-center justify-center px-3">
          <h1 class="font-light text-sm">% ath:</h1>
          <p class="font-bold text-base">${res.ath_change_percentage.toFixed(1)}%</p>
        </div>
        </div>
      </article>`;
      return document.getElementById('top100').appendChild(div);
    }
  })
    .catch(e => document.getElementById('top100').appendChild(document.createElement('div')).innerHTML = `<p>${e}</p>`);
}

const marketCap = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2) + "bill";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "mill";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(2) + "thousand";
  }
}