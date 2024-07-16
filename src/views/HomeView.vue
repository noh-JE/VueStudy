<template>
    <h2>Home View</h2>
    <p>path: {{$route.path}}</p>
    <p>name: {{$route.name}}</p>
    <button class="btn btn-primary" @click="goAboutPage">about으로 이동</button>

    <hr class="my-4">

    <AppGrid :items="items" v-slot="{ item }">
        <AppCard>{{ item }}</AppCard>
    </AppGrid>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";

const items = ref(['사과', '포도', '바나나'])
const router = useRouter()
const goAboutPage = () => {
    router.push('/about')
}
</script>

<style scoped lang="scss">

</style>