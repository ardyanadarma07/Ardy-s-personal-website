<style scoped>
/* Menyembunyikan scrollbar untuk Chrome, Safari dan Opera */
div::-webkit-scrollbar {
  display: none;
}

/* Menyembunyikan scrollbar untuk IE, Edge dan Firefox */
div {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>

<template>
  <!-- div luar -->
  <div class="bg-base/60 border-2 border-gelap rounded-3xl w-fit h-fit py-12 px-9 flex flex-col gap-y-4">
    <!-- div navigasi -->
    <div class="flex w-fit h-fir gap-4">
      <NavItem
        @click="activeTab = 'experience'"
        :class="activeTab === 'experience' ? 'bg-cream text-gelap' : 'bg-birutua text-white'"
        class="px-2 py-3 font-bold"
        >Experience</NavItem
      >
      <NavItem
        @click="activeTab = 'education'"
        :class="activeTab === 'education' ? 'bg-cream text-gelap' : 'bg-birutua text-white'"
        class="px-2 py-3 font-bold"
        >Education</NavItem
      >
      <NavItem
        @click="activeTab = 'certification'"
        :class="activeTab === 'certification' ? 'bg-cream text-gelap' : 'bg-birutua text-white'"
        class="px-2 py-3 font-bold"
        >Certification</NavItem
      >
    </div>

    <!-- div konten -->
    <!-- div experience -->
    <div v-if="activeTab === 'experience'" class="flex flex-col gap-4 max-h-[348px] overflow-y-auto overflow-x-hidden pr-2">
      <ExperienceCard
        v-for="(item, index) in experienceData"
        :key="index"
        :role="item.role"
        :place="item.place"
        class="bg-base rounded-full"
      />
    </div>

    <!-- div education -->
    <div v-else-if="activeTab === 'education'" class="flex flex-col gap-4">
      <EducationCard
      v-for="(item, index) in educationData"
      :key="index"
      :gambarLogo="item.logo"
      :sekolah="item.sekolah"
      :tahunMulai="item.tahunMulai"
      :tahunSelesai="item.tahunSelesai"
      />
    </div>

    <!-- div certification -->
    <div v-else-if="activeTab === 'certification'" class="flex flex-col gap-4 max-h-[348px] overflow-y-auto overflow-x-hidden pr-2">
      <CertificationCard
        v-for="(item, index) in certData"
        :key="index"
        :title="item.namaSertif"
        :penerbit="item.penerbit"
        :linkSertifikat="item.link"
        class="bg-base rounded-full"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavItem from '../printilan/NavItem.vue'
import ExperienceCard from '../printilan/ExperienceCard.vue'
import EducationCard from '../printilan/EducationCard.vue'
import CertificationCard from '../printilan/CertificationCard.vue'
import logoSMP from '@/assets/Education/logo-smp.png'
import logoSMA from '@/assets/Education/logo-sma.png'
import logoUNUD from '@/assets/Education/logo-unud.png'

// State untuk mengatur tab yang aktif
const activeTab = ref('experience')

// 1. DATA EXPERIENCE
const experienceData = [
  {
    role: 'Staff of SIC CORE',
    place: 'Student Innovation Centre (SIC) Universitas Udayana',
  },
  {
    role: 'Web Developer (Academic Project)',
    place: 'Sistem Administrasi Rumah Sakit',
  },
  {
    role: 'Python Developer',
    place: 'CYK Algorithm Checker Project',
  },
  {
    role: 'Python Developer',
    place: 'CYK Algorithm Checker Project',
  },
  {
    role: 'Python Developer',
    place: 'CYK Algorithm Checker Project',
  },
  {
    role: 'Python Developer',
    place: 'CYK Algorithm Checker Project',
  },
  {
    role: 'Python Developer',
    place: 'CYK Algorithm Checker Project',
  },
]

// 2. DATA EDUCATION
const educationData = [
  {
    sekolah: 'Universitas Udayana',
    jurusan: 'S1 Informatika',
    tahunMulai: '2024',
    tahunSelesai: 'Sekarang',
    logo: logoSMP
  },
  {
    sekolah: 'SMA Negeri 1 Denpasar',
    jurusan: 'MIPA',
    tahunMulai: '2021',
    tahunSelesai: '2024',
    logo: logoSMA
  },
  {
    sekolah: 'SMP Negeri 12 Denpasar',
    jurusan: 'Pelajar',
    tahunMulai: '2018',
    tahunSelesai: '2021',
    logo: logoUNUD
  },
]

// 3. DATA CERTIFICATION
const certData = [
  {
    namaSertif: 'Belajar Machine Learning untuk Pemula',
    penerbit: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/...',
  },
  {
    namaSertif: 'Belajar Dasar Pemrograman Web',
    penerbit: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/...',
  },
  {
    namaSertif: 'Dasar Git dan GitHub',
    penerbit: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/...',
  },
  {
    namaSertif: 'Belajar Machine Learning untuk Pemula',
    penerbit: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/...',
  },
  {
    namaSertif: 'Belajar Dasar Pemrograman Web',
    penerbit: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/...',
  },
  {
    namaSertif: 'Dasar Git dan GitHub',
    penerbit: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/...',
  },
  {
    namaSertif: 'Belajar Machine Learning untuk Pemula',
    penerbit: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/...',
  },
  {
    namaSertif: 'Belajar Dasar Pemrograman Web',
    penerbit: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/...',
  },
  {
    namaSertif: 'Dasar Git dan GitHub',
    penerbit: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/...',
  },
  {
    namaSertif: 'Belajar Machine Learning untuk Pemula',
    penerbit: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/...',
  },
  {
    namaSertif: 'Belajar Dasar Pemrograman Web',
    penerbit: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/...',
  },
  {
    namaSertif: 'Dasar Git dan GitHub',
    penerbit: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/...',
  },
]
</script>
