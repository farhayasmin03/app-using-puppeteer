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
    await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.2.1.min.js'})

    const result = await page.evaluate(() => {
        try {
            var data = [];
            $('h3.loop__post-title').each(function() {
                const url = $(this).find('a').attr('href');
                const title = $(this).find('a').attr('title')
                data.push({
                    'title' : title,
                    'url'   : url
                });
            });
            return data; // Return our data array
        } catch(err) {
            reject(err.toString());
        }
    });
    await browser.close();





})();
