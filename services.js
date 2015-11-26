angular.module('starter.services', [])

.factory('Battles', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var battles = [{
    id: 0,
    name: 'Legendario',
    image: 'http://img.desmotivaciones.es/201204/BarneyStinson.jpg',
    themeList: [
        "Hambre",
        "Africa sufre",
        "Rap o Reggae",
        "Calle",
        "Si estubieras 1 semana en Jamaica...",
        "Estas viendo al papa",
        "Necesitas dormir",
        "Cazador -- cazado",
        "Demasiado bueno para ser verdad",
        "Te pesan las piernas, ¿cargas demasiado?",
        "Mejor mirar a otro lado..",
        "Me gusta",
        "Carrera de galgos",
        "Tu mayor locura",
        "Hablando en plata",
        "Most Wanted",
        "Aqui hay para rato",
        "Viviendo música",
        "Suena crema",
        "No cuentes conmigo"
      ],
    audio: 'audio/base01.mp3'
  }, 

  {
    id: 1,
    name: 'Cultura',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRba28yS_yhQqjjzYdMJRcy167hjdg4IFEaonsA08FgcpBkQSJxhw',
    themeList: [
        "Tu Rap",
        "Censura",
        "Fucking locura",
        "La calle es dura",
        "Libros de texto",
        "TU PEOR MAESTRO",
        "Lecciones aprendidas",
        "Hip Hop se escribe con 'H'",
        "Mito de la caverna",
        "Filosofos locos",
        "Evolucion",
        "Diferentes paises",
        "Feliz en la ignorancia",
        "Paracaidas de conocimientos",
        "Ciclo del agua",
        "Los reyes católicos",
        "Apuesta contra todos",
        "Vivir en una utopía",
        "Me desespera ver tanta oveja siguiendo a su pastor, yo soy un lobo",
        "Culturizado"
      ],
    audio: 'audio/base02.mp3'
  }, {
    id: 2,
    name: 'Pasado',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5NihDi938KhLIEYSOnr96VpWFNhYv2hNVB1lmtTrpVNoiZ-Ap',
    themeList: [
        "Hambre",
        "Africa sufre",
        "Rap o Reggae",
        "Calle",
        "Si estubieras 1 semana en Jamaica...",
        "Estas viendo al papa",
        "Necesitas dormir",
        "Cazador -- cazado",
        "Demasiado bueno para ser verdad",
        "Te pesan las piernas, ¿cargas demasiado?",
        "Mejor mirar a otro lado..",
        "Me gusta",
        "Carrera de galgos",
        "Tu mayor locura",
        "Hablando en plata",
        "Most Wanted",
        "Aqui hay para rato",
        "Viviendo música",
        "Suena crema",
        "No cuentes conmigo"
      ],
    audio: 'audio/base03.mp3'
  }, {
    id: 3,
    name: 'Psicología',
    image: 'data:image/jpeg;base64,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',
    themeList: [
        "Hambre",
        "Africa sufre",
        "Rap o Reggae",
        "Calle",
        "Si estubieras 1 semana en Jamaica...",
        "Estas viendo al papa",
        "Necesitas dormir",
        "Cazador -- cazado",
        "Demasiado bueno para ser verdad",
        "Te pesan las piernas, ¿cargas demasiado?",
        "Mejor mirar a otro lado..",
        "Me gusta",
        "Carrera de galgos",
        "Tu mayor locura",
        "Hablando en plata",
        "Most Wanted",
        "Aqui hay para rato",
        "Viviendo música",
        "Suena crema",
        "No cuentes conmigo"
      ],
    audio: 'audio/base04.mp3'
  }, {
    name: 'Libertad',
    themeList: '',
    audio: 'audio/base05.mp3'
  }];

  return {
    all: function() {
      return battles;
    },
    remove: function(battle) {
      battles.splice(battles.indexOf(battle), 1);
    },
    get: function(battleId) {
      for (var i = 0; i < battles.length; i++) {
        if (battles[i].id === parseInt(battleId)) {
          return battles[i];
        }
      }
      return null;
    }
  };
});
