import { createStore } from 'vuex'



export default createStore({
  state: {
    cards: [
      {titulo: 'titulo 1', description:'Lorem ipsum....', imagen: require('../assets/cambiarNubesArbolda.png')},
      {titulo: 'titulo 2', description:'Lorem ipsum....', imagen: require('../assets/bosque21.jpeg')},
      {titulo: 'titulo 3', description:'Lorem ipsum....', imagen: require('../assets/coordillera.png')},
      {titulo: 'titulo 4', description:'Lorem ipsum....', imagen: require('../assets/nubes.png')},
      {titulo: 'titulo 5', description:'Lorem ipsum....', imagen: require('../assets/comida1.png')},
      {titulo: 'titulo 6', description:'Lorem ipsum....', imagen: require('../assets/morron.jpeg')},
      {titulo: 'titulo 7', description:'Lorem ipsum....', imagen: require('../assets/nuvesDregrasadas.png')},
      {titulo: 'titulo 8', description:'Lorem ipsum....', imagen: require('../assets/nocheA.png')},
    ], 
    fristImpre: [
      {titulo:'Fiestas Equinas', lugar: "Pensilvania" ,description: 
      'La cita anual en nuestro pueblo, disfrutar de los mejores esponentes en el arte Equino y los mejores ejemplares',imagen:require('../assets/fiestasEquinas.jpg'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo:'Cascada Chorrillos', lugar: "Arboleda" ,description: 
      'un hermoso lugar en las afueras de arboleda en donde podras pasar un hermoso dia',imagen:require('../assets/chorrillos.png'),
      hashtag1: 'Casacada', hashtag2: 'Naturaleza', hashtag3: 'Campo'},

      {titulo:'Avistamiento de aves', lugar: "Pensilvania " ,description: 
      'un hermoso lugar en las afueras de arboleda en donde podras pasar un hermoso dia',imagen:require('../assets/chorrillos.png'),

      hashtag1: 'Montañas', hashtag2: 'Naturaleza', hashtag3: 'Tranquilidad'},

      {titulo:'Cascada Chorrillos', lugar: "Arboleda" ,description: 
      'un hermoso lugar en las afueras de arboleda en donde podras pasar un hermoso dia',imagen:require('../assets/chorrillos.png'),
      hashtag1: 'Casacada', hashtag2: 'Naturaleza', hashtag3: 'Campo'},

      {titulo:'Cascada Chorrillos', lugar: "Arboleda" ,description: 
      'un hermoso lugar en las afueras de arboleda en donde podras pasar un hermoso dia',imagen:require('../assets/chorrillos.png'),
      hashtag1: 'Casacada', hashtag2: 'Naturaleza', hashtag3: 'Campo'},

      {titulo:'Cascada Chorrillos', lugar: "Arboleda" ,description: 
      'un hermoso lugar en las afueras de arboleda en donde podras pasar un hermoso dia',imagen:require('../assets/chorrillos.png'),
      hashtag1: 'Casacada', hashtag2: 'Naturaleza', hashtag3: 'Campo'},
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
