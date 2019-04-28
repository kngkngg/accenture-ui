package com.example.piano.seleniumTesting;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class CheckContactUsFormUnsuccessful {
    static String myName = "haha";
    static String myEmail = "whatever@mymail.com";
    static String myContact = "00000000";
    static String myMessage = "bababababababababababababababababa";

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
            if(links.get(i).getText().equals( "Contact us" )){
                links.get( i ).click();

                /////unsuccessful case: user didn't fill in all the information needed in the form. e.g. name
                //WebElement name = driver.findElement(By.name("name"));
                //Thread.sleep(1000);
                //name.sendKeys(myName);

                Thread.sleep(1000);

                WebElement email = driver.findElement(By.name("email"));
                Thread.sleep(1000);
                email.sendKeys(myEmail);

                WebElement contact = driver.findElement(By.name("contact"));
                Thread.sleep(1000);
                contact.sendKeys(myContact);


                Select selectIssue = new Select(driver.findElement( By.id("formTopic") ));
                selectIssue.selectByVisibleText( "API DevOps" );
                Thread.sleep(1000);
                selectIssue.selectByVisibleText( "Aesop" );


                Thread.sleep(1000);
                WebElement message = driver.findElement(By.name("message"));
                Thread.sleep(1000);
                message.sendKeys(myMessage);

                WebElement submitButton = driver.findElement( By.tagName( "button" ) );
                submitButton.click();

            }


        }





    }
}
