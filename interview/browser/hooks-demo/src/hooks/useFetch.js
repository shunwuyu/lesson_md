import { ref, onMounted } from 'vue'

export default function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  onMounted(async () => {
    try {
      loading.value = true
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  })

  return { data, error, loading }
}