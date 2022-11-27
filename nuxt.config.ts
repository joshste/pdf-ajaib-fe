// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss"
    ],
    typescript: {
        shim: false
    },
    app: {
        baseURL: "/pdf-ajaib-fe/"
    }
})
