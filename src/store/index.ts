import { createStore } from 'vuex'



export default createStore({
  state: {
    cards: [
      {titulo: 'Aguas Vereda La Torre Arboleda', 
      description:'Disfruta de estas maravillosas aguas cristalinas y del maravilloso clima que la Vereda la Torre de Arboleda-Caldas tiene para ofrecerte.', 
      imagen: require('../assets/torreCaudal2.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'Parque Central           Arboleda', 
      description:'Un lugar tranquilo para compartir en familia y además cuenta con un poco de historia en honor a las víctimas del conflicto armado en este bello corregimiento.', 
      imagen: require('../assets/cambiarNubesArbolda.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'Mirador de la Coordillera Oriental', 
      description:'Un bonito lugar para divisar la majestuosidad de la naturaleza de nuestro bello municipio.', 
      imagen: require('../assets/coordillera.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'Vista desde la rioja hacia el nevado del ruiz ',
       description:'Un bello lugar donde puedes disfrutar de un rico almuerzo con una maravillosa vista de este gran volcan',
        imagen: require('../assets/nevadoDelRuiz.png'), 
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'Nombre común: Sirirí Tijereta  Nombre científico: Tyrannus savana.', 
      description:'Avistamiento de aves, además puedes hacer parte de el grupo de avistamiento de aves del municipio. ', 
      imagen: require('../assets/pajarito2.png'), 
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'Pensilvania  Caldas-Cerro Piamonte ', 
      description:'Un lugar con un gran significado religioso y geologico para las personas de este municipio, desde la cima se logra una vista completa y panorámica de Pensilvania.', 
      imagen: require('../assets/morron.jpeg'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo: 'Amanecer ',
       description:'Un bello amanecer de nuestro entorno pensilvense, esto de veras te animara a iniciar tu dia con la mejor energia. ', 
       imagen: require('../assets/nuvesDregrasadas.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},
      
      {titulo: 'Atardecer ', 
      description:'Un bello atardeser que  animara tus tardes cansadas, que te recordara lo bello que es la vida. ', 
      imagen: require('../assets/nocheA.png'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},
    ], 


    fristImpre: [
      {titulo:'Fiestas Equinas', lugar: "Pensilvania" ,description: 
      'La cita anual en nuestro pueblo, disfrutar de los mejores exponentes en el arte Equino y los mejores ejemplares.',imagen:require('../assets/fiestasEquinas.jpg'),
      hashtag1: 'Licor', hashtag2: 'Fiesta', hashtag3: 'Campo'},

      {titulo:'Cascada Chorrillos', lugar: "Arboleda" ,description: 
      'Un hermoso lugar en las afueras de Arboleda en donde podrás pasar un buen día',imagen:require('../assets/chorrillos.png'),
      hashtag1: 'Cascada', hashtag2: 'Naturaleza', hashtag3: 'Campo'},

      {titulo:'Avistamiento de aves', lugar: "Pensilvania " ,description: 
      'Disfruta de las hermosas aves que se pueden ver en nuestro municipio.',imagen:require('../assets/pajarito2.png'),
      hashtag1: 'Fauna', hashtag2: 'Naturaleza', hashtag3: 'Senderismo'},

      {titulo:'Puente de Arriería ', lugar: "Pensilvania" ,description: 
      'En lugar de interés turístico en el cual puedes pasar un lindo día con tu familia.',imagen:require('../assets/puentebosque.jpeg'),
      hashtag1: 'Centro Vacacional el Bosque', hashtag2: 'Naturaleza', hashtag3: 'Río'},

      {titulo:'San Daniel', lugar: "Pensilvania" ,description: 
      'Un lindo corregimiento, cerca del Río Tenerife y con múltiples actividades a realizar como el glamping.',imagen:require('../assets/sanDanielDistante.png'),
      hashtag1: 'Fiesta', hashtag2: 'Naturaleza', hashtag3: 'Campo'},

      {titulo:'Cabañas ConFa', lugar: "Pensilvania" ,description: 
      'Un lugar tranquilo en el cual se puede pasar unas buenas vacaciones con tus seres queridos',imagen:require('../assets/bosque21.jpeg'),
      hashtag1: 'Felicidad ', hashtag2: 'Naturaleza', hashtag3: 'Centro Vacacional el Bosque'},
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
