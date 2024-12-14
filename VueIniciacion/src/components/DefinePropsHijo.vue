<template>
    <div>
    <h2>Componente 2</h2>
    <p>Prueba de: {{ nom }}</p>
    </div>
  </template>
  
  <script setup>
  
  const props = defineProps({
      nom: String, // La prop debe ser de tipo String
      required: true, // Esta prop es obligatoria
  });
  
  </script>