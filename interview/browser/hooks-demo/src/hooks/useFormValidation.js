import { ref } from 'vue'

export default function useFormValidation(initialState, validate) {
  const state = ref(initialState)
  const errors = ref({})

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validate(state.value)
    if (Object.keys(validationErrors).length > 0) {
      errors.value = validationErrors
    } else {
      errors.value = {}
      // Here you can perform any action with the validated data.
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    state.value[name] = value
  }

  return {
    state,
    errors,
    handleSubmit,
    handleChange
  }
}