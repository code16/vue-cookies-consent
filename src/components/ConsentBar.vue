<template>
    <div>
        <transition appear>
            <template v-if="opened">
                <div class="cookies-bar">
                    <div class="row">
                        <div class="col-sm">
                            <slot name="message">{{ message }}</slot>
                        </div>
                        <div class="col-sm-auto">
                            <div class="row">
                                <div class="col-auto">
                                    <button class="btn btn-link cookies-bar__link" v-b-toggle.manage-cookies>{{ linkText || $t('manage') }}</button>
                                </div>
                                <div class="col-auto">
                                    <button class="btn cookies-bar__btn" @click="handleAcceptButtonClicked">{{ buttonText || $t('accept') }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </transition>

        <b-modal id="manage-cookies">
            <ManageForm />
        </b-modal>
    </div>
</template>

<script>
    import { BModal, VBToggle } from 'bootstrap-vue';
    import { $t } from '../util/i18n';
    import ManageForm from "./ManageForm";

    export default {
        components: {
            BModal,
            ManageForm,
        },
        props: {
            linkText: String,
            buttonText: String,
        },
        data() {
            return {
                opened: false,
            }
        },
        methods: {
            $t,
            handleAcceptButtonClicked() {

            },
        },
        directives: {
            VBToggle,
        }
    }
</script>