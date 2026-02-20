<template>
    <div class="w-full h-full flex flex-row gap-4 justify-center items-start">
        <!-- div gambar -->
        <div class="w-fit h-fit px-4 py-4 rounded-full border-2 bg-base border-gelap flex justify-center items-center">
            <img :src="gambarLogo" alt="Logo Education" class="w-10 h-10 flex justify-center items-center">
        </div>

        <!-- div field -->
        <div class="flex bg-base flex-col flex-1 justify-center items-left border-2 border-gelap rounded-full px-7 py-3 cursor-default">
            <h1 class="font-semibold text-lg font-poppins text-gelap">{{ sekolah }}</h1>
            <h2 class="font-regular text-xs text-gelap">{{ tahunMulai }} - {{ tahunSelesai }}</h2>
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