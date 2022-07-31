/**
 * Contains selectors for a Home page
 */

export const SearchPage = {
    SearchBanner: {
        SwitchText: '[data-testid="TopCategorySwitchText"]',
        WomenButton: '[data-testid="genderCategory_Women"]',
        MenButton: '[data-testid="genderCategory_Men"]',
        KidsButton: '[data-testid="genderCategory_Kids"]',
        SearchBarBackButton: '[data-testid="backSearchButton"]',
        SearchTextField: '[data-testid="searchInputText"]',
    },

    SearchResult: {
        BackButton: '[data-testid="backIconWrapper"]',
        WishListButton: '[data-test-id="wishlistIconWrapper"]',
        SearchResultItem: '[data-testid="ProductSuggestionItem"]:nth-child(2)'
    }
}