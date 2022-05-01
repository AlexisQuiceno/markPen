<template>
    <div>
      <p v-for="(item,index) in personas" :key="index.id">{{item.nombre}}</p>
        <ServiciosComponets/>
    </div> 
</template>

<script lang="ts">
import ServiciosComponets from '@/components/ServiciosComponets.vue'
import {mapState} from 'vuex'


export default {
   computed: {
    ...mapState( ['personas'] )
  },

  components: {
    ServiciosComponets,
  },
}


</script>