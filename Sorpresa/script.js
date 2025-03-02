let count = 0;
let scaleValue = 1; // Valor inicial de escala

// Ruta de las imágenes de las bolitas
const imagenes = [
    '/bola1.png',
    '/bola2.png',
    '/bola3.png'
];

// Crear o encontrar el corazón existente (usamos la imagen)
let heart = document.createElement('div');
heart.classList.add('heart');
document.getElementById('hearts').appendChild(heart);

// Función para crear una bolita con imagen aleatoria
function createBola() {
    let bola = document.createElement('div');
    bola.classList.add('bola');

    let imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];

    bola.style.backgroundImage = `url(${imagenAleatoria})`;
    bola.style.backgroundSize = 'cover';
    bola.style.backgroundPosition = 'center';
    bola.style.left = `${Math.random() * 100}%`;

    bola.addEventListener('click', () => {
        count++;
        document.getElementById('counter').innerText = `Bolas atrapadas: ${count}`;

        // Si el contador llega a 15, mostrar el aviso y descargar la carta
        if (count === 15) {
            // Mostrar el mensaje de "Carta desbloqueada"
            document.getElementById('aviso').innerText = "¡Carta desbloqueada!";
            document.getElementById('aviso').style.display = "block";  // Mostrar el aviso
            setTimeout(() => {
                document.getElementById('aviso').style.display = "none";  // Ocultar el aviso después de 3 segundos
            }, 3000);

            // Reproducir la música
            let audio = document.getElementById('audio');
            audio.play();  // Inicia la reproducción de la música

            // Activar la descarga del archivo PDF
            descargarCarta();
        }

        // Hacer crecer el corazón en 3 píxeles
        scaleValue += 0.40; // Aumenta la escala cada vez que se atrapa una bolita
        heart.style.setProperty('--scale', scaleValue); // Aplicamos el nuevo tamaño al corazón

        // Remover la bolita después de que haya sido atrapada
        bola.remove();
    });

    document.body.appendChild(bola);

    setTimeout(() => {
        bola.remove();
    }, 4000);
}

setInterval(createBola, 2000);

// Función para descargar el archivo PDF
function descargarCarta() {
    const enlace = document.createElement('a');
    enlace.href = '/assets/pdfs/carta.pdf';  // Ruta al archivo PDF
    enlace.download = 'carta.pdf';  // Nombre del archivo a descargar
    enlace.click();  // Simula el clic para descargar el archivo
}

// Frases aleatorias para el título
const frases = [
    "Eres mi razón para sonreír cada día.",
    "Tu sonrisa ilumina mi mundo.",
    "Siempre pienso en ti, incluso cuando no te veo.",
    "Tu presencia hace que mi corazón lata más rápido.",
    "Eres lo más hermoso que tengo.",
    "Cada momento contigo es un regalo.",
    "No hay nada mejor que tenerte cerca.",
    "Cada vez que te veo, mi mundo se vuelve mejor.",
    "Contigo, todo es más bonito.",
    "No puedo dejar de pensar en ti, siempre estás en mi mente."
];

function cambiarFrase() {
    const randomIndex = Math.floor(Math.random() * frases.length);
    const tituloFrase = document.getElementById('tituloFrase');
    tituloFrase.innerText = frases[randomIndex];
}

setInterval(cambiarFrase, 5000);

// Reproducir la música después de un clic en cualquier parte de la página
document.body.addEventListener('click', function() {
    let audio = document.getElementById('audio');
    audio.play();  // Reproducir la música
});
