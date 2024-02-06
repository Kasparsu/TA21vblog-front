<script setup>
import { ref } from 'vue';

let count = ref(0);
let message = ref('Hello Vue!');
let isRed = ref(false);
</script>

<template>
{{ count }} <button @click="count++">Click me</button><br>
<button :class="{red: isRed}" @click="isRed=!isRed">Click me</button><br>
<h1>{{ message }}</h1>
<input type="text" v-model="message">
</template>

<style scoped>
.red {
  background-color: red;
}
</style>
