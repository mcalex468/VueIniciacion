<template>
  <h1>{{ nombre }}</h1>
  <input v-model="nombre" type="text" name="nombre" class="titulo">
  <Divisa />
  <Producto />
  <ListaComanda />
</template>

<script setup>
import { ref, provide } from 'vue';
import ListaComanda from './components/ListaComanda.vue';
import Divisa from './components/Divisa.vue';
import Producto from './components/Producto.vue';

// Declarar todas las constantes primero
const productos = [
    { id: 1, name: "Hamburger 🍔.", price: 5 },
    { id: 2, name: "Cheeseburger 🧀", price: 6 },
    { id: 3, name: "Impossible Burger 🥕", price: 7 },
    { id: 4, name: "Fries 🍟", price: 2 }
];

const nombre = ref('');
const carrito = ref([]);
const divisaSeleccionada = ref('EUR');

// Declarar funciones antes de usarlas en provide
const agregarProducto = (producto) => {
    carrito.value.push(producto);
};

console.log("HOLA")

// Funcion para cambiar el valor
const calcularPrecio = (precio) => {
    let precioConvertido;

    if (divisaSeleccionada.value === 'USD') {
        precioConvertido = (precio * 1.1).toFixed(2);
        return `${precioConvertido} $`;
    }

    precioConvertido = precio.toFixed(2);
    return `${precioConvertido} €`;
};

// Usar provide después de que todas las constantes y funciones estén definidas
provide('productos', productos);
provide('listaCompra', carrito);
provide('agregarProducto', agregarProducto);
provide('divisaSeleccionada', divisaSeleccionada);
provide('calcularPrecio', calcularPrecio);
</script>




