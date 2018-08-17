import axios from 'axios';

export default {
    props: {
        status: String, // 'deny' or 'approve'
    },
    computed: {
        resolvedStatus() {
            return this.status || this.$cookie.get(this.$cookiesConsent.cookieName);
        },
        doNotTrack() {
            return this.$cookiesConsent.checkDoNotTrack && (navigator.doNotTrack || navigator.msDoNotTrack);
        },
        cookiesAllowed() {
            return this.resolvedStatus === 'approve' && !this.doNotTrack;
        },
        cookiesForbidden() {
            return this.resolvedStatus === 'deny' || this.doNotTrack;
        },
        shouldDisplayBar() {
            return !this.resolvedStatus;
        }
    },
    methods: {
        handleApproval(endpoint = this.$cookiesConsent.consentUrl) {
            axios.post(endpoint);
        },
        handleDenial(endpoint = this.$cookiesConsent.refuseUrl) {
            axios.post(endpoint);
        },
    }
}