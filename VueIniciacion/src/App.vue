<template>
    <header>
        <Navigation></Navigation>
    </header>
    <div class="container">
   <RouterView/>
    </div>
  </template>
  
  <script setup>
import { RouterView, RouterLink } from 'vue-router';
import Navigation from './components/Navigation.vue';
import DefineEmitPadre from './components/DefineEmitPadre.vue';
</script>
  