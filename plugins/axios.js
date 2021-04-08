import resources from '~/plugins/utils/resourse.js'

export default function ({ $axios, redirect }, inject) {
  // request interceptor
  $axios.interceptors.request.use(
    config => {
      // do something before request is sent
      return config
    },
    error => {
      // do something with request error
      return Promise.reject(error)
    }
  )
  $axios.onRequest(config => {

  })

  $axios.interceptors.response.use(
    response => {

    }
  )
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      redirect('/404')
    } else if (code === 500) {
      // redirect('/500')
      // redirect('/error')
    }
  })
  if (!$axios) {
    console.error('Please make sure $axios module is added');
  } else {
    const newResources = resources($axios)
    inject('resources', newResources('https://vue-lessons-api.herokuapp.com'))
  }
}