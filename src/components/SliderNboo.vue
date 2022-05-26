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
          label: "First slide label",
          caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
          interval: 3000,
        },
        {
          src:  require('../assets/bosque3 (1).png'),
          alt: "...",
          label: "Second slide label",
          caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          interval: 3000,
        },
        {
          src: require('../assets/chiva3 (1).png'),
          alt: "...",
          label: "Third slide label",
          caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
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
