Feature: Creating Checking and Saving Account and trasferring amount


Background: User is in Balance Page
Given User Succesfully LoggedIn
When Clicks to OpenNewAccount 
Then User shoould see the options


Scenario: Creating new Checking account
When User select CHECKINGS from from options
And Click Open New Account button
Then User should see new account number

Scenario: Creating new Savings account
When User select SAVINGS from options
And Click Open New Account button
Then User should see account number

Scenario: Transfer funds from Checking account to Saving account
When Click to TransferFunds
And Provide the amount
When Choose Checking account as fromAccount
And Choose Saving account as toAccount
When Click transfer button
Then User should see confirmation message "Transfer Complete!"

Scenario: Check Checking balance and Saving Balance
When User clicks Account Overview
Then User should see Account table
When User checking the Checking balance
Then User should see the remain balance
When User checking the Saving account 
Then User should see the actual balance
