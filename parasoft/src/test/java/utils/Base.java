package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import pageObjects.AccountOverview;
import pageObjects.AddCustomer;
import pageObjects.HomePage;
import pageObjects.LoginPage;
import pageObjects.TransferFunds;

public class Base {

	public static WebDriver driver;
	public static Properties prop;
	public Library myLibrary;
	public HomePage homepage;
	public AddCustomer addcustomer;
	public LoginPage loginpage;
	public TransferFunds transferfunds;
	public AccountOverview accountoverview;

	public WebDriver intilizeDriver() throws IOException {
		myLibrary = new Library();
		prop = new Properties();
		FileInputStream fis = new FileInputStream("src/test/resources/config.properties");
		prop.load(fis);

		String browserName = prop.getProperty("browser");
		if (browserName.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
			driver = new ChromeDriver();

		} else if (browserName.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", "src/test/resources/drivers/geckodriver.exe");
			driver = new FirefoxDriver();

		} else if (browserName.equalsIgnoreCase("IE")) {
			System.setProperty("webdriver.ie.driver", "src/test/resources/drivers/IEDriverServer.exe");
			driver = new InternetExplorerDriver();

		} else {

			System.out.println("Sorry the browser is not supported");
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		return driver;
	}

}
