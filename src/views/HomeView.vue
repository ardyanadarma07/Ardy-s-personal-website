<template>
  <div class="w-full h-screen flex items-center justify-center bg-birutua">
    <!-- <CardTechStack
      label="Vue.Js"
      :logoTech="logoVue"
    />
     -->

    <!-- <SendMassage/> -->

    <!-- <InputField typeInput="text" placeholderInput="Masukkan Email Anda...." /> -->
    <!-- <SkillCard 
      label="Vue"
      :gambarLogo="logoVue"
    /> -->
    <!-- <EducationCard
      :gambarLogo="logoVue"
      sekolah="SMP Negeri 12 Denpasar"
      tahunMulai="2018"
      tahunSelesai="2021"
    /> -->

    <!-- <ExperienceCard
     experience="Finance Manager I"
     where="Student Innovation Centre"
    /> -->
    <!-- <CertificationCard
      title="Belajar Mechine Learning untuk Pemula"
      source="Dicoding Indonesia"
      :linkSertifikat="'https://sicudayana.com/'"
    /> -->
    <!-- <ContactMeCard 
      sosialMedia="Github"
      :linkSosmed="'https://github.com/ardyanadarma07'"
    >
  <svg
        width="20"
        height="20"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.00012 9.5134C1.50012 10.2634 1.50012 8.2634 0.500122 8.0134M7.50012 11.0134V9.0784C7.51888 8.83998 7.48667 8.6003 7.40563 8.37529C7.32459 8.15029 7.19659 7.94511 7.03012 7.7734C8.60012 7.5984 10.2501 7.0034 10.2501 4.2734C10.25 3.57531 9.98147 2.904 9.50012 2.3984C9.72805 1.78765 9.71193 1.11257 9.45512 0.513397C9.45512 0.513397 8.86512 0.338397 7.50012 1.2534C6.35413 0.942807 5.14612 0.942807 4.00012 1.2534C2.63512 0.338397 2.04512 0.513397 2.04512 0.513397C1.78831 1.11257 1.77219 1.78765 2.00012 2.3984C1.51519 2.90775 1.24638 3.58513 1.25012 4.2884C1.25012 6.9984 2.90012 7.5934 4.47012 7.7884C4.30562 7.95838 4.17875 8.1611 4.09778 8.38336C4.0168 8.60561 3.98353 8.84243 4.00012 9.0784V11.0134"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg></AboutMeCard> -->
      <div class="w-[800px] h-[500px]">
        <AboutMeCard class="w-full h-full"></AboutMeCard>
      </div>
  </div>
</template>

<script setup>
import logoVue from '@/assets/Tech/logo-vuejs.png'
import SendMassage from '@/components/printilan/SendMassage.vue'
import Navbar from '@/components/componen-gede/NavBar.vue'
import DownloadCV from '@/components/printilan/DownloadCV.vue'
import GetInTouch from '@/components/printilan/GetInTouch.vue'
import NavItem from '@/components/printilan/NavItem.vue'
import Sosmed from '@/components/printilan/Sosmed.vue'
import SkillCard from '@/components/printilan/SkillCard.vue'
import SlideButton from '@/components/printilan/SlideButton.vue'
import CardTechStack from '@/components/printilan/CardTechStack.vue'
import InputField from '@/components/printilan/InputField.vue'
import EducationCard from '@/components/printilan/EducationCard.vue'
import ExperienceCard from '@/components/printilan/ExperienceCard.vue'
import CertificationCard from '@/components/printilan/CertificationCard.vue'
import AboutMeCard from '@/components/componen-gede/AboutMeCard.vue'
import ContactMeCard from '@/components/componen-gede/ContactMeCard.vue'
</script>
