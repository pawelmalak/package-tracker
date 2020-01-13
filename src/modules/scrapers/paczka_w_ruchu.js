const puppeteer = require('puppeteer');

/*

  getPackageDetails()

  Parameters:
    packageNumber: String

  Returns:
    details: Object
      status: String
      date: String
      address: null  

*/
const getPackageDetails = async (packageNumber) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto(`https://www.paczkawruchu.pl/sledz-paczke/?numer=${packageNumber}`);
  // await page.goto(`http://localhost:3001/ruch`);
  
  const details = {
    status: await page.$eval('.find-parcel-result .row .track-description', el => el.textContent),
    date: await page.$eval('.find-parcel-result .row .track-date', el => el.textContent),
    address: null
  };

  browser.close();
  return details;
}

module.exports = getPackageDetails;