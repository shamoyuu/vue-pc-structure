<template>
    <div class="login">
        <h1>登录</h1>
        <img src="../../static/img/logo.png">
        <div class="logo"></div>
    </div>
</template>

<script>
import userService from '@/tools/services/user.service.js';

export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    },
    mounted: function () {
        let that = this;

        // 使用service调用接口
        userService.login('zhangsan', '123')
            .then(function (data) {
                console.info(data);
            })
            .catch(that.$errorHandle);

        that.$modal.login.show();
    }
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
.logo {
    width: 200px;
    height: 200px;
    background: url(../../static/img/logo.png) 0 0 no-repeat;
}
</style>
