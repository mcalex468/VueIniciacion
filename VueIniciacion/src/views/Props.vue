<template>
    <div>
      <h1>Vista Props</h1>
      
      <!-- Usamos router-link para navegar a la subruta 'define-props' -->
      <router-link to="/props/define-props">Ver DefinePropsHijo</router-link>
  
      <!-- Aquí solo se renderiza el componente DefinePropsHijo cuando se navega a la subruta -->
      <router-view :nom="nom" ></router-view>  <!-- Aquí se cargará el componente definido en la subruta -->
    </div>
  </template>
  
  <script setup>
  // No necesitas importar DefinePropsHijo directamente, ya que se carga mediante el router-link
  </script>
  