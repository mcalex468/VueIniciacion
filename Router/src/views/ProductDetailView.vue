<template>
    <h2>Detail Product</h2>
    <p>ID: {{ id }}</p>
    <p>Name: {{ name }}</p>
    <p>Description: {{ description }}</p>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  // Definir las props que hemos pasado por parametro en el Product
  defineProps({
    id: String,
    name: String,
    description: String
  })

  /*
  // Podemos declarar asi, por si tenemos que hacer 
  // alguna funcion, usamos props.id para acceder al valor
  const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
  description: String,
  required: true,
  }
});
*/
  </script>
  