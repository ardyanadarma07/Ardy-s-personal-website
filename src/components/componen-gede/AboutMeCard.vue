<style scoped>
/* Scrollbar dihilangkan agar desain tetap bersih */
div::-webkit-scrollbar {
  display: none;
}

div {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<template>
  <div
    class="bg-base/60 border-2 border-gelap rounded-3xl w-full h-full py-6 px-5 md:py-8 md:px-9 flex flex-col gap-y-4 md:gap-y-6"
  >
    <div
      class="flex overflow-x-auto overflow-y-hidden md:h-[96px] h-fit w-full gap-2 md:gap-4 justify-start pb-2"
    >
      <NavItem
        @click="activeTab = 'experience'"
        :active="activeTab === 'experience'"
        active=true
        class="shrink-0"
      >
        Experience
      </NavItem>

      <NavItem
        @click="activeTab = 'education'"
        :active="activeTab === 'education'"
        class="shrink-0"
      >
        Education
      </NavItem>

      <NavItem
        @click="activeTab = 'certification'"
        :active="activeTab === 'certification'"
        class="shrink-0"
      >
        Certification
      </NavItem>
    </div>

    <div
      v-if="activeTab === 'experience'"
      class="flex flex-col gap-4 h-[250px] md:h-[280px] overflow-y-auto overflow-x-hidden pr-2"
    >
      <ExperienceCard
        v-for="(item, index) in experienceData"
        :key="index"
        :role="item.role"
        :place="item.place"
        class="bg-base rounded-full"
      />
    </div>

    <div
      v-else-if="activeTab === 'education'"
      class="flex flex-col gap-4 h-[250px] md:h-[280px] overflow-y-auto overflow-x-hidden pr-2"
    >
      <EducationCard
        v-for="(item, index) in educationData"
        :key="index"
        :gambarLogo="item.logo"
        :sekolah="item.sekolah"
        :tahunMulai="item.tahunMulai"
        :tahunSelesai="item.tahunSelesai"
      />
    </div>

    <div
      v-else-if="activeTab === 'certification'"
      class="flex flex-col gap-4 h-[250px] md:h-[280px] overflow-y-auto overflow-x-hidden pr-2"
    >
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

const activeTab = ref('experience')

// ... (Data array experienceData, educationData, dan certData milikmu tetap sama persis, tidak perlu diubah) ...
const experienceData = [
  { role: 'Staff of SIC CORE', place: 'Student Innovation Centre (SIC) Universitas Udayana' },
  { role: 'Web Developer (Academic Project)', place: 'Sistem Administrasi Rumah Sakit' },
  { role: 'Python Developer', place: 'CYK Algorithm Checker Project' },
  { role: 'Python Developer', place: 'CYK Algorithm Checker Project' },
  { role: 'Python Developer', place: 'CYK Algorithm Checker Project' },
  { role: 'Python Developer', place: 'CYK Algorithm Checker Project' },
  { role: 'Python Developer', place: 'CYK Algorithm Checker Project' },
]

const educationData = [
  {
    sekolah: 'Universitas Udayana',
    jurusan: 'S1 Informatika',
    tahunMulai: '2024',
    tahunSelesai: 'Sekarang',
    logo: logoUNUD,
  },
  {
    sekolah: 'SMA Negeri 2 Abiansemal',
    jurusan: 'MIPA',
    tahunMulai: '2021',
    tahunSelesai: '2024',
    logo: logoSMA,
  },
  {
    sekolah: 'SMP Negeri 12 Denpasar',
    jurusan: 'Pelajar',
    tahunMulai: '2018',
    tahunSelesai: '2021',
    logo: logoSMP,
  },
]

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
]
</script>
