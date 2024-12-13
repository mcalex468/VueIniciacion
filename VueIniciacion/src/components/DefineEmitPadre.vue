<template>
  <div>
    <h1>Nombre recibido: {{ userName }}</h1>
    <!-- Escuchamos el evento submitName del hijo -->
    <DefineEmitHijo @submitName="handleName" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DefineEmitHijo from './DefineEmitHijo.vue';

// Variable reactiva para almacenar el nombre recibido
const userName = ref('');

// Función que actualiza el nombre
const handleName = (name) => {
  userName.value = name;
};
</script>