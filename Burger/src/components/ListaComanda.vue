<template>
    <div class="lista">
        <!-- Utilizamos v-for en la lista injectada (carrito) -->
        <div v-for="producto in listaCompra" :key="producto.id">
            {{ producto.name }} - {{  calcularPrecio(producto.price) }}
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';


const listaCompra = inject('listaCompra');
const calcularPrecio = inject('calcularPrecio');
</script>