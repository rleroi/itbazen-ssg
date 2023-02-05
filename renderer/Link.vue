<template>
  <a :class="{ active: pageContext.urlPathname === $attrs.href }">
    <slot />
  </a>
</template>
<style scoped>
a {
  /* padding: 3px 10px; */
  @apply px-3 py-0.5;
}
a {
  @apply transition-colors fill-white;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:not(a.active) {
  @apply text-white/50 hover:text-white fill-white/50 hover:fill-white;
  text-decoration: none;
}
</style>
<script setup>
import { usePageContext } from './usePageContext'
const pageContext = usePageContext()
</script>
