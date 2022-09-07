var elements = require('./elements')
class HeaderPage {
    clickMenuButton(value) {
        return cy.get(elements.HEADER.MENU_BUTTON).click();
    }
}
export default HeaderPage;