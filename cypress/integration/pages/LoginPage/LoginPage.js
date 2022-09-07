var elements = require('./elements')
class LoginPage {
    typeInAccountIdTxtBox(value) {
        return cy.get(elements.LOGINPAGE.ACCOUNT_ID).clear().type(value);
    }

    clickBuyOffsetsButton() {
        return cy.contains(elements.LOGINPAGE.BUY_OFFSETS_BUTTON).click();
    }

    clickSellOffsetsButton() {
        return cy.contains(elements.LOGINPAGE.SELL_OFFSETS_BUTTON).click();
    }

    clickConnectWalletButton() {
        return cy.contains(elements.LOGINPAGE.CONNECT_WALLET_BUTTON).click();
    }

}
export default LoginPage;