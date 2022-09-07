@UI
Feature: Navigating to HEM and login as seller

  Scenario: Perform Search
    Given I open the HEM page
    When I enter the account id of "0.0.47879120"
    And I click the Sell Offsets button
    Then I verify that account card on the page displays the account id of "0.0.47879120"
    And I verify that the title of the page is "Offset Exchange"