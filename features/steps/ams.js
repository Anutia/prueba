const webdriver = require("selenium-webdriver");
const { Given, When, Then } = require("cucumber");
var driver;
require("chromedriver");

Given('Inicio sesion en ams con usuario admin', async function () {
this.driver = await new webdriver.Builder().forBrowser("chrome").build();//creacion de objeto
await this.driver.get("http://www.google.com.ar");
});

When('Click ungruded text', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
When('Click en la parte de edicion', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('Click more', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
When('Click save as draft para guardar', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
When('Verificar que este en la pagina de ams', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});



When('Hago click en raptor item', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('Click add', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('Click multiple choice', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});