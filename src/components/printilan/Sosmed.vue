<template>
  <button
    class="rounded-full group w-11 h-11 bg-transparent border-2 border-gelap group-hover:border-base flex items-center justify-center group-hover:bg-gelap group-hover:text-base transition-colors duration-300"
  >
    <a :href="linkSosmed">
      <span class="w-6 h-6 group justify-center items-center flex text-white">
        <slot> </slot>
      </span>
    </a>
  </button>
</template>

<script setup>
defineProps({
  linkSosmed: String
});
</script>
