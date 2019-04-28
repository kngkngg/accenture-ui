package com.example.piano.seleniumTesting;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CheckUserChangeTicketStatus {
    static String myUserName = "test@gmail.com";
    static String myPassword = "SUTD@Singapore";
    static String myResponse = "thank you";

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
            if(links.get(i).getText().equals( "Login" )){
                links.get( i ).click();
                WebElement username = driver.findElement(By.name("loginEmail"));

                Thread.sleep(1000);

                // send my user name to fill up the box
                username.sendKeys(myUserName);

                Thread.sleep(1000);
                WebElement password = driver.findElement(By.name("loginPassword"));

                Thread.sleep(1000);
                // send my password to fill up the box
                password.sendKeys(myPassword);


            }



        }
        java.util.List<WebElement> buttonList = driver.findElements( By.tagName("button"));
        for(int i=0;i<buttonList.size();i++ ){
            if(buttonList.get(i).getText().equals( "Submit" )){
                buttonList.get( i ).click();
            }
        }
        Thread.sleep(2000);

        WebDriverWait wait = new WebDriverWait(driver, 15);
        wait.until( ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div/div/div[2]/div/table/tbody/tr[2]"))).click();


        WebElement response = driver.findElement(By.xpath("//*[@id=\"reply\"]"));
        Thread.sleep(1000);
        response.sendKeys(myResponse);

        Thread.sleep(1000);

        driver.findElement( By.xpath( "//*[@id=\"dropdown-split-basic\"]" ) ).click();
        Thread.sleep(1000);

        driver.findElement( By.xpath( "/html/body/div[3]/div/div/div[2]/div[1]/div[2]/form/div[2]/div/div/a[2]" ) ).click();
        Thread.sleep(1000);

        driver.findElement( By.xpath( "/html/body/div[3]/div/div/div[2]/div[1]/div[2]/form/div[2]/div/button[1]" ) ).click();



    }
}
