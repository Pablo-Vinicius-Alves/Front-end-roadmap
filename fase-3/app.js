const titulo = document.querySelector('h1');
const cards = document.querySelectorAll('.card');
const porId = document.getElementById('menu');

cards.forEach(card => console.log(card));

const arrayCards = [...cards];

titulo.textContent = "Título novo"; //apenas texto - seguro
titulo.innerHTML = "<em>Novo</em>"; //interpreta como HTML

titulo.classList.add("destaque");
titulo.classList.remove("destque");
titulo.classList.toggle("Ativo"); //add se n tem, remove se tem
titulo.classList.contains("Ativo"); // boolean

const item = document.createElement("li");
item.textContent = "Novo item";

document.querySelector("ul").appendChild(item); //adiciona ao fim
document.querySelector("ul").prepend(item); //add no início
item.remove();

const lista = document.querySelector("ul");
const frutas = ["Maçã", "Uva", "Pera"];

frutas.forEach(fruta => {
    const li = document.createElement('li');
    li.textContent = fruta;
    lista.appendChild(li);
});

const link = document.querySelector('a');
link.getAttribute('href'); // Lê
link.setAttribute('href', '/novo'); //escreve 

const input = document.querySelector('#username');
console.log(input.value); //digitado pelo usuário