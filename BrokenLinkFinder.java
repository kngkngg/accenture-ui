package com.example.piano.seleniumTesting;

import java.net.HttpURLConnection;
import javax.net.ssl.HttpsURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BrokenLinkFinder {
	
	// this is a function which checks whether a given hyper link in a web page is broken
	public static void brokenLinkChecker(URL hyperLink) throws Exception {
		//hyperLink = new URL("https://istd.sutd.edu.sg");
		String acknowledge = null;
		int code = 0;
		HttpURLConnection linkConnection = (HttpURLConnection) (hyperLink.openConnection());
		try {	
			System.out.println("*** Checking link " + hyperLink.toString());
			// initiate an HTTP connection
		    linkConnection.connect();
		    // check whether the connection is responding
		    acknowledge = linkConnection.getResponseMessage();
		    code = linkConnection.getResponseCode();
		    // disconnect the connection links
		    linkConnection.disconnect();
		    System.out.println("*** The link " + "returned " + code);
		} catch(Exception e) {
		    System.out.println("*** The link " + "is not HTTP or requires certificate validation, message = " + acknowledge);
		}  				
	}
		
	public static void main(String[] args) throws Exception {		
		System.setProperty("webdriver.chrome.driver","/Users/lyd/Desktop/chromedriver");
		WebDriver driver = new ChromeDriver();

		//System.setProperty("webdriver.chrome.driver","/Users/sudiptac/sudiptac/teaching/SUTD/50.003@2018/Test/chromedriver");
		//WebDriver driver = new ChromeDriver();

		driver.get("http://localhost:3000/");
		//driver.get("https://istd.sutd.edu.sg/");
		//driver.get("https://www.google.com.sg");
		
		// get all the links
		java.util.List<WebElement> links = driver.findElements(By.tagName("a"));
		System.out.println(links.size());
				
		// print all the links
		for (int i = 0; i < links.size(); i=i+1) {
			System.out.println(i + " " + links.get(i).getText());
			System.out.println(i + " " + links.get(i).getAttribute("href"));
		}
		
		// call broken link checker for all the links found
		for (int i = 0; i < links.size(); i=i+1) {
		try {
				brokenLinkChecker(new URL(links.get(i).getAttribute("href")));
		} catch (Exception e) {
				System.out.println("This is not a proper HTTP URL or requires certificate validation " + links.get(i).getAttribute("href"));
		}
	  }
	}
}
