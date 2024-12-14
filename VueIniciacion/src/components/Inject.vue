<template>
    <h2>Componente Inject</h2>
    <p>{{ mensaje }}</p>
</template>

<script setup>
import { inject } from 'vue';

const mensaje = inject('mensajeCompartido');
</script>