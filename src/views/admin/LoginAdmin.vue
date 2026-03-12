<template>
  <div class="min-h-screen flex items-center justify-center bg-birumuda px-6">
    
    <div class="bg-base w-full max-w-md p-8 md:p-10 rounded-[2rem] border-2 border-gelap shadow-xl flex flex-col gap-6" data-aos="zoom-in">
      
      <div class="text-center">
        <h1 class="font-poppins text-3xl font-bold text-gelap">Admin Panel</h1>
        <p class="font-poppins text-sm text-gelap mt-2">Masuk untuk mengelola pesan masuk portofolio.</p>
      </div>

      <form @submit.prevent="handleLogin" class="flex flex-col gap-5 mt-2">
        <div class="flex flex-col gap-2">
          <label class="font-poppins font-medium text-sm text-gelap">Email Admin</label>
          <input 
            v-model="email" 
            type="email" 
            placeholder="admin@ardyanadarma.com" 
            class="w-full px-4 py-3 rounded-xl border-2 border-gelap focus:border-birutua focus:outline-none font-poppins text-gelap bg-white" 
            required 
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <label class="font-poppins font-medium text-sm text-gelap">Password</label>
          <input 
            v-model="password" 
            type="password" 
            placeholder="••••••••" 
            class="w-full px-4 py-3 rounded-xl border-2 border-gelap focus:border-birutua focus:outline-none font-poppins text-gelap bg-white" 
            required 
          />
        </div>
        
        <button 
          type="submit" 
          class="w-full mt-4 bg-birutua hover:bg-gelap text-white font-bold font-poppins py-3 rounded-full border-2 border-transparent hover:border-gelap transition-all duration-300"
        >
          Masuk
        </button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/supabase'

const email = ref('')
const password = ref('')
const router = useRouter()

const isLoading = ref(false)

const handleLogin = async () => {
  if (!email.value || !password.value) {
    alert('Harap isi email dan password!')
    return
  }

  isLoading.value = true

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) throw error

    console.log('Login sukses:', data.user)
    
    router.push('/admin')

  } catch (error) {
    alert('Gagal Login: Email atau Password salah!')
    console.error(error.message)
  } finally {
    isLoading.value = false
  }
}
</script>