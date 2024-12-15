<template>
    <div class="productos">
        <div v-for="producto in productos" :key="producto.name">
            {{ producto.name }} - {{  calcularPrecio(producto.price) }}
            <button @click="agregarProducto(producto)">Añadir a la Cesta</button>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const productos = inject('productos');
const añadirCarrito = inject('agregarProducto');
const calcularPrecio = inject('calcularPrecio')

const agregarProducto = (producto) => {
    añadirCarrito(producto);
}

</script>