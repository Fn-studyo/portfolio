<template>
    <div>
        <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0">
                <img class="mr-3 h-8 rounded-full" src="https://avatars.githubusercontent.com/u/54484130" alt="Muritala David">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PIPEDEV</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li v-for="url in links" :key="url.name">
                    <a :href="url.url" class="mr-4 hover:underline md:mr-6 ">{{ url.name }}</a>
                </li>
            </ul>
        </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
    © {{ new Date().getFullYear() }} <a href="#" class="hover:underline">PIPEDEV™</a>. 
    All Rights Reserved.
</span>
</footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {
            links : [{
                name: 'Github',
                url: 'https://github.com/Fn-studyo'
            },
            {
                name: 'Twitter',
                url: 'https://twitter.com/pipe_dev'
            }, {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/muritala-david-ab8019189/'
            },{
                name: 'Instagram',
                url: 'https://www.instagram.com/d.a.v.i.d.o.t/'
            }]
        }
    }
}
</script>