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
    },

    runtimeConfig: {
        public: {
            BASE_URL: process.env.NODE_ENV==="production"?"https://pdf-ajaib.fly.dev/":
            "http://localhost:8080/"
        }
    }
})
