<template>
  <div class="w-full h-full bg-gelap">
    <div class="px-6 md:px-16 py-12 flex flex-col min-h-[90vh] justify-between">
      <div>
        <h1
          class="font-bold text-white text-3xl md:text-4xl font-poppins flex justify-center text-center"
          data-aos="fade-down"
          data-duration="1000"
        >
          Kontak Saya
        </h1>

        <div
          class="flex flex-col lg:flex-row gap-12 lg:gap-20 pt-10 md:pt-12 items-center justify-between"
          data-aos="fade-right"
          data-duration="1000"

        >
          <div class="w-full lg:w-5/12 flex flex-col gap-6 lg:gap-8">
            <div class="text-center lg:text-left">
              <h1 class="font-poppins font-semibold text-white text-2xl md:text-3xl mb-2">
                Mari berdiskusi.
              </h1>
              <p class="font-poppins text-gray-300 text-sm md:text-base">
                Ceritakan tentang proyek atau ide yang ingin kamu kembangkan.
              </p>
            </div>

            <div class="flex flex-col gap-4 lg:gap-6 mt-2">
              <ContactMeCard
                sosialMedia="Instagram"
                linkSosmed="https://instagram.com/ardyanadarma._"
              >
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.05625 2.69375H8.06113M2.9375 0.5H7.8125C9.15869 0.5 10.25 1.59131 10.25 2.9375V7.8125C10.25 9.15869 9.15869 10.25 7.8125 10.25H2.9375C1.59131 10.25 0.5 9.15869 0.5 7.8125V2.9375C0.5 1.59131 1.59131 0.5 2.9375 0.5ZM7.325 5.06788C7.38516 5.4736 7.31586 5.88796 7.12696 6.25202C6.93805 6.61608 6.63916 6.91131 6.27279 7.09572C5.90643 7.28012 5.49124 7.3443 5.0863 7.27914C4.68135 7.21398 4.30726 7.02279 4.01723 6.73277C3.72721 6.44274 3.53602 6.06865 3.47086 5.6637C3.4057 5.25876 3.46988 4.84357 3.65428 4.47721C3.83869 4.11084 4.13392 3.81195 4.49798 3.62304C4.86204 3.43414 5.2764 3.36484 5.68212 3.425C6.09597 3.48637 6.47911 3.67921 6.77495 3.97505C7.07079 4.27089 7.26363 4.65403 7.325 5.06788Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </ContactMeCard>
              <ContactMeCard sosialMedia="TikTok" linkSosmed="https://tiktok.com/@ardypotter_">
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.73533 1.75351C7.31038 1.2682 7.07615 0.645066 7.07621 0H5.15481V7.71046C5.1403 8.12781 4.96424 8.52321 4.66378 8.81324C4.36331 9.10327 3.96193 9.26524 3.54432 9.26499C2.66135 9.26499 1.92761 8.54369 1.92761 7.64828C1.92761 6.57876 2.95982 5.77663 4.02312 6.10619V4.14126C1.87787 3.85523 0 5.52168 0 7.64828C0 9.71891 1.7162 11.1926 3.53811 11.1926C5.49059 11.1926 7.07621 9.60698 7.07621 7.64828V3.73709C7.85534 4.29662 8.79077 4.59683 9.75 4.59519V2.67379C9.75 2.67379 8.581 2.72975 7.73533 1.75351Z"
                    fill="white"
                  />
                </svg>
              </ContactMeCard>
              <ContactMeCard
                sosialMedia="LinkedIn"
                linkSosmed="https://linkedin.com/in/ardyanadarma"
                ><svg
                  width="22"
                  height="24"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
                    fill="white"
                  />
                </svg>
              </ContactMeCard>
              <ContactMeCard sosialMedia="GitHub" linkSosmed="https://github.com/ardyanadarma07">
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00024 19.0268C3.00024 20.5268 3.00024 16.5268 1.00024 16.0268M15.0002 22.0268V18.1568C15.0378 17.68 14.9733 17.2006 14.8113 16.7506C14.6492 16.3006 14.3932 15.8902 14.0602 15.5468C17.2002 15.1968 20.5002 14.0068 20.5002 8.54679C20.5 7.15062 19.9629 5.80799 19.0002 4.79679C19.4561 3.5753 19.4239 2.22514 18.9102 1.02679C18.9102 1.02679 17.7302 0.676793 15.0002 2.50679C12.7083 1.88561 10.2922 1.88561 8.00024 2.50679C5.27024 0.676793 4.09024 1.02679 4.09024 1.02679C3.57662 2.22514 3.54439 3.5753 4.00024 4.79679C3.03037 5.81549 2.49277 7.17026 2.50024 8.57679C2.50024 13.9968 5.80024 15.1868 8.94024 15.5768C8.61124 15.9168 8.35751 16.3222 8.19555 16.7667C8.0336 17.2112 7.96705 17.6849 8.00024 18.1568V22.0268"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </ContactMeCard>
              <ContactMeCard sosialMedia="Email" linkSosmed="ardyanadarma@gmail.com"
                ><svg
                  width="22"
                  height="24"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.775 0H0.975C0.43875 0 0.004875 0.43875 0.004875 0.975L0 6.825C0 7.36125 0.43875 7.8 0.975 7.8H8.775C9.31125 7.8 9.75 7.36125 9.75 6.825V0.975C9.75 0.43875 9.31125 0 8.775 0ZM8.775 1.95L4.875 4.3875L0.975 1.95V0.975L4.875 3.4125L8.775 0.975V1.95Z"
                    fill="white"
                  />
                </svg>
              </ContactMeCard>
            </div>
          </div>

          <form
            @submit.prevent="kirimPesan"
            class="w-full lg:w-1/2 flex flex-col gap-6 bg-white/5 p-6 md:p-8 rounded-3xl border border-gray-700"
            data-aos="fade-left"
            data-duration="1000"
          >
            <h1
              class="font-poppins text-lg md:text-xl font-bold text-white text-center lg:text-left"
            >
              Kirimkan saya sebuah pesan 🚀
            </h1>

            <div class="flex flex-col gap-4">
              <InputField
                v-model="nama"
                label="Nama"
                typeInput="text"
                placeholderInput="Masukkan nama anda..."
              />
              <InputField
                v-model="email"
                label="Email"
                typeInput="email"
                placeholderInput="Masukkan email anda..."
              />
              <InputField
                v-model="subjek"
                label="Subjek"
                typeInput="text"
                placeholderInput="Masukkan topik..."
              />
              <TextArea
                v-model="pesan"
                label="Pesan"
                typeInput="textbox"
                placeholderInput="Masukkan pesan..."
              ></TextArea>
            </div>

            <div class="flex justify-end mt-2">
              <SendMassage type="submit" class="w-full sm:w-auto" />
            </div>
          </form>
        </div>
      </div>

      <div
        class="border-t border-gray-600 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
      >
        <div class="flex items-center gap-[6px]">
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

          <h1
            class="font-poppins text-gray-300 font-bold border-r border-gray-500 text-sm md:text-md pr-[6px]"
          >
            2026
          </h1>
          <h1 class="font-poppins text-gray-300 text-sm md:text-md font-bold">Ardyana Darma</h1>
        </div>

        <div>
          <h1 class="font-poppins text-gray-400 font-bold text-xs md:text-sm">
            Built with <span class="text-[#40B883]">Vue JS</span> and
            <span class="text-[#8EDCE6]">Tailwind CSS</span>
          </h1>
        </div>
      </div>
    </div>
    
    <SuccessPopUp :show="isPopupVisible" @close="isPopupVisible = false" />
    <FailedPopUp :show="isErrorVisible" @close="isErrorVisible = false" />
  </div>
