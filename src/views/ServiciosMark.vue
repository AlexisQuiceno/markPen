<template>
    <div class="tamanio"> 
    <br>
      <p>{{prueba}}</p>
      <ServiciosComponets/>
    </div> 
</template>

<script >
import ServiciosComponets from '@/components/ServiciosComponets.vue'
import { mapState } from 'vuex'

export default {
   computed: {
    ...mapState(['prueba'] )
  },

  components: {
    ServiciosComponets,
  },
}


</script>

<style scoped>


</style>