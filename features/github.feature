Feature: Searching for TestCafe on GitHub

  I want to find TestCafe repository on GitHub

  Scenario: Searching for TestCafe on GitHub
    Given I open the GitHub page
    When I am typing my search request "TestCafe" on GitHub
    Then I am pressing enter key on GitHub
    Then I should see that the first GitHub's result is DevExpress/testcafe

  Scenario: Try to use TestCafe Role
    Given I open the GitHub page
    Then I am trying to use Role
