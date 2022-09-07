@API
Feature: Get offsets

  @HEM-300
  Scenario: validate that a valid GET request to price returns a 200 and a max and min price
    Given I make a GET request for "price?nfts=0.0.48139234&nfts=0.0.48139266&nfts=0.0.47879125&nfts=0.0.47879130"
    Then Verify '@get_offsets' response status code is 200
    When I verify that all returned NFTS have a max and min price

  @HEM-300
  Scenario: valid that a invalid GET request to price returns a 400
    Given I make a GET request for "price"
    Then Verify '@get_offsets' response status code is 400
  