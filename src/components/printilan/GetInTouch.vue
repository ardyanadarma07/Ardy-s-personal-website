<template>
    <!-- div utama -->
  <div class="group relative w-[172px] h-[68px] md:w-[242px] md:h-20 overflow-hidden cursor-pointer">
    <!-- div bawah -->
    <div
      class="absolute inset-0 w-[160px] h-[56px] md:w-[232px] md:h-[60px] ml-[10px] mt-[10px] bg-birumuda group-hover:bg-gelap border-2 border-gelap z-10 transition-colors duration-500"
    ></div>

    <!-- div atas -->
    <div
      class="absolute inset-0 w-[160px] h-[56px] md:w-[232px] md:h-[60px] bg-gelap group-hover:bg-birumuda border-2 border-transparent group-hover:border-gelap z-20 flex items-center justify-center transition-all duration-500"
    >
        <!-- div tulisan dan svg -->
      <div class="flex items-center gap-2">
        <h2 class="text-base md:text-2xl font-bold text-white group-hover:text-gelap transition-colors duration-500 font-poppins">
          Get In Touch
        </h2>
        
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="text-birumuda group-hover:text-gelap transition-colors duration-500"
        >
          <path
            d="M18.7213 5.40288L18.7467 3.97289L20.1767 3.9983L20.1513 5.42829L18.7213 5.40288ZM6.20728 19.4675C5.63891 20.016 4.7335 19.9999 4.18498 19.4316C3.63646 18.8632 3.65255 17.9578 4.22091 17.4093L5.2141 18.4384L6.20728 19.4675ZM8.1042 5.21421L8.12961 3.78423L18.7467 3.97289L18.7213 5.40288L18.6959 6.83286L8.07879 6.64419L8.1042 5.21421ZM18.7213 5.40288L20.1513 5.42829L19.9626 16.0454L18.5326 16.02L17.1026 15.9946L17.2913 5.37747L18.7213 5.40288ZM18.7213 5.40288L19.7145 6.432L6.20728 19.4675L5.2141 18.4384L4.22091 17.4093L17.7281 4.37376L18.7213 5.40288Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>
