const getPackagePocztaPolska = require('./scrapers/poczta_polska.js');

(async () => {
  const x = await getPackagePocztaPolska(1);
  console.log(x);
})();

