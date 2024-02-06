<script setup>
import { ref } from 'vue';

let count = ref(0);
let message = ref('Hello Vue!');
function changeMessage(event){
    console.log(event.target.value);
    message.value = event.target.value;
}
</script>

<template>
{{ count }} <button v-on:click="count++">Click me</button><br>
<h1>{{ message }}</h1>
<input type="text" v-bind:value="message" v-on:input="changeMessage">
</template>

<style scoped>

</style>
