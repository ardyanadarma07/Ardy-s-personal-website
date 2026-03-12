<template>
  <Transition name="pop">
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-gelap/60 backdrop-blur-sm px-4">
      
      <div class="modal-box bg-base border-2 border-gelap rounded-[2rem] p-8 md:p-10 w-full max-w-sm flex flex-col items-center gap-6 shadow-2xl text-center">
        
        <div class="w-20 h-20 rounded-full bg-red-100 border-2 border-red-500 flex items-center justify-center shadow-inner text-red-500">
          <svg 
            class="w-10 h-10" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2.5" 
            viewBox="0 0 24 24" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
          </svg>
        </div>

        <div>
          <h1 class="font-bold text-2xl font-poppins text-gelap">Hapus Pesan?</h1>
          <p class="font-poppins text-gelap mt-2 text-sm font-medium">
            Apakah Anda yakin? Data yang dihapus tidak bisa dikembalikan lagi.
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
            Hapus
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

// Ada 2 kemungkinan aksi: confirm (Ya, hapus) atau cancel (Tidak jadi)
defineEmits(['confirm', 'cancel']);
</script>

<style scoped>
/* Animasi pop-up mantul persis seperti popup sebelumnya */
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