<template>
  <div class="w-full h-full bg-gelap">
    <!-- div utama -->
    <div class="px-16 py-12">
      <h1 class="font-bold text-white text-4xl font-poppins justify-center flex">Kontak Saya</h1>
      <!-- div kanan + kiri -->
      <div class="flex gap-20 pt-12 justify-between">
        <!-- div kiri -->
        <div class="w-fit flex flex-col gap-6">
          <div>
            <h1 class="font-poppins font-semibold text-white text-3xl">Mari berdiskusi.</h1>
            <p class="font-poppins text-white">
              Ceritakan tentang proyek atau ide yang ingin kamu kembangkan.
            </p>
          </div>

          <!-- div sosial media -->
          <div class="flex flex-col gap-6">
            <ContactMeCard sosialMedia="Instagram" linkSosmed="https://instagram.com/ardyanadarma._"
              >Sosial</ContactMeCard
            >
            <ContactMeCard sosialMedia="Instagram" linkSosmed="https://instagram.com/ardyanadarma._"
              >Sosial</ContactMeCard
            >
            <ContactMeCard sosialMedia="Instagram" linkSosmed="https://instagram.com/ardyanadarma._"
              >Sosial</ContactMeCard
            >
            <ContactMeCard sosialMedia="Instagram" linkSosmed="https://instagram.com/ardyanadarma._"
              >Sosial</ContactMeCard
            >
            <ContactMeCard sosialMedia="Instagram" linkSosmed="https://instagram.com/ardyanadarma._"
              >Sosial</ContactMeCard
            >
          </div>
        </div>

        <!-- div kanan -->
        <div class="w-1/2 flex flex-col gap-6">
          <h1 class="font-poppins text-xl font-bold text-white">Kirimkan saya sebuah pesan 🚀</h1>
          <!-- div input -->
          <div class="flex flex-col gap-4">
            <InputField label="Nama" typeInput="text" placeholderInput="Masukkan nama anda..." />
            <InputField label="Email" typeInput="email" placeholderInput="Masukkan email anda..." />
            <InputField label="Subjek" typeInput="text" placeholderInput="Masukkan topik..." />
            <TextArea
              label="Pesan"
              typeInput="textbox"
              placeholderInput="Masukkan pesan..."
            ></TextArea>
          </div>
          <div class="flex justify-end">
            <SendMassage />
          </div>
        </div>
      </div>

      <!-- footer -->
      <div class="border-t-4 mt-9 border-white flex justify-between mb-0">
        <!-- konten kiri -->
        <div class="w-fit flex items-center gap-[6px] mt-3">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.928 4.284C6.696 4.32 6.894 4.974 6.906 5.28H7.98C7.932 4.092 7.086 3.366 5.91 3.366C4.584 3.366 3.6 4.2 3.6 6.084C3.6 7.248 4.158 8.628 5.904 8.628C7.236 8.628 7.95 7.638 7.968 6.858H6.894C6.876 7.212 6.624 7.686 5.916 7.722C5.13 7.698 4.8 7.086 4.8 6.084C4.8 4.35 5.568 4.296 5.928 4.284ZM6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8Z"
              fill="white"
            />
          </svg>
          <h1 class="font-poppins text-white font-bold border-r-4 text-xl border-white pr-[6px]">2026</h1>
          <h1 class="font-poppins text-white text-xl font-bold ">Ardyana Darma</h1>
        </div>

        <!-- konten kanan -->
        <div class="mt-3"> 
          <h1 class="font-poppins text-white font-bold text-xl">Build with <span class="text-[#40B883]">Vue JS</span> and <span class="text-[#8EDCE6]">Tailwind CSS</span></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactMeCard from '../componen-gede/ContactMeCard.vue'
import InputField from '../printilan/InputField.vue'
import SendMassage from '../printilan/SendMassage.vue'
import TextArea from '../printilan/TextArea.vue'
</script>
