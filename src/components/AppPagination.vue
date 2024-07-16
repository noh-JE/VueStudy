<template>
    <nav class="mt-5" aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item">
                <a
                    class="page-link"
                    :class="isPrevPage"
                    href="#"
                    @click.prevent="$emit('page', currentPage - 1)"
                    aria-label="Previous"
                >
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li v-for="page in pageCount" :key="page" class="page-item">
                <a
                    class="page-link"
                    :class="{active: currentPage === page}"
                    @click.prevent="$emit('page', page)"
                   href="#"
                >{{ page }}</a>
            </li>
            <li
                class="page-item"
            >
                <a
                    class="page-link"
                    :class="isNextPage"
                    href="#"
                    @click.prevent="$emit('page', currentPage + 1)"
                    aria-label="Next"
                >
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    }
})

defineEmits(['page'])

const isPrevPage = computed(() => ({ disabled: !(props.currentPage > 1) }))
const isNextPage = computed(() => ({ disabled: !(props.currentPage < props.pageCount) }))
</script>

<style scoped lang="scss">

</style>