<template>
  <div>
    <h1>Componente Emit Padre</h1>
    <h2>Nombre recibido: {{ userName }}</h2>
    <!-- Usar el componente hijo y escuchar el evento -->
    <DefineEmitHijo @enviarMensj="pillarNombre" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DefineEmitHijo from './DefineEmitHijo.vue';

// Variable reactiva para el nombre
const userName = ref('');

// Función para actualizar el nombre
const pillarNombre = (name) => {
  userName.value = name;
};
</script>
