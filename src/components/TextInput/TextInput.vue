<script lang="ts" setup>
type TextInputProps = {
  modelValue: string;
};
type TextInputEmits = {
  (event: "update:modelValue", payload: string): void;
};

defineProps<TextInputProps>();
const emit = defineEmits<TextInputEmits>();

function onInput(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

<template>
  <label class="block text-sm font-medium text-gray-900 dark:text-gray-300">
    <slot />
    <input
      class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      v-bind="$attrs"
      :value="modelValue"
      @input="onInput"
    />
  </label>
</template>
