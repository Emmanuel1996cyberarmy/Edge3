<template>
  <div
    ref="checkboxRef"
    :class="computedCheckboxClasses"
    @click="toggleCheck"
    :tabindex="0"
    role="checkbox"
    :aria-checked="checked"
    v-bind="$attrs"
  >
    <div v-if="checked" :class="indicatorClass">
      <Check class="h-4 w-4" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { Check } from "lucide-vue";
import { cn } from "@/lib/utils";

export default {
  name: "Checkbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const checkboxRef = ref(null);
    const checked = ref(props.modelValue);

    // Toggle checkbox state
    const toggleCheck = () => {
      checked.value = !checked.value;
      emit("update:modelValue", checked.value);
    };

    // Classes for the checkbox root
    const computedCheckboxClasses = computed(() => {
      return cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        {
          "bg-primary text-primary-foreground": checked.value,
        },
        props.className
      );
    });

    // Indicator class when checked
    const indicatorClass = computed(() => {
      return cn("flex items-center justify-center text-current");
    });

    return {
      checkboxRef,
      checked,
      computedCheckboxClasses,
      indicatorClass,
      toggleCheck,
    };
  },
};
</script>
