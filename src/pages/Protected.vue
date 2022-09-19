<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuth } from "@/providers/AuthProvider/useAuth";
import { watchEffect } from "vue";
import BaseButton from "@/components/BaseButton/BaseButton.vue";

const router = useRouter();
const { user, isLoggedIn, logOut } = useAuth();

watchEffect(() => {
  if (!isLoggedIn.value) router.push("/");
});
</script>

<template>
  <section class="flex h-screen flex-col items-center justify-center">
    <h1 class="mb-2 text-2xl">Protected page</h1>
    <pre class="mb-2">{{ user }}</pre>
    <BaseButton type="submit" @click="logOut">Log out</BaseButton>
  </section>
</template>
