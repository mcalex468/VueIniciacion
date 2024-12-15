<template>
    <h1>Llibreta de contactes</h1>
    <Formulario @enviarContacto="añadirContacto"/>
    <input v-model="nombreContacto" placeholder="Escribe el nombre de contacto a buscar"/>
    <BuscarContactes :contactos="filtrarContactos"/>
</template>

<script setup>
import BuscarContactes from './components/BuscarContactes.vue';
import Formulario from './components/Formulario.vue';
import { computed, ref } from 'vue';

// Declaración del array de contactos
const contactos = ref([]);

// Nombre de contacto a buscar
const nombreContacto = ref('');

// Computada para filtrar los contactos por nombre
const filtrarContactos = computed(() => {
    // Si no se escribe nada se muestran todos
    if (!nombreContacto.value) {
        return contactos.value;
    }
    // Cuando se pone una letra ya desaparecen todos y se activa el filter
    return contactos.value.filter(contacto =>
        contacto.nombre.toLowerCase().includes(nombreContacto.value.toLowerCase())
    );
});

// Función para añadir un nuevo contacto al array
const añadirContacto = (contacto) => {
    contactos.value.push(contacto);
};
</script>
