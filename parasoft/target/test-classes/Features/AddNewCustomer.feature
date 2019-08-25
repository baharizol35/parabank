Feature: Adding new customer


Scenario: Registering new account

Given Open IE browser 
When Go to "https://parabank.parasoft.com/parabank/index.htm"
And Click to Register Link on Homepage
Then User should land to Customer Details page
And Put Customer details 
When Click Register button
Then User should get text "Your account was created successfully. You are now logged in."
And Close browser


