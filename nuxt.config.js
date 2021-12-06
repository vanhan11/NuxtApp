module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'fluterrapp',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */

        // FOR GET API
        // modules:[
        //     '@nuxtjs/axios',
        //     '@nuxtjs/auth',
        // ],
        // plugins:[
        //     '@/plugins/axios.js'
        // ],

        buildModules: [
            // Simple usage
            '@nuxtjs/vuetify',

            // With options
            ['@nuxtjs/vuetify', { /* module options */ }]
        ],
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
export default {
    modules: [
      '@nuxtjs/axios'
    ],
  
    axios: {
      baseURL: 'http://localhost:4000', // Used as fallback if no runtime config is provided
    },
  
    publicRuntimeConfig: {
      axios: {
        browserBaseURL: process.env.BROWSER_BASE_URL
      }
    },
  
    privateRuntimeConfig: {
      axios: {
        baseURL: process.env.BASE_URL
      }
    },
  }
  