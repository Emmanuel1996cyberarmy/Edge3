<template>
  <button :class="computedClasses" v-bind="$attrs" v-on="$attrs">
    <slot />
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Button",
  props: {
    variant: {
      type: String,
      default: "default",
      validator: (value) =>
        ["default", "destructive", "outline", "secondary", "ghost"].includes(
          value
        ),
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => ["default", "sm", "lg", "icon"].includes(value),
    },
  },
  setup(props) {
    const buttonVariants = {
      default: "bg-[#a4cd39] text-white hover:bg-[#a4cd39]",
      outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    };

    const sizeVariants = {
      default: "h-10 px-4 py-2",
      lg: "h-12 px-6",
      sm: "h-8 px-3",
    };

    const computedClasses = computed(() => {
      return [
        "rounded",
        buttonVariants[props.variant],
        sizeVariants[props.size],
      ].join(" ");
    });

    return {
      computedClasses,
    };
  },
};
</script>

<style scoped>
/* Simple styles for the button */
button {
  transition: background-color 0.2s;
}
</style>
