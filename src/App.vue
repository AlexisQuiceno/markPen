<template>
<div>
    <!--
      <nav>
      <router-link to="/inicio">INICIO</router-link>  |  
      <router-link to="/contactenos">CONTACTENOS</router-link>  |  
      <router-link to="/servicios">SERVICIOS</router-link>  |  
      <router-link to="/productos">LUGARES DE INTERES</router-link>  |  
      <router-link to="/nosotros">NOSOTROS</router-link>  |  
    </nav> -->
    <header class="narbar">
    <nav-bar/>
    </header>

    <body >
      
      
    </body>

    <router-view class="con"/>
    <footer>
      <FooterCom/>
    </footer>
</div>
</template>

<style scoped >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #363232;
}

.con {
  padding-block-start: 1rem;
}
.narbar {
  padding: 2px;
  background: linear-gradient(to right, rgb(133, 175, 209) 0%, rgba(255,255,255,0) 100%);
  color: black;
  letter-spacing: 3px;
  text-align: center;

  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 11;

}

nav a {
  font-weight: bold;
  padding: 35px;
}

nav a.router-link-exact-active {
  color: #0a0a0a;
  
}

</style>
<script lang="ts">
import FooterCom from '@/components/FooterCom.vue';
import NavBar from '@/components/NavBar.vue';


export default {
  components: {
    FooterCom,
    NavBar,
  },
}

</script>
  