<script setup></script>

<template>
  <header>
    <h1 id="brand" class="text-center text-6xl text-primary mb-2">MadLibs</h1>
  </header>

  <div class="main mx-auto">
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  max-width: 60rem;
}
</style>
