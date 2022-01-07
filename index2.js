const puppeteer = require("puppeteer");

puppeteer
  .launch()
  .then(async (browser) => {
    const page = await browser.newPage();
    await page.goto(
      "https://docs.microsoft.com/en-us/azure/governance/policy/samples/built-in-policies"
    );
    await page.waitForSelector("body");

    let grabLinks = await page.evaluate(() => {
      let allTables = document.querySelectorAll(".table");

      scrapedItems = [];

      allTables.forEach((item) => {
        let tableInfo = item.querySelector("td").innerHTML; // Output: Name
        // let links = item.querySelectorAll("td").innerHTML; // Output: Empty objects
        scrapedItems.push({
          tableInfo,
          //   links,
        });
      });

      let items = {
        scrapedItems,
      };
      return items;
    });
    console.log(grabLinks);
    await browser.close();
  })
  .catch(function (err) {
    console.error(err);
  });
