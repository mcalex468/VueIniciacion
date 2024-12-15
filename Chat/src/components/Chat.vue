<template>
    <div class="container">
        <h2>Lista Mensajes</h2>
        <div class="lista">
            <div v-for="mensaje in mensajes" :key="mensaje.mensaje">
                <p>Autor: {{ mensaje.autor }}</p>
                <p>Mensaje: {{ mensaje.mensaje }}</p>
            </div>
        </div>
        <MensajeChat @enviarMensaje="añadirMensaje" :autor="autor" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import MensajeChat from './MensajeChat.vue';

const autor = ref('Usuario-1');

const mensajes = ref([]);

const añadirMensaje = (nuevoMensaje) => {
    mensajes.value.push(nuevoMensaje);
}

</script>
