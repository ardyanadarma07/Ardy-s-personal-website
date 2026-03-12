<template>
  <div class="min-h-screen bg-base flex flex-col">
    <nav
      class="w-full bg-gelap px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-40 shadow-md"
    >
      <h1 class="font-poppins font-bold text-white text-lg md:text-xl">Ardy's Workspace</h1>
      <button
        @click="handleLogout"
        class="font-poppins text-sm md:text-base bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-semibold transition-colors"
      >
        Logout
      </button>
    </nav>

    <div class="flex-1 p-6 md:p-12 w-full max-w-7xl mx-auto">
      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 border-b-2 border-gray-200 pb-6"
      >
        <div>
          <h2 class="font-poppins font-bold text-3xl md:text-4xl text-birutua">Pesan Masuk</h2>
          <p class="font-poppins text-gelap mt-2 text-sm md:text-base">
            Kelola semua pesan yang dikirim oleh pengunjung.
          </p>
        </div>
        <div
          class="font-poppins font-semibold text-gelap bg-cream px-5 py-2 rounded-full border-2 border-gelap flex items-center gap-2 shrink-0"
        >
          Total: <span class="text-birutua font-bold text-lg">{{ dataPesan.length }}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="msg in dataPesan"
          :key="msg.id"
          class="bg-white border-2 border-gelap rounded-[1.5rem] p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex justify-between items-start border-b-2 border-gray-100 pb-3 gap-2">
            <div class="flex flex-col overflow-hidden">
              <h3 class="font-poppins font-bold text-lg text-gelap truncate">{{ msg.nama }}</h3>
              <a
                :href="'mailto:' + msg.email"
                class="font-poppins text-xs md:text-sm text-birutua hover:underline truncate"
                >{{ msg.email }}</a
              >
            </div>
            <span
              class="font-poppins text-[10px] md:text-xs text-gelap font-medium bg-cream border border-gelap px-2 py-1 rounded-md shrink-0"
            >
              {{ formatTanggal(msg.created_at) }}
            </span>
          </div>

          <div class="flex flex-col gap-2 flex-1">
            <h4 class="font-poppins font-semibold text-sm text-gelap">Subjek: {{ msg.subjek }}</h4>
            <div class="bg-gray-50 p-3 rounded-xl border border-gray-200 flex-1">
              <p class="font-poppins text-sm text-gray-700 text-justify leading-relaxed">
                "{{ msg.pesan }}"
              </p>
            </div>
          </div>

          <div class="flex justify-end gap-3 mt-2 pt-2">
            <a
              :href="'mailto:' + msg.email + '?subject=Balasan: ' + msg.subjek"
              class="font-poppins text-xs font-bold px-4 py-2 bg-cream text-gelap border-2 border-gelap rounded-full hover:bg-birutua hover:text-white transition-colors"
            >
              Balas
            </a>
            <button
              @click="konfirmasiHapus(msg.id)"
              class="font-poppins text-xs font-bold px-4 py-2 bg-red-100 text-red-600 border-2 border-red-200 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="dataPesan.length === 0"
        class="flex flex-col items-center justify-center py-20 opacity-50"
      >
        <h1 class="font-poppins text-2xl font-bold text-gelap">Belum ada pesan masuk.</h1>
      </div>
    </div>

    <DeletePopUp :show="isDeletePopupVisible" @cancel="batalkanHapus" @confirm="eksekusiHapus" />
    <LogoutPopUp :show="isLogoutPopupVisible" @cancel="batalkanLogout" @confirm="eksekusiLogout" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/supabase'
import DeletePopUp from '@/components/PopUp/DeletePopUp.vue'
import LogoutPopUp from '@/components/PopUp/LogoutPopUp.vue'

const router = useRouter()
const dataPesan = ref([])
const isLoading = ref(true)
const isDeletePopupVisible = ref(false)
const idYangAkanDihapus = ref(null)
const isLogoutPopupVisible = ref(false)

const fetchPesan = async () => {
  try {
    isLoading.value = true

    const { data, error } = await supabase
      .from('pesan-masuk')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    dataPesan.value = data
  } catch (error) {
    console.error('Error saat mengambil data:', error.message)
    alert('Gagal memuat pesan. Pastikan koneksi internet stabil.')
  } finally {
    isLoading.value = false
  }
}

const konfirmasiHapus = (id) => {
  idYangAkanDihapus.value = id
  isDeletePopupVisible.value = true
}

const batalkanHapus = () => {
  isDeletePopupVisible.value = false
  idYangAkanDihapus.value = null
}

const eksekusiHapus = async () => {
  isDeletePopupVisible.value = false

  try {
    const { error } = await supabase.from('pesan-masuk').delete().eq('id', idYangAkanDihapus.value)

    if (error) throw error

    dataPesan.value = dataPesan.value.filter((msg) => msg.id !== idYangAkanDihapus.value)
  } catch (error) {
    console.error('Error saat menghapus pesan:', error.message)
    alert('Waduh, gagal menghapus pesan. Coba lagi nanti.')
  } finally {
    idYangAkanDihapus.value = null
  }
}

const hapusPesan = async (id) => {
  const isConfirmed = confirm(
    'Apakah Anda yakin ingin menghapus pesan ini? Data yang dihapus tidak bisa dikembalikan.',
  )

  if (!isConfirmed) return

  try {
    const { error } = await supabase.from('pesan-masuk').delete().eq('id', id)

    if (error) throw error

    dataPesan.value = dataPesan.value.filter((msg) => msg.id !== id)
  } catch (error) {
    console.error('Error saat menghapus pesan:', error.message)
    alert('Waduh, gagal menghapus pesan. Coba lagi nanti.')
  }
}

const formatTanggal = (tanggalString) => {
  if (!tanggalString) return '-'
  const date = new Date(tanggalString)
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

const handleLogout = () => {
  isLogoutPopupVisible.value = true
}

const batalkanLogout = () => {
  isLogoutPopupVisible.value = false
}

const eksekusiLogout = async () => {
  isLogoutPopupVisible.value = false

  try {
    // Perintahkan Supabase untuk menghancurkan sesi login saat ini
    const { error } = await supabase.auth.signOut()
    if (error) throw error

    // Lempar kembali ke halaman Login
    router.push('/login')
  } catch (error) {
    console.error('Error saat logout:', error.message)
    alert('Gagal logout. Silakan coba lagi.')
  }
}

onMounted(() => {
  fetchPesan()
})
</script>
