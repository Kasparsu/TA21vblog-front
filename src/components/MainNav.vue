<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma">
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item 
                :active="$route.path === route.path"
                v-for="route in $router.getRoutes()"
                tag="router-link"
                :to="{ path: route.path }">
                {{ route.name }}
            </b-navbar-item>
        </template>

        <template #end>

        </template>
    </b-navbar>
</template>