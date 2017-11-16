<template>
  <div id="app">
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

<style>
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding-top: 20px;
}
</style>
