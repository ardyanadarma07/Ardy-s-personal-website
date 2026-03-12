<template>
  <div
    class="w-full h-fit group bg-gelap flex items-center gap-4 px-4 py-2 rounded-md border-2 border-transparent hover:border-2 hover:border-base transition-all duration-400 ease-out"
  >
    <Sosmed class="transition-all ease-out duration-400 ">
        <slot></slot>
    </Sosmed>
    <div>
      <h1 class="text-base font-poppins font-bold text-lg">{{ sosialMedia }}</h1>
      <a :href="linkSosmed" class="text-base font-poppins text-md">{{ linkBersih }}</a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Sosmed from '../printilan/Sosmed.vue'

const props = defineProps({
  sosialMedia: String,
  linkSosmed: String,
})

const linkBersih = computed(() => {
  if (!props.linkSosmed) {
    return ''
  }

  return props.linkSosmed.replace('https://', '').replace('http://', '').replace('www.', '')
})
</script>
