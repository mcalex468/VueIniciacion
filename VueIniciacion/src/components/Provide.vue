<script setup>
import { provide } from 'vue';
import Inject from './Inject.vue';

const mensaje = 'Este mensaje es enviado desde Provide, hacia Inject';
provide('mensajeCompartido', mensaje);
</script>

<template>
    <h1>Componente Provide</h1>
  <Inject/>
</template>