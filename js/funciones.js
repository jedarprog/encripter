 function encriptar(texto) {
    let resultado = "";
     for (let i = 0; i < texto.length; i++) {
       let caracter = texto[i];
       switch (caracter) {
         case "a":
           resultado += "a" + "i";
           break;
         case "e":
           resultado += "e" + "nter";
           break;
         case "i":
           resultado += "i" + "mes";
           break;
         case "o":
           resultado += "o" + "ber";
           break;
         case "u":
           resultado += "u" + "fat";
           break;
         default:
           resultado += caracter;
           break;
       }
     }
     return resultado;
};

function desencriptar(texto) {
    let resultado = texto.replace(/ai/g, "a");
    resultado = resultado.replace(/enter/g, "e");
    resultado = resultado.replace(/imes/g, "i");
    resultado = resultado.replace(/ober/g, "o");
    resultado = resultado.replace(/ufat/g, "u");
    return resultado;
  }


  function copiar() {
    let copiado = document.getElementById("encriptado")
    copiado.select();
    copiado.setSelectionRange(0, 99999)
    document.execCommand('copy');
    alert("¡copiado!")
  }



