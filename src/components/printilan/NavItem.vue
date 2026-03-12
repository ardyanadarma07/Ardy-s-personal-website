<template>
  <button 
    class="w-fit h-fit font-semibold text-sm md:text-base px-6 py-2 md:px-8 rounded-full transition-all duration-300 border-2 flex items-center justify-center cursor-pointer"
    
    :class="active ? 'bg-cream text-gelap md:text-gelap border-gelap' : 'bg-birutua text-white border-transparent hover:bg-cream hover:text-gelap hover:border-gelap'"
  >
    <slot></slot>
  </button>
</template>

<script setup>
// Daftarkan props 'active' agar komponen ini tahu kapan dia sedang diklik
defineProps({
  active: {
    type: Boolean,
    default: false
  }
});
</script>

<script setup>
</script>