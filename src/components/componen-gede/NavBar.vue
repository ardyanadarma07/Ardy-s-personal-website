<template>
  <div class="relative flex justify-end">
    
    <button 
      @click="isMenuOpen = !isMenuOpen" 
      class="md:hidden relative z-50 flex items-center justify-center w-12 h-12 bg-birutua border-2 border-gelap rounded-full text-white hover:scale-105 transition-transform"
    >
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <div class="hidden md:flex w-fit h-fit bg-birutua px-10 py-4 rounded-full border-2 border-gelap gap-6">
      <NavItem @click="handleScroll('home')" class="cursor-pointer border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">Home</NavItem>
      <NavItem @click="handleScroll('about-me')" class="cursor-pointer border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">About Me</NavItem>
      <NavItem @click="handleScroll('my-skill')" class="cursor-pointer border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">Skill</NavItem>
      <NavItem @click="handleScroll('my-projects')" class="cursor-pointer border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">My Projects</NavItem>
      <NavItem @click="handleScroll('contact-me')" class="cursor-pointer border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">Contact Me</NavItem>
    </div>

    <transition name="slide-fade">
      <div 
        v-if="isMenuOpen" 
        class="absolute top-16 right-0 z-40 bg-birutua border-2 border-gelap rounded-3xl p-6 sm:p-8 flex flex-col gap-6 w-max h-fit max-w-[90vw] shadow-xl"
      >
        <div class="flex flex-row justify-between gap-8 sm:gap-12">
          
          <div class="flex flex-col gap-2">
            <button @click="handleScroll('home')" class="text-left text-lg font-semibold text-white px-4 py-2 rounded-full border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">Home</button>
            <button @click="handleScroll('about-me')" class="text-left text-lg font-semibold text-white px-4 py-2 rounded-full border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">About Me</button>
            <button @click="handleScroll('my-skill')" class="text-left text-lg font-semibold text-white px-4 py-2 rounded-full border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">Skill</button>
            <button @click="handleScroll('my-projects')" class="text-left text-lg font-semibold text-white px-4 py-2 rounded-full border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">My Projects</button>
            <button @click="handleScroll('contact-me')" class="text-left text-lg font-semibold text-white px-4 py-2 rounded-full border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">Contact</button>
          </div>
          
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavItem from '../printilan/NavItem.vue';

const isMenuOpen = ref(false);

const handleScroll = (sectionId) => {
  isMenuOpen.value = false;
  setTimeout(() => {
    const elemen = document.getElementById(sectionId);
    if(elemen) {
      elemen.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 300); 
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>