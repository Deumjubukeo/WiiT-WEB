import Vue from "vue";
import Toast from "@/components/toast/toast.vue"; 

const ToastConstructor = Vue.extend(Toast);

const showToast = (message, type = "info", duration = 3000) => {
  const toastInstance = new ToastConstructor(); // Toast 인스턴스 생성
  toastInstance.$mount(); // 인스턴스를 수동으로 마운트
  document.body.appendChild(toastInstance.$el); // DOM에 추가

  // Toast 표시
  toastInstance.showToast(message, type, duration);

  // 애니메이션 종료 후 DOM에서 제거
  setTimeout(() => {
    document.body.removeChild(toastInstance.$el);
    toastInstance.$destroy();
  }, duration + 300); // fade-out 애니메이션 고려
};

export default showToast;
