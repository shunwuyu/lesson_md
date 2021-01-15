<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <nuxt-link
          :to="{ name: 'index' }"
          class="navbar-brand">NINGHAO</nuxt-link>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link
              :to="{ name: 'posts' }"
              class="nav-link">Posts</nuxt-link>
          </li>
        </ul>  
      </div>
    </nav>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<style>
.navbar-brand {
  letter-spacing: 2px;
  font-weight: bold;
}
.navbar-light .navbar-nav .nuxt-link-active,
.navbar-light .navbar-nav .nuxt-link-active:focus {
  color: #000;
}
</style>