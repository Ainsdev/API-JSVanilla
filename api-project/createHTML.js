//
//Function to create HTML top 100
export function createItem(res, id) {
  let div = document.createElement('div');
  div.innerHTML = `<article id="${id}" class="w-screen max-h-screen snap-center m-2 rounded-2xl bg-gradient-to-r from-tertiary via-secondary to-blue-700 md:mx-48 ">
        <div class="flex items-center justify-center p-3">
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
//Api call to get data of  search
export function createItemSearch(res, name) {
  if (res !== undefined) {
    let div = document.createElement('div');
    div.innerHTML = `<article class=" max-h-screen snap-center m-2 rounded-2xl  bg-gradient-to-r from-tertiary via-secondary to-blue-700 md:mx-32">
        <div class="flex items-center justify-center p-3">
          <div class="text-center px-3">
            <h1 class="font-light text-sm">Name:</h1>
            <p class="font-bold text-base">${name}</p>
          </div>
          <div class="border-l-2 border-white flex flex-col items-center justify-center px-3">
              <h1 class="font-light text-sm">Price:</h1>
              <p class="font-bold text-base">$${res.usd}</p>
          </div>
          <div class="border-l-2 border-white flex flex-col items-center justify-center px-3">
          <h1 class="font-light text-sm">MarketCap:</h1>
          <p class="font-bold text-base">${marketCap(res.usd_market_cap)}</p>
        </div>
        </div>
      </article>`;
    return document.getElementById('search').appendChild(div);
  } else {
    console.log("No data");
  }
}
//Api call to get data of  search-historical
export function createItemHist(res, currency, date) {
  let div = document.createElement('div');
  div.innerHTML = `<article id="${id}" class=" max-h-screen snap-center m-2 rounded-2xl bg-gradient-to-r from-tertiary via-secondary to-blue-700">
        <div class="flex items-center justify-center p-3">
          <div><img src="${res.image.small}" width="20px" height="20px"></div>
          <div class="text-center px-3">
            <h1 class="font-light text-sm">Name:</h1>
            <p class="font-bold text-base">${res.name}</p>
          </div>
          <div class="border-l-2 border-white flex flex-col items-center justify-center px-3">
              <h1 class="font-light text-sm">Price:</h1>
              <p class="font-bold text-base">$${res[`${market_data}`][`${current_price}`][`${currency}`]}</p>
          </div>
          <div class="border-l-2 border-white flex flex-col items-center justify-center px-3">
          <h1 class="font-light text-sm">MarketCap:</h1>
          <p class="font-bold text-base">${marketCap(res[`${market_cap}`][`${currency}`])}</p>
        </div>
          <div class="border-l-2 border-white flex flex-col items-center justify-center px-3">
          <h1 class="font-light text-sm">Fecha :</h1>
          <p class="font-bold text-base">${date}%</p>
        </div>
        </div>
      </article>`;
  return document.getElementById('top100').appendChild(div);
}

//Functions to normalizate data
const marketCap = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2) + "bill";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "mill";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(2) + "thousand";
  }
}