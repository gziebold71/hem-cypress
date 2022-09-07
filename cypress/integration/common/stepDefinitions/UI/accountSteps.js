import AccountPage from '../../../pages/AccountPage/AccountPage';
const addContext = require('mochawesome/addContext');

const accountPage = new AccountPage();

Then(
    'I verify that account card on the page displays the account id of {string}',
    (accountId) => {
        accountPage.verifyAccountIdOnCard(accountId);
    }
);

When('I click the first offset listed on the page',
    () => {
        accountPage.clickFirstOffset();
    }
);

Then('I verify that the List Selected button is enabled', 
    () => {
        accountPage.verifyListSelectedButton();
    }
    
);

When('I click the List Selected button',
    () => {
        accountPage.clickListSelectedButon();
    }
);

Then('I verify that the first offset listed on the page is selected',
    () => {
        accountPage.verifyFirstOffsetSelected();
    }
)

Then('I verify that their are no offsets listed',
    () => {
        accountPage.verifyNoOffsetsListed();
    }
)

Then('I verify that all of the users {string} offsets ids are displayed',
    (accountId) => {
        cy.getState("offsetData").then(body => {
            for(let i = 0; i < body.offsets.length; i ++) {
                let expectedValue = body.offsets[i].offset.nft.token_id + ' (' + body.offsets[i].offset.nft.serial_number + ')';
                if ((i)%10 == 0 && (i != 1 && i != 0)){
                    accountPage.clickNextOffsetButton();
                }
                accountPage.verifyOffsetRowData(expectedValue) 
              }
    })
})
