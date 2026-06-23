import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',

    title: 'NovaBlog',

    description: 'Java Backend Blog',

    themeConfig: {

        nav: [

            { text: '首页', link: '/' },

            { text: 'Java', link: '/java/' },

            { text: '算法', link: '/algorithm/' },

            { text: '项目', link: '/project/' },

            { text: '关于', link: '/about/' }

        ],

        socialLinks: [

            {

                icon: 'github',

                link: 'https://github.com/xq945'

            }

        ]

    }

})