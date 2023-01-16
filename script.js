function toggleMode () {
  const html = document.documentElement

//A função toggle faz extamente isso descrito no comentário
/* 
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
*/
  html.classList.toggle('light')

  //pega a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if(html.classList.contains('light')) {
     //se tiver light mode adicionar, adicionar a imagem light
    img.setAttribute("src", "assets/Mobile/avatar-light.png")
    img.setAttribute("alt", "Jullyane de cabelo solto")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "assets/Mobile/avatar-dark.png")
    img.setAttribute("alt", "Jullyane de cabelo preso!")
  }
}