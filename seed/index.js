require("dotenv").config();
const puppeteer = require("puppeteer");

require("./database");

const seedTheGuardian = require("./seedingHandlers/seedTheGuardian");

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
    });
    const page = await browser.newPage();

    await seedTheGuardian(page);
  } catch (error) {
    console.log("An error occured while running index.js: ", error);
  }
})();
