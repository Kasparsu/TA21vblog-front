<script setup>
import axios from 'axios';
import { ref } from 'vue';
let email = ref('');
let password = ref('');
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;


// Login...
axios.get('http://localhost:8000/api/user').then(response => {
                // Login...
});

function login() {
    axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
        axios.post('http://localhost:8000/api/login', {
            email: email.value,
            password: password.value,
            remember: true
        }).then(response => {
            console.log(response);
            axios.get('http://localhost:8000/api/user').then(response => {
                // Login...
            });
        });
    });
}
</script>
<template>
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-5-tablet is-6-desktop is-6-widescreen">
                <form action="" class="box">
                    <div class="field">
                        <label for="" class="label">Email</label>
                        <div class="control has-icons-left">
                            <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required
                                v-model="email">
                            <span class="icon is-small is-left">
                                <i class="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label for="" class="label">Password</label>
                        <div class="control has-icons-left">
                            <input type="password" placeholder="*******" class="input" required v-model="password">
                            <span class="icon is-small is-left">
                                <i class="fa fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label for="" class="checkbox">
                            <input type="checkbox">
                            Remember me
                        </label>
                    </div>
                    <div class="field">
                        <button class="button is-success" @click.prevent="login()">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped></style>