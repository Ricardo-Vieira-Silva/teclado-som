function tocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0; retirado por conta do for

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
     const idAudio = `#som_${instrumento}`;
//   console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    //contador = contador + 1; retirado por conta do for
    //console.log(contador);

    tecla.onkeydown = function(evento) {

       if (evento.code === 'space' || evento.code === 'Enter' ) {
        tecla.classList.add('ativa');
       }

    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
}
