const webdriver = require("selenium-webdriver");
const { Given, When, Then } = require("cucumber");
const { assert } = require("chai");
var driver;
<<<<<<< HEAD
=======
require("chromedriver");
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
const { Builder, By, Key, Until } = require('selenium-webdriver');
>>>>>>> d98d8fd020bcec5c2490d16f737a51f389699fe4

require("chromedriver");
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
const { Builder, By, Key, until } = require('selenium-webdriver');

Given(/^Inicio sesion en instagram con usuario "(.*)" y contraseña "(.*)"$/, async function (usuario, password) {
  
  this.driver = await new webdriver.Builder().forBrowser('chrome').build();
  await this.driver.get('http://www.instagram.com');
  await this.driver.manage().window().maximize();
  
  var BotonEntrar;
  
  var correo;
  var contraseña;
  await this.driver.sleep(3000);
  correo = await this.driver.findElement(By.xpath('//input[@name= "username"]'));
  await correo.sendKeys(usuario);
  contraseña = await this.driver.findElement(By.xpath('//input[@name= "password"]'));
  await contraseña.sendKeys(password);
  var botonEntrar;
  botonEntrar = await this.driver.findElement(By.xpath('//button[.= "Iniciar sesión"]'));
  await botonEntrar.click();
  
  
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

When('Seguir un usuario del menu sugerencias y dejarlo de seguir', async function () {
  await this.driver.sleep(5000);
  var BotonSeguir = this.driver.findElement(By.xpath('//*[@id="react-root"]/section/main/section/div[3]/div[3]/div[2]/div/div/div/div[1]/div[3]/button'));
  var BotonSiguiendo = this.driver.findElement(By.xpath('//*[@id="react-root"]/section/main/section/div[3]/div[3]/div[2]/div/div/div/div[1]/div[3]/button'));
  BotonSeguir.click();
  await this.driver.sleep(5000);
  BotonSiguiendo.click();
  await this.driver.sleep(5000);
  var BotonDejarDeSeguir = this.driver.findElement(By.xpath("//button[text()='Dejar de seguir']"));
  BotonDejarDeSeguir.click();

}); 
Then ('Verificar que se haya dejado de seguir', async function (){
  
  await this.driver.sleep(5000);
  var Seguir = this.driver.findElement(By.xpath('//*[@id="react-root"]/section/main/section/div[3]/div[3]/div[2]/div/div/div/div[1]/div[3]/button'));
  var textoBoton = Seguir.getText();
  assert.equal(textoBoton, 'Seguir','Esta mal. No dejó de seguir al usuario');
});
When('seguir a sus seguidores', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('poner me gusta en la primer publicación', async function () {
    var botonMeGusta = this.driver.findElement(By.xpath('//svg[@aria-label="Me gusta"]')); //Comentario: este xpath va a fallar
    botonMeGusta.click();
});

