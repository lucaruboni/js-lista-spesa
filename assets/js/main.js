/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while. */



//seleziono l'elemento della dom nella quale verrà inserita la lista e il bottone

const ulEl = document.querySelector("ul");
const btnEl = document.querySelector("button");


//creo una lista vuota

const listaSpesa = [

];

//creo l'event listener al click per aprire il loop della lista

btnEl.addEventListener('click', function(){

//creo il ciclo per aggiungere elementi alla lista
let i = 0;
while (i < 5) {
    const addlist = prompt('aggiungi un elemento alla lista della spesa');

    listaSpesa.push(addlist);

    const liEl = document.createElement('li');
    liEl.append(listaSpesa[i])
    console.log(liEl)
    ulEl.append(liEl)

    console.log(listaSpesa);

  i++;

}

})




