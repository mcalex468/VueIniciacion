<template>
    <h2>Detail Product</h2>
    <p>{{ id }}</p>
    <p>{{ name }}</p>
    <p>{{ description }}</p>
</template>

<script setup>
import productos from '@/assets/productos.json';
import { RouterLink } from 'vue-router';
</script>