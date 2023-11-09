import { Builder, By, until } from 'selenium-webdriver'
import chai from "chai"
const expect = chai.expect

describe("selenium store", function() {

    this.timeout(0)
    let driver = null

    before(async () => {
        driver = new Builder().forBrowser('firefox').build()
    })

    after(async () => {
        await driver.quit()
    })

    it('Sign up', async () => {
        await driver.get('http://demo-store.seleniumacademy.com/')
        await driver.findElement(By.css('.skip-account')).click()
        await driver.findElement(By.css('#header-account')).findElement(By.css('a[title=Register]')).click()
        await driver.findElement(By.css('#firstname')).sendKeys('Ivan')
        await driver.findElement(By.css('#middlename')).sendKeys('Ivanovich')
        await driver.findElement(By.css('#lastname')).sendKeys('Ivanov')
        await driver.findElement(By.css('#email_address')).sendKeys(`testuser27121@test.com`)
        await driver.findElement(By.css('#password')).sendKeys('abcdefg123!!')
        await driver.findElement(By.css('#confirmation')).sendKeys('abcdefg123!!')
        await driver.findElement(By.css('.buttons-set button[type=submit]')).click()
    })

    it('Log in', async () => {
        await driver.get('http://demo-store.seleniumacademy.com/')
        await driver.findElement(By.css('.skip-account')).click()
        await driver.findElement(By.css('#header-account')).findElement(By.css('a[title="Log In"]')).click()
        await driver.findElement(By.css('#email')).sendKeys('testuser27121@test.com')
        await driver.findElement(By.css('#pass')).sendKeys('abcdefg123!!')
        await driver.findElement(By.css('#send2')).click()
        const msg = await driver.findElement(By.css('.welcome-msg')).getText()
        expect(msg).to.include('WELCOME')
    })

    it('Add product to cart', async () => {
        await driver.get('http://demo-store.seleniumacademy.com/')
        await driver.executeScript("window.scrollBy(0, 800);", "")
        let productImage = (await driver.findElements(By.css('a[title="Chelsea Tee"]')))[1]
        await driver.wait(until.elementIsVisible(productImage), 5000)
        await productImage.click()
        await driver.findElement(By.css('.option-white')).click()
        await driver.findElement(By.css('.option-l')).click()
        await driver.findElement(By.css('.add-to-cart-buttons button')).click()
    })

    it('Checkout product', async () => {
        await driver.get('http://demo-store.seleniumacademy.com/')
        await driver.executeScript("window.scrollBy(0, 800);", "")
        let productImage = (await driver.findElements(By.css('a[title="Chelsea Tee"]')))[1]
        await driver.wait(until.elementIsVisible(productImage), 5000)
        await productImage.click()
        await driver.findElement(By.css('.option-white')).click()
        await driver.findElement(By.css('.option-l')).click()
        await driver.findElement(By.css('.add-to-cart-buttons button')).click()

        await driver.findElement(By.css('.btn-proceed-checkout')).click()

        await driver.findElement(By.css('#billing\\:firstname')).sendKeys('Ivan')
        await driver.findElement(By.css('#billing\\:middlename')).sendKeys('Ivanovich')
        await driver.findElement(By.css('#billing\\:lastname')).sendKeys('Ivanov')
        // await driver.findElement(By.css('#billing\\:email')).sendKeys('testuser27121@test.com')
        await driver.findElement(By.css('#billing\\:street1')).sendKeys('123 Main St')
        await driver.findElement(By.css('#billing\\:city')).sendKeys('New York')

        let select = await driver.findElement(By.css('#billing\\:region_id'))
        await driver.wait(until.elementLocated(By.css('#billing\\:region_id option')), 5000)
        let firstOption = await select.findElement(By.css('option'))
        await firstOption.click()

        await driver.findElement(By.css('#billing\\:postcode')).sendKeys('69420')
        await driver.findElement(By.css('#billing\\:country_id')).sendKeys('United States')
        await driver.findElement(By.css('#billing\\:telephone')).sendKeys('0445551231')
        await driver.findElement(By.css('#billing-buttons-container button')).click()
    })

})
