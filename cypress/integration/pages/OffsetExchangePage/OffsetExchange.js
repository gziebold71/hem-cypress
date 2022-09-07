var elements = require('./elements')
class ESGMarketplacePage {
    verifyPageTitle(value) {
        return cy.get(elements.ESGMARKETPLACEPAGE.PAGE_TITLE).should('contain.text', value);
    }

    verifyOffsetId(value) {
        return cy.get(elements.ESGMARKETPLACEPAGE.SUMMARY_ROW).contains(value).should('contain.text', value);
    }

    clickCancelGoBackButton(){
        cy.wait(500)
        return cy.get(elements.ESGMARKETPLACEPAGE.CANCEL_GO_BACK_BUTTON).contains('Cancel and Go back').click()
    }

    clickFinalizeListingButton(){
        cy.wait(500)
        return cy.get(elements.ESGMARKETPLACEPAGE.FINALIZE_LISTING_BUTTON).contains('Connect wallet').click()
    }
}
export default ESGMarketplacePage;