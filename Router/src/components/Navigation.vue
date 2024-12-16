<template>
<header>
    <div class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/product">Products</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterView/>
    </div>
</header>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>