package com.example.piano.seleniumTesting;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class CheckUserRegisterUnsuccessful {
    static String myfirstName = "haha";
    static String mylastName = "SUTD";
    static String myEmail = "what";
    static String myPassword = "whatever";

    public static void main(String[] args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver","/Users/lyd/Desktop/chromedriver");
        WebDriver driver = new ChromeDriver();

        //System.setProperty("webdriver.chrome.driver","/Users/sudiptac/sudiptac/teaching/SUTD/50.003@2018/Test/chromedriver");
        //WebDriver driver = new ChromeDriver();

        //driver.get("https://sudiptac.bitbucket.io");
        driver.get("http://localhost:3000/");
        //driver.get("https://www.google.com.sg");

        // get all the links
        java.util.List<WebElement> links = driver.findElements( By.tagName("a"));

        // print all the links
        for (int i = 0; i < links.size(); i=i+1) {
            if(links.get(i).getText().equals( "Register" )){
                links.get( i ).click();
                WebElement firstName = driver.findElement(By.name("registerFirstName"));

                Thread.sleep(1000);
                firstName.sendKeys(myfirstName);

                Thread.sleep(1000);

                WebElement lastName = driver.findElement(By.name("registerLastName"));
                Thread.sleep(1000);
                lastName.sendKeys(mylastName);

                WebElement email = driver.findElement(By.name("registerEmail"));
                Thread.sleep(1000);
                email.sendKeys(myEmail);

                WebElement password = driver.findElement(By.name("registerPassword"));
                Thread.sleep(1000);
                password.sendKeys(myPassword);



            }


        }
        java.util.List<WebElement> buttonList = driver.findElements( By.tagName("button"));
        for(int i=0;i<buttonList.size();i++ ){
            if(buttonList.get(i).getText().equals( "Register" )){
                buttonList.get( i ).click();
            }
        }





    }
}
