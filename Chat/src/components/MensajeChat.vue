<template>
    <form @submit.prevent="enviarMensaje">
        <input v-model="mensaje" type="text" name="mensaje" placeholder="Escribe tu mensaje">
        <button type="submit">Enviar</button>
    </form>
</template>

<script setup>
import { defineEmits, ref, defineProps } from 'vue';

// Definición de la propiedad 'autor' que recibimos desde el componente padre
const props = defineProps({
   autor: String 
});

// Definir el evento 'enviarMensaje'
const emit = defineEmits(['enviarMensaje']);

// Declaración de la variable reactiva 'mensaje'
const mensaje = ref('');

// Función para enviar el mensaje
const enviarMensaje = () => {
  // Verificar si el mensaje no está vacío
  if (mensaje.value) {
    // Crear el objeto mensajeNuevo con el autor y el mensaje
    const mensajeNuevo = {
      autor: props.autor,
      mensaje: mensaje.value
    };
    
    // Emitir el evento 'enviarMensaje' con el mensajeNuevo
    emit('enviarMensaje', mensajeNuevo);

    // Limpiar el campo del mensaje después de enviarlo
    mensaje.value = '';
  }
};
</script>
