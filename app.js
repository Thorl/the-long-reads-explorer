require("dotenv").config();
const puppeteer = require("puppeteer");

require("./database");

const crawlTheGuardian = require("./crawlers/crawlTheGuardian");

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
    });
    const page = await browser.newPage();

    await crawlTheGuardian(page);
  } catch (error) {
    console.log("An error occured while running index.js: ", error);
  }
})();
