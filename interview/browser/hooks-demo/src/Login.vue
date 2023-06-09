<template>
    <form @submit="handleSubmit">
      <div>
        <label>Username</label>
        <input type="text" name="username" v-model="state.username" @change="handleChange">
        <span v-if="errors.username">{{ errors.username }}</span>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" v-model="state.password" @change="handleChange">
        <span v-if="errors.password">{{ errors.password }}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script setup>
  import useFormValidation from './hooks/useFormValidation'
  const { state, errors, handleSubmit, handleChange } = useFormValidation(
    {
        username: '',
        password: ''
    },
    (values) => {
        const errors = {}
        if (!values.username) {
        errors.username = 'Username is required'
        }
        if (!values.password) {
        errors.password = 'Password is required'
        }
        return errors
    }
)
console.log(state);
</script>