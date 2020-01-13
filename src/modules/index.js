const getPackagePocztaPolska = require('./scrapers/poczta_polska.js');
const getPackagePaczkaWRuchu = require('./scrapers/paczka_w_ruchu.js');

// (async () => {
//   const x = await getPackagePocztaPolska('2100250860930');
//   console.log(x);
// })();

(async () => {
  const x = await getPackagePaczkaWRuchu('2100250860930');
  console.log(x);
})();