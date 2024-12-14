<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
const nombre = ref('');

</script>

<template>
    <h1>Home Page</h1>
    <h3>{{ nombre }}</h3>
    <input v-model="nombre" name="nombre" placeholder="Escribe tu Nombre">
</template>