<template>
    <div class="productos">
        <div v-for="producto in productos" :key="producto.name">
            {{ producto.name }} - {{  calcularPrecio(producto.price) }}
            <button @click="añadirProducto(producto)">Añadir a la Cesta</button>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const productos = inject('productos');
const agregarProducto = inject('agregarProducto');
const calcularPrecio = inject('calcularPrecio')

const añadirProducto = (producto) => {
    agregarProducto(producto);
}

</script>