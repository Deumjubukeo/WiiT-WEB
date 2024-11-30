<template>
  <div class="text-field-main" :class="{ active: textBox }" :style="customStyle">
    <input
      :name="name"
      :value="value"
      @input="handleInput"
      :placeholder="placeholder"
      :type="inputType"
      @blur="handleBlur"
      class="text-field"
    />
    <img
      v-if="type === 'text'"
      :src="deleteButton"
      @click="handleClear"
      alt="Clear Input"
    />
    <img
      v-else
      :src="showPassword ? openEye : closeEye"
      @click="togglePasswordVisibility"
      alt="Toggle Password Visibility"
    />
  </div>
</template>

<script>
import { ref, computed, defineComponent } from "vue";
import deleteButton from "@/assets/img/textfield/close_ring_fill.svg";
import openEye from "@/assets/img/textfield/open-eye.svg";
import closeEye from "@/assets/img/textfield/close-eye.svg";

export default defineComponent({
  name: "TextField",
  props: {
    value: String,
    name: String,
    placeholder: String,
    type: {
      type: String,
      default: "text",
    },
    customStyle: Object,
  },
  emits: ["updateState"],
  setup(props, { emit }) {
    const showPassword = ref(false);
    const textBox = ref(false);

    const inputType = computed(() =>
      props.type === "password" && !showPassword.value ? "password" : "text"
    );

    const handleInput = (event) => {
      emit("updateState", event.target.value);
    };

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const handleBlur = () => {
      textBox.value = false;
    };

    const handleClear = () => {
      emit("updateState", "");
    };

    return {
      showPassword,
      textBox,
      inputType,
      togglePasswordVisibility,
      handleBlur,
      handleInput,
      handleClear,
      deleteButton,
      openEye,
      closeEye,
    };
  },
});
</script>

<style scoped>
.text-field-main {
  display: flex;
  height: 48px;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #c4c4c4;
  background: #fff;
}
.text-field-main:focus {
  border: 1px solid #1a9a18;
}
.text-field {
  width: 80%;
  height: 100%;
  padding: 10px 20px 10px 10px;
  font-size: 16px;
  border: none;
  background: #fff;
  outline: none;
}
.text-field::placeholder {
  color: #c4c4c4;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
}
img {
  cursor: pointer;
  width: 20px;
  height: 20px;
}
</style>
