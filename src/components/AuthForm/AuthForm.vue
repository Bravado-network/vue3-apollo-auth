<script setup lang="ts">
import { reactive } from "vue";
import { useAuth } from "@/providers/AuthProvider/useAuth";
import TextInput from "@/components/TextInput/TextInput.vue";
import BaseButton from "@/components/BaseButton/BaseButton.vue";

const { signUp, signIn } = useAuth();

const form = reactive({
  input: {
    email: "",
    password: "",
  },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <section class="p-4 bg-gray-100 rounded-lg border">
      <form class="grid gap-6">
        <div>
          <TextInput
            placeholder="john@doe.com"
            v-model="form.input.email"
            autofocus
            >Email:
          </TextInput>
        </div>
        <div>
          <TextInput v-model="form.input.password" type="password"
            >Password:
          </TextInput>
        </div>
        <div>
          <BaseButton @click.prevent="signUp(form)">Sign Up</BaseButton>
          <BaseButton @click.prevent="signIn(form)">Sign In</BaseButton>
        </div>
      </form>
    </section>
  </div>
</template>
