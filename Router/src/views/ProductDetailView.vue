<template>
    <h2>Detail Product</h2>
    <p>{{ $route.params.id }}</p>
    <p>{{ $route.params.name }}</p>
    <p>{{ $route.params.description }}</p>
</template>

<script setup>
import productos from '@/assets/productos.json';
import { RouterLink } from 'vue-router';
</script>