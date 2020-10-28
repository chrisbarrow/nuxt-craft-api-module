# nuxt-craft-api-module

Requires @nuxt/http

Assumes use of [Element API](https://github.com/craftcms/element-api), just pass in the slug. Handles preview mode using craft preview tokens for static Nuxt builds

**nuxt.config.js**

    {
      modules: ['@nuxt/http', '@archivestudio/craft-api'],
      craftApi: {
        url: 'http://api/address/'
      }
    }

**use**

    async fetch(){
      this.entry = this.$craftApi.get(slug)
    }
