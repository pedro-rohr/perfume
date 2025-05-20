<template>
  <q-page class="flex flex-center">
    <q-btn label="teste" @click="trocar()" />
    <!-- <CardPerfume :perfume="{ nome: 'alma de flores', preco: 120.0 }" LabelBtn="labela" />
    <CardPerfume :perfume="{ nome: 'cheiro de flores', preco: 100.0 }" LabelBtn="compra" /> -->
    <CardPerfume
      v-for="perfume in arrayPerfumes"
      v-bind:key="perfume.id"
      :perfume="perfume"
      LabelBtn="labela"
    />

    <div
      v-for="perfume in arrayPerfumes"
      v-bind:key="perfume.id"
      :perfume="(perfume.nome, perfume.preco)"
    >
      {{ perfume.nome }} R$ {{ perfume.preco }}
    </div>

    <!-- <q-knob
      v-model="value"
      size="90px"
      :thickness="0.2"
      color="purple-3"
      center-color="purple"
      track-color="purple-1"
      class="q-ma-md"
    />

    <div class="q-pa-md">
      <q-btn size="sm" color="primary" @click="randomize" label="Change Model" />

      <q-linear-progress :value="progress" class="q-mt-md" />

      <q-linear-progress :value="progress" color="warning" class="q-mt-sm" />

      <q-linear-progress :value="progress" color="secondary" class="q-mt-sm" />

      <q-linear-progress :value="progress" rounded color="accent" class="q-mt-sm" />

      <q-linear-progress
        :value="progress"
        rounded
        color="purple"
        track-color="orange"
        class="q-mt-sm"
      />

      <q-linear-progress :value="progress" rounded color="negative" class="q-mt-sm" />
      <PegaData />
    </div> -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CardPerfume from 'src/components/CardPerfume.vue'
// import PegaData from 'src/components/PegaData.vue'
import services from 'src/services/index.js'

export default defineComponent({
  name: 'IndexPage',
  components: { CardPerfume }, // PegaData
  data() {
    return {
      arrayPerfumes: [],
    }
  },
  created() {
    services
      .getAllPerfumes()
      .then((result) => (this.arrayPerfumes = result))
      .catch((erro) => {
        console.log('Erro ao buscar perfumes:', erro)
      })

    // let axios = new Axios()
    // axios
    //   .get('http://10.182.131.26:3000/perfumes')
    //   .then((response) => {
    //     console.log(response.data)
    //     this.arrayPerfumes = JSON.parse(response.data)
    //   })
    //   .catch((error) => {
    //     console.error('Erro ao buscar perfumes:', error)
    //   })
  },
  methods: {
    trocar() {
      this.arrayPerfumes[0].nome = 'troquei o nome'
    },
  },
})
</script>
<style></style>
