<template>
  <div class="group relative w-[148px] h-[170px] overflow-hidden cursor-default animate-pulse">
    <!-- div bawah -->
    <div class="absolute inset-0 w-36 h-[164px] ml-1 mt-1 rounded-md bg-gelap border-2 border-gelap z-10 transition-colors duration-500">

    </div>

    <!--  div atas -->
    <div class="absolute inset-0 w-36 h-[164px] bg-base rounded-md border-2 border-gelap z-10 transition-colors duration-500">
        <div class="w-full h-full gap-5 justify-center items-center flex flex-col ">
            <img :src="gambarLogo" alt="Logo" class="w-16 h-16">
            <h1 class="text-md font-bold text-gelap font-poppins">
                {{ label }}
            </h1>
        </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    label: String,
    gambarLogo: String
});
</script>
