<script setup>
import { useRouter } from "vue-router";

const router = useRouter()
const goAboutPage = () => {
    router.push('/about')
}
</script>

<template>
    <h2>path: {{$route.name}}</h2>
    <button class="btn btn-primary" @click="goAboutPage">about으로 이동</button>
</template>

<style scoped lang="scss">

</style>