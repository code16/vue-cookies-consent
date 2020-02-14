<template>
    <div>
        <slot />

    </div>
</template>

<script>
    export default {
        provide() {
            return {
                manageForm: this,
            }
        },
        props: {

        },
    }
</script>