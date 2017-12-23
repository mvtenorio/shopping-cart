<template>
<div class="inline-flex h-8">
  <m-button
    class="w-8 rounded-r-none"
    @click.prevent="decrement"
    :disabled="internalValue === min"
  >
    -
  </m-button>
  <input type="text"
    class="bg-grey-lighter w-8 text-center"
    :value="internalValue"
    readonly
  >
  <m-button
    class="w-8 rounded-l-none"
    @click.prevent="increment"
    :disabled="internalValue === max"
  >
    +
  </m-button>
</div>
</template>


<script>
import MButton from '@/components/MButton';

export default {
  props: {
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
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
    this.internalValue = this.value;
  },
  watch: {
    internalValue() {
      this.$emit('input', this.internalValue);
    },
  },
  components: {
    MButton,
  },
};
</script>
