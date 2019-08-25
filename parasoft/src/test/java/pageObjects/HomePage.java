package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {

	public WebDriver driver;

	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(name = "username")
	public WebElement username;

	@FindBy(name = "password")
	public WebElement passsword;

	@FindBy(linkText = "Register")
	public WebElement registerLink;
	
	@FindBy(xpath="//div[@class='login']//input[@class='button']")
	public WebElement loginBtn;

	public void signIn(String username, String password) {
		this.username.sendKeys(username);
		this.passsword.sendKeys(password);
		loginBtn.click();

	}

}
