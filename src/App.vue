<script lang="ts" setup>
import AuthProvider from "@/providers/AuthProvider/AuthProvider.vue";
</script>

<template>
  <AuthProvider>
    <RouterView />
  </AuthProvider>
</template>
