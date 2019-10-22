<template>
  <div class="container">
    <h1 class="display-1">
      Post {{$route.params.id}}
    </h1>
  </div>
</template>
<script>
export default {
  validate({params}) {
    return /^\d+$/.test(prams.id)
  }
}
</script>