function validarRespuestas() {
    // Definir las respuestas correctas
    const respuestasCorrectas = {
        q1: 'f',
        q2: 'v',
        q3: 'f',
        q4: 'v',
        q5: 'v',
        q6: 'f',
        q7: 'v',
        q8: 'f',
        q9: 'v',
        q10: 'v',
    };

    // Definir los mensajes de retroalimentación
    const mensajesDeRetroalimentacion = {
        q1: 'El hardware de E/S no solo envía datos, también los recibe. <br>Respuesta correcta: Falso',
        q2: 'Los dispositivos de E/S efectivamente pueden clasificarse en entrada, salida o entrada/salida. <br>Respuesta correcta: Verdadero',
        q3: 'Los controladores de dispositivos no son software; son hardware o firmware. <br>Respuesta correcta: Falso',
        q4: 'Las interrupciones permiten que el procesador no tenga que esperar activamente. <br>Respuesta correcta: Verdadero',
        q5: 'El Acceso Directo a Memoria (DMA) permite transferencias sin intervención del procesador. <br>Respuesta correcta: Verdadero',
        q6: 'El procesador no se detiene por completo durante una interrupción. <br>Respuesta correcta: Falso',
        q7: 'El controlador del dispositivo es un intermediario entre el hardware y el sistema operativo. <br>Respuesta correcta: Verdadero',
        q8: 'Los dispositivos de E/S necesitan más que conexiones físicas, requieren controladores y protocolos. <br>Respuesta correcta: Falso',
        q9: 'El DMA transfiere datos directamente entre la memoria y los dispositivos, reduciendo la carga del procesador. <br>Respuesta correcta: Verdadero',
        q10: 'En un sistema de E/S por interrupciones, los periféricos inician la comunicación cuando están listos. <br>Respuesta correcta: Verdadero',
    };

    // Iterar sobre cada pregunta
    for (let i = 1; i <= 10; i++) {
        const preguntaName = 'q' + i;
        const checkboxes = document.getElementsByName(preguntaName);
        const preguntaRow = document.getElementById('pregunta' + i);

        // Limpiar colores previos y mensajes
        preguntaRow.style.backgroundColor = '';
        const mensajeAnterior = preguntaRow.querySelector('.mensaje-repaso');
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }

        // Verificar cuántos checkboxes están marcados
        const checkboxesMarcados = Array.from(checkboxes).filter(checkbox => checkbox.checked);

        if (checkboxesMarcados.length === 1) {
            // Obtener el valor del checkbox marcado
            const valorCheckbox = checkboxesMarcados[0].value;

            // Verificar si la respuesta es correcta
            if (valorCheckbox === respuestasCorrectas[preguntaName]) {
                // Respuesta correcta, pintar de verde (60% opaco) y mostrar mensaje
                preguntaRow.style.backgroundColor = 'rgba(144, 238, 144, 0.3)'; // lightgreen
                const mensaje = document.createElement('div');
                mensaje.classList.add('mensaje-repaso');
                mensaje.style.color = 'green';
                mensaje.innerText = 'Respuesta correcta';
                preguntaRow.appendChild(mensaje);
            } else {
                // Respuesta incorrecta, pintar de rojo (60% opaco) y mostrar mensaje de repaso personalizado
                preguntaRow.style.backgroundColor = 'rgba(255, 99, 71, 0.3)'; // lightcoral
                const mensaje = document.createElement('div');
                mensaje.classList.add('mensaje-repaso');
                mensaje.style.color = 'red';
                mensaje.innerHTML = mensajesDeRetroalimentacion[preguntaName]; // Usar innerHTML para mostrar HTML correctamente
                preguntaRow.appendChild(mensaje);
            }
        } else if (checkboxesMarcados.length === 0) {
            // Si no se selecciona ninguna opción, pintar de azul (60% opaco)
            preguntaRow.style.backgroundColor = 'rgba(173, 216, 230, 0.3)'; // lightblue
        } else if (checkboxesMarcados.length > 1) {
            // Mostrar mensaje de error si más de un checkbox está marcado en una fila
            alert('Error: Solo puedes seleccionar una opción por pregunta.');
            return; // Detener la validación si hay un error
        }
    }
}
