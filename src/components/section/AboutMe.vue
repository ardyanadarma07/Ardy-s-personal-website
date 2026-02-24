<template>
  <!-- div utama -->
  <div class="relative z-10 -mt-6 -mb-6 py-16 px-24 w-full min-h-screen bg-birutua rounded-[32px]">
    <!-- div kanan dan kiri -->
    <div id="about-me" class="flex gap-8 py-10">
      <!-- div kiri -->
      <div
        class="bg-base/60 flex flex-col gap-9 justify-center items-center w-1/2 h-full py-14 px-16 border-2 border-gelap rounded-3xl"
      >
        <img :src="fotoAbout" alt="Foto About Me" class="h-[360px] w-fit" />
        <!-- div nama + email + button -->
        <div class="flex flex-col gap-6">
          <!-- div nama+ email -->
          <div class="flex flex-col gap-3">
            <h1 class=" font-poppins flex justify-center text-birugelap font-bold text-md">I Putu Ardyana Darma Nugraha</h1>
            <a href="#" class="font-poppins text-birugelap text-sm font-semibold justify-center flex">ardyanadarma@gmail.com</a>
          </div>
          <DownloadCV></DownloadCV>
        </div>
      </div>

      <!-- div kanan -->
      <div class="w-full flex flex-col h-fit gap-6">
        <!-- div deskripsi -->
        <div class="bg-base/60 border-2 border-gelap rounded-3xl h-1/2 px-12 py-8 flex flex-col gap-2">
          <h1 class="font-bold text-4xl font-poppins">About Me</h1>
          <!-- div untuk tulisan open to work -->
          <!-- <div class="flex items-center gap-3">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6667 8.91838V9.72017C17.6656 11.5995 17.0838 13.4282 16.0078 14.9334C14.9318 16.4387 13.4194 17.5399 11.6961 18.0727C9.97286 18.6056 8.13105 18.5416 6.44539 17.8903C4.75973 17.239 3.32055 16.0353 2.34247 14.4587C1.36439 12.8821 0.899826 11.017 1.01806 9.14176C1.1363 7.26647 1.83101 5.48139 2.99857 4.05275C4.16613 2.62411 5.74399 1.62846 7.49682 1.21428C9.24966 0.800103 11.0836 0.989595 12.725 1.75449M17.6667 2.74803L9.33334 11.4719L6.83334 8.85737"
                stroke="#10A764"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h1 class="font-poppins text-lg text-[#10A764] font-medium" >Open to Work</h1>
          </div> -->

          <!-- div deskripsi -->
           <div class="flex flex-col gap-3">
             <h1 class="font-poppins text-gelap font-medium text-md">Halo, salam kenal! Saya Ardy 👋</h1>
             <p class="font-poppins text-gelap text-justify font-medium text-sm">
               Saya mahasiswa Informatika Universitas Udayana berusia 20 tahun yang berdomisili di Denpasar, Bali, dengan ketertarikan pada pengembangan Data dan Web. Saya fokus membangun solusi berbasis teknologi yang mudah dipahami melalui visualisasi data dan antarmuka web yang interaktif, serta saat ini mendalami Machine Learning dan Front-End Development untuk menghasilkan insight yang relevan dan nyaman digunakan. Saya terbuka untuk belajar dan berkolaborasi dalam berbagai proyek. Mari berteman dan berkarya! 🚀
             </p>
           </div>
        </div>
        <!-- div experience dll -->
        <div class="h-[340px]">
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
