<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-date v-model="date" />

      <q-date v-model="date" minimal />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PegaData',
  setup() {
    return {
      date: ref('2025/02/01'),
    }
  },
}
</script>
