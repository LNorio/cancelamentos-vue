<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

  library.add(fas, faTwitter, faFontAwesome)
</script>

<template>
  <RouterView />
</template>
