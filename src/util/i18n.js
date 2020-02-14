import * as i18n from '../lang';

function navigatorLang() {
    const lang = navigator.language || navigator.userLanguage || '';
    return lang.split('-')[0];
}

export function defaultLocale() {
    return document.documentElement.lang || navigatorLang() || 'en';
}

export function $t(key) {
    const conf = this.$cookiesConsent || {};
    const messages = i18n[conf.locale] || i18n.en;
    return messages[key];
}