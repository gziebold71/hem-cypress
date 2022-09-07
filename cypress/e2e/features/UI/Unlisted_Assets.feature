@UI
Feature: Unlisted Assets
@HEM-88
Scenario: Choose 1 or more of my unlisted offsets
    Given I open the HEM page
    And I enter the account id of "0.0.47879120"
    And I click the Sell Offsets button
    When I click the first offset listed on the page
    Then I verify that the List Selected button is enabled

@HEM-157
Scenario: Review summary of chosen unlisted asset
    Given I open the HEM page
    And I enter the account id of "0.0.47879120"
    And I click the Sell Offsets button
    When I click the first offset listed on the page
    And I click the List Selected button  
    Then I verify that the title of the page is "Offset Exchange"
    # And I verify that the offset I selected to list is displayed on the ESG Marketplace page

@HEM-158
Scenario: Express intent to List
    Given I open the HEM page
    And I enter the account id of "0.0.47879120"
    And I click the Sell Offsets button
    And I click the first offset listed on the page
    And I click the List Selected button 
    Then I verify on the ESG Marketplace that the offset id of "0.0.47879125 (1)" is displayed

    When I click the Cancel and Go Back button
    Then I verify that the List Selected button is enabled
    And I verify that the first offset listed on the page is selected

@HEM-159
Scenario: Final Cancel before Listing
    Given I open the HEM page
    And I enter the account id of "0.0.47879120"
    And I click the Sell Offsets button
    And I click the first offset listed on the page
    And I click the List Selected button     
    When I click the Finalize Listing button
    # this is going to require some behind the scenes work as cypress cannot interact with other windows

@HEM-149
Scenario: As a Seller, View all my offsets (if only unlisted)
    Given I open the HEM page
    When I enter the account id of "0.0.47900310"   
    And I click the Sell Offsets button
    Then I verify that their are no offsets listed 

@HEM-149 @HEM-87
Scenario: As a Seller, View all my offsets (if only unlisted)
    Given I make a GET request for "offsets?accountID=0.0.47879120&listType=UNLISTED"
    And I save the user offset data
    And I open the HEM page
    And I enter the account id of "0.0.47879120" 
    And I click the Sell Offsets button
    Then I verify that all of the users "UNLISTED" offsets ids are displayed 
