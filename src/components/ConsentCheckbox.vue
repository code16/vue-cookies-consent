<template>
    <div class="form-check">
        <input id="cookies-consent-checkbox"
            class="form-check-input"
            type="checkbox"
            :checked="cookiesForbidden"
            :disabled="doNotTrack"
            @change="handleChanged"
        >
        <label class="form-check-label" for="cookies-consent-checkbox"><slot>Refuse cookies</slot></label>
    </div>
</template>

<script>
    import mixin from '../mixin';

    export default {
        name:'CookiesConsentCheckbox',
        mixins:[mixin],
        methods: {
            handleChanged(e) {
                if(e.target.checked) {
                    this.handleDenial();
                } else {
                    this.handleApproval();
                }
            }
        }
    }
</script>