<template>
    <h1>Lista Producto</h1>
    <div v-for="producto in productos" :key="producto.id">
        {{ producto.name }} - {{ producto.description }}
        <!-- Ruta relativa para la ruta hijo -->
        <RouterLink 
            :to="{
                name: 'productDetail', 
                params: { 
                    id: producto.id, 
                    name: producto.name, 
                    description: producto.description 
                }
            }"
        >{{ producto.id }}</RouterLink>
    </div>
    <RouterView/>
 </template>
 
 <script setup>
 // Importamos el json con nombre productos
 import productos from '@/assets/productos.json';
 import { RouterLink } from 'vue-router';
 </script>
 