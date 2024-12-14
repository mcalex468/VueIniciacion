<template>
  <div>
    <h1>Componente Emit Hijo</h1>
    <input
      type="text"
      v-model="nombre"
      name="nombre"
      placeholder="Escribe tu nombre"
    />
    <button @click="enviarM">Enviar</button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import { ref } from 'vue';

// Definir el evento que el componente emitirá
const emit = defineEmits(['enviarMensj']);
const nombre = ref('');

// Función para emitir el evento
const enviarM = () => {
  emit('enviarMensj', nombre.value);
};
</script>
