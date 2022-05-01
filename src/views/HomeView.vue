<template>
<div >
  <div class="position">
    <slider-component class="tamanio"/>
  </div>
  <CardImagenes/>
</div>
 
</template>

<script lang="ts">
import CardImagenes from '@/components/CardImagenes.vue';
import SliderComponent from '@/components/SliderComponent.vue';

export default {
  components: {
    CardImagenes,
    SliderComponent,
  },
}

</script>
<style scoped>

.tamanio{
  width: 65%; 
}
.position{
  display: flex;
  justify-content: center;
}
</style>

