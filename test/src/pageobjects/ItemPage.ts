/**
 * Contains selectors for a Home page
 */

export const ItemPage = {
    AddToBasketIcon: '[data-testid="addToBasket"]',
    AddToBasketButton: '[data-testid="addToBasketButton"]',
    AddToBasketSuccessView: '[data-testid="bottomSheetHeader"] span',

    SizeSheet:{
        SizeOption:'[data-testid="sizeOptionList"] > li:nth-child(3)'
    },

    BasketPage:{
        HeaderBasketIcon:'[data-testid="HeaderBasket"] > span > span > span',
        TotalBasketValue: '[data-testid="basketTotalProducts"]'
    }
}