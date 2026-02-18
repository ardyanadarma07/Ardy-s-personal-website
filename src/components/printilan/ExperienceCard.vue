<template>
    <div class="w-full h-fit flex gap-4 justify-center items-start">
        <!-- div field -->
        <div class="flex flex-col justify-center items-left border-2 border-gelap rounded-full w-full pl-7 pr-60 py-3 cursor-default">
            <h1 class="font-semibold text-lg font-poppins text-gelap">{{ experience }}</h1>
            <h2 class="font-regular text-xs text-gelap">{{ where }}</h2>
        </div>
    </div>
</template>

<script setup>
defineProps({
    experience: String,
    where: String
});
</script>