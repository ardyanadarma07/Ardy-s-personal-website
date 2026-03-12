<style scoped>
/* Menyembunyikan scrollbar tapi tetap bisa di-scroll */
div::-webkit-scrollbar {
  display: none;
}

div {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}
</style>

<template>
  <div class="relative z-10 -mt-6 py-10 md:py-8 px-6 md:px-16 w-full min-h-screen bg-base rounded-t-[2rem] md:rounded-t-[32px]">
    
    <div id="my-projects" class="flex flex-col pt-6 md:pt-6 gap-6 md:gap-6"  data-aos="fade-up" data-duration="1000">
      
      <h1 class="font-bold text-3xl md:text-5xl text-birutua font-poppins">My Projects</h1>
      
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center md:gap-4">
        
        <p class="w-full md:w-2/3 font-poppins text-sm md:text-xl md:text-gelap font-medium text-gelap text-justify md:text-left"> Bagian ini berisi kumpulan proyek yang pernah saya kerjakan sebagai bagian dari perjalanan
          saya di dunia teknologi, mulai dari eksplorasi Web, Data, hingga Machine Learning. </p>
        
        <SlideButton class="self-end md:self-auto md:flex hidden" />
      </div>

      <div id="project-scroll" class="w-full flex overflow-x-auto md:overflow-x-hidden overflow-y-hidden gap-6 md:gap-9 pt-4 md:pt-6 pb-4 snap-x snap-mandatory scroll-smooth">
        
        <ProjectCard 
          class="shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] snap-center" 
          v-for="item in project"
          :key="item.id"
          :gambarProject="item.gambarProject"
          :judulProject="item.title"
          :deskripsiProject="item.description"
          :linkGithub="item.githubLink"
          :techStack="item.techStack"
        />
        
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '../componen-gede/ProjectCard.vue'
import SlideButton from '../printilan/SlideButton.vue'

// Import Logo
import logoHtml from '@/assets/Tech/logo-html.png';
import logoCss from '@/assets/Tech/logo-css.png';
import logoJs from '@/assets/Tech/logo-javascript.png';
import logoC from '@/assets/Tech/logo-c.png';
import logoPython from '@/assets/Tech/logo-python.png';
import logoVue from '@/assets/Tech/logo-vuejs.png';
import logoArduino from '@/assets/Tech/logo-arduino.png';
import logoVsCode from '@/assets/Tech/logo-vscode.png';
import logoLaragon from '@/assets/Tech/logo-laragon.png';
import logoGithub from '@/assets/Tech/logo-github.png';
import logoFigma from '@/assets/Tech/logo-figma.png';
import logoMysql from '@/assets/Tech/logo-mysql.png';
import logoLaravel from '@/assets/Tech/logo-laravel.png';
import logoTailwind from '@/assets/Tech/logo-tailwindcss.png';

// Import Foto Project
import fotoPersuratan from '@/assets/Projects/foto-sicpersuratan.png';
import fotoSidilan from '@/assets/Projects/foto-sidilan.png';
import fotoCYK from '@/assets/Projects/foto-CYK.png';


const project = [
  {
    "id": 1,
    "title": "SIDILAN",
    "description": "SIDILAN atau Sistem Data Tendik dan Laboran adalah sebuah website yang dirancang untuk memudahkan pencatatan dan penyajian data tenaga pendidik serta laboran di lingkungan Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Udayana. Platform ini membantu pengelolaan data agar lebih terstruktur, mudah diakses, dan informatif.",
    "githubLink": "https://github.com/philippft/sidilan-laravel",
    "gambarProject": fotoSidilan,
    "techStack": [
      { "name": "Laravel", "logo": logoLaravel },
      { "name": "Tailwind", "logo": logoTailwind },
      { "name": "CSS", "logo": logoCss },
      { "name": "Javascript", "logo": logoJs },
    ]
  },
  {
    "id": 2,
    "title": "Sistem Persuratan SIC",
    "description": "Sistem Persuratan SIC adalah sebuah website yang dirancang untuk mempermudah pencatatan dan pengelolaan pengajuan surat pada organisasi SIC (Student Innovation Centre) Program Studi Informatika, Universitas Udayana. Sistem ini membantu proses administrasi menjadi lebih terstruktur, efisien, dan mudah dipantau.",
    "githubLink": "https://github.com/SIC-Unud/sic-persuratan-fe",
    "gambarProject": fotoPersuratan,
    "techStack": [
      { "name": "HTML", "logo": logoHtml },
      { "name": "Vue", "logo": logoVue },
      { "name": "Javascript", "logo": logoJs },
      { "name": "Tailwind", "logo": logoTailwind }
    ]
  },
  {
    "id": 3,
    "title": "CYK Checker",
    "description": "CYK Checker merupakan proyek akhir mata kuliah Teori Bahasa dan Otomata yang dikembangkan dalam bentuk website interaktif. Website ini dirancang untuk mengecek dan menganalisis struktur kalimat SPOK dengan menerapkan algoritma CYK (Cocke–Younger–Kasami) sebagai metode analisis sintaksis.",
    "githubLink": "https://github.com/ardyanadarma07/CYK-Checker",
      "gambarProject": fotoCYK,
    "techStack": [
      { "name": "HTML", "logo": logoHtml },
      { "name": "Python", "logo": logoPython }
    ]
  },
  {
    "id": 4,
    "title": "Hand Detection with Arduino UNO",
    "description": "Project ini merupakan implementasi sistem Internet of Things (IoT) yang terintegrasi dengan teknologi Computer Vision. Sistem dirancang untuk mendeteksi jumlah jari melalui kamera, kemudian mengontrol lampu LED sesuai dengan jumlah jari yang terdeteksi, sebagai bentuk interaksi antara pengenalan visual dan perangkat fisik.",
    "githubLink": "https://github.com/ardyanadarma07/Hand-Detection-with-Arduino-Uno",
      "gambarProject": fotoPersuratan,
    "techStack": [
      { "name": "Python", "logo": logoPython },
      { "name": "C", "logo": logoC },
      { "name": "Arduino", "logo": logoArduino }
    ]
  }
]
</script>
