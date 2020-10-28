# nuxt-craft-api-module

:warning: Requires @nuxt/http

Assumes use of [Element API](https://github.com/craftcms/element-api), just pass in the slug. Handles preview mode using craft preview tokens for static Nuxt builds

**install**

    yarn add https://github.com/chrisbarrow/nuxt-craft-api-module

**nuxt.config.js**

    {
      modules: ['@nuxt/http', '@archivestudio/craft-api'],
      craftApi: {
        url: 'http://api/address/'
      }
    }

**use**

    async fetch(){
      this.entry = await this.$craftApi.get(slug)
    }
