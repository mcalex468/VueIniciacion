<template>
    <h1>Lista Producto</h1>
    <div v-for="producto in productos" :key="producto.id">
        {{ producto.name }} - {{ producto.description }}
        <!-- En el routerLink pasamos todo lo que hayamos pasado por el path del index.js-->
        <RouterLink :to="'/productDetail/' + productos.id + '/' + productos.name + 
        '/' + productos.description">{{ producto.id }}</RouterLink>
    </div>
</template>

<script setup>
import productos from '@/assets/productos.json';
</script>