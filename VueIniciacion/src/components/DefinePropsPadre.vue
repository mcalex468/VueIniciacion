<template>
    <div>
        <h2>Componente 1</h2>
      <DefinePropsHijo :nom="nom"/>
    </div>
  </template>
  
  <script setup>
  import DefinePropsHijo from './DefinePropsHijo.vue';
  import { ref } from 'vue';
  const nom = ref('Define Props Pasando Datos');
  </script>
  