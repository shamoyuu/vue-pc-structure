import axios from 'axios';
import Vue from 'vue';

// 设置全局请求为ajax请求
axios.interceptors.request.use((config) => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    return config;
});

// 错误处理
axios.interceptors.response.use(
    (response) => {
        let result = response.data;

        if (!result) {
            result = {
                code: 1002,
                message: '未获取到数据'
            };
        }

        // code为1001表示正常返回数据，其他情况表示有错误，错误信息由message提供
        switch (result.code) {
            case 1001:
                return result.data;
            case 1002:
                // 没有登录
                break;
            case 1003:
                // 参数错误
                break;
            case 1004:
                // 已在其他页面登录

                break;
            default:
                break;
        }

        let err = new Error(result.message);

        err.data = result;
        err.response = response;

        throw err;
    },
    (err) => {
        if (err && err.response) {
            if (err.response.status === 404) {
                err.message = '请求地址不存在';
            } else {
                err.message = '网络异常，请稍后重试[' + err.response.status + ']';
            }
        } else {
            err.message = '网络异常，请稍后重试';
        }

        Vue.prototype.instance.$message({
            showClose: true,
            type: 'error',
            message: err.message
        });
        return Promise.reject(err);
    }
);

export default axios;
