<template>
    <h1>{{ nombre }}</h1>
    <input v-model="nombre" type="text" name="nombre" class="titulo">

    <Divisa/>
    <Producto @agregarProducto="agregarProducto"/>
    <ListaComanda/>
</template>

<script setup>
import { ref } from 'vue';
import { provide } from 'vue';
import ListaComanda from './components/ListaComanda.vue';
import Divisa from './components/Divisa.vue';
import Producto from './components/Producto.vue';

const productos = [
    { name: "Hamburger 🍔.", price: 5 },
    { name: "Cheeseburger 🧀", price: 6 },
    { name: "Impossible Burger 🥕", price: 7 },
    { name: "Fries 🍟", price: 2 }
];

const nombre = ref('');
const carrito = ref([]);

provide('productos',productos);
provide('listaCompra',carrito);
provide('agregarProducto',agregarProducto);
provide('calcularPrecio',calcularPrecio);
provide('divisaSeleccionada',divisaSeleccionada);

const divisaSeleccionada = ref('EUR');

const agregarProducto = (producto) =>{
    carrito.value.push(producto);
}

const calcularPrecio = (precio) => {
  let precioConvertido = precio;
  // Si la divisa seleccionada es USD, aplicamos el tipo de cambio
  if (divisaSeleccionada.value === 'USD') {
    precioConvertido = precio * 1.1;
  } 
  // Si es EUR, no cambiamos el precio (ya está en euros)
  else if (divisaSeleccionada.value === 'EUR') {
    precioConvertido = precio; 
  }
  // Redondear el precio a 2 decimales
  precioConvertido = precioConvertido.toFixed(2);
  // Añadir el símbolo de la divisa al precio
  let precioFinal = '';
  if (divisaSeleccionada.value === 'USD') {
    precioFinal = `${precioConvertido} $`;
  } else if (divisaSeleccionada.value === 'EUR') {
    precioFinal = `${precioConvertido} €`;
  }

  return precioFinal;
};

</script>