<template>
  <button class="bg-indigo hover:bg-indigo-dark text-grey-lighter font-bold rounded"
    @click="emitClickEvent"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    emitClickEvent(e) {
      this.$emit('click', e);
    },
  },
};
</script>
