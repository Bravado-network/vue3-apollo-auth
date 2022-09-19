<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuth } from "@/providers/AuthProvider/useAuth";
import AuthForm from "@/components/AuthForm/AuthForm.vue";
import { watchEffect } from "vue";

const { push: routerPush } = useRouter();
const { isLoggedIn } = useAuth();

watchEffect(() => {
  if (isLoggedIn.value) routerPush("/protected");
});
</script>

<template>
  <div class="container mx-auto">
    <AuthForm />
  </div>
</template>
