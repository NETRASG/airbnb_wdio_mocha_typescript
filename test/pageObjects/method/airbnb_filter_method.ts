import action from '../../utils/actions'
import locator from "../../pageObjects/locaters/airbnb_filter_locater"
export default class filter_methods {
    chooseCategory = async (category: string) => {
        await action.LocatorArray(locator.stayCategory, category)
        await browser.pause(5000)
    }
    applyFilter = async (filterData) => {
        await action.Click(locator.filterButton)
        await browser.pause(3000)
        // await (await locator.minPrice).click()
        // await (await locator.minPrice).clearValue()
        // await action.setText(locator.minPrice, lowPrice);
        // await (await locator.maxPrice).click()
        // await (await locator.maxPrice).clearValue()
        // await action.setText(locator.maxPrice, highPrice);
        await action.LocatorArray(locator.typeOfPlace, filterData.Typeofplace)
        await action.LocatorArray(locator.bedRooms, filterData.bedRooms)
        await action.LocatorArray(locator.beds, filterData.beds)
        await action.LocatorArray(locator.bathrooms, filterData.bathRoom)
        await action.LocatorArray(locator.propertyType, filterData.propertyType)
        await action.MultiSelect(locator.Amenities, filterData.basicAmenities)
        await action.Click(locator.showMore)
        await action.MultiSelect(locator.hostLanguage, filterData.hostLanguage)
        await action.Click(locator.showRoomButton)
        await browser.pause(2000)
    }
}