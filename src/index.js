import ConsentBar from './components/ConsentBar';
import ConsentCheckbox from './components/ConsentCheckbox';
import { defaultLocale } from "./util/i18n";

export default {
    install(Vue, options = {}) {
        Vue.prototype.$cookiesConsent = {
            cookieName: 'cookies_consent',
            locale: defaultLocale(),
            ...options,
        };
        Vue.component('cookies-consent-bar', ConsentBar);
        Vue.component('cookies-consent-checkbox', ConsentCheckbox);
    }
}