<template>
  <div class="w-full h-screen flex items-center justify-center">
    <!-- <CardTechStack
      label="Vue.Js"
      :logoTech="logoVue"
    />
     -->

    <!-- <SendMassage/> -->

    <InputField typeInput="text" placeholderInput="Masukkan Email Anda...." />
    <!-- <SkillCard 
      label="Vue"
      :gambarLogo="logoVue"
    /> -->
  </div>
</template>

<script setup>
import logoVue from '@/assets/VueJs.png'
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
</script>
