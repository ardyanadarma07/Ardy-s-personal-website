<template>
  <div class="w-full h-fit flex gap-4 justify-center items-start">
    <!-- div field -->
    <div
      class="flex  justify-between items-center border-2 border-gelap rounded-full w-full px-7 py-3 cursor-default"
    >
    <div>
        <h1 class="font-semibold text-lg font-poppins text-gelap">{{ title }}</h1>
        <h2 class="font-regular text-xs text-gelap">{{ source }}</h2>
    </div>
    <a :href="linkSertifikat">
        <svg
          width="18"
          height="18"
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
  source: String,
  linkSertifikat: String
})
</script>
