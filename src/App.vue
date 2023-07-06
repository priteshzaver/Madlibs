<script setup>
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'
import { user, logout, login } from './store/authStore'
</script>

<template>
  <div class="flex w-full min-h-full">
    <nav class="flex flex-column align-items-center h-full left-0 bg-primary w-13rem fixed">
      <header>
        <h1 id="brand" class="text-4xl">{MadLibs}</h1>
      </header>
      <RouterLink to="/" id="nav">Home</RouterLink>
      <RouterLink to="/create" id="nav">Create a Madlib</RouterLink>
      <RouterLink v-if="user" to="/my-madlibs" id="nav">My Madlibs</RouterLink>
      <Button v-if="user" @click="logout">Sign Out</Button>
      <Button v-else @click="login">Sign In</Button>
    </nav>
    <main class="container w-full">
      <RouterView />
    </main>
  </div>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 13rem;
}
.router-link-active {
  background-color: turquoise;
}
</style>
