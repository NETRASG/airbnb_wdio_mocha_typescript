import action from "../../utils/actions"
import locator from "../../pageObjects/locaters/airbnb_date_locater"
export default class date_methods{
    hotelReservation = async (placeName: string) => {
        let parentWindow = await browser.getWindowHandle();
        for (let i = 0; i < (await locator.choosePlace).length; i++) {
            await (await locator.choosePlace[i]).waitForDisplayed({ timeout: 2000 })
            const eachElement = await locator.choosePlace[i].getText();
            console.log("----------" + eachElement)
            if (eachElement.includes(placeName)) {
                await (await locator.hoteLink[i]).click()
                break;
            }
        }
        await browser.pause(10000)
        let alltabId = await browser.getWindowHandles()
        let childTab: string;
        for (let i = 0; i < (await alltabId).length; i++) {
            if (alltabId[i] != parentWindow) {
                childTab = alltabId[i]
                break
            }
        }
        await browser.switchToWindow(childTab)
        await browser.maximizeWindow()
        await browser.pause(3000)
    }
    travelDateSelect = async (month: string, day: string, noOfDay: number) => {
        (await locator.clearDate).scrollIntoView;
        await action.Click(locator.clearDate)
        await action.Click(locator.checkInDate)
        await browser.pause(3000)
        let i = 0;
        while (true) {
            const eachElement = await locator.checkMonthAndYear[i].getText();
            console.log("----------" + eachElement)
            if (eachElement.includes(month)) {
                for (let j = 0; j < (await locator.setDate).length; j++) {
                    const eachElement = await locator.setDate[j].getText();
                    console.log("----------" + eachElement)
                    if (eachElement.includes(day)) {
                        await action.Click(locator.setDate[j])
                        await browser.pause(5000)
                        j = j + noOfDay
                        await action.Click(locator.setDate[j])
                        await browser.pause(5000)
                        await action.Click(locator.reserve)
                        await browser.pause(5000)
                        break;
                    }
                }
                break;
            }
            else {
                if (i == 1) {
                    await action.Click(locator.nextMove)
                    i = 0
                }
                else {
                    i++
                }
            }
        }
    }
}
