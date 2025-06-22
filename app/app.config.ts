import type { Nav } from '~/types/nav'
import homepageConfig from '~~/homepage.config'

// 图标查询：https://yesicon.app/ph
// 图标插件：https://marketplace.visualstudio.com/items?itemName=antfu.iconify

export default defineAppConfig({
    ...homepageConfig,

    footer: {
        copyright: `© ${new Date().getFullYear()} Lilith`,
        message: 'Build L33Z22L11/homepage-v5',
    },

    nav: [
        {
            title: '',
            items: [
                { icon: 'ph:house-duotone', text: '主页', url: '/' },
                { icon: 'ph:pen-nib-duotone', text: '文章', url: '/article' },
                // { icon: "ph:pen-nib-duotone", text: "文章", url: "https://blog.lilithya.su", external: true },
                // { icon: "ph:code-duotone", text: "项目", url: "/project" },
                { icon: 'ph:code-duotone', text: '项目', url: 'https://github.com/Lilith-Me', external: true },
                { icon: 'ph:globe-duotone', text: '站点', url: '/site' },
            ],
        },
        {
            title: '社交',
            items: [
                { icon: 'ph:github-logo-duotone', text: 'Github', url: 'https://github.com/Lilith-Me', external: true },
                { icon: 'ph:telegram-logo-duotone', text: 'Telegram', url: 'https://t.me/Lilith_AndMe', external: true },
            ],
        },
    ] satisfies Nav,

    themes: {
        light: {
            icon: 'ph:sun-duotone',
            tip: '浅色模式',
        },
        system: {
            icon: 'ph:monitor-duotone',
            tip: '跟随系统',
        },
        dark: {
            icon: 'ph:moon-duotone',
            tip: '深色模式',
        },
    },
})
