<script setup>
import { ref } from 'vue';
import { useChatStore } from '../stores/chat';
let message = ref('');
let chat = useChatStore();
const sleep = ms => new Promise(r => setTimeout(r, ms));
chat.getMessages();
chat.websocket();

function send(){
    if(message.value.trim() !== ''){
        chat.sendMessage(message.value.trim());
    }
    message.value = '';
}
</script>
<template>
        <b-field message="Write a message">
            <b-input expanded v-model="message">          
               
            </b-input>
            <p class="control">
                <b-button type="is-primary" label="Send" @click="send" />
            </p>
        </b-field>
        <b-message v-for="msg in chat.messages">
            {{ msg.message }}
        </b-message>

</template>