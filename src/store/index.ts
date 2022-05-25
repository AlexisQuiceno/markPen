import { createStore } from 'vuex'



export default createStore({
  state: {
    cards: [
      {titulo: 'titulo 1', description:'Lorem ipsum....', imagen: require('../assets/cambiarNubesArbolda.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'titulo 2', description:'Lorem ipsum....', imagen: require('../assets/bosque21.jpeg'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'titulo 3', description:'Lorem ipsum....', imagen: require('../assets/coordillera.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'titulo 4', description:'Lorem ipsum....', imagen: require('../assets/nubes.png'), 
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'titulo 5', description:'Lorem ipsum....', imagen: require('../assets/comida1.png'), 
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'titulo 6', description:'Lorem ipsum....', imagen: require('../assets/morron.jpeg'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'titulo 7', description:'Lorem ipsum....', imagen: require('../assets/nuvesDregrasadas.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},
      
      {titulo: 'titulo 8', description:'Lorem ipsum....', imagen: require('../assets/nocheA.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},
    ], 
    fristImpre: [
      {titulo:'Fiestas Equinas', lugar: "Pensilvania" ,description: 
      'La cita anual en nuestro pueblo, disfrutar de los mejores esponentes en el arte Equino y los mejores ejemplares',imagen:require('../assets/fiestasEquinas.jpg'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo:'Cascada Chorrillos', lugar: "Arboleda" ,description: 
      'un hermoso lugar en las afueras de arboleda en donde podras pasar un hermoso diá',imagen:require('../assets/chorrillos.png'),
      hashtag1: 'Casacada', hashtag2: 'Naturaleza', hashtag3: 'Campo'},

      {titulo:'Avistamiento de aves', lugar: "Pensilvania " ,description: 
      'Disfruta de las hermosas aves que se pueden ver en nuestro municipio',imagen:require('../assets/pajarito2.png'),
      hashtag1: 'Fauna', hashtag2: 'Naturaleza', hashtag3: 'Senderismo'},

      {titulo:'Puente del bosque ', lugar: "Pensilvania" ,description: 
      'En lugar de interes turistigo en el cuel puesde pasar un lindo dia con tu familia',imagen:require('../assets/puentebosque.jpeg'),
      hashtag1: 'Senderismo', hashtag2: 'Naturaleza', hashtag3: 'Rio'},

      {titulo:'San Daniel', lugar: "Pensilvania" ,description: 
      'Un lindo corregimiento, serca del rio tenerife y con multiples actividades a realizar como el glamping',imagen:require('../assets/sanDanielDistante.png'),
      hashtag1: 'Fiesta', hashtag2: 'Naturaleza', hashtag3: 'Campo'},

      {titulo:'Cabañas Confa', lugar: "Pensilvania" ,description: 
      'Un lugar tranquilo en el cual poder pasar unas buenas bacaciones con tus seres queridos',imagen:require('../assets/bosque2.jpeg'),
      hashtag1: 'Felicidad ', hashtag2: 'Naturaleza', hashtag3: 'Tranquilidad'},
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
