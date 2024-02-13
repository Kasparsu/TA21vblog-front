<script setup>
import { ref, computed } from 'vue';
let i = 0;
let items = ref([
  {id: i++, name:'Piim', isDone: true},
  {id: i++, name:'Sai', isDone: false},
  {id: i++, name:'Viin', isDone: false},
  {id: i++, name:'Krõpsud', isDone: true},
]);
let newItem = ref('Hello');

function addItem(){
  if(newItem.value.trim() !== ''){
    items.value.push({id: i++, name: newItem.value.trim(), isDone: false});
  }
  newItem.value = '';
}

let doneItems = computed(() => {
  return items.value.filter(item => item.isDone);
});
let toDoItems = computed(() => {
  return items.value.filter(item => !item.isDone);
});
</script>

<template>
<input type="text" v-model="newItem" @keydown.enter="addItem">
<button @click="addItem">Add Item</button>

<h1>All Items</h1>
<ul>
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
    <input type="checkbox" v-model="item.isDone">
  </li>
</ul>

<h1>Done Items</h1>
<ul>
  <li v-for="item in doneItems" :key="item.id">
    {{ item.name }}
    <input type="checkbox" v-model="item.isDone">
  </li>
</ul>

<h1>ToDo Items</h1>
<ul>
  <li v-for="item in toDoItems" :key="item.id">
    {{ item.name }}
    <input type="checkbox" v-model="item.isDone">
  </li>
</ul>

</template>

<style scoped>

</style>
