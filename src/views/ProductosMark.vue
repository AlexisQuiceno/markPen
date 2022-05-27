<template>
<div class="poci">
    <h1 class="text-5xl text-center font-semibold">
        <span class="text-indigo-500 tracking-wide"> QUE HAY PA' HACER, PENSILVANIA  </span>
    </h1>
  <SProductosCom/>
  <PublicidadSencilla/>
</div>
 
</template>

<script lang="ts">
import SProductosCom from '@/components/SProductosCom.vue';
import PublicidadSencilla from '@/components/PublicidadSencilla.vue';

export default {
  components: {
    SProductosCom,
    PublicidadSencilla,
  },
}

</script>
<style scoped>
.poci{
  padding-top: 130px;
}

</style>
