<template>
    <div>
      <!-- Pasamos la prop 'nom' al componente hijo -->
      <DefinePropsHijo :nom="nom" />
    </div>
  </template>
  
  <script setup>
  import DefinePropsHijo from '@/components/DefinePropsHijo.vue'; // Importamos el componente hijo
  import { ref } from 'vue';
  
  // La propiedad reactiva 'nom' que se pasa al componente hijo
  const nom = ref('Define Props Pasando Datos');
  </script>
  