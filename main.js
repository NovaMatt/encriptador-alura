function encriptarMensaje(textoParaEncriptar) {
  let textoEncriptado = textoParaEncriptar
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  return textoEncriptado;
}


function desencriptarMensaje(textoParaDesencriptar) {
  let textoDesencriptado = textoParaDesencriptar
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  return textoDesencriptado;
}



function funcionEcriptar() {
  let output = document.querySelector(".output");
  let encriptarTexto = document.getElementById("encriptarTexto").value;

  let texto = document.getElementById("texto");
  texto.innerHTML = encriptarMensaje(encriptarTexto);

  output.setAttribute("class", "output outputHiden");
}
function funcionDesencriptar() {
  let encriptarTexto = document.getElementById("encriptarTexto").value;

  let texto = document.getElementById("texto");
  texto.innerHTML =desencriptarMensaje(encriptarTexto);

  
}


function funcionCopiar() {
  
  let textoCopiar = document.getElementById("texto");
  let botonCopiar=document.getElementById('botonCopiar')
  botonCopiar.innerHTML='Copiado'
  botonCopiar.style.backgroundColor="rgb(34 197 94)"
  botonCopiar.style.color="white"
  navigator.clipboard.writeText(textoCopiar.textContent);
  setTimeout(()=>{
    botonCopiar.innerHTML='Copiar'
    botonCopiar.style.backgroundColor="#0a3871"
    botonCopiar.style.color="white"
    
  },1000)
  
  
  
}