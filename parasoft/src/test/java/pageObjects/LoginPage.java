package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

	public WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(linkText="Open New Account")
	public WebElement openNewAccountLink;
	
	@FindBy(id="type")
	public WebElement accountsDropdown;
	
	@FindBy(xpath="//input[@class='button']")
	public WebElement openNewAccountBtn;
	
	@FindBy(id="newAccountId")
	public WebElement newAccountNumber;
	
	@FindBy(xpath= "//a[contains(text(),'Transfer Funds')]")
	public WebElement transferFunds;
	
	@FindBy(xpath="//a[contains(text(),'Accounts Overview')]")
	public WebElement accountOverview;
	
}


