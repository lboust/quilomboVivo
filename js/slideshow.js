carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides"); // Classe que mostra as imagens
  for (i = 0; i < x.length; i++) {                     // para todas as imagens
    x[i].style.display = "none";                       // ocultar
  }
  i = x.length - 1;
  innerCarouselLoop();  
  function innerCarouselLoop() {
    x[i].style.display = "none";         // oculta imagem atual
    i++;                                 // seleciona a próxima imagem
    if (i > x.length-1) {i = 0}          // se a próxima não existe, volta para a primeira
    x[i].style.display = "block";        // mostra a atual
    setTimeout(innerCarouselLoop, 2000); // Muda a imagem a cada 2 segundos
  }
}
