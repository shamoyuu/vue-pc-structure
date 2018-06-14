<template>
    <div id="app">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {};
    },
    mounted () {
        this.$messageCenter.subonce('msg', data => console.info('subonce第一次订阅', data));
        this.$messageCenter.subonce('msg', data => console.info('subonce第二次订阅', data));
        this.$messageCenter.pubonce('msg', {x: 1, y: 2});

        this.$messageCenter.subscribe('msg', data => console.info('subscribe第一次订阅', data));
        this.$messageCenter.subscribe('msg', data => console.info('subscribe第二次订阅', data));
        this.$messageCenter.publish('msg', {x: 1, y: 2});
    }
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
