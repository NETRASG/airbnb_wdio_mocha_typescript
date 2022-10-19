class airbnb_date_locater {
    get choosePlace() {
        return $$("//div[@class='t1jojoys dir dir-ltr']")
    }
    get hoteLink() {
        return $$("//div[@class='cy5jw6o  dir dir-ltr']")
    }
    get checkInDate() {
        return $("//div[@class='_19y8o0j']")
    }
    get checkOutDate() {
        return $("//div[@class='_48vms8s']")
    }
    get checkMonthAndYear() {
        return $$("//div[@class='_13ah4vr']//div[@class='_1lds9wb'] //h3[@class='_14i3z6h']")
    }
    get nextMove() {
        return $("(//div[@class='_13ah4vr'] //span[@class='_e296pg'])[3]")
    }
    get setDate() {
        return $$("//div[@class='_13ah4vr'] //td/div")
    }
    get clearDate() {
        return $("//button[text()='Clear dates']")
    }
    get reserve() {
        return $("button[class='_qqb2vcb'] span[class='tjxdvlu dir dir-ltr']")
    }
}
export default new airbnb_date_locater()