fetch('https://jsonplaceholder.typicode.com/todos/1').then(response  =>{
    response.json().then(({id, tittle}) => {
        console.table('titulo y id', tittle,id);

    })

})

(async () => {
    try {
        const response = await miPromesa;
        console.log('Respuestas ', response);
    } catch (error) {
        console.error('error en el try y catch ', error);
    }
})();