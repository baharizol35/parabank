package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TransferFunds {

	public WebDriver driver;

	public TransferFunds(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}

	@FindBy(id = "amount")
	public WebElement amountField;

	@FindBy(id = "fromAccountId")
	public WebElement fromaccount;

	@FindBy(id = "toAccountId")
	public WebElement toaccount;

	@FindBy(xpath = "//input[@class='button']")
	public WebElement transferBtn;

	@FindBy(xpath = "//h1[@class='title']")
	public WebElement transferMessage;

	public String transferCompleteMessage() {
		String transferMsg = transferMessage.getText();
		return transferMsg;

	}

}
