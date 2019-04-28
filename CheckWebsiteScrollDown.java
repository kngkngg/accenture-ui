package com.example.piano.seleniumTesting;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class CheckWebsiteScrollDown {
    static String myEmail = "abc@Accenture.com";
    static String myPassword = "SUTD@Singapore";
    public static void main(String[] args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver","/Users/lyd/Desktop/chromedriver");
        WebDriver driver = new ChromeDriver();
        JavascriptExecutor js = (JavascriptExecutor) driver;


        //System.setProperty("webdriver.chrome.driver","/Users/sudiptac/sudiptac/teaching/SUTD/50.003@2018/Test/chromedriver");
        //WebDriver driver = new ChromeDriver();

        //driver.get("https://sudiptac.bitbucket.io");
        driver.get("http://localhost:3000/");
        //driver.get("https://www.google.com.sg");

        // get all the links
        java.util.List<WebElement> links = driver.findElements( By.tagName("a"));
        System.out.println(links.size());
        js.executeScript("window.scrollBy(0,500)");
        Thread.sleep(1000);
        js.executeScript("window.scrollBy(0,1000)");
        Thread.sleep(1000);
        js.executeScript("window.scrollBy(0,5000)");
        Thread.sleep(1000);
        js.executeScript("window.scrollBy(0,1000)");
        Thread.sleep(1000);
        js.executeScript("window.scrollBy(0,-500)");
        Thread.sleep(1000);
        js.executeScript("window.scrollBy(0,-500)");





    }
}
