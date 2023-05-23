<template>
    <div class="input-wrapper">
      <label :for="id">{{ label }}</label>
      <input 
        :id="id" 
        :name="name" 
        :type="type" 
        :value="inputValue"
        :placeholder="placeholder"
        @input="onInput($event.target.value)"
        @blur="onBlur()"
      >
      <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'Input',
    props: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      type: { type: String, default: 'text' },
      label: { type: String, default: '' },
      placeholder: { type: String, default: '' },
      value: { type: String, default: '' },
      validate: { type: Function, default: () => true },
    },
    emits: ['update:value', 'blur'],
    setup(props, { emit }) {
      const inputValue = ref(props.value)
      const errorMessage = ref('')
  
      function onInput(value: string) {
        inputValue.value = value
        if (!props.validate(value)) {
          errorMessage.value = 'Invalid input'
        } else {
          errorMessage.value = ''
          emit('update:value', value)
        }
      }
  
      function onBlur() {
        emit('blur')
      }
  
      return {
        inputValue,
        errorMessage,
        onInput,
        onBlur,
      }
    }
  })
  </script>
  
  <style scoped>
  .input-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  input {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .error-message {
    color: red;
  }
  </style>