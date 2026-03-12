<template>
  <div class="w-full h-fit flex justify-center items-start">
    <div class="flex flex-col justify-center items-start border-2 border-gelap rounded-full md:rounded-full w-full px-6 py-4 md:px-7 md:py-3 cursor-default">
      
      <h1 class="font-semibold text-sm md:text-lg font-poppins text-gelap w-full">{{ role }}</h1>
      
      <h2 class="font-normal text-xs md:text-sm text-gelap mt-1">{{ place }}</h2>
      
    </div>
  </div>
</template>

<script setup>
defineProps({
    role: String,
    place: String
});
</script>