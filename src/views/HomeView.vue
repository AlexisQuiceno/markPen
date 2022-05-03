<template>
<div >
  <div class="position">
    <slider-component class="tamanio"/>
  </div>
  <div class="grid margen">
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
  width: 65%; 
}
.position{
  display: flex;
  justify-content: center;
  margin-top: auto;
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
</style>

