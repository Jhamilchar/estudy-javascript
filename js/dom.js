 // console.log(window);
// console.log(document);

// let texto = "Hola soy el que nadie menciona"

// const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

// hablar(texto); 

// console.log("**********Elementos del documento**********");
// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.links);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);
// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);
// document.write("<h2>Hola mundo desde el DOM</h2>")}


// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));
//No se usa




//Elementos y selectores

// console.log(document.getElementById("menu"));




// console.log(document.querySelector("#menu"));
// console.log(document.querySelectorAll("a"));
// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach((enl) => console.log(enl));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelector("#menu li"));
// console.log(document.querySelectorAll("#menu li"));


/* 
//Atributos y data-attributes

console.log(document.documentElement.lang);
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX")
console.log(document.documentElement.lang);

//el simbolo $ = hace referencia al DOM(buenas practicas)

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank")
$linkDOM.setAttribute("rel","noopener")
$linkDOM.setAttribute("href","https://youtube.com/jonmircha")
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"));


//Data-attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset.description);

$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));



// Estilos y variables css


const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));


$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.setProperty("display","block")
$linkDOM.style.width = "50%";
$linkDOM.style.backgroundColor = "blue";
$linkDOM.style.color = "white";
$linkDOM.style.textAlign = "center";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));


//Variables CSS-Custom Propertys

const $html = document.documentElement,
      $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
 varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

 console.log(varDarkColor, varYellowColor);

 $body.style.backgroundColor = varDarkColor;
 $body.style.color = varYellowColor;

 $html.style.setProperty("--dark-color","#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")



$body.style.setProperty("background-color",varDarkColor)



//Clases CSS

const $card = document.querySelector(".card");

console.log($card);
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList); 
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45")
$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45","rotate-135")
$card.classList.add("opacity-80","sepia")
$card.classList.remove("opacity-80","sepia")
$card.classList.toggle("opacity-80","sepia")



//Texto y HTML

const $whatItsDOM = document.getElementById("que-es");

let text = `
    <p>
        El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
        API para documentos HTML y XML.
    </p>
    <p>
        Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
`;


//$whatItsDOM.innerText = text;
$whatItsDOM.textContent = text;//sirve para inyectar sol otexto
$whatItsDOM.innerHTML = text;//lee codigo html
$whatItsDOM.outerHTML = text;//separa los parrafos y no lo envuelve en otro parrafo(mejor opcion)


// DOM Traversing: está enfocado a los Elementos, es decir a las etiquetas HTML

const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children); // los hijos de "cards" "elementos"
console.log($cards.children[2]); // hijo 3
console.log($cards.parentElement); // retorna el elemento "body"
console.log($cards.firstChild); // hace referencia al espacio "enter", por lo tanto no es muy útil.
console.log($cards.firstElementChild); // obtiene el primer elemento de "cards"
console.log($cards.lastElementChild); // obtiene el último "Elemento" hijo
console.log($cards.previousElementSibling); // el "Elemento" hermano antes del "card"
console.log($cards.nextElementSibling); // el siguiente "Elemento" hermano de "card"
console.log($cards.closest("div")); // es un método que busca el ancestro, el padre más cercano
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); // el padre mas cercano del elemento n°3

// Creando Elementos y Fragmentos en html




 const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"), 
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure")

$img.setAttribute("src","https://placeimg.com/200/200/animals")
$img.setAttribute("alt","Animals")
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`; 

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera","Verano","Otoño","Invierno"],
 $ul = document.createElement("ul");

 document.write("<h3>Estaciones del Año</h3>"); 
 document.body.appendChild($ul)

 estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
 });


 const continentes = ["África","América","Asia","Europa","Oceaniá"],
    $ul2 = document.createElement("ul");


document.write("<h3>Continentes del Mundo</h3>")
document.body.appendChild($ul2);
$ul2.innerHTML  = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));


const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
],

$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
})



document.write("<h3>Meses del Año</h3>")
$ul3.appendChild($fragment);
document.body.appendChild($ul3);


*/











