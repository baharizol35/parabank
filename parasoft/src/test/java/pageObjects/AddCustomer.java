package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.github.javafaker.Faker;

public class AddCustomer {
	
	public WebDriver driver;
	public static  String userName;
	public static String password;
	
	/***
	 * I could locte here each element of the page, but since I use this only 1 time
	 * I just created technic method .addDetails()
	 * 
	 * 
	 */

	public AddCustomer (WebDriver driver) {
		this.driver=driver;
	}

	public void addDteils() {
		WebElement firstName = driver.findElement(By.id("customer.firstName"));
		firstName.sendKeys(new Faker().name().firstName());
		WebElement lastName = driver.findElement(By.id("customer.lastName"));
		lastName.sendKeys(new Faker().name().lastName());
		WebElement address = driver.findElement(By.id("customer.address.street"));
		address.sendKeys(new Faker().address().streetName());
		WebElement city = driver.findElement(By.id("customer.address.city"));
		city.sendKeys(new Faker().address().city());
		WebElement state = driver.findElement(By.id("customer.address.state"));
		state.sendKeys(new Faker().address().state());
		WebElement zipCode = driver.findElement(By.id("customer.address.zipCode"));
		zipCode.sendKeys(String.valueOf(new Faker().address().zipCode()));
		WebElement ssn = driver.findElement(By.id("customer.ssn"));
		ssn.sendKeys("000000000");
		WebElement usernameField = driver.findElement(By.id("customer.username"));
		userName= new Faker().name().username();
		usernameField.sendKeys(userName);
		System.out.println("Username is: " + userName);
		WebElement passwordField= driver.findElement(By.id("customer.password"));
		password=new Faker().internet().password();
		passwordField.sendKeys(password);
		WebElement repeatedPassword = driver.findElement(By.id("repeatedPassword"));
		repeatedPassword.sendKeys(password);
		System.out.println("Password is :" + password);
	}
		public WebElement registerBtn () {
			WebElement registerBtn = driver.findElement(By.xpath("//table[@class='form2']//input[@class='button']"));
			return registerBtn;

		}
		
		
	
		
	}


