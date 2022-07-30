import {AboutYouNativeSelectors} from "../pageobjects/AboutYouNative";
import {Base} from "../../object/Base";
import {HomePage} from "../pageobjects/NativeHomePage";
import {SearchPage} from "../pageobjects/SearchPage";
import {data} from "../data/data";
import {addProduct} from "../api/AddProductApi";
import getValue from "webdriverio/build/commands/element/getValue";
import Tokens from "../data/Storage";
import {ItemPage} from "../pageobjects/ItemPage";

describe('AboutYou Business Critical Path', () => {
    let searchTerm = 'Jeans';
    const basketCount = "1";

    beforeAll(async () => {
        await Base.open('');
        await Base.click(AboutYouNativeSelectors.CookieBanner.OkButton);
        await Base.click(AboutYouNativeSelectors.GoToAppBanner.CancelButton);
    });

   it('should verify Home Page UI', async () => {
       console.log ('Checking Home Page UI - If all Button are displayed successfully');
        await expect(Base.select(HomePage.HeaderBanner.MenuButton)).toBeDisplayed();
        await expect(Base.select(HomePage.HeaderBanner.CompanyLogo)).toBeDisplayed();
        await expect(Base.select(HomePage.HeaderBanner.SearchButton)).toBeDisplayed();
        await expect(Base.select(HomePage.HeaderBanner.WishListButton)).toBeDisplayed();
        await expect(Base.select(HomePage.HeaderBanner.BasketButton)).toBeDisplayed();
    });

    it('should verify "Search" UI for products', async () => {
        await Base.open('/search')
        console.log ('Checking Search UI - If all Button are displayed successfully');
        await expect(Base.select(SearchPage.SearchBanner.SwitchText)).toBeDisplayed();
        await expect(Base.select(SearchPage.SearchBanner.WomenButton)).toBeDisplayed();
        await expect(Base.select(SearchPage.SearchBanner.MenButton)).toBeDisplayed();
        await expect(Base.select(SearchPage.SearchBanner.KidsButton)).toBeDisplayed();
        await expect(Base.select(SearchPage.SearchBanner.SearchBarBackButton)).toBeDisplayed();
        await expect(Base.select(SearchPage.SearchBanner.SearchTextField)).toBeDisplayed();
        await expect(await Base.getText(SearchPage.SearchBanner.SwitchText)).toEqual(data.searchUILable);
    });

    it('should perform "Search" functionality and add products to "Basket"', async () => {
        await Base.open('/search')
        console.log ('Checking if product is successfully added to the basket');
        await Base.setValue(SearchPage.SearchBanner.SearchTextField,searchTerm);
        await Base.click(SearchPage.SearchResult.SearchResultItem);
        await Base.click(ItemPage.AddToBasketIcon);
        await Base.click(ItemPage.AddToBasketButton);
        await Base.click(ItemPage.SizeSheet.SizeOption);
        await Base.select(ItemPage.AddToBasketSuccessView);
        await expect(await Base.getText(ItemPage.AddToBasketSuccessView)).toEqual(data.addToBasketSuccessViewLabel);
        await expect(Base.select(ItemPage.AddToBasketSuccessView)).toBeDisplayed();
        await expect(await Base.getText(ItemPage.BasketPage.HeaderBasketIcon)).toEqual(basketCount);
    });

    it('should add "Product" to the Basket', async () => {
        console.log ('Add Product to the shopping basket');
        await Base.getSession();
        await Base.open('/basket')
        await addProduct(); /* Api implementation WIP */
        await browser.pause(2000);

        // await browser.refresh();
    });

});


