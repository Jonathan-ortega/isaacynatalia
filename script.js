document.addEventListener('DOMContentLoaded', function() {
    function actualizarCuentaAtras() {
        const fechaObjetivo = new Date("November 2, 2024 15:30:00").getTime();
        const fechaActual = new Date().getTime();
        const distancia = fechaObjetivo - fechaActual;

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000).toString().padStart(2, '0');

        const timerElement = document.getElementById("timer");
        timerElement.innerHTML = `${dias} ${horas}:${minutos}:${segundos}`;

        const messageElement = document.getElementById("message");
        const labelsElement = document.querySelector(".labels"); 
        if (distancia < 0) {
            clearInterval(intervalo);
            timerElement.style.display = 'none';
            messageElement.style.display = 'block';
            labelsElement.style.display = "none"; 
        }

        const fechaActualDate = new Date();
        const dia = fechaActualDate.getDate();
        const mes = fechaActualDate.getMonth();
        const hora = fechaActualDate.getHours();
        const minuto = fechaActualDate.getMinutes();
        const imagen = document.getElementById('imagen');
     
        if (dia === 2 && mes === 10) { 
            switch (true) {
                case (hora === 15 && minuto >= 30):
                    imagen.src = 'images/autocar.png';
                    break;
                case (hora === 16 && minuto >= 30):
                    imagen.src = 'images/espai.png';
                    break;
                case (hora >= 17 && hora < 18):
                    imagen.src = 'images/ceremonia.png';
                    break;
                case (hora >= 18 && hora < 20):
                    imagen.src = 'images/coctel.png';
                    break;
                case (hora >= 20 && hora < 23):
                    imagen.src = 'images/banquete.png';
                    break;
                case (hora >= 23 || hora < 5):
                    imagen.src = 'images/fiesta.png';
                    break;
                default:
                    imagen.src = 'images/cronologia.png';
            }
        }
    }

    const intervalo = setInterval(actualizarCuentaAtras, 1000);
    actualizarCuentaAtras(); 
});
