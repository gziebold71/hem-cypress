@API
Feature: Get offsets

  Scenario: valid that a valid GET request to offsets returns a 200 and the correct account and list type for UNLISTED offsets
    Given I make a GET request for "offsets?account_id=0.0.47879120&list_state=UNLISTED"
    Then Verify '@get_offsets' response status code is 200
    When I verify that all returned offsets are of type "UNLISTED"
    And I verify that all returned offsets are owned by "0.0.47879120"
  
  @HEM-191
  Scenario: valid that a valid GET request to offsets returns a 200 and no results when list_state is LISTED but user doesn't have any
    Given I make a GET request for "offsets?account_id=0.0.47879120&list_state=LISTED"
    Then Verify '@get_offsets' response status code is 200
    And I verify that no offsets are returned
    And I verify that all returned offsets are owned by "0.0.47879120"

  @HEM-191
  Scenario: valid that a valid GET request to offsets returns a 200 and the correct account when list_state is either LISTED or ALL for an account with only LISTED assets
    Given I make a GET request for "offsets?account_id=0.0.47983148&list_state=LISTED"
    Then Verify '@get_offsets' response status code is 200
    And I verify that all returned offsets are of type "LISTED"
    And I verify that all returned offsets are owned by "0.0.47983148"

    When I make a GET request for "offsets?account_id=0.0.47983148&list_state=ALL"
    Then Verify '@get_offsets' response status code is 200
    And I verify that all returned offsets are of type "LISTED"
    And I verify that all returned offsets are owned by "0.0.47983148"

  @HEM-191 @HEM-262
  Scenario: valid that a valid GET request to offsets returns a 200 and the correct account when list_state is either LISTED or ALL for an account with only LISTED and UNLISTED assets
    Given I make a GET request for "offsets?account_id=0.0.47983222&list_state=LISTED"
    Then Verify '@get_offsets' response status code is 200
    And I verify that all returned offsets are of type "LISTED"
    And I verify that all returned offsets are owned by "0.0.47983222"

    When I make a GET request for "offsets?account_id=0.0.47983222&list_state=UNLISTED"
    Then Verify '@get_offsets' response status code is 200
    And I verify that all returned offsets are of type "UNLISTED"
    And I verify that all returned offsets are owned by "0.0.47983222"

    When I make a GET request for "offsets?account_id=0.0.47983222&list_state=ALL"
    Then Verify '@get_offsets' response status code is 200
    And I verify that the returned offsets are of type "LISTED" and "UNLISTED"
    And I verify that all returned offsets are owned by "0.0.47983222"

  @HEM-191 @HEM-262
  Scenario: valid that a valid GET request to offsets returns a 200 and returns all offsets when list_state param is not provided
    When I make a GET request for "offsets?account_id=0.0.47983222"
    Then Verify '@get_offsets' response status code is 200
    And I verify that the returned offsets are of type "LISTED" and "UNLISTED"
    And I verify that all returned offsets are owned by "0.0.47983222"

  Scenario: valid that a invalid GET request to offsets returns a 400
    Given I make a GET request for "offsets?account_id=abc&list_state=UNLISTED"
    Then Verify '@get_offsets' response status code is 400