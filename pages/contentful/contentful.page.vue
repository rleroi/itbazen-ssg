<template>
    <h3 v-if="page.title" class="font-thin text-4xl mb-8">{{page.title}}</h3>
    <div v-html="page.html"></div>
</template>
<script>
    const pageProps = ['page'];
    export default {props: pageProps};
</script>
<style scoped>
</style>
