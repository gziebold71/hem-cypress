import { first, groupBy } from 'lodash';

var elements = require('./elements')
class AccountPage {
    verifyAccountIdOnCard(account_id) {
        return cy.get(elements.ACCOUNTPAGE.ACCOUNT_CARD).text().then(value => {
            cy.log("Text is :", value);
            expect(value).to.include(account_id);
            
          });
    }

    clickFirstOffset(){
            cy.get('[value="0.0.47879125"]').first().check()

    }

    clickNextOffsetButton(){
        cy.get(elements.ACCOUNTPAGE.NEXT_PAGE).first().click()
    }

    verifyListSelectedButton(){
        cy.get(elements.ACCOUNTPAGE.LIST_SELECTED_BUTTON).parent().should('be.enabled')
       }

    clickListSelectedButon(){
        cy.get(elements.ACCOUNTPAGE.LIST_SELECTED_BUTTON).click()
    }

    verifyFirstOffsetSelected(){
        cy.get('[value="0.0.47879125"]').first().should('be.checked')
    }

    verifyNoOffsetsListed(){
        cy.get(elements.ACCOUNTPAGE.NO_OFFSETS).should('be.visible')
    }

    verifyOffsetRowData(offsetValue){
        cy.get(elements.ACCOUNTPAGE.OFFSET_DETAIL_ROW).contains(offsetValue).text().should((value) =>{
            expect(value).to.contain(offsetValue)
        })
    }
}
export default AccountPage;