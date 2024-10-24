<template>
  <label ref="labelRef" :class="computedClasses" v-bind="$attrs">
    <slot />
  </label>
</template>

<script>
import { ref, computed } from "vue";
import { cn } from "@/lib/utils"; // Utility function for merging classes

export default {
  name: "Label",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const labelRef = ref(null);

    const labelVariants =
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

    const computedClasses = computed(() => {
      return cn(labelVariants, props.className);
    });

    return {
      labelRef,
      computedClasses,
    };
  },
};
</script>
