// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
    name: '莉莉丝',
    avatar: 'https://files.pysio.blog/fediverse/f/abd3fc24-d9d4-4e33-a08e-7b192d281f76.webp',
    email: 'me@lilithya.su',
    homepage: 'https://www.lilithya.su/',
}

const homepageConfig = {
    title: 'Lilith (@Lilith-Me)',
    subtitle: '依然凝视着这片繁星之野。',
    description: '在无声的夜色中，静候星光的低语',
    author,
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    favicon: '/icon.webp',
    url: 'https://www.lilithya.su/',
    blogAtom: 'https://blog.lilithya.su/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules = <NitroConfig['routeRules']>{
    '/api/avatar.png': { redirect: author.avatar },
    '/api/icon.webp': { redirect: homepageConfig.favicon },
}

export default homepageConfig
