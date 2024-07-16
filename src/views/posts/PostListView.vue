<template>
    <div>
        <h2>게시글 목록</h2>
        <hr class="my-4">

        <PostFilter
            v-model:title="params.title_like"
            v-model:limit="params._limit"
        />

        <hr class="my-4">

        <AppGrid :items="posts" col-class="col-4">
            <template v-slot="{item}">
                <PostItem
                    :title="item.title"
                    :content="item.content"
                    :created-at="item.createdAt"
                    @click="goPage(item.id)"
                    @modal="openModal(item)"
                />
            </template>
        </AppGrid>
        <AppPagination
            :current-page="params._page"
            :page-count="pageCount"
            @page="page => (params._page = page)"
        />
        <Teleport to="#modal">
            <PostModal
                v-model="show"
                :title="modalTitle"
                :content="modalContent"
                :created-at="modalCreatedAt"
            />
        </Teleport>

        <hr class="my-5">
        <AppCard v-if="posts && posts.length > 0">
            <PostDetailView :id="posts[0].id"/>
        </AppCard>
    </div>
</template>

<script setup>
import PostItem from '@/components/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import AppPagination from "@/components/AppPagination.vue";
import AppGrid from "@/components/AppGrid.vue";
import PostFilter from "@/components/posts/PostFilter.vue";
import PostModal from "@/components/posts/PostModal.vue";
import {getPosts} from '@/api/posts.js';
import {computed, ref, watchEffect} from 'vue';
import {useRouter} from 'vue-router';

const posts = ref([]);
const params = ref({
    _sort: 'createdAt',
    _order: 'desc',
    _page: 1,
    _limit: 3,
    title_like: ''
});

//pagination
const totalCount = ref(0);
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit));

const fetchPosts = async () => {
    try {
        const {data, headers} = await getPosts(params.value);
        posts.value = data;
        totalCount.value = headers['x-total-count'];
    } catch (error) {
        console.error(error);
    }
};
watchEffect(fetchPosts);
// fetchPosts()

const router = useRouter();
const goPage = (id) => {
    router.push({
        name: 'PostDetail',
        params: {id}
    });
};

// modal
const show = ref(false)
const modalTitle = ref('')
const modalContent = ref('')
const modalCreatedAt = ref('')
const openModal = ({title, content, createdAt}) => {
    show.value = true
    modalTitle.value = title
    modalContent.value = content
    modalCreatedAt.value = createdAt
}
</script>

<style scoped lang="scss">

</style>