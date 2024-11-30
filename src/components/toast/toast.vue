<template>
    <div
      v-if="isVisible"
      :class="['toast', type]"
      :style="{ zIndex }"
    >
      <div class="toast-message">{{ message }}</div>
    </div>
  </template>
  
  
  <script>
export default {
  name: "ToastComponent",
  data() {
    return {
      isVisible: false,
      message: "",
      type: "",
      zIndex: 9999,
      timeout: null,
      duration: 3000,
      startTime: null,
      remainingTime: 0,
      isPaused: false, // Hover 상태 확인
    };
  },
  computed: {
    progressBarStyle() {
      const elapsed = this.isPaused
        ? 0 // Hover 상태에서는 진행률 고정
        : Date.now() - this.startTime;
      const progress = Math.min(
        ((this.duration - this.remainingTime + elapsed) / this.duration) * 100,
        100
      );
      return {
        width: `${progress}%`,
        transition: this.isPaused ? "none" : `width ${this.remainingTime / 1000}s linear`,
      };
    },
  },
  methods: {
    showToast(message, type = "info", duration = 3000) {
      this.message = message;
      this.type = type;
      this.duration = duration;
      this.remainingTime = duration;
      this.isVisible = true;
      this.startTime = Date.now();

      this.startTimer();
    },
    startTimer() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.isVisible = false;
      }, this.remainingTime);
    },
    pauseTimer() {
      if (!this.isPaused) {
        clearTimeout(this.timeout);
        const elapsed = Date.now() - this.startTime;
        this.remainingTime -= elapsed;
        this.isPaused = true;
      }
    },
    resumeTimer() {
      if (this.isPaused) {
        this.startTime = Date.now();
        this.isPaused = false;
        this.startTimer();
      }
    },
  },
};
  </script>
  
  <style>
  .toast {
  position: fixed;
  width: 200px;
  height: 50px;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  animation: fadeIn 0.3s, fadeOut 0.3s 2.7s;
  line-height: 30px;
  font-weight: 600;
  font-size: 1rem;
}

.toast-message {
  position: relative;
  z-index: 1;
}

.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  background-color: #ffffff;
  z-index: 0;
}


.toast.info {
  background-color: #2196f3;
}

.toast.success {
  background-color: #4caf50;
}

.toast.error {
  background-color: #f44336;
}

.toast.warning {
  background-color: #ff9800;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

  </style>
  