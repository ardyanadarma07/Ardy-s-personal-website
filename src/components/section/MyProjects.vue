<style scoped>
div::-webkit-scrollbar {
  display: none;
}

div {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}
</style>

<template>
  <div class="relative z-10 -mt-6 py-16 px-16 w-full min-h-screen bg-base rounded-t-[32px]">
    <!-- div utama -->
    <div class="flex flex-col gap-6">
      <h1 class="font-bold text-5xl text-birutua font-poppins">My Projects</h1>
      <div class="flex justify-between">
        <p class="w-2/3 font-poppins text-md font-medium text-gelap">
          Bagian ini berisi kumpulan proyek yang pernah saya kerjakan sebagai bagian dari perjalanan
          saya di dunia teknologi, mulai dari eksplorasi Web, Data, hingga Machine Learning.
        </p>
        <SlideButton />
      </div>

      <!-- div projects -->
      <div id="my-projects" class="w-full flex overflow-x-auto overflow-y-hidden gap-9 pt-10 pb-4">
        <ProjectCard class="shrink-0" />
        <ProjectCard class="shrink-0" />
        <ProjectCard class="shrink-0" />
        <ProjectCard class="shrink-0" />
        <ProjectCard class="shrink-0" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '../componen-gede/ProjectCard.vue'
import SlideButton from '../printilan/SlideButton.vue'
</script>
