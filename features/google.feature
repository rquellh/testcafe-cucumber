Feature: Searching for TestCafe by Google

  I want to find TestCafe repository by Google search

  Scenario: Searching for TestCafe by Google
    Given I am open Google's search page
    When I am typing my search request "github TestCafe" on Google
    Then I press the "enter" key on Google
    Then I should see that the first Google's result is "GitHub - DevExpress/testcafe:"


  Scenario: Failing scenario
    Given I am open Google's search page
    When I am typing my search request "github TestCafe" on Google
    Then I press the "enter" key on Google
    Then I should see that the first Google's result is "kittens"