</template>

<script setup>
import ContactMeCard from '../componen-gede/ContactMeCard.vue'
import InputField from '../printilan/InputField.vue'
import SendMassage from '../printilan/SendMassage.vue'
import TextArea from '../printilan/TextArea.vue'
import SuccessPopUp from '../PopUp/SuccessPopUp.vue'
import FailedPopUp from '../PopUp/FailedPopUp.vue'
import { ref } from 'vue'

import { supabase } from '@/supabase.js'

const nama = ref('')
const email = ref('')
const subjek = ref('')
const pesan = ref('')

// Variabel baru untuk mengontrol muncul/hilangnya popup
const isPopupVisible = ref(false)
const isErrorVisible = ref(false)

const kirimPesan = async () => {
  // Cek apakah ada kolom yang kosong
  if (!nama.value || !email.value || !subjek.value || !pesan.value) {
    isErrorVisible.value = true;
    return; // Hentikan eksekusi kode di sini
  } 

  try {
    // 3. Proses mengirim data ke Supabase
    // Cocokkan nama properti (kiri) dengan nama kolom di tabel Supabase-mu
    const { error } = await supabase
      .from('pesan-masuk')
      .insert([
        { 
          nama: nama.value, 
          email: email.value, 
          subjek: subjek.value, 
          pesan: pesan.value 
        }
      ]);

    // Jika terjadi error dari database
    if (error) throw error;

    // Jika sukses terkirim ke database, munculkan popup SUKSES
    isPopupVisible.value = true;
  
    // Reset form setelah pengiriman
    nama.value = '';
    email.value = '';
    subjek.value = '';
    pesan.value = '';

  } catch (error) {
    console.error('Error saat mengirim pesan:', error.message);
    alert('Waduh, gagal terhubung ke server. Coba lagi nanti ya!');
  }
}
</script>
