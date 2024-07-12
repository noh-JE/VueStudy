<template>
    <h2>path: {{$route.path}}</h2>
    <button class="btn btn-primary" @click="$router.push('/')">home으로 이동</button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter()
</script>


<style scoped lang="scss">

</style>