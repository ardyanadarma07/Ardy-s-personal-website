<template>
  <div class="w-full h-full flex flex-row gap-3 md:gap-4 justify-center items-start md:items-center">
    
    <div class="shrink-0 w-fit h-fit p-3 md:p-4 rounded-full border-2 bg-base border-gelap flex justify-center items-center">
      <img :src="gambarLogo" alt="Logo Education" class="w-8 h-8 md:w-10 md:h-10 object-contain flex justify-center items-center">
    </div>

    <div class="flex bg-base flex-col flex-1 justify-center items-start border-2 border-gelap rounded-full md:rounded-full px-6 py-3 md:px-7 md:py-3 cursor-default">
      
      <h1 class="font-semibold text-sm md:text-lg font-poppins text-gelap leading-tight w-full">{{ sekolah }}</h1>
      
      <h2 class="font-normal text-xs md:text-sm text-gelap mt-1">{{ tahunMulai }} - {{ tahunSelesai }}</h2>
      
    </div>
    
  </div>
</template>

<script setup>
defineProps({
    gambarLogo: String,
    sekolah: String,
    tahunMulai: String,
    tahunSelesai: String
});
</script>