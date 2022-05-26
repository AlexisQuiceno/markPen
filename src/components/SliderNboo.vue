<template>
  <MDBCarousel
    v-model="carousel1"
    :items="items1"
    fade
    dark
  />
</template>

<script>
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBCarousel
      
    },
    setup() {
      const items1 = [
        {
          src: require('../assets/nochePensilvania3 (1).png'),
          alt: "...",
          label: "¡¡NO SABES QUE HACER!!",
          caption: "QUE HAY PA' HACER EN PENSILVANIA.",
          interval: 3000,
        },
        {
          src:  require('../assets/bosque3 (1).png'),
          alt: "...",
          label: "DISFRUTA UN BUEN FIN DE SEMANA EN FAMILIA ",
          caption: "CABAÑAS DE CONFA, UN BUEN SITIO PARA RELAJARTE.",
          interval: 3000,
        },
        {
          src: require('../assets/chiva3 (1).png'),
          alt: "...",
          label: "VIAJA EN NUESTRAS CHIVAS. ",
          caption:"PARA CONOCER MAS LUGARES DE NUESTRO MUNICIPIO.",
            interval: 3000,
        }
      ];
      const carousel1 = ref(0);
      return {
        items1,
        carousel1
      };
    }
  };
</script>
