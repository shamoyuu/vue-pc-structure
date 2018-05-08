import LoginModalComponent from '@/components/common/LoginModal';

let $vm;

export default {
    install (Vue, options) {
        Vue.mixin({
            created () {
                this.$modal.login = {
                    show () {
                        if (!$vm) {
                            const LoginModal = Vue.extend(LoginModalComponent);
                            $vm = new LoginModal({
                                el: document.createElement('div')
                            });
                            document.body.appendChild($vm.$el);
                        }

                        $vm.show = true;
                    },
                    hide () {
                        $vm.show = false;
                    }
                };
            }
        });
    }
};
