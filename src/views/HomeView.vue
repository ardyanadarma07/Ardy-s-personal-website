<template>
  <div class="w-full min-h-screen">
    <!-- div Navbar + Nama-->
    <div class="w-full h-fit flex justify-between pt-6 pr-4 pl-16">
      <h1 class="font-bold text-2xl font-poppins">Ardyana Darma</h1>
      <NavBar> </NavBar>
    </div>

    <!-- tombol naik -->
      <button @click="scrollToTop" class="fixed bottom-10 right-10 z-50 w-16 h-16 rounded-full flex justify-center items-center bg-base border-2 border-gelap ">
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.238 24.127V6.34921M15.238 6.34921L6.34912 15.2381M15.238 6.34921L24.1269 15.2381"
            stroke="#00120B"
            stroke-width="3.04762"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

    <section id="home">
      <Home></Home>
    </section>

    <section id="about-me">
      <AboutMe></AboutMe>
    </section>

    <section id="my-skill">
      <Tech></Tech>
    </section>

    <section id="my-projects">
      <MyProjects></MyProjects>
    </section>

    <section id="contact-me">
      <ContactMe></ContactMe>
    </section>
  </div>
</template>

<script setup>
import Home from '@/components/section/Home.vue'
import Tech from '@/components/section/Tech.vue'
import AboutMe from '@/components/section/AboutMe.vue'
import MyProjects from '@/components/section/MyProjects.vue'
import ContactMe from '@/components/section/ContactMe.vue'
import NavBar from '@/components/componen-gede/NavBar.vue'

const scrollToTop = () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
};
</script>
