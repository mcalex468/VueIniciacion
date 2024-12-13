<template>
    <div>
      <form @submit.prevent="submitName">
        <input type="text" v-model="name" placeholder="Escribe tu nombre" />
        <button type="submit">Enviar Nombre</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Declaramos el evento que el hijo emitirá
  const emit = defineEmits(['submitName']);
  
  // Variable reactiva para el nombre
  const name = ref('');
  
  // Función que emite el nombre al padre
  const submitName = () => {
    emit('submitName', name.value);
  };
  </script>
  