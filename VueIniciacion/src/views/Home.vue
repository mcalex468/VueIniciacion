<template>
    <h1>Bienvenido a la Pagina Principal</h1>
    <p>Aqui simplemente encontraras una COMPUTED</p>
    <h2>{{ nombre }}</h2>
    <h3>{{ numero }}</h3>
    <h3>Numero * 2</h3>
    <h3>{{ multipliedNumber }}</h3>
    
    <!-- Input con v-model para 'nombre' y 'numero' -->
    <input v-model="nombre" name="nombre" placeholder="Escribe tu nombre" />
    <input v-model="numero" type="number" name="num" placeholder="Escribe un numero" />
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // Variables reactivas
  const nombre = ref('');
  const numero = ref(0);
  
  // Propiedad computada que multiplica el número por 2
  const multipliedNumber = computed(() => {
    return numero.value * 2;
  });
  </script>
  