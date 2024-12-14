<template>
    <div>
        <nav class="nav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/computed">Computed</RouterLink>
            <RouterLink to="/props">Props</RouterLink>
            <RouterLink to="/emit">Emit</RouterLink>
            <RouterLink to="/provideinject">Provide Inject</RouterLink>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>