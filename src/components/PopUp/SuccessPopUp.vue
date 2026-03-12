<template>
  <Transition name="pop">
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-gelap/60 backdrop-blur-sm px-4">
      
      <div class="modal-box bg-base border-2 border-gelap rounded-[2rem] p-8 md:p-10 w-full max-w-sm flex flex-col items-center gap-6 shadow-2xl">
        
        <h1 class="font-bold text-3xl font-poppins text-gelap mt-2">Terima Kasih</h1>

        <div class="w-20 h-20 rounded-full bg-[#40B883] border-2 border-gelap flex items-center justify-center shadow-inner">
          <svg 
            class="w-10 h-10 text-white" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="4" 
            viewBox="0 0 24 24" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <p class="text-center font-poppins text-gelap text-base font-medium">
          Pesanmu akan segera dibaca oleh Ardy!
        </p>

        <button 
          @click="closePopup" 
          class="w-full mt-2 bg-birutua hover:bg-gelap text-white font-bold font-poppins text-lg py-3 rounded-full border-2 border-transparent hover:border-gelap transition-all duration-300"
        >
          Oke
        </button>

      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const closePopup = () => {
  emit('close');
};
</script>

<style scoped>
/* 1. Animasi Latar Belakang (Fade) */
.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.4s ease;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
}

/* 2. Animasi Kotak Modal (Pop Up / Bounce) */
/* cubic-bezier(0.175, 0.885, 0.32, 1.275) adalah rumus rahasia untuk efek "memantul" (spring/bounce) */
.pop-enter-active .modal-box {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.pop-leave-active .modal-box {
  transition: transform 0.3s ease;
}

/* Mulai dari ukuran 50% (0.5), lalu membesar ke ukuran normal (1) */
.pop-enter-from .modal-box,
.pop-leave-to .modal-box {
  transform: scale(0.5);
}
</style>