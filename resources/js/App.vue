<template>
    <h1>Hello Vue Lover</h1>
    <router-link :to="{name:'addnew'}">Add New</router-link>
    <router-link :to="{name:'list'}">List Item</router-link>
    <RouterView></RouterView>
</template>

<script>
    export default {

    }
</script>

<style scoped>
h1{
    color: red;
}
</style>
