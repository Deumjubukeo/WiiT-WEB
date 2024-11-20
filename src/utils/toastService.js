import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; // 스타일 추가

// 토스트 알림 타입
// type ToastType = 'success' | 'error' | 'info' | 'warn';

// 토스트 알림 기본 설정
const defaultOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
};

// 토스트 알림 표시 함수
const showToast = (message, type, options = {}) => {
  const mergedOptions = { ...defaultOptions, ...options };

  switch (type) {
    case 'success':
      toast.success(message, mergedOptions);
      break;
    case 'error':
      toast.error(message, mergedOptions);
      break;
    case 'info':
      toast.info(message, mergedOptions);
      break;
    case 'warn':
      toast.warn(message, mergedOptions);
      break;
    default:
      toast(message, mergedOptions);
      break;
  }
};

// 성공 토스트
const success = (message, options= {}) =>
  showToast(message, 'success', options);

// 오류 토스트
const error = (message, options= {}) =>
  showToast(message, 'error', options);

// 정보 토스트
const info = (message, options= {}) =>
  showToast(message, 'info', options);

// 경고 토스트
const warn = (message, options= {}) =>
  showToast(message, 'warn', options);

export default {
  success,
  error,
  info,
  warn,
};
