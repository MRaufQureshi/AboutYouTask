// API request payload
import axios from "axios";

const headers:any = {'Content-Type': 'application/json'};
const payload = JSON.stringify({
    "variantId": 43221895,
    "quantity": 1,
    "customData": {
        "variantId": 43221895,
        "productId": 5700577,
        "sponsoredType": null,
        "sortingChannel": "sponsored_mobile_web_default",
        "linkedContentType": "category",
        "linkedContentId": 20258,
        "originDevice": "mobile"
    },
    "shopId":688
});

// API request configuration

async function getURL(){
    const tmpToken = await browser.execute(() => localStorage.getItem('tadarida-session-v1'));
    return ('https://m.aboutyou.de/api/basket/v9/items?with=items.product.attributes,items.product.variants,items.product.images.attributes:legacy(false),items.product.priceRange,items.variant.attributes&shopId=688&sId='+JSON.parse(tmpToken).sessionId);
}

async function getSessionId(): Promise<string> {
    return await getURL();
}

// Call to add product to basket endpoint:
export async function addProduct(){
    try {
      await axios.post(await getSessionId(),payload,{headers:headers});
    } catch (err) {console.log(`ERROR: ${err}`)}
}