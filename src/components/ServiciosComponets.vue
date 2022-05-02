<template>
<div class="tar">
  <div class="tamanio">
    <div v-for="(prueba, index) in cards" :key="index.id" class="pad">  
        <div class="rounded overflow-hidden shadow-lg">
        <img class="w-9/12" :src='prueba.imagen' :alt='prueba.imagen'>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ prueba.titulo }}</div>
          <p class="text-gray-700 text-base">{{prueba.description}}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {

  computed: {
    ...mapState(['cards'] )
  },
}
</script>

<style scoped>
.tamanio{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(2,1fr);
  margin: 60px;
  margin-top: 10px;

}
.pad {
  padding: 7px;
}
</style>