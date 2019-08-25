package utils;

import static org.testng.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.github.javafaker.Faker;

public class Library {

	public WebDriver driver;
	
	
	
	public void selectDropDownVisibleText(WebElement element, String visibleText) {
		try {
			Select st = new Select(element);
			st.selectByVisibleText(visibleText);
		} catch (Exception e) {
			assertTrue(false);
		}
	}

	public void selectDropDownValue(WebElement element, String Value) {
		try {
			Select st = new Select(element);
			st.selectByValue(Value);
		} catch (Exception e) {
			assertTrue(false);
		}

	}

	public void selectDropDownIndex(WebElement element, int index) {
		try {
			Select st = new Select(element);
			st.selectByIndex(index);
		} catch (Exception e) {
			assertTrue(false);
		}

	}

	public void moveToElement(WebElement element) {
		Actions act = new Actions(driver);
		act.moveToElement(element);

	}

	public void clickHiddenElement(WebElement element) {
		try {
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("arguments[0].click();", element);
		} catch (Exception e) {
			assertTrue(false);

		}
	}

	public WebElement waitForElementWisibility(WebElement element) throws Exception {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement waiting = wait.until(ExpectedConditions.visibilityOf(element));
		return waiting;
		
	
	}		


	public WebDriver switchWindow(int index) {

		Set<String> windows = driver.getWindowHandles();
		Iterator<String> it = windows.iterator();
		List<String> openWindows = new ArrayList<String>();
		while (it.hasNext()) {
			openWindows.add(it.next());
		}
		driver.switchTo().window(openWindows.get(index));
		return driver;

	}
	public static String randomString() {
		String generateRandomString = RandomStringUtils.random(5);
		return (generateRandomString);
	}
	
	
	public static String fakeString () {
		
		Faker faker = new Faker();
		String fakeName = faker.name().firstName();
		return fakeName;
		
	}
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

