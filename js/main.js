function modoLight() {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "black";
  });
  document.querySelectorAll("a").forEach((a) => {
    a.style.color = "black";
  })
  document.querySelector("h1").style.color = "black";
  document.querySelector("h2").style.color = "black";
  document.querySelector("h3").style.color = "black";
  document.querySelector("h5").style.color = "black";
  document.querySelector("header").style.backgroundColor = "white";
  document.querySelector("header").style.color = "black";
  
  // Obtener todas las tarjetas (cards)
  let cards = document.querySelectorAll(".card");

  // Iterar sobre cada tarjeta y aplicar los estilos
  cards.forEach(card => {
    card.style.backgroundColor = "white"; // Cambiar el color de fondo de la tarjeta
    card.style.color = "black"; // Cambiar el color del texto de la tarjeta
    card.style.borderColor = "black";
  });

  document.querySelector("footer").style.backgroundColor = "white";
  document.querySelector("footer").style.color = "black";
  document.querySelector("footer").style.borderTop = "1px solid black";
}

function modoDark() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "white";
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "white";
  });
  document.querySelectorAll("a").forEach((a) => {
    a.style.color = "white";
  });
  document.querySelector("h1").style.color = "white";
  document.querySelector("h2").style.color = "white";
  document.querySelector("h3").style.color = "white";
  document.querySelector("h5").style.color = "white";
  document.querySelector("header").style.backgroundColor = "black";
  document.querySelector("header").style.color = "white";

  // Obtener todas las tarjetas (cards)
  let cards = document.querySelectorAll(".card");

  // Iterar sobre cada tarjeta y aplicar los estilos
  cards.forEach(card => {
    card.style.backgroundColor = "black"; // Cambiar el color de fondo de la tarjeta
    card.style.color = "white"; // Cambiar el color del texto de la tarjeta
    card.style.borderColor = "white";
  });

  document.querySelector("footer").style.backgroundColor = "black";
  document.querySelector("footer").style.color = "white";
  document.querySelector("footer").style.borderTop = "1px solid white";
}




function copyRight(){
  document.querySelector(".copyRight").innerHTML = "©CopyRight";
  alert("Desarrollado por Matias Peña \n mail: pena_matias@hotmail.com");
}