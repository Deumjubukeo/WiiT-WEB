import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 

const defaultOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
};

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

const success = (message, options= {}) =>
  showToast(message, 'success', options);

const error = (message, options= {}) =>
  showToast(message, 'error', options);

const info = (message, options= {}) =>
  showToast(message, 'info', options);

const warn = (message, options= {}) =>
  showToast(message, 'warn', options);

export default {
  success,
  error,
  info,
  warn,
};
