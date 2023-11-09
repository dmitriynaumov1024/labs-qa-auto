import { Builder, By, until } from 'selenium-webdriver'
import chai from "chai"
const expect = chai.expect

describe('suninjuly.github.io', function () {

    this.timeout(10000)

    let driver = null

    before(async () => {
        driver = new Builder().forBrowser('firefox').build()
        await driver.get('http://suninjuly.github.io/math.html')
    })

    after(async () => {
        driver.quit()
    })

    it('Solve math like a robot', async() => {
        let inputEl = await driver.findElement(By.id('input_value'))
        let inputValue = await inputEl.getAttribute("innerHTML")
        let x = parseInt(inputValue)
        let y = Math.log(Math.abs(12 * Math.sin(x)))

        await driver.findElement(By.id('answer')).sendKeys(y.toString())
        await driver.findElement(By.css('[for="robotCheckbox"]')).click()
        await driver.findElement(By.css('[for="robotsRule"]')).click()
        await driver.findElement(By.css('.btn')).click()

        await driver.wait(until.alertIsPresent())
        const text = await driver.switchTo().alert().getText()
        expect(text).to.include("you've passed")
        await driver.switchTo().alert().accept()
    })

})
