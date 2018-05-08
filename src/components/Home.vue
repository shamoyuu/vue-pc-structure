<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <router-link to="/">回去</router-link>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            msg: '首页'
        };
    },
    mounted: function () {}
};
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
