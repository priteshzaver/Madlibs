<script setup>
import { storyPreview } from '../store/madlibsStore'
import Button from 'primevue/button'
</script>

<template>
  <div class="text-4xl w-6">
    <form>
      <h1>{{ storyPreview.title }}</h1>
      <div>{{ storyPreview.story }}</div>
      <Button>Make Another</Button>
      <Button>Publish</Button>
    </form>
  </div>
</template>

<style scoped></style>
