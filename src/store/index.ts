import { createStore } from 'vuex'



export default createStore({
  state: {
    cards: [
      {titulo: 'titulo 1', description:'Lorem ipsum....', imagen: require('../assets/cambiarNubesArbolda.png')},
      {titulo:'titulo 2', description:'Lorem ipsum....', imagen: require('../assets/bosque21.jpeg')},
      {titulo: 'titulo 3', description:'Lorem ipsum....', imagen: require('../assets/coordillera.png')},
      {titulo:'titulo 4', description:'Lorem ipsum....', imagen: require('../assets/nubes.png')},
      {titulo: 'titulo 5', description:'Lorem ipsum....', imagen: require('../assets/comida1.png')},
      {titulo:'titulo 6', description:'Lorem ipsum....', imagen: require('../assets/morron.jpeg')},
      {titulo: 'titulo 7', description:'Lorem ipsum....', imagen: require('../assets/nuvesDregrasadas.png')},
      {titulo:'titulo 8', description:'Lorem ipsum....', imagen: require('../assets/nocheA.png')},
    ], 
    fristImpre: [
      {titulo:'titulo 1',description: 'Lorem ipsum i dole....',imagen:require('../assets/cambiarNubesArbolda.png')}
    ] 

  },

  getters: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
