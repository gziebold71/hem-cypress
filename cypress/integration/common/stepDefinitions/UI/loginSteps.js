import LoginPage from '../../../pages/LoginPage/LoginPage';
const addContext = require('mochawesome/addContext');

const loginPage = new LoginPage();

When(
    'I enter the account id of {string}',
    (accountId) => {
        loginPage.typeInAccountIdTxtBox(accountId);
    }
);

When(
    'I click the Sell Offsets button',
    (accountId) => {
        loginPage.clickSellOffsetsButton();
    }
);


