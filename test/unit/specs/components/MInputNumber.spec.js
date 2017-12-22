/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import Vue from 'vue';
import MInputNumber from '@/components/MInputNumber';

describe('MInputNumber.vue', function () {
  let vm;
  beforeEach(function () {
    const Constructor = Vue.extend(MInputNumber);
    vm = new Constructor();
    vm.value = 3;
    vm.min = 2;
    vm.max = 4;
    vm.$mount();
  });

  it('decrements', function () {
    vm.decrement();
    expect(vm.internalValue).to.equal(2);
  });

  it('increments', function () {
    vm.increment();
    expect(vm.internalValue).to.equal(4);
  });

  it('respects min value', function () {
    vm.decrement();
    vm.decrement();
    expect(vm.internalValue).to.equal(2);
  });

  it('respects max value', function () {
    vm.increment();
    vm.increment();
    expect(vm.internalValue).to.equal(4);
  });
});
