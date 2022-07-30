/**
 * Contains selectors for a page
 */

/* WIP - Should be distributed according to different object files */

export const AboutYouNativeSelectors = {
    /* WIP */
    loginPage: {
        loginSelector: {
            UserName: '',
            Password: '',
            SignInButton: ''
        }
    },

    GoToAppBanner:{
        CancelButton:'[aria-label="Cancel"]',
    },

    CookieBanner:{
        SettingsButton:'#onetrust-button-group #onetrust-pc-btn-handler',
        OkButton:'#onetrust-button-group #onetrust-accept-btn-handler',
    },
};