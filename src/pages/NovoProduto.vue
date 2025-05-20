<!-- Option API -->
<template>
  <h2>Novo produto</h2>
  <div>
    <q-input v-model="produto.nome" label="Nome" />
    <q-input v-model="produto.descricao" label="Descrição" />
    <q-input v-model="produto.preco" label="Preço" />
    <q-btn label="Salvar" @click="salvar()"></q-btn>
  </div>

  <div
    v-for="perfume in arrayPerfumes"
    v-bind:key="perfume.id"
    :perfume="(perfume.nome, perfume.preco)"
  >
    {{ perfume.id }} - {{ perfume.nome }} R$ {{ perfume.preco }}
    <q-btn label="Editar"></q-btn>
    <q-btn label="Deletar"></q-btn>
  </div>

  <q-list
    v-for="perfume in arrayPerfumes"
    v-bind:key="perfume.id"
    :perfume="(perfume.nome, perfume.preco)"
    bordered
    class="rounded-borders"
    style="max-width: 600px"
  >
    <q-item-label header>Editar produtos</q-item-label>

    <q-item>
      <q-item-section avatar top>
        <q-icon name="account_tree" color="black" size="34px" />
      </q-item-section>

      <q-item-section top class="col-2 gt-sm">
        <q-item-label class="q-mt-sm">{{ perfume.nome }}</q-item-label>
      </q-item-section>

      <q-item-section top>
        <q-item-label lines="1">
          <span class="text-weight-medium">R$ {{ perfume.preco }} - </span>
          <span class="text-grey-8"> id: {{ perfume.id }}</span>
        </q-item-label>
        <q-item-label caption lines="1">
          {{ perfume.descricao }}
        </q-item-label>
        <q-item-label
          lines="1"
          class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
        >
          <span class="cursor-pointer">Editar</span>
        </q-item-label>
      </q-item-section>

      <q-item-section top side>
        <div class="text-grey-8 q-gutter-xs">
          <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
          <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
          <q-btn size="12px" flat dense round icon="more_vert" />
        </div>
      </q-item-section>
    </q-item>

    <q-separator spaced />
  </q-list>
</template>
<script>
import { ref } from 'vue'
import { Notify } from 'quasar'
import services from 'src/services/index.js'

export default {
  name: 'NovoProduto',
  data() {
    return {
      produto: { nome: '', descricao: '', preco: '' },
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
  },
  methods: {
    salvar() {
      if (
        this.produto.nome.length < 2 ||
        this.produto.descricao.length < 5 ||
        this.produto.preco <= 0
      ) {
        Notify.create('Preencha todos os campos corretamente')
        return
      }
      services
        .savePerfume(this.produto)
        .then((result) => {
          console.log(result)
          Notify.create('Perfume cadastrado')
          this.$router.push('/')
        })
        .catch((erro) => {
          console.log(erro)
        })
    },
  },

  setup() {
    return {
      text: ref(''),
    }
  },
}
</script>
<style></style>
