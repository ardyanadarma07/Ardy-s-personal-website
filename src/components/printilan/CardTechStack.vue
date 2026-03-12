<template>
    <div class="w-full h-fit px-2 py-1 border-2 justify-center items-center flex gap-2">
        <img :src="logoTech" alt="Logo Tech Stack" class="w-fit h-4">
        <h1 class="font-bold text-md font-poppins">
            {{ label }}
        </h1>
    </div>

</template>

<script setup>
defineProps({
    label: String,
    logoTech: String
});
</script>