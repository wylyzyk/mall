import Toast from "./Toast";

const toastObj = {
  install(Vue) {
    // 创建组件构造器
    const ToastContructor = Vue.extend(Toast);

    // 通过new的方式将组件构造器挂载到元素上
    const toast = new ToastContructor().$mount(document.createElement("div"));

    // 在body中插入这个组件
    document.body.appendChild(toast.$el);

    Vue.prototype.$toast = toast;
  }
};


export default toastObj;