import ConsentBar from './components/ConsentBar';
import ConsentCheckbox from './components/ConsentCheckbox';
import VueCookie from 'vue-cookie';

export default {
    install(Vue, options={}) {
        let {
            approvalUrl='/cookies/consent',
            denialUrl='/cookies/refuse',
            cookieName='cookies_consent',
            checkDoNotTrack=true
        } = options;

        Vue.use(VueCookie);

        Vue.prototype.$cookiesConsent = {
            ...options,
        };
        Vue.component('cookies-consent-bar', ConsentBar);
        Vue.component('cookies-consent-checkbox', ConsentCheckbox);
    }
}