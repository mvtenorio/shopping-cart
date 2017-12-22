<template>
<div class="inline-flex h-8">
  <button
    class="bg-indigo text-white w-8 rounded-l"
    @click.prevent="decrement"
  >
    -
  </button>
  <input type="text"
    class="w-8 bg-grey-lighter text-center"
    :value="internalValue"
    readonly
  >
  <button
    class="bg-indigo text-white w-8 rounded-r"
    @click.prevent="increment"
  >
    +
  </button>
</div>
</template>


<script>
export default {
  props: ['min', 'max', 'value'],
  data() {
    return {
      internalValue: 0,
    };
  },
  methods: {
    decrement() {
      if (!this.min || this.internalValue > this.min) {
        this.internalValue -= 1;
      }
    },

    increment() {
      if (!this.max || this.internalValue < this.max) {
        this.internalValue += 1;
      }
    },
  },
  mounted() {
    if (this.value) {
      this.internalValue = this.value;
    }
  },
  watch: {
    internalValue() {
      this.$emit('input', this.internalValue);
    },
  },
};
</script>
