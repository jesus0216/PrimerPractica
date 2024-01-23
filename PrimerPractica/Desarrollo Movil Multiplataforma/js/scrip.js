//Variables y constantes
//var, const, let
//const: constante
//let: variable
//var: variable no cuenta con scope
//¿Qué es el scope? Alcance de un bloque de código
//{}
//var: variable global que puede ser accedida desde cualquier parte del código

(() => {
    // Funciones
    function suma(numero1, numero2) {
        return numero1 + numero2;
    }

    const resta = function (numero1, numero2) {
        return numero1 - numero2;
    };

    /*const division = (numero1, numero2) => {
        return numero1 / numero2;
    };*/

    const division = (numero1, numero2) => numero1 / numero2;

})();

(() => {
    // Objetos, arreglos y listas

    const frutas = ['Platano', 'Sandia', 'Mango', 22, true, 50.5];

    // Índices: 0, 1, 2, 3, 4, 5
    // Longitud: 6
    console.log(frutas);
    frutas.forEach((element, index) => {
        console.log("fruta: ", index + ' ' + element);
        console.log(`Frutas: ${index} ${element}`);
    });

    const person = {
        name: 'Juan',
        lastName: 'Perez',
        age: 25,
        address: {
            street: 'Calle 123',
            number: 123,
            city: 'Bogotá'
        },
        birthDate: '1997-05-05',
        hobbies: ['Futbol', 'Cine', 'Leer'],
        socialnetworks: {
            facebook: '',
            twitter: '',
            instagram: ''
        }
    };
    console.log(person.socialnetworks.instagram);

    // Arreglos de lista
const users = [person];
users.forEach((element, index) => {
    const { name, lastName, address: { street }, socialnetworks: { instagram } } = element;

    console.log(`Usuario indice ${index} tus datos son: `);
    console.log(`Nombre completo: ${name} ${lastName}`);
    console.log(`Dirección: ${street}`);
    console.log(`Instagram: ${instagram}`);
});


})();

(() => {
    const teams = [];
    const chivas = {
        name: 'Chivas',
        points: 10,
        league: 'MX',
        match: [
            {
                team: 'Santos',
                points: 12,
                date:'2024/01/16'
            },
            {
                team: 'America',
                points: 23,
                date:'2024/01/24'
            }
        ],
        country: 'Mexico'
    };
})();

// Definición y asignación de la variable chivas
const chivas = {
    name: "Chivas",
    points: 20,
    league: "Liga MX",
    country: "México",
    match: [
      { team: "Equipo1", poi: 15, date: "2024-01-18" },
      { team: "Equipo2", poi: 18, date: "2024-01-20" },
      // ... más partidos
    ],
  };
  
  // Destructuración y uso de las propiedades
  const { name, points, league, country, match } = chivas;
  
  match.forEach(({ team, poi, date }, index) => {
    console.log('# Partidos: ', match.length);
    console.log(
      `${name} vs ${team} en el día ${new Date(date).getDay()} del mes ${
        new Date(date).getMonth()
      } ${points > poi ? `${name} tiene más puntos` : `${team} tiene más puntos`}`
    );
  
    console.log("poi", poi);
    console.log("points", points);
    console.log(new Date(date));
  });
  

// getUserById



/* 1 *
   2 alias estorban
   3 where no es necesario
   4 inner join person p ON us.person_id = p.id mal estu
   */


   (() => {
    const usuario = {
        id: 0,
        usuario:'',
        contrasenia: '',
        status:'',
        cuantas: {
            numeroCuenta:"",
            saldo:0,
        },
        persona: {
            id:0,
            nombre:"",
            apellidos:"",
            direccion: {
                latitud: "",
                longitud: '',
                calle: '',
                colonia: ''
            },
            telefono: '',
            sexo:''
        },
    };

   })();

 
