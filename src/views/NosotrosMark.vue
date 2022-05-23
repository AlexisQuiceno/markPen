<template>
    <div class="margenes">
        <QuienesSomos/>
        <NuestroEquipo/>
    <SliderNboo/>

    </div>
</template>

<script lang="ts">
import QuienesSomos from '@/components/QuienesSomos.vue';
import NuestroEquipo from '@/components/NuestroEquipo.vue';
import SliderNboo from '@/components/SliderNboo.vue';


export default {
  components: {
    QuienesSomos,
    NuestroEquipo,
    SliderNboo,
  },
}

</script>

<style scoped>

  .margenes {
    padding-top: 1%;
    padding-bottom: 2%;
  }
  
</style>
