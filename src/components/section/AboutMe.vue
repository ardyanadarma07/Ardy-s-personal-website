<template>
  <div class="relative z-10 -mt-2 md:-mt-6 -mb-6 py-10 md:py-16 px-6 md:px-24 w-full min-h-screen bg-birutua rounded-[32px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-back">
    
    <div id="about-me" class="flex flex-col md:flex-row gap-6 md:gap-8 py-6 md:py-10">
      
      <div class="bg-base/60 flex flex-col gap-6 md:gap-9 justify-center items-center w-full md:w-5/12 h-full py-8 px-6 md:py-14 md:px-12 border-2 border-gelap rounded-3xl">
        <img :src="fotoAbout" alt="Foto About Me" class="h-[250px] md:h-[360px] w-auto object-contain" />
        
        <div class="flex flex-col gap-6 w-full text-center items-center">
          <div class="flex flex-col gap-2">
            <h1 class="font-poppins text-birugelap font-bold text-base md:text-md">I Putu Ardyana Darma Nugraha</h1>
            <a href="#" class="font-poppins text-birugelap text-sm font-semibold">ardyanadarma@gmail.com</a>
          </div>
          <DownloadCV class="w-full md:w-auto hidden md:block"></DownloadCV>
        </div>
      </div>

      <div class="w-full md:w-7/12 flex flex-col h-auto gap-6">
        
        <div class="bg-base/60 border-2 border-gelap rounded-3xl h-fit px-6 py-6 md:px-12 md:py-8 flex flex-col items-center md:items-start gap-4">
          <h1 class="font-bold text-3xl md:text-4xl font-poppins">About Me</h1>

          <div class="flex flex-col gap-3">
            <h1 class="font-poppins text-gelap font-medium text-base md:text-md">Halo, salam kenal! Saya Ardy 👋</h1>
            <p class="font-poppins text-gelap text-justify font-medium text-sm leading-relaxed">
              Saya mahasiswa Informatika Universitas Udayana berusia 20 tahun yang berdomisili di Denpasar, Bali, dengan ketertarikan pada pengembangan Data dan Web. Saya fokus membangun solusi berbasis teknologi yang mudah dipahami melalui visualisasi data dan antarmuka web yang interaktif, serta saat ini mendalami Machine Learning dan Front-End Development untuk menghasilkan insight yang relevan dan nyaman digunakan. Saya terbuka untuk belajar dan berkolaborasi dalam berbagai proyek. Mari berteman dan berkarya! 🚀
            </p>
          </div>
        </div>

        <div class="h-[340px] md:h-[286px]">
          <AboutMeCard class="w-full h-full"></AboutMeCard>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutMeCard from '../componen-gede/AboutMeCard.vue'
import fotoAbout from '@/assets/Foto_Ardy/foto-aboutme.png'
import DownloadCV from '../printilan/DownloadCV.vue'
</script>