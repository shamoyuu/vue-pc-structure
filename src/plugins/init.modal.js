export default {
    install (Vue, options) {
        Vue.mixin({
            created () {
                this.$modal = { };
            }
        });
    }
};
