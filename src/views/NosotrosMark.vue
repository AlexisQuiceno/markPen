<template>
    <div class="margenes">
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

  .margenes {
    padding-top: 1%;
    padding-bottom: 2%;
  }
</style>
