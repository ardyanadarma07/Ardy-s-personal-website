<template>
  <div class="flex flex-col gap-2">
    <h1 class="font-poppins text-white font-medium text-sm">{{ label }}</h1>
    
    <textarea 
      :placeholder="placeholderInput" 
      rows="5"
      class="w-full px-4 py-3 border-2 border-gelap rounded-xl font-poppins focus:border-2 focus:border-birutua focus:outline-none placeholder:text-gelap placeholder:font-poppins resize-none"
    ></textarea>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  placeholderInput: String
});
</script>