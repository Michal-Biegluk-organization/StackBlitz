<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <NuxtPage />
  <Analytics />
</template>
