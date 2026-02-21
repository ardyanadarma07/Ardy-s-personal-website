<template>
  <div class="flex w-fit h-fit bg-birutua px-10 py-4 rounded-full border-2 border-gelap gap-6">
    <NavItem @click="scrollToSection('home')" class="border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">Home</NavItem>
    <NavItem @click="scrollToSection('about-me')" class="border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">About Me</NavItem>
    <NavItem @click="scrollToSection('my-skill')" class="border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">Skill</NavItem>
    <NavItem @click="scrollToSection('my-projects')" class="border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">My Projects</NavItem>
    <NavItem @click="scrollToSection('contact-me')" class="border-2 border-transparent hover:border-gelap hover:border-2 ease-in-out duration-300">Contact Me</NavItem>
</div>

</template>

<script setup>
import NavItem from '../printilan/NavItem.vue';

const scrollToSection = (sectionId) => {
  const elemen = document.getElementById(sectionId);
  
  if(elemen) {
    elemen.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>
