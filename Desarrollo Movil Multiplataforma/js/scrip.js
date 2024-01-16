//Variables y constantes
//var, const, let
//const: constante
//let: variable
//var: variable no cuenta con scope
//¿Qué es el scope? Alcance de un bloque de código
//{}
//var: variable global que puede ser accedida desde cualquier parte del código

(() => {
    //funciones
    function suma(numero1, numero2) {
        return numero1 + numero2;
    };

    const resta = function (numero1, numero2) {
        return numero1 - numero2;
    };

    /*const division = (numero1, numero2) => {
        return numero1 / numero2;
    };*/

    const division = (numero1, numero2) => numero1 / numero2;



 })();

 (() => {
    //objetos-arreglos y listas

    const frutas = ['Platano','Sandia','Mango',22,true,50.5]

    //- indix 0, 1, 2, 3, 4, 5
    //- length = 6
    console.log(frutas);
    frutas.forEach(element, index) =>{
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

    //arreglos de lista
    const users  = [person,person2];
    users.forEach(({name,lastName, address:{street}, socialnetworks:{instagram})) =>{
        console.log(`Usuario indice  ${index} tus datos son: `);
        console.log(`Nombre completo: ${element.name}`);
        console.log(`Redes sociales: ${element.socialnetworks.instagram}`)

    });
    



 })();