<template>
  <!-- Toast Provider (wrapper) -->
  <div>
    <!-- Toast Viewport -->
    <div ref="viewportRef" :class="viewportClasses">
      <!-- Toast Root -->
      <div ref="toastRef" :class="toastClasses">
        <!-- Toast Title -->
        <h3 :class="titleClasses">
          <slot name="title" />
        </h3>

        <!-- Toast Description -->
        <p :class="descriptionClasses">
          <slot name="description" />
        </p>

        <!-- Toast Action -->
        <button ref="actionRef" :class="actionClasses" @click="handleAction">
          <slot name="action">Action</slot>
        </button>

        <!-- Toast Close -->
        <button ref="closeRef" :class="closeClasses" @click="closeToast">
          <X class="h-4 w-4" />
          <!-- Lucide X icon for close -->
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { X } from "lucide-vue"; // Assuming Lucide Vue version supports Vue 3
import { cn } from "@/lib/utils"; // Your utility function for merging classes

export default {
  name: "Toast",
  props: {
    variant: {
      type: String,
      default: "default",
      validator: (value) => ["default", "destructive"].includes(value),
    },
    className: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    // Refs
    const viewportRef = ref(null);
    const toastRef = ref(null);
    const actionRef = ref(null);
    const closeRef = ref(null);

    // Toast Variants (Styles)
    const toastVariants = {
      default: "border bg-white text-foreground",
      destructive:
        "destructive group border-destructive bg-destructive text-destructive-foreground",
    };

    // Computed Classes for Toast Elements
    const viewportClasses = computed(() => {
      return cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        props.className
      );
    });

    const toastClasses = computed(() => {
      return cn(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
        toastVariants[props.variant],
        props.className
      );
    });

    const titleClasses = computed(() => {
      return cn("text-sm font-semibold");
    });

    const descriptionClasses = computed(() => {
      return cn("text-sm opacity-90");
    });

    const actionClasses = computed(() => {
      return cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      );
    });

    const closeClasses = computed(() => {
      return cn(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
      );
    });

    // Methods
    const handleAction = () => {
      console.log("Toast action triggered");
    };

    const closeToast = () => {
      console.log("Toast closed");
      // Logic for closing the toast
    };

    return {
      viewportRef,
      toastRef,
      actionRef,
      closeRef,
      viewportClasses,
      toastClasses,
      titleClasses,
      descriptionClasses,
      actionClasses,
      closeClasses,
      handleAction,
      closeToast,
    };
  },
};
</script>

<style scoped>
/* Scoped styles for Toast component if necessary */
</style>
