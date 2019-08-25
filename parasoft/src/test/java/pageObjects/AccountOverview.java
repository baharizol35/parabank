package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountOverview {

	public WebDriver driver;

	public AccountOverview(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "accountTable")
	public WebElement accountTable;
	
	@FindBy(xpath="//*[@id=\"accountTable\"]/tbody/tr[2]/td[1]")
	public WebElement checkingAccountNum;
	
	@FindBy(xpath="//*[@id=\"accountTable\"]/tbody/tr[2]/td[2]")
	public WebElement checkingBalance;
	
	@FindBy(xpath="//*[@id=\"accountTable\"]/tbody/tr[3]/td[1]")
	public WebElement savingAccount;
	
	@FindBy(xpath="//*[@id=\"accountTable\"]/tbody/tr[3]/td[2]")
	public WebElement savingBalance;
}
