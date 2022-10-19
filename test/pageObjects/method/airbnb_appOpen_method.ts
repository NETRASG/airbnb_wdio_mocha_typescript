
export default class airbnb_appOpen_method{
    appOpen = async () => {
        await browser.maximizeWindow()
        await browser.url('/');
        await browser.pause(5000)
    }

}