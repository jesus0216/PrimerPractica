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
    const users = [person, person2];
    users.forEach(({ name, lastName, address: { street }, socialnetworks: { instagram } }) => {
        console.log(`Usuario indice ${index} tus datos son: `);
        console.log(`Nombre completo: ${element.name}`);
        console.log(`Redes sociales: ${element.socialnetworks.instagram}`);
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

const {name, points, league, country, match} = chivas;
match.forEach(({team, poi, date}, index) => {
    console.log('# Partidos: ', match.length);
    console.log(`${name} vs ${team} en el dia ${Date(date).getDay()} del mes
     ${new Date(date).getMonth()} ${points > poi ? `${name} tiene mas puntos`: `${team} tiene mas puntos`}`)

     console.log("poi", poi);
     console.log("poi", points);
     console.log(new Date(date));
})

 
