const webdriver = require("selenium-webdriver");
const { Given, When, Then } = require("cucumber");
var driver;
require("chromedriver");
const { Builder, By, Key, Until } = require('selenium-webdriver');
var vectorIds;
const { assert } = require ('chai');


Given('Inicio sesion en ams con usuario admin', async function () {
        this.driver = await new webdriver.Builder().forBrowser("chrome").build();//creacion de objeto
    await this.driver.get("https://int.saplinglearning.me/ams/");
    await this.driver.sleep(5000);
    var usuario = await this.driver.findElement(By.xpath('//input[@id="username"]')); 
    var contraseña= await this.driver.findElement(By.xpath('//input[@id="password"]')); 
    var btnEntrar= await this.driver.findElement(By.xpath('//input[@id="submitButton"]')); 
    await usuario.sendKeys('raptoradmin');
    await contraseña.sendKeys('fasterthansixmill');
    await btnEntrar.click();
    await this.driver.sleep(5000);
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


When(/^Seleccionar los "(.*)" primeros items de la lista$/, async function (numero) {

    
    for (let i = 1; i < numero + 1; i++) {
        var botonCheckBox = this.driver.findElement(By.xpath('//tbody/tr[' + i + ']//span[@class="item-checkbox"]'));
        botonCheckBox.click();
        var NumeroID = this.driver.findElement(By.xpath('//tbody/tr[' + i + ']//a'));
        this.vectorIds[i] = NumeroID.getText();
    }

});

When('Ir a view selected items', async function () {
    var SelItems = this.driver.findElement(By.Xpayh('//li[text()="VIEW SELECTED ITEMS"]'));
    SelItems.click();

});
Then(/^Verificar que los "(.*)" se encuentren en view selected items$/, async function (numero) {
    for (let i = 1; i < numero + 1; i++) {
        //OBTENER EL ID
        var NumeroID = this.driver.findElement(By.xpath('//tbody/tr['+i+']/td/a'));
        //COMPARARLO CON EL DEL VECTOR
        assert.equal(NumeroID, this.vectorIds[i],"NO SON IGUALES");

    }
});