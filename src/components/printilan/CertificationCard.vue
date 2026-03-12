<template>
  <div class="w-full h-fit flex justify-center items-start">
    
    <div
      class="flex justify-between items-center gap-3 border-2 border-gelap rounded-full md:rounded-full w-full px-6 py-4 md:px-7 md:py-3 cursor-default"
    >
      
      <div class="flex flex-col">
        <h1 class="font-semibold text-sm md:text-lg font-poppins text-gelap leading-tight">{{ title }}</h1>
        
        <h2 class="font-normal text-xs text-gelap mt-1 md:mt-0">{{ penerbit }}</h2>
      </div>

      <a :href="linkSertifikat" target="_blank" class="shrink-0 p-1 hover:scale-110 transition-transform duration-300">
        <svg
          class="w-4 h-4 md:w-[18px] md:h-[18px]"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2222 9.77781V15.1111C14.2222 15.5826 14.0349 16.0348 13.7015 16.3682C13.3681 16.7016 12.9159 16.8889 12.4444 16.8889H2.66666C2.19517 16.8889 1.74298 16.7016 1.40958 16.3682C1.07619 16.0348 0.888885 15.5826 0.888885 15.1111V5.33336C0.888885 4.86186 1.07619 4.40968 1.40958 4.07628C1.74298 3.74288 2.19517 3.55558 2.66666 3.55558H8M11.5556 0.888916H16.8889M16.8889 0.888916V6.22225M16.8889 0.888916L7.11111 10.6667"
            stroke="#1E1E1E"
            stroke-width="1.77778"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  penerbit: String,
  linkSertifikat: String
})
</script>
