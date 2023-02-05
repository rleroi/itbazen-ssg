<template>
  <div class="flex flex-col" :class="{ 'h-screen overflow-hidden': state.menuOpen }">
    <div v-show="state.menuOpen"
      class="absolute left-0 top-0 w-full h-full z-50 flex flex-col lg:hidden bg-dark px-8 py-8">
      <button aria-label="Menu" @click="openMenu(false)" class="ml-auto mb-8">
        <svg class="fill-white/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
          aria-hidden="true" focusable="false">
          <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
        </svg>
      </button>
      <ol class="flex flex-col text-right">
        <li class="mb-4">
          <Link href="/">Experience</Link>
        </li>
        <li class="mb-4">
          <Link href="/projects">Projects</Link>
        </li>
        <li class="mb-4">
          <Link href="/contact">Hire me</Link>
        </li>
      </ol>
    </div>

    <div class="flex flex-col justify-between items-center border-b-border border-b space-y-16 p-16">
      <div>
        <a href="/" title="ITBazen.com – Backend Engineer">
          <h1 class="text-5xl">ITBazen.com</h1>
          <h2 class="text-white/50 text-lg">Ramses Leroi – Backend Engineer</h2>
        </a>
      </div>
      <a href="https://laravel.com" rel="noopener" target="_blank" title="Laravel">
        <svg width="64" height="64" viewBox="0 0 50 52" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z"
            fill="#FF2D20" fill-rule="evenodd" />
        </svg>
      </a>
    </div>

    <div class="border-b-border border-b">
      <div class="container my-2">
        <div class="hidden lg:flex justify-center">
          <Link href="/">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Hire me</Link>
        </div>
        <button aria-label="Menu" class="inline lg:hidden align-middle" @click="openMenu(true)">
          <svg class="fill-white/50" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            aria-hidden="true" focusable="false">
            <rect x="4" y="7.5" width="16" height="1.5"></rect>
            <rect x="4" y="15" width="16" height="1.5"></rect>
          </svg>
        </button>
      </div>
    </div>

    <div class="py-16 border-b-border border-b bg-dark">
      <div class="container">
        <slot />
      </div>
    </div>

    <div class="flex py-16 flex-col-reverse md:flex-row md:justify-between justify-center items-center container">
      <div class="w-1/2 md:w-1/5 text-center">
        <img src="./ramses-lisboa-blur.jpg" class="rounded-full border border-border object-contain inline-block"
          alt="Ramses Leroi" />
      </div>
      <div class="w-full md:w-4/5 mb-8 md:mb-0 md:ml-8">
        <h3 class="text-4xl font-thin mb-4">About me</h3>
        <p>Hi! I'm a skilled developer with expertise in PHP and JavaScript. I have a passion for SaaS, APIs, and security, and specialize in Laravel PHP for my backend work. In my free time, I challenge myself with personal projects and continue to expand my skills by learning new programming languages. Outside of work, I enjoy DJing at house parties and producing Drum & Bass music.</p>
        <p class="space-x-4 text-center">
          <a href="https://linkedin.com/in/itbazen" target="_blank" rel="noopener">
            <svg width="32" height="32" class="fill-white/50 hover:fill-white inline" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128">
              <path
                d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z" />
            </svg>
          </a>

          <a href="https://github.com/rleroi" target="_blank" rel="noopener">
            <svg width="32" height="32" class="fill-white/50 hover:fill-white inline" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128">
              <g>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" />
                <path
                  d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
              </g>
            </svg>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Link from './Link.vue';

const state = reactive({
  menuOpen: false,
});

function openMenu(isOpen) {
  state.menuOpen = isOpen;
}

</script>

