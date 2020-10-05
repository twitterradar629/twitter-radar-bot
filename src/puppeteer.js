const puppeteer = require('puppeteer');

async function main() {
  console.log('Browser is launching...');
  const browser = await puppeteer.launch();
  
  const page = await browser.newPage();

  let url = "https://radar.cloudflare.com/us";
  console.log(`Browsing url: ${url}`);
  await page.goto(url, { waitUntil: 'networkidle2' })
  await page.waitForTimeout(10000)
  
  console.log('Capturing screenshot...');
  await page.screenshot({path: 'screenshot.png', fullPage: true})
    
  browser.close()  
}

main()
