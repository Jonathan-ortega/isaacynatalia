document.addEventListener('DOMContentLoaded', function() {
    function actualizarCuentaAtras() {
        const fechaObjetivo = new Date("November 2, 2024 15:40:00").getTime();
        const ahora = new Date().getTime();
        const distancia = fechaObjetivo - ahora;

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000).toString().padStart(2, '0');

        const timerElement = document.getElementById("timer");
        timerElement.innerHTML = `${dias} ${horas}:${minutos}:${segundos}`;

        const messageElement = document.getElementById("message");
        if (distancia < 0) {
            clearInterval(intervalo);
            timerElement.style.display = 'none';
            messageElement.style.display = 'block';
        }
    }

    const intervalo = setInterval(actualizarCuentaAtras, 1000);
    actualizarCuentaAtras(); // Llama a la función inicial para mostrar la cuenta atrás de inmediato
});