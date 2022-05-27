<template >
    <div class="tamanio poci"> 
    <br>
      <p>{{prueba}}</p>
      <ServiciosComponets/>
    </div> 
</template>

<script>
import ServiciosComponets from '@/components/ServiciosComponets.vue'
import { mapState } from 'vuex'

export default {
   computed: {
    ...mapState(['prueba'] ),
  },

  components: {
    ServiciosComponets,
  },
}

</script>

<style scoped>
.tamanio{
}
.poci{
  padding-top: 150px;
}

</style>