<template>
    <div class="login">
        <h1>登录</h1>

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
</style>
