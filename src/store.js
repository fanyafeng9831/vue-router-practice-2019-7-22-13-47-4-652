import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //使用vuex插件

//创建Vuex实例
const store = new Vuex.Store({
    state: {
        info: {
            msg1: "",
            msg2: ""
        }
    },
    getters: {
        getAllMessage(state) {
            return state.info;
        }
    },
    mutations: {
        updateAllMsg(state, data) {
            window.console.log(data);
            state.info.msg1 = data.msg1;
            state.info.msg2 = data.msg2;
        }
    },
    actions: {
        updateMsg(context) {
            const axios = require("axios");
            axios
                .get("http://127.0.0.1:8080/hello")
                .then(function (response) {
                    context.commit('updateAllMsg', response.data);
                })
                .catch(function (error) {
                    window.console.log("error");
                })
                .finally(function () {
                    window.console.log("finally");
                });
        }
    }
})

//导出store
export default store;