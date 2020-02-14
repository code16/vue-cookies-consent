<template>
    <div class="cookies-item">
        <h3 class="cookies-item__title">
            {{ title }}
            <span class="text-muted">({{ $t('required') }})</span>
        </h3>
        <div class="row">
            <div class="col">
                <slot />
            </div>
            <div class="col-auto">
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" :aria-label="title" :disabled="required">
                </div>
                <input @change="handleCheckChanged">
            </div>
        </div>
    </div>
</template>

<script>
    import { $t } from '../util/i18n';

    export default {
        inject: ['manageForm'],
        props: {
            group: String,
            title: String,
            required: Boolean,
        },
        methods: {
            $t,
            handleCheckChanged(e) {
            },
        },
    }
</script>