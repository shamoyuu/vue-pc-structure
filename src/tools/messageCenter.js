/**
 * 消息中心，提供一个全消息注册及广播服务，作为各模块之间通信使用
 *
 * this.$messageCenter.subonce("msg", data => console.info("第一次订阅", data));
 * this.$messageCenter.subonce("msg", data => console.info("第二次订阅", data));
 * this.$messageCenter.pubonce("msg", {x: 1, y: 2});
 * 带有once的方法是只能订阅一次，后面订阅的会覆盖前面的，会打印【第二次订阅 {x: 1, y: 2}】
 *
 * this.$messageCenter.subscribe("msg", data => console.info("第一次订阅", data));
 * this.$messageCenter.subscribe("msg", data => console.info("第二次订阅", data));
 * this.$messageCenter.publish("msg", {x: 1, y: 2});
 * 不带once的方法可以多次订阅，所有订阅的方法都会按顺序执行，会打印【第一次订阅 {x: 1, y: 2}】和【第二次订阅 {x: 1, y: 2}】
 *
 * 当然，他们是成套使用的
 */

// 用来存储可以重复订阅的事件
let eventList = {};
// 用来存储只能订阅一次的事件，后面相同的订阅会覆盖前面的
let onceEventList = {};

export default {

    /**
     * 用来订阅消息
     * @param messageNames 消息名称
     * @param callback 回调函数
     */
    subscribe (messageName, callback) {
        if (eventList[messageName] === undefined) {
            eventList[messageName] = [];
        }
        eventList[messageName].push(callback);
    },

    /**
     * 发送消息
     * @param messageNames 消息名称，也可以是数组
     * @param data 需要发送的数据
     */
    publish (messageNames, data) {
        if (typeof messageNames === 'string') {
            messageNames = [messageNames];
        }
        messageNames.map(function (messageName) {
            eventList[messageName].map(function (callback) {
                callback(data);
            });
        });
    },

    /**
     * 用来订阅一次的消息
     * @param messageName 消息名称
     * @param callback 回调函数
     */
    subonce (messageName, callback) {
        onceEventList[messageName] = callback;
    },

    /**
     * 用来发送订阅一次的消息
     * @param messageNames 消息名称，也可以是数组
     * @param data 需要发送的数据
     */
    pubonce (messageNames, data) {
        if (typeof messageNames === 'string') {
            messageNames = [messageNames];
        }
        messageNames.map(function (messageName) {
            onceEventList[messageName](data);
        });
    }
};
