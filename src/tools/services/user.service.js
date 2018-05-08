import api from '../api';

export default {

    /**
     * 登录
     */
    login: function (username, password) {
        return api.get('/login', {
            username,
            password
        });
    }
};
