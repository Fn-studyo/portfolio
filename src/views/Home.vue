<template>
  <div>
<section class="bg-white overflow-hidden" style="background-image: url('https://shuffle.dev/flex-ui-assets/elements/pattern-white.svg'); background-position: center;">
  <div class="bg-transparent">
    <Header />
    <div class="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
      <div class="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white">
        <nav class="relative p-6 h-full overflow-y-auto">
          <div class="flex flex-col justify-between h-full">
            <a class="inline-block" href="#">
              <img class="h-8" src="flex-ui-assets/logos/flex-ui-green-light.svg" alt="">
            </a>
            <ul class="py-6">
              <li><a class="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Product</a></li>
              <li><a class="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Features</a></li>
              <li><a class="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Pricing</a></li>
              <li><a class="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Resources</a></li>
            </ul>
            <div class="flex flex-wrap">
              <div class="w-full mb-2"><a class="inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium text-center rounded-md" href="#">Log In</a></div>
              <div class="w-full"><a class="inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md" href="#">Sign Up</a></div>
            </div>
          </div>
        </nav>
        <a class="navbar-close absolute top-5 p-4 right-3" href="#">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z" fill="#556987"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="py-20 md:py-28">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap xl:items-center -mx-4">
        <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
          <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 uppercase rounded-9xl">PIPEDEV</span>
          <h1 class="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">Meet Ileri ⚡️.</h1>
          <p class="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Hello, I'm Muritala David Ilerioluwa, a Backend Developer based in Lagos.</p>
          <div class="flex flex-wrap">
            <div class="w-full md:w-auto py-1 md:py-0 md:mr-4"><a class="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm" href="@/assets/pipe-dev.pdf" download>Resume</a></div>
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

<footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
<div class="sm:flex sm:items-center sm:justify-between">
<a href="#" class="flex items-center mb-4 sm:mb-0">
<img class="mr-3 h-8 rounded-full" src="https://avatars.githubusercontent.com/u/54484130" alt="Muritala David">
<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PIPEDEV</span>
</a>
<ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
<li>
<a href="https://github.com/Fn-studyo" class="mr-4 hover:underline md:mr-6 ">Github</a>
</li>
<li>
<a href="https://twitter.com/pipe_dev" class="mr-4 hover:underline md:mr-6">Twitter</a>
</li>
<li>
<a href="https://www.linkedin.com/in/muritala-david-ab8019189/" class="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
</li>
<li>
<a href="https://www.instagram.com/d.a.v.i.d.o.t/" class="hover:underline">Instagram</a>
</li>
</ul>
</div>
<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" class="hover:underline">PIPEDEV™</a>. All Rights Reserved.
</span>
</footer>

  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
