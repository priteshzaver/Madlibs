<script setup>
import AccordionTab from 'primevue/accordiontab'
const props = defineProps(['madlib'])
</script>

<template>
  <AccordionTab :header="props.madlib.title">
    <p>{{ props.madlib.story }}</p>
  </AccordionTab>
</template>

<style scoped></style>
