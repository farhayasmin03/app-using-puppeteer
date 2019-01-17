const puppeteer = require('puppeteer');
const URL = 'https://coding.napolux.com';
(async () => {

    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 320,
        height: 600
    })
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A404 Safari/601.1')

    await page.goto(URL, {
        waitUntil: 'networkidle0'
    });
    await browser.close();





})();
