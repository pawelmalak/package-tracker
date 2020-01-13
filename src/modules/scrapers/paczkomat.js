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
  
  await browser.defaultBrowserContext().overridePermissions('https://inpost.pl', ['notifications']);
  await page.goto(`https://inpost.pl/sledzenie-przesylek?number=${packageNumber}`);
  // await page.goto(`http://localhost:3001/inpost`);
  

  const details = {
    status: await page.$eval('.parcelStatusesScene .single--status--block:first-child .messageBox p:first-child', el => el.textContent),
    date: await page.$eval('.parcelStatusesScene .single--status--block:first-child .date-box p', el => el.textContent),
    address: null
  };

  browser.close();
  return details;
}

module.exports = getPackageDetails;