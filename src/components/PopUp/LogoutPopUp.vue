<template>
  <Transition name="pop">
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-gelap/60 backdrop-blur-sm px-4">
      
      <div class="modal-box bg-base border-2 border-gelap rounded-[2rem] p-8 md:p-10 w-full max-w-sm flex flex-col items-center gap-6 shadow-2xl text-center">
        
        <div class="w-20 h-20 rounded-full bg-red-100 border-2 border-red-500 flex items-center justify-center shadow-inner text-red-500">
          <svg 
            class="w-10 h-10 translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2.5" 
            viewBox="0 0 24 24" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </div>

        <div>
          <h1 class="font-bold text-2xl font-poppins text-gelap">Keluar?</h1>
          <p class="font-poppins text-gelap mt-2 text-sm font-medium">
            Apakah Anda yakin ingin keluar dari halaman admin ini?
          </p>
        </div>

        <div class="flex w-full gap-3 mt-2">
          <button 
            @click="$emit('cancel')" 
            class="flex-1 bg-white hover:bg-cream text-gelap font-bold font-poppins py-3 rounded-full border-2 border-gelap transition-all duration-300"
          >
            Batal
          </button>
          
          <button 
            @click="$emit('confirm')" 
            class="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold font-poppins py-3 rounded-full border-2 border-transparent hover:border-gelap transition-all duration-300"
          >
            Keluar
          </button>
        </div>

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

// Emits untuk menangkap klik tombol di komponen induk
defineEmits(['confirm', 'cancel']);
</script>

<style scoped>
/* Animasi pop-up mantul */
.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.4s ease;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
}
.pop-enter-active .modal-box {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.pop-leave-active .modal-box {
  transition: transform 0.3s ease;
}
.pop-enter-from .modal-box,
.pop-leave-to .modal-box {
  transform: scale(0.5);
}
</style>