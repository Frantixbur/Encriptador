function encriptarTexto() {
    let textoIngresado1 = document.getElementById('textoEntrada').value;
    let textoReemplazado = textoIngresado1
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');

    //consola
    console.log('Texto Encriptado:', textoReemplazado);

    document.getElementById('textoReemplazado').textContent = textoReemplazado;
}

function desencriptarTexto() {
    let textoIngresado2 = document.getElementById('textoEntrada').value;
    let textoReemplazado = textoIngresado2
        .replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');

    //consola
    console.log('Texto Desencriptado:', textoReemplazado);

    document.getElementById('textoReemplazado').textContent = textoReemplazado;
}



// Copiar texto
function copiarTexto() {
    let textoReemplazado = document.getElementById('textoReemplazado');
    let button = document.getElementById('botonCopiar');

    navigator.clipboard.writeText(textoReemplazado.textContent);
}



// Función para ajustar la altura del textarea
function ajustarAlturaTextArea(elemento) {
    elemento.style.height = 'auto'; // Restablecer la altura para medir el contenido
    elemento.style.height = elemento.scrollHeight + 'px'; // Ajustar la altura al contenido
}

// Evento de entrada de texto en el textarea
document.addEventListener('input', function(evento) {
    if (evento.target.tagName.toLowerCase() === 'textarea') {
        ajustarAlturaTextArea(evento.target);
    }
});