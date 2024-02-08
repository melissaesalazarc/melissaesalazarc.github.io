

// para que cuando se le de click abra una nueva pantalla
document.addEventListener('DOMContentLoaded', function(){
    var robertoImagen = document.getElementById('roberto-profile');
    robertoImagen.addEventListener('click', function(){
        //
        robertoImagen.style.transform = 'scale(1.2)';
        robertoImagen.nextElementSibling.style.transform = 'translateY(-10px)';
        setTimeout(function(){
            window.location.href = '/mainpage.html';
        }, 3000);
        
    });
});

//cuando el mouse esta por encima se hace mas largo
function enlargeProfile(profile){
    profile.style.transform = 'scale(1.2)';
    profile.style.boxShadow = '0 0 10px rgba(255,255,255,0.8)';
    profile.nextElementSibiling.style.transform = 'translateY(-10px)';
}

//cuando el mouse no esta cerca, vuelve al tamaño normal
function resetProfile(profile){
    profile.style.transform = 'scale(1)';//se restablece el tamaño
    profile.style.boxShadow = 'none';
    profile.nextElementSibiling.style.transform = 'translateY(0)';

}

//mensaje para add new profile
function showCustomMessage(){
    var customMessage = document.createElement("div");
    customMessage.textContent = "Sorry mi chavo, orita no";
    document.body.appendChild(customMessage);

    //style
    customMessage.style.padding = "20px";
    customMessage.style.border = "1px solid #ccc";

    //se elimina el mensaje desp de x segundos
    setTimeout(function(){
        document.body.removeChild(customMessage);
    }, 3000);
}

//////////////MAINPAAGE//////////////

let btn = document.querySelector('.btn');
let mainpagebody = document.querySelector('.mainpagebody');
let audioclick = document.querySelector('#audioclick');

//movimiento boton switch
btn.onclick = function(){
    mainpagebody.classList.toggle('on');
    audioclick.play();
}
//checa que se hayan clickeado todas las iagenes

// Función para mostrar una imagen con un retraso
function showImageWithDelay(className, delay) {
    setTimeout(function() {
        document.querySelector(className).style.display = 'block';
    }, delay);
}


// Función para verificar si todas las imágenes han sido clickeadas
function checkAllImagesClicked() {
    var clickableImages = document.querySelectorAll('.beer, .cine, .camara, .comida, .xbox, .boleto, .elmo');
    var allClicked = Array.from(clickableImages).every(function(image) {
        return image.classList.contains('clicked');
    });

    if (allClicked) {

        showImageWithDelay('.molly', 3000);
        showImageWithDelay('.eeve', 4000);
        showImageWithDelay('.calabaza', 5000);
        showImageWithDelay('.speech-bubble', 6000);

        
        setTimeout(function(){
            document.getElementById("myButton").style.display = "inline-block";
            document.getElementById("myButton").addEventListener("click", openNewPage);
        },8000);
        
    }
}

function openNewPage() {
    window.location.href = '/regalo/regalo.html';
}

//texto cuando se da click
function openModal(texto){
    document.getElementById("modal-text").innerText =texto;
    document.getElementById("myModal").style.display="block";

    event.currentTarget.classList.add('clicked');
    checkAllImagesClicked();
}
function closeModal(){
    document.getElementById("myModal").style.display="none";
}
//cierra el modal si se hace click afuera
window.addEventListener('click', function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
//se cierra si se da tecla esc
window.addEventListener('keydown', function(event) {
    var modal = document.getElementById("myModal");
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

/// REGALO///




