package com.example.piano.seleniumTesting;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CheckProtectedLinkAdminDashboard {
    static String myEmail = "abc@Accenture.com";
    static String myPassword = "SUTD@Singapore";
    public static void main(String[] args) throws InterruptedException {
        System.setProperty( "webdriver.chrome.driver", "/Users/lyd/Desktop/chromedriver" );
        WebDriver driver = new ChromeDriver();
        JavascriptExecutor js = (JavascriptExecutor) driver;


        //System.setProperty("webdriver.chrome.driver","/Users/sudiptac/sudiptac/teaching/SUTD/50.003@2018/Test/chromedriver");
        //WebDriver driver = new ChromeDriver();

        //driver.get("https://sudiptac.bitbucket.io");

        driver.get( "http://localhost:3000/admin/dashboard" );

    }
}
