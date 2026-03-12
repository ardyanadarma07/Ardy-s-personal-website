<template>
  <div class="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 py-10 md:py-16 px-6 md:px-14 w-full">
    
    <div class="flex flex-col gap-8 md:gap-10 justify-start w-full md:w-3/5">
      
      <img :src="welcomeMassage" alt="Selamat Datang" class="h-auto w-[280px] sm:w-[350px] md:w-[490px] mx-auto md:mx-0" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-back" />

      <img :src="fotoHome" alt="foto Ardy" class="h-[300px] sm:h-[350px] w-auto object-contain md:hidden mx-0" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-out-back"/>

      <div class="flex flex-col gap-6 md:gap-8 text-center md:text-left">
        
        <h1 
          data-aos="fade-right" 
          data-aos-easing="ease-out-back" 
          data-aos-duration="1000"
          class="font-poppins text-3xl md:text-5xl font-bold leading-tight"
        >
          Undergraduate Student at Udayana University
        </h1>
        
        <p 
          data-aos="fade-right" 
          data-aos-easing="ease-out-back" 
          data-aos-duration="1000"
          data-aos-delay="200"
          class="font-poppins text-base md:text-lg text-justify text-gray-700 md:text-black"
        >
          Saya tertarik pada pengembangan Web dan Data, khususnya penyajian data dalam bentuk visual
          yang informatif dan mudah dipahami. Saat ini saya mendalami Machine Learning dan Front-End
          untuk membangun solusi berbasis data yang relevan serta dapat disajikan melalui antarmuka
          web yang efektif dan mudah digunakan.
        </p>
        
      </div>

      <div class="flex flex-col items-left md:items-start gap-8 md:gap-6">
        <GetInTouch data-aos="fade-right" data-aos-easing="ease-out-back" data-aos-duration="1000"/>

        <div class="flex md:flex-row gap-3 items-center" >
          <h1 class="font-poppins text-lg md:text-xl" data-aos="fade-right" data-aos-easing="ease-out-back" data-aos-duration="1000">Find me on:</h1>
          
          <div class="flex gap-4">
            <Sosmed :linkSosmed="'https://instagram.com/ardyanadarma._'" data-aos="fade-right" data-aos-easing="ease-out-back" data-aos-duration="1000">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_489_186)">
                  <path d="M14.5834 5.41667H14.5917M5.83341 1.66667H14.1667C16.4679 1.66667 18.3334 3.53215 18.3334 5.83334V14.1667C18.3334 16.4679 16.4679 18.3333 14.1667 18.3333H5.83341C3.53223 18.3333 1.66675 16.4679 1.66675 14.1667V5.83334C1.66675 3.53215 3.53223 1.66667 5.83341 1.66667ZM13.3334 9.47501C13.4363 10.1685 13.3178 10.8769 12.9949 11.4992C12.672 12.1215 12.161 12.6262 11.5348 12.9414C10.9085 13.2566 10.1988 13.3663 9.50657 13.2549C8.81435 13.1436 8.17488 12.8167 7.67911 12.321C7.18335 11.8252 6.85652 11.1857 6.74514 10.4935C6.63375 9.8013 6.74347 9.09158 7.05869 8.46532C7.3739 7.83905 7.87857 7.32812 8.5009 7.00521C9.12323 6.68229 9.83154 6.56383 10.5251 6.66667C11.2325 6.77158 11.8875 7.10122 12.3932 7.60693C12.8989 8.11263 13.2285 8.76757 13.3334 9.47501Z" stroke="#00120B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_489_186"><rect width="20" height="20" fill="white" /></clipPath>
                </defs>
              </svg>
            </Sosmed>
            <Sosmed :linkSosmed="'https://tiktok.com/@ardypotter_'" data-aos="fade-right" data-aos-easing="ease-out-back" data-aos-duration="1000">
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7832 3.01667C18.6843 2.62117 18.4826 2.25881 18.1988 1.96617C17.9149 1.67353 17.5589 1.46099 17.1666 1.35C15.7332 1 9.99991 1 9.99991 1C9.99991 1 4.26657 1 2.83324 1.38333C2.44095 1.49432 2.08489 1.70687 1.80103 1.99951C1.51717 2.29214 1.31556 2.65451 1.21657 3.05C0.954252 4.50463 0.825937 5.98026 0.83324 7.45833C0.823889 8.94754 0.952213 10.4344 1.21657 11.9C1.32571 12.2832 1.53183 12.6318 1.81503 12.9121C2.09822 13.1923 2.44892 13.3948 2.83324 13.5C4.26657 13.8833 9.99991 13.8833 9.99991 13.8833C9.99991 13.8833 15.7332 13.8833 17.1666 13.5C17.5589 13.389 17.9149 13.1765 18.1988 12.8838C18.4826 12.5912 18.6843 12.2288 18.7832 11.8333C19.0435 10.3897 19.1718 8.92528 19.1666 7.45833C19.1759 5.96913 19.0476 4.48225 18.7832 3.01667Z" stroke="#00120B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.12491 10.1833L12.9166 7.45833L8.12491 4.73333V10.1833Z" stroke="#00120B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Sosmed>
          </div>
        </div>
      </div>

    </div>

    <div class="hidden md:flex w-full md:w-2/5 justify-end">
      <img :src="fotoHome" alt="foto Ardy" class="h-[548px] w-auto object-contain" data-aos="fade-left" data-aos-duration="1000" />
    </div>

  </div>
</template>

<script setup>
import fotoHome from '@/assets/Foto_Ardy/foto-home.png'
import welcomeMassage from '@/assets/foto-welcome.png'
import GetInTouch from '../printilan/GetInTouch.vue'
import Sosmed from '../printilan/Sosmed.vue'
</script>