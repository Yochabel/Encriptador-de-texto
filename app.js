"use strict"

function encriptarTexto(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
    return textoDesencriptado;
}
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('textoEntrada');
    const divMensaje = document.getElementById('textoSalida');
    const spanMensaje = divMensaje.querySelector('span'); 
    const divOcultar = document.getElementById('textoOcultar');

    textarea.addEventListener('input', function() {
        //Verificar si el textarea está vacío
        if (textarea.value.trim() === '') {
            //Si está vacío, deshabilitar ambos botones
            btnEncriptar.disabled = true;
            btnDesencriptar.disabled = true;
        } else {
            //Si no está vacío, habilitar ambos botones
            btnEncriptar.disabled = false;
            btnDesencriptar.disabled = false;
        }
    });

    document.getElementById('btnEncriptar').addEventListener('click', function() {
        let texto = document.getElementById('textoEntrada').value.toLowerCase();
        let resultado = encriptarTexto(texto);
        mostrarResultado(resultado);
        agregarBotonCopiar(resultado);
    });

    document.getElementById('btnDesencriptar').addEventListener('click', function() {
        let texto = document.getElementById('textoEntrada').value.toLowerCase();
        let resultado = desencriptarTexto(texto);
        mostrarResultado(resultado);
    });

    function mostrarResultado(resultado) {
        if (resultado) {
            divMensaje.style.display = 'block'; // Asegura que el div esté visible
            spanMensaje.textContent = resultado; // Muestra el resultado en el span
            divOcultar.style.display = 'none';
        } else {
            divMensaje.style.display = 'none'; // Oculta el div si no hay resultado
        }
        if (resultado = false){
            divMensaje.display = 'Ningún mensaje fue encontrado';
        }
    }
    function agregarBotonCopiar(resultado) {
        const botonCopiar = document.getElementById('btnCopiar');
    
        //Habilitar el botón de copiar
        botonCopiar.removeAttribute('disabled');
    
        //Asignar la función para copiar el texto al portapapeles al hacer clic en el botón
        botonCopiar.addEventListener('click', function() {
            //Copiar el resultado al portapapeles
            navigator.clipboard.writeText(resultado)
                .then(() => {
                    console.log('Texto copiado al portapapeles');
                })
                .catch(err => {
                    console.error('Error al copiar texto: ', err);
                });
        });
    } 
});