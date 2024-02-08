
//añadir velitas
function createMiniCandles(numOfCandles){
    const cake = document.querySelector('.cake');

    const cakeHeight = cake.clientHeight;
    const miniCandleHeight = 15;
    const candlesSpacing = 5; // Adjust this to set the spacing between candles

 


    for (let i = 0; i < numOfCandles; i++) {
        const miniCandle = document.createElement('div');
        miniCandle.className = 'miniCandle';
        //se posicionan las velas

        miniCandle.style.top = `${cakeHeight - miniCandleHeight - 110}px`; // Adjusted for height above the cake

        miniCandle.style.left = `${i * candlesSpacing + 39}px`;
        
        cake.appendChild(miniCandle);
    }
}
window.addEventListener('load', function(){
    createMiniCandles(31);
});
// Función para reiniciar las velas y la flama
function resetCandles() {
    const mainCandle = document.querySelector('.candle');
    const miniCandles = document.querySelectorAll('.miniCandle');
    const flame = document.querySelector('.flame');

    // Eliminar clases de apagado
    mainCandle.classList.remove('candle-off');
    miniCandles.forEach(miniCandle => {
        miniCandle.classList.remove('candle-off');
    });

    // Eliminar clase de apagado de la flama
    flame.classList.remove('flame-off');
}

// Evento de clic en la caja
document.getElementById('click').addEventListener('click', function () {
    document.querySelector('.click').classList.toggle('open');
    document.querySelector('.cake').classList.toggle('show-cake');
    
    // Llamar a la función para reiniciar las velas
    resetCandles();
});

window.addEventListener('load', function () {
    const candles = document.querySelectorAll('.miniCandle');
    const mainCandle = document.querySelector('.candle');
    const flame = document.querySelector('.flame');

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const analyser = audioContext.createAnalyser();
            const microphone = audioContext.createMediaStreamSource(stream);

            microphone.connect(analyser);
            analyser.fftSize = 256;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            function update() {
                analyser.getByteFrequencyData(dataArray);
                const averageVolume = dataArray.reduce((acc, value) => acc + value, 0) / bufferLength;

                const threshold = 150;

                if (averageVolume > threshold) {
                    console.log('Blowing detected!');
                    blowCandle();
                }

                requestAnimationFrame(update);
            }

            update();
        })
        .catch(function (err) {
            console.error('Error accessing the microphone: ', err);
        });

    function blowCandle() {
        console.log('Candle blown!');
        
        // Apagar la animación de la vela grande
        mainCandle.classList.add('candle-off');

        // Apagar las mini velas
        const miniCandles = document.querySelectorAll('.miniCandle');
        miniCandles.forEach(miniCandle => {
            miniCandle.classList.add('candle-off');
        });

        // Apagar la flama
        flame.classList.add('flame-off');
    }
});

/*
console.log('Candle blown!');

        // Apaga la animación de la vela grande
        const mainCandle = document.querySelector('.candle');
        mainCandle.classList.add('candle-off');
        

        // Apaga las mini velas
        const miniCandle = document.querySelectorAll('.miniCandle');
        miniCandle.forEach(miniCandle => {
            miniCandle.classList.add('candle-off');
    });
    const flame = document.querySelector('.flame');
    flame.classList.add('flame-off')

}
});
*/
//CARTA
const envelope = document.querySelector('.envelope-wrapper');
    console.log("Click en el sobre");
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('flap');
});
//TEXTO CARTA
const contenidoTexto = document.getElementById('contenido-texto');
const rutaArchivo = 'texto.txt';

fetch(rutaArchivo)
    .then(response => {
        if (!response.ok){
            throw new Error('No se pudo cargar el archivo');
        }
        return response.text();
    })
    .then(texto => {
        contenidoTexto.innerHTML = texto;
    })
    .catch(error => {
        console.error('Error al cargar el archivo: ', error);
    });

//boton carta
const button = document.getElementById('button');
const cartaContainer = document.getElementById('cartaContainer');
const birthdayGift = document.querySelector('.birthday-gift');
let videoDisplayed = false;
const audio = document.getElementById('bdaysound');

button.addEventListener('click', function() {
    // Verificar si la carta está visible
    if (cartaContainer.style.display !== 'none') {
        // Si la carta está visible, la ocultamos y mostramos la caja de regalo
        cartaContainer.style.display = 'none';
        birthdayGift.classList.remove('hidden');
    } else {
        // Si la carta no está visible, la mostramos y ocultamos la caja de regalo
        cartaContainer.style.display = 'block';
        birthdayGift.classList.add('hidden');

        //si el videoo aunn no se ha mostrado
        if (!videoDisplayed) {
            //espera un minuto
            setTimeout(function(){
                mostrarVideo();
            }, 60000);
        }
    }
});

//para que salga el video
function mostrarVideo(){
    const video = document.getElementById('hacking');
    video.style.display = 'block';
    video.play();
    videoDisplayed = true;
    audio.pause();
}