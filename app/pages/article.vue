<script setup lang="ts">
useHead({ title: '文章' })
definePageMeta({ headerText: '最近更新' })

</script>

<template>
    <ZTitle icon="👀">
        <span class="badge-text">来自博客
            <ZRawLink to="https://blog.lilithya.su"><mark>莉莉丝的星空日记</mark></ZRawLink>
            的文章
        </span>
    </ZTitle>

</template>

<style lang="scss" scoped>
.article-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 8px;
}

.article-more {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin: 16px 0;
    font-size: min(2rem, 6vw);
    font-weight: bold;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        opacity: 0.2;
        padding: 0.3em 0.5em;
        border-radius: 8px;
        transition: all 0.2s;

        &:hover {
            opacity: 1;
            background-color: var(--c-primary-soft);
            color: var(--c-primary);
        }
    }
}
</style>
