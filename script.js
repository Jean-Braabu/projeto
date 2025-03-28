function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "uma mulher vestida de bailarina sorrindo")
  } else {
    img.setAttribute(
      "alt",
      "Foto de uma mulher cara seria, cabeiro loiro e olhos pretos"
    )
  }
  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}

  // pegar a tag img
  // se tiver light mode, adicionar a imagem light
  // substituir a imagem
  // se tiver sem light mode, manter a imagem normal
}
