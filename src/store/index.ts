import { createStore } from 'vuex'



export default createStore({
  state: {
    cards: [
      {titulo: 'Aguas Vereda La Torre-Arboleda', 
      description:'Disfruta de estas maravillosas aguas cristalinas y de le maravilloso clima que la vereda la Torre de arboleda caldas tiene para ofrecerte', 
      imagen: require('../assets/torreCaudal2.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'Parque Central de Arboleda Caldas ', 
      description:'Un lugar tranquilo para conpartir en familia y ademas cuenta con un  poco de historia en honor a las victimas del conflicto armado de este bello corregimiento ', 
      imagen: require('../assets/cambiarNubesArbolda.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'Mirador de la Coordillera Oriental', 
      description:'Un bonito lugar para divisar la majestuosidad de la naturaleza de nuestro bello municipio', 
      imagen: require('../assets/coordillera.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'titulo 4', description:'Lorem ipsum....', imagen: require('../assets/nubes.png'), 
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'Nombre común: Sirirí Tijereta--Nombre científico: Tyrannus savana.', 
      description:'Avistamineto de aves, ademas puedes hacer parte de el grupo de avistamiento de aves del municipio ', 
      imagen: require('../assets/pajarito2.png'), 
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'Pensilvania  Caldas-Cerro de Piamonte ', 
      description:'Un lugar con un gran significado religioso para las personas de este municipio,desde la cima se logra una vista completa y panoramica de pensilvania.', 
      imagen: require('../assets/morron.jpeg'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'Amanecer 😍',
       description:'Un bello amanecer de nuestro entorno pensilvence,esto de veras te animara a iniciar tu dia con la mejor energia ', 
       imagen: require('../assets/nuvesDregrasadas.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},
      
      {titulo: 'Atardecer 🤩', 
      description:'Un bello atardeser que  animara tus tardes cansadas,que te recordara lo bello que es la vida ', 
      imagen: require('../assets/nocheA.png'),
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
      'Un lugar tranquilo en el cual poder pasar unas buenas bacaciones con tus seres queridos',imagen:require('../assets/bosque21.jpeg'),
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
