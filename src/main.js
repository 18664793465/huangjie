// vue构造函数
import Vue from "vue";
//app组件（以vue结尾的文件都是组件）
import App from "./App.vue";
//路由对象
import router from "./router";
import Vant, { Toast } from "vant";
import axios from "axios";
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://localhost:3000";
router.beforeEach((to, from, next) => {
  // console.log(to);

  if (to.meta.authorization == true) {
    const uesrJson = JSON.parse(localStorage.getItem("uesr")) || {};
    console.log(uesrJson);

    if (uesrJson.token) {
      next();
    } else {
      next("/login");
    }
  }
  next();
});
axios.interceptors.response.use(
  res => {
    console.log(res);

    return res;
  },
  error => {
    console.log(error);
    const { statusCode, message } = error.response.data;
    if (statusCode === 400) {
      Toast.fail(message);
    }
    return Promise.reject(error);
  }
);
Vue.use(Vant);

//上线环境是否提示信息
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
