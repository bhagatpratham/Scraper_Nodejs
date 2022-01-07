const axios = require("axios");
const cheerio = require("cheerio");

axios
  .get(
    "https://docs.microsoft.com/en-us/azure/governance/policy/samples/built-in-policies"
  )
  .then((res) => {
    const html = res.data;

    const $ = cheerio.load(html);

    const scrapedata = $("td", "");
    console.log(scrapedata);
  })
  .catch((error) => {
    console.log(error);
  });
