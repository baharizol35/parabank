package stepDefinitions;

import java.io.IOException;

import org.testng.Assert;

import cucumber.api.java.en.*;
import pageObjects.AddCustomer;
import pageObjects.HomePage;
import utils.Base;

public class LogginIn extends Base {

	
	@Given("User is in the HomePage")
	public void user_is_in_the_HomePage() throws IOException {
		intilizeDriver();
		driver.get(prop.getProperty("url"));
	}

	@When("User provides valid Credentials")
	public void user_provides_valid_Credentials() {
		homepage = new HomePage(driver);
		homepage.signIn(AddCustomer.userName, AddCustomer.password);
	}

	@Then("User should successfully login")
	public void user_should_successfully_login() {
		Assert.assertTrue(driver.getTitle().contains("Accounts Overview"));
		driver.close();
		driver.quit();
	}
}
