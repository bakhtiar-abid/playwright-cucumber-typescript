Feature: Login page feature




Scenario: Login with valid Username and invalid password
      Given user go to login page
      When user enters username "latexaid@gmail.com"
      And user enters password "1234567"
      And user clicks on Login button
      Then user should see error message "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect"


Scenario: Login with incorrect credentials
     Given user go to login page
    When user enters username "noname@gmail.com"
    And user enters password "123456123"
    And user clicks on Login button
    Then user should see error message if no customer found "Login was unsuccessful. Please correct the errors and try again.No customer account found"


Scenario: Login without giving any credentials
    Given user go to login page
    When user enters username ""
    And user enters password ""
    And user clicks on Login button
    Then user should see error message as "Please enter your email"

Scenario: Login with correct credentials
   
    When user enters username "abid@gmail.com"
    And user enters password "123456"
    And user clicks on Login button
    # And user click on my account page
    # Then page title should be "Your store. Login"



Scenario: Login with wrong email in Email field
    
    When user enters username "hello@"
    And user enters password ""
    And user clicks on Login button
    Then user should see wrong email error "Wrong email"