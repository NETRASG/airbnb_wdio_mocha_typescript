import baseurl from '../pageObjects/services/airbnb_appOpen_service'
import filter from '../pageObjects/services/airbnb_filter_service'
import reservation from '../pageObjects/services/airbnb_date_service'
import { filterData } from '../Interface/dataClass'
import data from "../resources/filterdata.json"
describe("airbnb booking aeb application", async () => {
    it("open web app using url", async () => {
        await baseurl.appOpen()
    })
    it("select category", async () => {
        await filter.chooseCategory(data.category)
        await browser.pause(3000)
    })
    it("apply filter", async () => {
        await filter.applyFilter(filterData)
    })
    it("hotel reservation", async () => {
        await reservation.hotelReservation(data.hotelPlace)
    })
    it("selecting date", async () => {
        await reservation.travelDateSelect(data.monthYear, data.day, data.noOfDay);
    })
})