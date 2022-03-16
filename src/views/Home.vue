<template>
  <div>
<section class="bg-white overflow-hidden" style="background-image: url('https://i.ibb.co/ZWW94j3/bg-main.png'); background-position: center;">
  <div class="bg-transparent">
    <Header />
  </div>
  <div class="py-20 md:py-28">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap xl:items-center -mx-4">
        <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
          <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 uppercase rounded-9xl">PIPEDEV</span>
          <h1 class="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">Meet Ileri ⚡️.</h1>
          <p class="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Hello, I'm Muritala David Ilerioluwa, a Backend Developer based in Lagos.</p>
          <div class="flex flex-wrap">
            <div class="w-full md:w-auto py-1 md:py-0 md:mr-4"><a class="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm" href="https://drive.google.com/file/d/1czVHvgGA4vZKwngmXETIwUfD4F-ag2Xk/view?usp=sharing" target="_blank" download>Resume</a></div>
            <div class="w-full md:w-auto py-1 md:py-0"><a class="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm" href="mailto:davmuri1414@gmail.com">Contact</a></div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-4">
          <div class="relative mx-auto md:mr-0 max-w-max">
            <img class="absolute z-10 -left-14 -top-12 w-28 md:w-auto" src="../assets/images/yellow.svg" alt="">
            <img class="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto" src="../assets/images/blue.svg" alt="">
            <img class="relative" src="../assets/images/pipe-main.jpeg" alt="Muritala David" style="border-radius: 1.5rem;">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!--Footer-->
<Footer />

  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
