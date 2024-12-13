<template>
    <div>
      <!-- Aquí mostramos la propiedad 'nom' pasada desde el componente padre -->
      <p>Prueba de: {{ nom }}</p>
    </div>
  </template>
  
  <script setup>
  // Usamos defineProps para declarar las props que recibirá este componente
  import { defineProps } from 'vue';
  
  // Declaramos que el componente recibirá una prop llamada 'nom'
  const props = defineProps({
    nom: {
      type: String,
      required: true,  // La prop es obligatoria
    },
  });
  
  // Puedes acceder a la propiedad directamente con `nom` sin necesidad de usar `props.nom` en el template
  </script>
  