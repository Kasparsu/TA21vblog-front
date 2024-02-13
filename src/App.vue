<script setup>
import { ref, computed } from 'vue';
import ItemList from './components/ItemList.vue';

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
<ItemList :items="items" title="All Items"></ItemList>
<ItemList :items="doneItems" title="Done Items"></ItemList>
<ItemList :items="toDoItems" title="ToDo Items"></ItemList>


</template>

<style scoped>

</style>
