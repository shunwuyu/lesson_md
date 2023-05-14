<template>
  <div class="body">
      <NavBar/>
      <main class="container">
          <slot/>
      </main>
  </div>
</template>
<style>
.body {
  min-width: 1000px;
}
</style>