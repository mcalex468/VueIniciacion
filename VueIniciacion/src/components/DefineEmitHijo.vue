<template>
  <div>
    <input type="text" name="nombre" placeholder="Escribe tu nombre">
    <button @click="enviarM">Enviar</button>
  </div>
</template>

<script setup>
// Declaramos que el hijo va a emitir un evento llamado 'sendMessage'
import { defineEmits } from 'vue';

const emit = defineEmits(['enviarMensj']);

const nombre = ref('');
// Función para emitir el evento cuando el botón es presionado
const enviarM = () => {
  emit('enviarMensj', nombre.value);
};
</script>
