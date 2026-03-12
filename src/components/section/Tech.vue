<template>
  <div class="w-full min-h-screen bg-birumuda py-14 px-6 md:py-16 md:px-10 flex flex-col gap-8 md:gap-10">
    
    <div class="flex flex-col gap-4 md:gap-6 w-full" data-aos="fade-down" data-duration="1000">
      <h1 class="font-poppins font-bold text-3xl md:text-5xl text-gelap flex flex-wrap justify-center text-center">
        Tools & <span class="pl-2 text-birutua"> Technologies</span>
      </h1>
      
      <p class="font-poppins text-gelap text-sm md:text-lg md:w-full text-justify md:text-center max-w-full mx-auto">
        Bagian ini menampilkan teknologi dan tools yang saya gunakan untuk membangun sistem yang stabil, efisien, dan berfokus pada pengalaman pengguna, sehingga setiap solusi tidak hanya berfungsi dengan baik, tetapi juga nyaman digunakan.
      </p>
    </div>

    <div class="flex flex-wrap justify-center gap-6 md:gap-10 mt-4 max-w-full">
  <SkillCard
    v-for="(item, index) in techStackData"
    :key="index"
    :label="item.name"
    :gambarLogo="item.logo"
    
    class="hover:scale-105 transition-transform duration-300"
    data-aos="zoom-in"
    data-duration="1000"

  />
</div>

  </div>
</template>

<script setup>
import logoHtml from '@/assets/Tech/logo-html.png';
import logoCss from '@/assets/Tech/logo-css.png';
import logoJs from '@/assets/Tech/logo-javascript.png';
import logoC from '@/assets/Tech/logo-c.png';
import logoPython from '@/assets/Tech/logo-python.png';
import logoVue from '@/assets/Tech/logo-vuejs.png';
import logoVsCode from '@/assets/Tech/logo-vscode.png';
import logoLaragon from '@/assets/Tech/logo-laragon.png';
import logoGithub from '@/assets/Tech/logo-github.png';
import logoFigma from '@/assets/Tech/logo-figma.png';
import logoMysql from '@/assets/Tech/logo-mysql.png';
import logoLaravel from '@/assets/Tech/logo-laravel.png';
import logoTailwind from '@/assets/Tech/logo-tailwindcss.png';
import SkillCard from '../printilan/SkillCard.vue';

const techStackData = [
  { name: 'HTML', logo: logoHtml },
  { name: 'CSS', logo: logoCss },
  { name: 'JavaScript', logo: logoJs },
  { name: 'C', logo: logoC },
  { name: 'Python', logo: logoPython },
  { name: 'Vue.js', logo: logoVue },
  { name: 'VS Code', logo: logoVsCode },
  { name: 'Laragon', logo: logoLaragon },
  { name: 'GitHub', logo: logoGithub },
  { name: 'Figma', logo: logoFigma },
  { name: 'MySQL', logo: logoMysql },
  { name: 'Laravel', logo: logoLaravel },
  { name: 'Tailwind CSS', logo: logoTailwind }
];
</script>