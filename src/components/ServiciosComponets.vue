<template>
<div class="containr">
  <div v-for="(prueba, index) in cards" :key="index.id" class="tamaño">  
      <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="../assets/logo.png" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ prueba.titulo }}</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
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
.containr{
  display: flex;
  width: 60%;
  padding-top: 2%;
  padding-bottom: 50%;
}
.tamaño{
  padding: 20px;
  width:33%;
  height:150px;
}
</style>