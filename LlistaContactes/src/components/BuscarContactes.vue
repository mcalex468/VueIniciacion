<template>
  <div>
    <ul>
      <li v-for="contacto in contactos" :key="contacto.telefono">
        {{ contacto.nombre }} - 
        <a :href="'tel:' + contacto.telefono">{{ contacto.telefono }}</a> <!-- Enlace para realizar una llamada -->
      </li>
    </ul>
  </div>
</template>

<script setup>
// Recibe la lista de contactos desde el componente padre
const props = defineProps({
  contactos: Array 
});
</script>
