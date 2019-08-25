$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/AddNewCustomer.feature");
formatter.feature({
  "name": "Adding new customer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Registering new account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Open IE browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddingCustomerSteps.open_IE_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to \"https://parabank.parasoft.com/parabank/index.htm\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddingCustomerSteps.go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Register Link on Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "AddingCustomerSteps.click_to_Register_Link_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land to Customer Details page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingCustomerSteps.user_should_land_to_Customer_Details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Put Customer details",
  "keyword": "And "
});
formatter.match({
  "location": "AddingCustomerSteps.put_Customer_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Register button",
  "keyword": "When "
});
formatter.match({
  "location": "AddingCustomerSteps.click_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get text \"Your account was created successfully. You are now logged in.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingCustomerSteps.user_should_get_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "AddingCustomerSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/CreateCheckingAndSavingAcount.feature");
formatter.feature({
  "name": "Creating Checking and Saving Account and trasferring amount",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "User is in Balance Page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Succesfully LoggedIn",
  "keyword": "Given "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_Succesfully_LoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks to OpenNewAccount",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.clicks_to_OpenNewAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shoould see the options",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_shoould_see_the_options()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating new Checking account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User select CHECKINGS from from options",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_select_CHECKINGS_from_from_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Open New Account button",
  "keyword": "And "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.click_Open_New_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see new account number",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_should_see_new_account_number()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User is in Balance Page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Succesfully LoggedIn",
  "keyword": "Given "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_Succesfully_LoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks to OpenNewAccount",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.clicks_to_OpenNewAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shoould see the options",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_shoould_see_the_options()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating new Savings account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User select SAVINGS from options",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_select_SAVINGS_from_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Open New Account button",
  "keyword": "And "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.click_Open_New_Account_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027ANARHOME-PC\u0027, ip: \u002710.238.35.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d75.0.3770.140 (2d9f97485c7b07dc18a74666574f19176731995c-refs/branch-heads/3770@{#1155}), userDataDir\u003dC:\\Users\\salma\\AppData\\Local\\Temp\\scoped_dir19916_26530}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54419}, acceptInsecureCerts\u003dfalse, browserVersion\u003d76.0.3809.100, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows nt, setWindowRect\u003dtrue}]\nSession ID: 81ba6b8560a64e81704fa3fef02df44c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy13.click(Unknown Source)\r\n\tat stepDefinitions.CreatingCheckingandSavingsAccount.click_Open_New_Account_button(CreatingCheckingandSavingsAccount.java:54)\r\n\tat ✽.Click Open New Account button(file:src/test/resources/Features/CreateCheckingAndSavingAcount.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should see account number",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_should_see_account_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "User is in Balance Page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Succesfully LoggedIn",
  "keyword": "Given "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_Succesfully_LoggedIn()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027ANARHOME-PC\u0027, ip: \u002710.238.35.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d75.0.3770.140 (2d9f97485c7b07dc18a74666574f19176731995c-refs/branch-heads/3770@{#1155}), userDataDir\u003dC:\\Users\\salma\\AppData\\Local\\Temp\\scoped_dir30580_14964}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54442}, acceptInsecureCerts\u003dfalse, browserVersion\u003d76.0.3809.100, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows nt, setWindowRect\u003dtrue}]\nSession ID: 00c6f358ad72976927ce476ce159d6c4\n*** Element info: {Using\u003dname, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:485)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy13.sendKeys(Unknown Source)\r\n\tat stepDefinitions.CreatingCheckingandSavingsAccount.user_Succesfully_LoggedIn(CreatingCheckingandSavingsAccount.java:29)\r\n\tat ✽.User Succesfully LoggedIn(file:src/test/resources/Features/CreateCheckingAndSavingAcount.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Clicks to OpenNewAccount",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.clicks_to_OpenNewAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User shoould see the options",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_shoould_see_the_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Transfer funds from Checking account to Saving account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click to TransferFunds",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.click_to_TransferFunds()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Provide the amount",
  "keyword": "And "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.provide_the_amount()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Choose Checking account as fromAccount",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.choose_Checking_account_as_fromAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Choose Saving account as toAccount",
  "keyword": "And "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.choose_Saving_account_as_toAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click transfer button",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.click_transfer_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see confirmation message \"Transfer Complete!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_should_see_confirmation_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "User is in Balance Page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Succesfully LoggedIn",
  "keyword": "Given "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_Succesfully_LoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks to OpenNewAccount",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.clicks_to_OpenNewAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User shoould see the options",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_shoould_see_the_options()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check Checking balance and Saving Balance",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks Account Overview",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_clicks_Account_Overview()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Account table",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_should_see_Account_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checking the Checking balance",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_checking_the_Checking_balance()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the remain balance",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_should_see_the_remain_balance()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checking the Saving account",
  "keyword": "When "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_checking_the_Saving_account()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.CreatingCheckingandSavingsAccount.user_checking_the_Saving_account(CreatingCheckingandSavingsAccount.java:150)\r\n\tat ✽.User checking the Saving account(file:src/test/resources/Features/CreateCheckingAndSavingAcount.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should see the actual balance",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingCheckingandSavingsAccount.user_should_see_the_actual_balance()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "Creating new Checking Account",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create new Checking Account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is in the HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "LogginIn.user_is_in_the_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides valid Credentials",
  "keyword": "When "
});
formatter.match({
  "location": "LogginIn.user_provides_valid_Credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.100)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027ANARHOME-PC\u0027, ip: \u002710.238.35.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d75.0.3770.140 (2d9f97485c7b07dc18a74666574f19176731995c-refs/branch-heads/3770@{#1155}), userDataDir\u003dC:\\Users\\salma\\AppData\\Local\\Temp\\scoped_dir32660_14888}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54483}, acceptInsecureCerts\u003dfalse, browserVersion\u003d76.0.3809.100, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows nt, setWindowRect\u003dtrue}]\nSession ID: e12955e673553ccc996951bd685dade0\n*** Element info: {Using\u003dname, value\u003dpassword}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:485)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy13.sendKeys(Unknown Source)\r\n\tat pageObjects.HomePage.signIn(HomePage.java:31)\r\n\tat stepDefinitions.LogginIn.user_provides_valid_Credentials(LogginIn.java:24)\r\n\tat ✽.User provides valid Credentials(file:src/test/resources/Features/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "LogginIn.user_should_successfully_login()"
});
formatter.result({
  "status": "skipped"
});
});