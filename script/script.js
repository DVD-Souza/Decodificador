var textinput = document.querySelector("#input-text");
var outinput = document.querySelector("#output-text");

function criptografar(){
    var texto = textinput.value

    var resultcripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output-text').innerHTML = '<textarea readonly id="input-text" class="output_text">'+resultcripto+'</textarea>'+'<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar(){
    var texto = textinput.value;

    var resultcripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u"); 

    document.getElementById('output-text').innerHTML = '<textarea readonly id="input-text" class="output_text">' + resultcripto +'</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar(){
    var textcop = document.querySelector(".output_text");
  
    textcop.select();
    document.execCommand('copy')
    alert("Texto copiado.");
}