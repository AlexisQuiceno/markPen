<template>
<div >
  <div class="position">
    <slider-component class="tamanio w-full"/>
  </div>
  <div class="grid ">
    <CardImagenes v-for="(prueba, index) in cards" :key="index.id"
    :UrlImagen="prueba.imagen"
    :TituloCard="prueba.titulo"
    :DescriptionCard="prueba.description"
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
    ...mapState(['cards']),

  }
}

</script>
<style scoped>

.tamanio{
 z-index: 1;
 margin-top: 0%;
}
.position{
  display: flex;
}
.grid{
  grid-template-columns: 400px 400px 400px;
  margin: 80px;
  margin-top: 10px
  
}
</style>

