package stepDefinitions;

import static org.junit.Assert.assertTrue;

import java.io.IOException;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.AccountOverview;
import pageObjects.AddCustomer;
import pageObjects.HomePage;
import pageObjects.LoginPage;
import pageObjects.TransferFunds;
import utils.Base;

public class CreatingCheckingandSavingsAccount extends Base {

	public static String checkingAccountNumber;
	public static String savingAccountNumber;
	public String amount ="10";
	public String defaultBalance = "100";

	@Given("User Succesfully LoggedIn")
	public void user_Succesfully_LoggedIn() throws IOException {
		intilizeDriver();
		driver.get(prop.getProperty("url"));
		homepage = new HomePage(driver);
		homepage.username.sendKeys(AddCustomer.userName);
		homepage.passsword.sendKeys(AddCustomer.password);
		homepage.loginBtn.click();

	}

	@When("Clicks to OpenNewAccount")
	public void clicks_to_OpenNewAccount() {
		loginpage = new LoginPage(driver);
		loginpage.openNewAccountLink.click();
	}

	@Then("User shoould see the options")
	public void user_shoould_see_the_options() {
		assertTrue(loginpage.accountsDropdown.isDisplayed());

	}

	@When("User select CHECKINGS from from options")
	public void user_select_CHECKINGS_from_from_options() {
		myLibrary.selectDropDownVisibleText(loginpage.accountsDropdown, "CHECKING");
	}

	@When("Click Open New Account button")
	public void click_Open_New_Account_button() {
		loginpage.openNewAccountBtn.click();
	}

	@Then("User should see new account number")
	public void user_should_see_new_account_number() {
		checkingAccountNumber = loginpage.newAccountNumber.getText();
		System.out.println("Checking acount number is" + checkingAccountNumber);
		driver.close();
		driver.quit();
	}

	@When("User select SAVINGS from options")
	public void user_select_SAVINGS_from_options() {
		myLibrary.selectDropDownVisibleText(loginpage.accountsDropdown, "SAVINGS");
		loginpage.openNewAccountBtn.click();


	}

	@Then("User should see account number")
	public void user_should_see_account_number() {
		savingAccountNumber = loginpage.newAccountNumber.getText();
		System.out.println("Saving acount number is" + savingAccountNumber);
		driver.close();
		driver.quit();
	}

	@When("Click to TransferFunds")
	public void click_to_TransferFunds() throws Exception {
		loginpage.transferFunds.click();

	}

	@When("Provide the amount")
	public void provide_the_amount() throws Throwable {
		transferfunds = new TransferFunds(driver);
		Thread.sleep(5000);
		transferfunds.amountField.sendKeys(amount);

	}

	@When("Choose Checking account as fromAccount")
	public void choose_Checking_account_as_fromAccount() throws Exception {
		myLibrary.selectDropDownVisibleText(transferfunds.fromaccount, checkingAccountNumber);

	}

	@When("Choose Saving account as toAccount")
	public void choose_Saving_account_as_toAccount() throws Exception {
		myLibrary.selectDropDownVisibleText(transferfunds.toaccount, savingAccountNumber);
	}

	@When("Click transfer button")
	public void click_transfer_button() {
		transferfunds.transferBtn.click();
	}

	@Then("User should see confirmation message {string}")
	public void user_should_see_confirmation_message(String string) throws Exception {
		Thread.sleep(3000);
		assertTrue(transferfunds.transferCompleteMessage().contains("Transfer Complete"));
		driver.close();
		driver.quit();

	}

	@When("User clicks Account Overview")
	public void user_clicks_Account_Overview() {
		loginpage.accountOverview.click();

	}

	@Then("User should see Account table")
	public void user_should_see_Account_table() {
		accountoverview = new AccountOverview(driver);
		assertTrue(accountoverview.accountTable.isDisplayed());

	}

	@When("User checking the Checking balance")
	public void user_checking_the_Checking_balance() {
		assertTrue(accountoverview.checkingAccountNum.getText().equalsIgnoreCase(checkingAccountNumber));

	}

	@Then("User should see the remain balance")
	public void user_should_see_the_remain_balance() {
       // int checkinBalance =
		// Integer.parseInt(accountoverview.checkingBalance.getText());
		String checAcBal = accountoverview.checkingBalance.getText();
		System.out.println("Checking account balance is " + checAcBal);
		System.out.println(checAcBal + "="+ defaultBalance + "-" + amount);
	}

	@When("User checking the Saving account")
	public void user_checking_the_Saving_account() {
		assertTrue(accountoverview.savingAccount.getText().equalsIgnoreCase(savingAccountNumber));

	}

	@Then("User should see the actual balance")
	public void user_should_see_the_actual_balance() {
		String savingBal =accountoverview.savingBalance.getText();
		System.out.println("Saving account balance is " + savingBal);
		System.out.println(savingBal + "="+ defaultBalance + "+" + amount);
		driver.close();
		driver.quit();

	}

}
