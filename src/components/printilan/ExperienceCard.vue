<template>
    <div class="w-full h-fit flex gap-4 justify-center items-start">
        <!-- div field -->
        <div class="flex flex-col justify-center items-left border-2 border-gelap rounded-full w-full px-7 py-3 cursor-default">
            <h1 class="font-semibold text-lg font-poppins text-gelap">{{ role }}</h1>
            <h2 class="font-regular text-xs text-gelap">{{ place }}</h2>
        </div>
    </div>
</template>

<script setup>
defineProps({
    role: String,
    place: String
});
</script>