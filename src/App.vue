<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <Test :test="0" />
  <el-divider></el-divider>
  <router-link to="/">Go to Home | </router-link>
  <router-link to="/about">Go to About | </router-link>
  <router-link to="/vue-use">Go to Vue Use</router-link>
  <router-link to="/exposure">Go to exposure</router-link>
  <router-link to="/test-next-tick">Go to next-tick</router-link>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
