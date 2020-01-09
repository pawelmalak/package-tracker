const puppeteer = require('puppeteer');

/*

  getPackageDetails()

  Parameters:
    packageNumber: String

  Returns:
    details: Object
      status: String
      date: String
      address: String  

*/
const getPackageDetails = async (packageNumber) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // await page.goto(`https://emonitoring.poczta-polska.pl/?numer=${packageNumber}`);
  await page.goto(`http://localhost:3001/poczta`);
  
  const details = {
    status: await page.$eval('tr[class^="zdarzenia_"]:last-child > td:first-child', el => el.textContent),
    date: await page.$eval('tr[class^="zdarzenia_"]:last-child > td:nth-child(2)', el => el.textContent),
    address: await page.$eval('tr[class^="zdarzenia_"]:last-child > td:last-child > a', el => el.textContent)
  };

  browser.close();
  return details;
}

module.exports = getPackageDetails;