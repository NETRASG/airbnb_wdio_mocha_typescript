class Action {
    async setText(locator: ChainablePromiseElement<WebdriverIO.Element>, inputText) {
        await (await locator).setValue(inputText);
    }
    async Click(locator: ChainablePromiseElement<WebdriverIO.Element>) {
        await (await locator).click();
    }
    async LocatorArray(locator: ChainablePromiseElement<WebdriverIO.Element>, name: string) {
        for (let i = 0; i < (await locator).length; i++) {
            const eachElement = await locator[i].getText();
            console.log("----------" + eachElement)
            if (eachElement.includes(name)) {
                await this.Click(await locator[i])
                break;
            }
        }
    }
    async hotelArray(locator: ChainablePromiseElement<WebdriverIO.Element>, name: string) {
        for (let i = 0; i < (await locator).length; i++) {
            const eachElement = await locator[i].getText();
            console.log("----------" + eachElement)
            if (eachElement.includes(name)) {
                await this.Click(await locator[i])
                break
            }
        }
    }
    async MultiSelect(locator: ChainablePromiseElement<WebdriverIO.Element>, name: Array<string>) {
        for (let i = 0; i < (await locator).length; i++) {
            const eachElement = await locator[i].getText();
            console.log("----------"+eachElement)
            for(let j=0;j< name.length;j++){
            if (eachElement.includes(name[j])) {
                await this.Click(await locator[i])
                break
            
                }
            }
        }
    }
}
export default new Action();