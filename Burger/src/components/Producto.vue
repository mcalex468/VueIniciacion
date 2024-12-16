<template>
    <div class="productos">
        <!-- Hemos injectado el array producto , lo utilizamos en el v-for -->
        <div v-for="producto in productos" :key="producto.name">
            <!-- Utilizamos el inject calcular precio dentro ponemos el precio del array -->
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

// Nombre de la funcion del click , dentro usamos el inject
const agregarProducto = (producto) => {
    añadirCarrito(producto);
}

</script>