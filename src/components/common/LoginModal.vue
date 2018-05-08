<template>
    <transition name="fade">
        <div class="modal-wrapper" v-show="show">
            内容
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        show: Boolean
    },
    data () {
        return {
            popusInfo: []
        };
    },
    methods: {

    },
    mounted: function () {

    }
};
</script>

<style scoped>

</style>
