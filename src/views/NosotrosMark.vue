<template>
    <div class="margenes poci">
        <QuienesSomos/>
        <NuestroEquipo/>

    </div>
</template>

<script lang="ts">
import QuienesSomos from '@/components/QuienesSomos.vue';
import NuestroEquipo from '@/components/NuestroEquipo.vue';


export default {
  components: {
    QuienesSomos,
    NuestroEquipo,
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
