import ESGMarketplacePage from '../../../pages/OffsetExchangePage/OffsetExchange';
const addContext = require('mochawesome/addContext');

const esgMarketplacePage = new ESGMarketplacePage();

Then(
    'I verify that the title of the page is {string}',
    (pageTitle) => {
        esgMarketplacePage.verifyPageTitle(pageTitle);
    }
);

Then(
    'I verify on the ESG Marketplace that the offset id of {string} is displayed',
    (offsetId) => {
        esgMarketplacePage.verifyOffsetId(offsetId)

    }
)

When(
    'I click the Cancel and Go Back button',
    () => {
        esgMarketplacePage.clickCancelGoBackButton()
    }
)

When(
    'I click the Finalize Listing button',
    () => {
        esgMarketplacePage.clickFinalizeListingButton()
    }
)