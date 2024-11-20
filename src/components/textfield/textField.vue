<template>
  <div class="text-field-main" :class="{ active: textBox }">
    <input
      :name="name"
      :value="internalValue"
      @input="handleChange"
      :placeholder="placeholder"
      :type="inputType"
      :maxlength="name === 'memberEmail' ? 30 : 15"
      @keydown="handleKeyDown"
      class="text-field"
    />
    <img
      v-if="type === 'text'"
      :src="deleteButton"
      @click="handleClear"
      alt="clear button"
    />
    <img
      v-else
      :src="showPassword ? openEye : closeEye"
      @click="togglePasswordVisibility"
      alt="toggle password visibility"
    />
  </div>
</template>

<script>
import { ref, computed, watch, defineComponent } from 'vue';
import deleteButton from '@/assets/img/textfield/close_ring_fill.svg';
import openEye from '@/assets/img/textfield/open-eye.svg';
import closeEye from '@/assets/img/textfield/close-eye.svg';

export default defineComponent({
  name: 'TextField',
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: String,
    type: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    onChange: {
      type: Function,
      required: false,
    },
    onKeyDown: {
      type: Function,
      required: false,
    },
  },
  setup(props) {
    const showPassword = ref(false);
    const textBox = ref(false);
    const internalValue = ref(props.value);

    const inputType = computed(() => {
      return props.type === 'password' && !showPassword.value
        ? 'password'
        : 'text';
    });

    const handleChange = (e) => {
      if (props.onChange) {
        props.onChange(e);
      }
    };

    const handleClear = () => {
      internalValue.value = '';
      if (props.onChange) {
        props.onChange({
          target: {
            name: props.name,
            value: '',
          },
        });
      }
    };

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    watch(
      () => props.value,
      (newValue) => {
        internalValue.value = newValue;
      }
    );

    const handleKeyDown = (e) => {
      if (props.onKeyDown) {
        props.onKeyDown(e);
      }
    };

    return {
      showPassword,
      textBox,
      internalValue,
      inputType,
      handleChange,
      handleClear,
      togglePasswordVisibility,
      deleteButton,
      openEye,
      closeEye,
      handleKeyDown,
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
.text-field-main.active {
  border-color: #1a9a18;
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
