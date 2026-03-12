<template>
    <div class="flex flex-col gap-2">
        <h1 class="font-poppins text-white font-medium text-sm">{{ label }}</h1>
        <input v-model="model" :type="typeInput" :placeholder="placeholderInput" class="w-full h-fit px-4 border-2 border-gelap py-3 rounded-xl font-poppins focus:border-2 focus:border-birutua focus:outline-none placeholder:text-gelap placeholder:font-poppins "></input>
    </div>
</template>

<script setup>
const model = defineModel()

defineProps({
    label: String,
    typeInput: String,
    placeholderInput: String
});
</script>