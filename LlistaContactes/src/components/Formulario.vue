<template>
    <form @submit.prevent="enviarDades">
        <input v-model="nombre" type="text" name="nombre" placeholder="Nom" />
        <input v-model="telefono" type="text" name="telefono" placeholder="Telèfon" />
        <button type="submit">Afegir Contacte</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

// Datos reactivas
const nombre = ref('');
const telefono = ref('');

// Definimos el emit
const emitir = defineEmits(['enviarContacto']);

// Función para enviar los datos cuando se agrega un contacto
const enviarDades = () => {
    if (nombre.value && telefono.value) {
        const nuevoContacto = {
            nombre: nombre.value,
            telefono: telefono.value,
        };
        // Emitimos el nuevo contacto
        emitir('enviarContacto', nuevoContacto);

        // Limpiamos los campos del formulario
        nombre.value = '';
        telefono.value = '';
    }
};
</script>
