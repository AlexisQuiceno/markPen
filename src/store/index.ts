import { createStore } from 'vuex'



export default createStore({
  state: {
    cards: [
      {titulo: 'titulo 1', description:'Lorem ipsum....', imagen: require('../assets/nochePensilvania.jpeg')},
      {titulo:'titulo 2', description:'Lorem ipsum....', imagen: require('../assets/bosque21.jpeg')},
      {titulo: 'titulo 3', description:'Lorem ipsum....', imagen: require('../assets/miloHuevo.png')},
      {titulo:'titulo 4', description:'Lorem ipsum....', imagen: require('../assets/cambiarNubesArbolda.png')},
      {titulo: 'titulo 5', description:'Lorem ipsum....'},
      {titulo:'titulo 6', description:'Lorem ipsum....'},
      {titulo: 'titulo 7', description:'Lorem ipsum....'},
      {titulo:'titulo 8', description:'Lorem ipsum....'},
    ],
    
    
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
