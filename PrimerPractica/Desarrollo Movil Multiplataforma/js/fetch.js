//promesas

/*
*Pendiente
*Cumpla
*Rechazada
*/

//resolve reject

let miPromesa = new Promise((resolve, reject) =>{
    setTimeout(( )  =>{
        const status = true;
        if (status) {
            resolve('Operación exitosa')

        } else {
            reject('Rechazada')
        }
    }, 300)
})
miPromesa.then(element => {
    console.log('Resultado ', element);
}).catch(error => {
    console.error('error =>', error)
});
console.log('Aqui entra');
//async -await
(async () => {
    try {
        const response = await miPromesa;
        console.log('Respuestas ', response);
    } catch (error) {
        console.error('error en el try y catch ', error);
    }
})();

//JSON placeholder

//fecth
//url
// localhost:8080/utez/user/getAll
//dominio - direccion web
//DNS
//java -php
fetch('https://jsonplaceholder.typicode.com/todos/1').then(response  =>{
    response.json().then(({id, tittle}) => {
        console.table('titulo y id', tittle,id);

    })

})




      