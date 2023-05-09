<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const { name } = useAppConfig();
useHead({
  titleTemplate(title) {
    return title ? `${title} - ${name}` : name;
  },
});
onMounted(() => {
  const currentUserFromStorage = useLocalStorage('currentUser');
  if (currentUserFromStorage) {
    const currentUser = useState('currentUser');
    currentUser.value = currentUserFromStorage;
  }
});
</script>
