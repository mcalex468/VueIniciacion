<template>
  <div>
<<<<<<< HEAD
    <h1>Nombre recibido: {{ userName }}</h1>
    <!-- Escuchamos el evento submitName del hijo -->
    <DefineEmitHijo @submitName="handleName" />
=======
    <!-- El padre escucha el evento 'enviarM' del hijo y lo maneja con la función handleMessage -->
    <DefineEmitHijo @enviarM="nombre = $event" />
    <h1>{{ nombre }}</h1>
>>>>>>> 81b8776 (c)
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DefineEmitHijo from './DefineEmitHijo.vue';

<<<<<<< HEAD
// Variable reactiva para almacenar el nombre recibido
const userName = ref('');

// Función que actualiza el nombre
const handleName = (name) => {
  userName.value = name;
};
</script>
=======
const nombre = ref('');
</script>
>>>>>>> 81b8776 (c)
