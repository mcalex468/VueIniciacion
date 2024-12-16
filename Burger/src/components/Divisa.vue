<template>
<div class="divisa">
    <label for="divisa">Selecciona la Divisa:</label>
    <!-- Utilizamos v-model porque el valor es reactivo
     al elegir una o otra en el app vue, se ejecutara la funcion -->
    <select id="divisa" v-model="divisaSeleccionada">
      <option value="EUR">Euro (€)</option>
      <option value="USD">Dólar ($)</option>
    </select>
  </div>
</template>

<script setup>
import { inject } from 'vue';

// Inject de la funcion , entonces depende de la moneda elegida, cambiara
const divisaSeleccionada = inject('divisaSeleccionada');

</script>