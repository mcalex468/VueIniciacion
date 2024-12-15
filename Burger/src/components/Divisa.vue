<template>
<div class="divisa">
    <label for="divisa">Selecciona la Divisa:</label>
    <select id="divisa" v-model="divisaSeleccionada">
      <option value="EUR">Euro (€)</option>
      <option value="USD">Dólar ($)</option>
    </select>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const divisaSeleccionada = inject('divisaSeleccionada');

</script>