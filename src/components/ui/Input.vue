<template>
  <input
    :type="type"
    v-bind="$attrs"
    :class="computedInputClasses"
    ref="inputRef"
    @input="emitInput"
  />
</template>

<script>
import { ref, computed } from "vue";
import { cn } from "@/lib/utils"; // Assuming you have this utility for class merging

export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const inputRef = ref(null);

    const computedInputClasses = computed(() => {
      return cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a4cd39] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        props.className
      );
    });

    const emitInput = (event) => {
      emit("update:modelValue", event.target.value);
    };

    return {
      inputRef,
      computedInputClasses,
      emitInput,
    };
  },
};
</script>

<style scoped>
/* Scoped styles if needed */
</style>
