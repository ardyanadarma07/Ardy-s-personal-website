<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  Aos.init({ 
    duration: 800, 
    offset: 120, 
    once: true, 
    mirror: true 
    });
});
</script>

<template>
    <RouterView />
</template>

<style scoped>

</style>