<template>
  <div id="app" class="container mx-auto px-4">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="sass">
@import './assets/css/styles.scss';
</style>
