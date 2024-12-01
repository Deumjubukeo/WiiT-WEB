import Vue from "vue";
import Toast from "@/components/toast/toast.vue"; 

const ToastConstructor = Vue.extend(Toast);

const showToast = (message, type = "info", duration = 3000) => {
  const toastInstance = new ToastConstructor(); 
  toastInstance.$mount(); 
  document.body.appendChild(toastInstance.$el); 

  
  toastInstance.showToast(message, type, duration);

  
  setTimeout(() => {
    document.body.removeChild(toastInstance.$el);
    toastInstance.$destroy();
  }, duration + 300); 
};

export default showToast;
