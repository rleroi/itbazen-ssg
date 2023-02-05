<template>
  <h3 v-if="page.title" class="font-thin text-4xl mb-8">{{page.title}}</h3>
  <div v-html="page.html"></div>

  <div class="gap-4 grid grid-cols-1 md:grid-cols-2">
    <div v-for="project in projects" class="repo-card" :data-repo="project" data-theme="dark-theme"></div>
  </div>

  <div class="mt-16 text-center">
    <a class="bg-dark border border-border rounded-sm px-8 py-4 text-white" href="https://github.com/rleroi" title="R. Leroi on GitHub" target="_blank" rel="noopener">
      See more on GitHub
    </a>
  </div>
</template>

<script>
    const pageProps = ['page'];
    export default {props: pageProps};
</script>

<script setup>
const projects = [
  'rleroi/chip8-vue',
  'rleroi/go-hash',
  'rleroi/webhook-router',
  'rleroi/simpledi',
  'rleroi/stremio-laravel',
  'rleroi/vuelaraveldemo',

];
</script>

<style scoped>
</style>