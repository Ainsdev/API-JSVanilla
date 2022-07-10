//functions to create html Elements
export function itemToTop() {
    let div = document.createElement('div');
    div.innerHTML = `<article id="top100_content" class=" max-h-screen overflow-y-auto m-2 rounded-2xl  bg-gradient-to-r from-tertiary via-secondary to-blue-700">
        <div class="flex items-center justify-start p-3">
          <div><img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="20px" height="20px"></div>
          <div class="text-center px-3">
            <h1 class="font-light text-sm">Name:</h1>
            <p class="font-bold text-base">Bitcoin</p>
          </div>
          <div class="border-l-2 border-white flex flex-col items-center justify-center px-3">
              <h1 class="font-light text-sm">Last Price:</h1>
              <p class="font-bold text-base">$21653</p>
          </div>
          <div class="border-l-2 border-white flex flex-col items-center justify-center px-3">
          <h1 class="font-light text-sm">MarketCap:</h1>
          <p class="font-bold text-base">412.3bill</p>
        </div>
          <div class="border-l-2 border-white flex flex-col items-center justify-center px-3">
          <h1 class="font-light text-sm">% from ath:</h1>
          <p class="font-bold text-base">68%</p>
        </div>
        </div>
      </article>`;
    document.getElementById('top100').appendChild(div);
}