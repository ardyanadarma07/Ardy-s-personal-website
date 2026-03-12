<template>
  <div
    class="w-full max-w-[450px] h-100% bg-base p-5 md:p-6 rounded-[1.5rem] md:rounded-3xl border-2 flex flex-col gap-4 border-gelap"
  >
    
    <img 
      :src="gambarProject" 
      alt="Gambar Project" 
      class="w-full h-40 md:h-52 object-cover rounded-[1rem] md:rounded-2xl border-2 border-birugelap/60" 
    />

    <div class="gap-2 md:gap-3 flex flex-col">
      <h1 class="font-bold text-xl md:text-2xl text-birutua flex justify-center text-center w-full font-poppins leading-tight">
        {{ judulProject }}
      </h1>
      <p class="w-full text-justify font-poppins text-xs md:text-sm text-gelap">
        {{ deskripsiProject }}
      </p>
    </div>

    <div class="h-full flex flex-col justify-between gap-2 pt-2">
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2 place-content-stretch">
        <CardTechStack 
          v-for="(item, index) in techStack"
          :key="index"
          :logoTech="item.logo" 
          :label="item.name" 
          :class="techColors[item.name]"
        />
      </div>
  
      <div class="w-full flex justify-center">
        <a :href="linkGithub" target="_blank" class="hover:scale-110 transition-transform duration-300">
          <svg
            class="w-6 h-6 md:w-7 md:h-7"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
              fill="#00120B"
            />
          </svg>
        </a>
      </div>

    </div>

  </div>
</template>

<script setup>
import CardTechStack from '../printilan/CardTechStack.vue'

defineProps({
  gambarProject: String,
  judulProject: String,
  deskripsiProject: String,
  techStack: Array,
  linkGithub: String,
})

const techColors = {
  'HTML': 'border-2 text-[#FF6520] border-[#FF6520]',
  'CSS': 'border-2 text-blue-700 border-blue-300',
  'Javascript': 'border-2 text-[#F8DC3E] border-[#F8DC3E]',
  'Vue': 'border-2 text-[#40B883] border-[#40B883]',
  'Tailwind': 'border-2 text-[#06B6D4] border-[#06B6D4]',
  'Laravel': 'border-2 text-[#FF2919] border-[#FF2919]',
  'PHP': 'border-2 text-[#8694C1] border-[#8694C1]',
  'Python': 'border-2 text-[#FFD82E] border-[#FFD82E]',
  'C': 'border-2 text-[#004482] border-[#004482]',
  'Arduino': 'border-2 text-[#37B1B4] border-[#37B1B4]'
};
</script>
