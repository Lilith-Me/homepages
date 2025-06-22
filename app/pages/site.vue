<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

const toolSites: Array<CardProps> = [
    {
        name: '莉莉丝的中中间件汇总',
        nameAlt: 'MiddleWares',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://middlewares.su' },
            // { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/xupt-wiki/xupt-nav' },
        ],
        desc: '莉莉丝写的一点点中间件',
    },
]
</script>

<template>
    <ZTitle>工具类站点</ZTitle>
    <ZCardList :data-list="toolSites" />
    <!-- <ZTitle>组织门户</ZTitle>
    <ZCardList :data-list="orgSites" /> -->
</template>

<style lang="scss" scoped>
</style>
