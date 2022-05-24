<template>
<div class="position1">
  <div class="position">
    <slider-component class="tamanio w-full "
    />
    
  </div>
  <div class="grid ">
    <CardImagenes v-for="(prueba, index) in fristImpre" :key="index.id"
    :UrlImagen="prueba.imagen"
    :lugar="prueba.lugar"
    :TituloCard="prueba.titulo"
    :DescriptionCard="prueba.description"
    :hashtag1="prueba.hashtag1"
    :hashtag2="prueba.hashtag2"
    :hashtag3="prueba.hashtag3"
    />
  </div>
  
</div>
 
</template>

<script lang="ts">
import CardImagenes from '@/components/CardImagenes.vue';
import SliderComponent from '@/components/SliderComponent.vue';

import {mapState} from 'vuex';

export default {
  components: {
    CardImagenes,
    SliderComponent,
  },
  computed: {
    ...mapState(['fristImpre']),

  }
}

</script>
<style scoped>

.tamanio{
 z-index: 1;
 margin-top: 0%;
 height: max-content;
}
.position{
  display: flex;
  position: relative;
 
}
.position1{
  position: relative;
  
}
.grid{
  grid-template-columns: 400px 400px 400px;
  margin: 80px;
  margin-top: 10px
  
}
.margen {
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}
img {
  position: absolute;
  height: 320px;
  top: 120px;
  left: 100px;
  width:320px;
  z-index:99;
  opacity: 0.8;
  border-radius: 30px;
}
p{
  z-index:99;
}
</style>

