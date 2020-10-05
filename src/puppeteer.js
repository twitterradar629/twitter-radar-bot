const puppeteer = require('puppeteer');

async function take_screenshot_of_popular_domains(page) {
    console.log('📸 Taking screenshot of "Most Popular Domains in US"');
    const filename = 'screenshots/popular_domains.png';
  
    const selector = '#root > article > div > div:nth-child(4) > div.eg.av > div.fo.ev.bd'

    const element = await page.$(selector)

    await element.screenshot({ path: filename });
    console.log(`🗾 Screenshot saved as ${filename}`)
}

async function main() {
  console.log('Browser is launching...');
  const browser = await puppeteer.launch();
  
  const page = await browser.newPage();

  let url = "https://radar.cloudflare.com/us";
  console.log(`Browsing url: ${url}`);
  await page.goto(url, { waitUntil: 'networkidle2' })
  await page.waitForTimeout(10000)

  await take_screenshot_of_popular_domains(page)

  browser.close()  
}

main()
