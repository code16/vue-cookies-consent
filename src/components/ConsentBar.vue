<script>
    import CookieLaw from 'vue-cookie-law';
    import mixin from '../mixin';

    // cf. cookie-law docs : https://github.com/apertureless/vue-cookie-law
    export default {
        mixins:[mixin],
        extends: CookieLaw,
        methods: {
            setVisited() {
                this.handleApproval();
            },
            getVisited() {
                return !this.shouldDisplayBar;
            }
        },
        mounted() {
            if(this.cookiesAllowed) {
                this.$emit('accept');
            }
        }
    }
</script>