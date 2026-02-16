<template>
  <div class="group relative w-44 h-[186px] overflow-hidden cursor-default">
    <!-- div bawah -->
    <div class="absolute inset-0 w-40 h-[182px] ml-1 mt-1 rounded-md bg-birumuda border-2 border-gelap z-10 transition-colors duration-500">

    </div>

    <!--  div atas -->
    <div class="absolute inset-0 w-40 h-[182px] bg-base rounded-md group-hover:bg-gelap border-2 border-gelap z-10 transition-colors duration-500">
        <div class="w-full h-full gap-5 justify-center items-center flex flex-col ">
            <img :src="gambarLogo" alt="Logo" class="w-24 h-24">
            <h1 class="text-2xl font-bold text-gelap group-hover:text-base group-hover:text-2xl">
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
