<template>
  <q-card bordered class="my-card shadow-15 bg-indigo q-ml-md q-pa-lg q-px-xs">
    <q-img
      src="https://cdn.sistemawbuy.com.br/arquivos/feb5eb39b3a2004abcc3bcd79041ba64/produtos/64a6097dd7b4f/20230705212330-64a6098265b0d.jpg"
    >
      <div class="text-subtitle2 absolute-top text-center">
        {{ perfLocal.nome }} R$ {{ perfLocal.preco }}
      </div>
    </q-img>
    <q-card-actions>
      <q-btn :label="LabelBtn" push icon="support" glossy color="red-10" @click="click()" />
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  name: 'CardPerfume',
  props: {
    perfume: { type: Object, required: true },
    LabelBtn: { type: String, required: true },
  },

  watch: {
    perfume: {
      handler(newValue, oldValue) {
        this.perfLocal.nome = newValue.nome
        alert(oldValue)
      },
      deep: true,
    },
  },

  data() {
    return {
      perfLocal: {},
    }
  },

  created() {
    this.perfLocal.nome = this.perfume.nome
    this.perfLocal.preco = this.perfume.preco
  },

  methods: {
    click() {
      this.perfLocal.nome = 'troca dentro do componente'
      this.perfLocal.preco = 0
    },
  },
}
</script>
<style>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
