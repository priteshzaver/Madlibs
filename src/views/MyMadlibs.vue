<script setup>
import { onMounted, ref } from 'vue'
import { madlibsCollection } from '../firebase'
import { getDocs } from 'firebase/firestore'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

import { user } from '../store/authStore'
const currentUserMadlibs = ref([])

onMounted(async () => {
  const snapshot = await getDocs(madlibsCollection)
  const data = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }))

  currentUserMadlibs.value = data.filter((eachMadlib) => eachMadlib.authorId === user.value.uid)
})
</script>

<template>
  <div>
    <Accordion>
      <AccordionTab v-for="madlib in currentUserMadlibs" :key="madlib.id" :header="madlib.title">
        <p>{{ madlib.story }}</p>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<style scoped></style>
