const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  
  await page.goto('https://github.com/')
  
  await page.setViewport({ width: 1440, height: 789 })
  
  await page.waitForSelector('.Header > .Header-item > .details-overlay > .Header-link > .avatar')
  await page.click('.Header > .Header-item > .details-overlay > .Header-link > .avatar')
  
  await page.waitForSelector('.Header > .Header-item:nth-child(8) > .details-overlay > .dropdown-menu > .dropdown-item:nth-child(5)')
  await page.click('.Header > .Header-item:nth-child(8) > .details-overlay > .dropdown-menu > .dropdown-item:nth-child(5)')
  
  
  await browser.close()
})()