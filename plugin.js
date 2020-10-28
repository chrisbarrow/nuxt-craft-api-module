export default function(context, inject) {
  const options = JSON.parse('<%= JSON.stringify(options) %>')
  const { url, namespace } = options

  inject(namespace, {
    get: (slug) => {
      const { $http, $preview } = context
      const token = $preview ? `?token=${$preview.token}` : ''
      return $http.$get(`${url}${slug}.json${token}`)
    }
  })
}
