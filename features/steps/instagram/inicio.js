const webdriver = require("selenium-webdriver");
const { Given, When, Then } = require("cucumber");
var driver;
require("chromedriver");
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
const { Builder, By, Key, Until } = require('selenium-webdriver');


Given('Inicio sesion en instagram', async function () {
    this.driver = await new webdriver.Builder().forBrowser("chrome").build();
    await this.driver.get("http://www.instagram.com");
    await this.driver.sleep(5000);
    var usuario = this.driver.findElement(By.xpath('//input[@name="username"]'));
    usuario.sendKeys("flynndjset");
    var conrtaseña = this.driver.findElement(By.xpath('//input[@name="password"]'));
    conrtaseña.sendKeys("lesbofeminismopopular");
    var BotonEntrar = this.driver.findElement(By.xpath('//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/div[4]'));
    BotonEntrar.click();
});
When('saltear cartel', async function () {
    await this.driver.sleep(5000);
    var ahoraNo = this.driver.findElement(By.xpath('/html/body/div[4]/div/div/div[3]/button[2]'));
    ahoraNo.click();
});
When('buscar', async function () {
    var botonVertodos = this.driver.findElement(By.xpath('//*[@id="react-root"]/section/main/section/div[3]/div[3]/div[1]/a/div'));
    botonVertodos.click();

});
When('seguir a sus seguidores', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('poner me gusta en la primer publicación', async function () {
    var botonMeGusta = this.driver.findElement(By.xpath('//svg[@aria-label="Me gusta"]')); //Comentario: este xpath va a fallar
    botonMeGusta.click();
});

