package stepDefinitions;

import java.io.IOException;

import org.openqa.selenium.By;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.AddCustomer;
import pageObjects.HomePage;
import utils.Base;

public class AddingCustomerSteps extends Base {

	
	@Given("Open IE browser")
	public void open_IE_browser() throws IOException {
		intilizeDriver();
	}

	@When("Go to {string}")
	public void go_to(String string) {
		driver.get(string);
	    
	}

	@When("Click to Register Link on Homepage")
	public void click_to_Register_Link_on_Homepage() throws Exception {
	 homepage = new HomePage(driver);
//	  myLibrary.waitForElementWisibility(homepage.registerLink());
//	  myLibrary.clickHiddenElement(homepage.registerLink());
	  homepage.registerLink.click();
	}

	@Then("User should land to Customer Details page")
	public void user_should_land_to_Customer_Details_page() {
	  System.out.println("This is register page title" + driver.getTitle());
	}

	@Then("Put Customer details")
	public void put_Customer_details() {
		addcustomer= new AddCustomer(driver);
		addcustomer.addDteils();
	
	}

	@When("Click Register button")
	public void click_Register_button() {
	  addcustomer.registerBtn().click();
	}

	@Then("User should get text {string}")
	public void user_should_get_text(String string) {
		Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"rightPanel\"]/p")).getText().equalsIgnoreCase(string));
	
	}

	@Then("Close browser")
	public void close_browser() {
	    driver.close();
	    driver.quit();
	}
	
	

		
		
		
		
		
		
	}
	
	
	
	
	

