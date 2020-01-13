const getPackagePocztaPolska = require('./scrapers/poczta_polska.js');
const getPackagePaczkaWRuchu = require('./scrapers/paczka_w_ruchu.js');
const getPackagePaczkomat = require('./scrapers/paczkomat.js');

// (async () => {
//   const x = await getPackagePocztaPolska('00259007738997744427');
//   console.log(x);
// })();

// (async () => {
//   const x = await getPackagePaczkaWRuchu('2100250860930');
//   console.log(x);
// })();

(async () => {
  const x = await getPackagePaczkomat('602220399093590012387404');
  console.log(x);
})();