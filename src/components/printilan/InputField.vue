<template>
    <input :type="typeInput" :placeholder="placeholderInput" class="w-full h-fit px-4 border-2 border-gelap py-3 rounded-xl font-poppins focus:border-2 focus:border-birutua focus:outline-none placeholder:text-gelap placeholder:font-poppins "></input>
</template>

<script setup>
defineProps({
    typeInput: String,
    placeholderInput: String
});
</script>