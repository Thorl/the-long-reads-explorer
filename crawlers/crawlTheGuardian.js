const crawlTheGuardian = async (page) => {
  try {
    const targetUrl = "https://www.theguardian.com/news/series/the-long-read";

    await page.goto(targetUrl);

    await page.waitForTimeout(2000);

    await page.evaluate(() => {
      const body = document.querySelector("body");

      const cookieConsentIFrame = body.querySelector(
        "#sp_message_container_775873"
      );

      body.removeChild(cookieConsentIFrame);
    });

    const allLongReads = await page.$$(
      ".fc-container > div.fc-container__inner"
    );

    /* const selectedLongReads = [];

  for (const longRead of allLongReads) {
    await page.evaluate((el) => {
      isAudioLongRead = el.querySelector(
        "div.fc-item__content > div.fc-item__header > h3 > a > div"
      );

      if (isAudioLongRead) {
        return;
      } else {
        const title = el.querySelector(
          ".fc-item__content > div.fc-item__header > h3 > a > span > span"
        ).textContent;

        const intro = el
          .querySelector(
            "div.fc-item__content > div.fc-item__standfirst-wrapper.fc-item__standfirst-wrapper--timestamp > div.fc-item__standfirst"
          )
          .textContent.replace("The long read:", "");

        const url = el.querySelector("div > a").href;

        const date = el.querySelector(
          "header.fc-container__header > a > time"
        ).textContent;

        selectedLongReads.push({ title, intro, url, date });
      }
    }, longRead);
  } */
  } catch (error) {
    console.log("An error occcurred while crawling The Guardian: ", error);
  }
};

module.exports = crawlTheGuardian;
