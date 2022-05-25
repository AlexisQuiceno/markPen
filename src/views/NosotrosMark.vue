<template>
    <div class="margenes poci">
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
  .poci{
    padding-top: 100px;
  }
  .margenes {
    padding-bottom: 2%;
  }
  
</style>
