<script setup>
import { storyPreview } from '../store/madlibsStore'
import Button from 'primevue/button'
import { user } from '../store/authStore'
import { ref } from 'vue'
import { Timestamp, addDoc } from 'firebase/firestore'
import { madlibsCollection } from '../firebase'
import router from '../router'
import { RouterLink } from 'vue-router'

const form = ref({
  title: storyPreview.value.title,
  story: storyPreview.value.story,
  authorId: user?.value?.uid,
  authorName: user?.value?.displayName,
  publishDate: null
})

const onSubmit = async () => {
  form.value.publishDate = Timestamp.now()

  const response = await addDoc(madlibsCollection, form.value)

  if (response) {
    router.push('/my-madlibs')
  }
}
</script>

<template>
  <div class="text-4xl w-6">
    <form @submit.prevent="onSubmit">
      <h1>{{ storyPreview.title }}</h1>
      <div>{{ storyPreview.story }}</div>
      <RouterLink to="/create">
        <Button>Make Another</Button>
      </RouterLink>
      <Button v-if="user" type="submit">Publish</Button>
    </form>
  </div>
</template>

<style scoped></style>
