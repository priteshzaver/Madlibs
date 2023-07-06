<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { getRandomTemplate } from '../template'
import { ref } from 'vue'
import { storyPreview } from '../store/madlibsStore'
import { useRouter } from 'vue-router'

const template = getRandomTemplate()
const answers = ref([])
const router = useRouter()

const onSubmit = () => {
  storyPreview.value.title = template.title
  for (let i = 0; i < template.blanks.length + answers.value.length; i++) {
    if (i % 2 === 0) {
      storyPreview.value.story += template.text[i / 2]
    } else {
      storyPreview.value.story += answers.value[(i - 1) / 2]
    }
  }
  router.push(`/story`)
}
</script>

<template>
  <div class="flex flex-column w-4 justify-content-center">
    <h1 class="text-4xl text-primary text-center">{{ template.title }}</h1>
    <form @submit.prevent="onSubmit">
      <div v-for="(blank, index) in template.blanks" :key="index">
        <InputText v-model="answers[index]" :placeholder="blank" class="w-full m-1" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  </div>
</template>

<style scoped></style>
