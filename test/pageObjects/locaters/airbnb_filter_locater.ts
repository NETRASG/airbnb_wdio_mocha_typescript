 class airbnb_filter_locater{
    get stayCategory() {
        return $$("//button //div[contains(@class,'tamhn2w')]/span")
    }
    get filterButton() {
        return $("//button[contains(.,'Filters')]")
    }
    get filterPannel() {
        return $("//div[@aria-label='Filters']")
    }
    get minPrice() {
        return $("#price_filter_min")
    }
    get maxPrice() {
        return $("#price_filter_max")
    }
    get typeOfPlace() {
        return $$("//h2[text()='Type of place']/../.. //div/div[@class='_gw4xx4']")
    }
    get bedRooms() {
        return $$("//div[@aria-label='Bedrooms'] //div[@class='_cjo0m2'] //button")
    }
    get beds() {
        return $$("//div[@aria-label='Beds'] //div[@class='_cjo0m2'] //button")
    }
    get bathrooms() {
        return $$("//div[@aria-label='Bathrooms'] //div[@class='_cjo0m2'] //button")
    }
    get propertyType() {
        return $$("//h2[text()='Property type']/../.. //button")
    }
    get Amenities() {
        return $$("//h2[text()='Amenities']/../.. //div/div[@class='_gw4xx4']")
    }
    get hostLanguage() {
        return $$("//h2[text()='Host language']/../.. //div/div[@class='_gw4xx4']")
    }
    get showMore() {
        return $("//h2[text()='Host language']/../.. //span[text()='Show more']")
    }
    get showRoomButton() {
        return $("//a[@class='_1ku51f04']")
}
}
export default new airbnb_filter_locater()