import resources from '~/plugins/utils/resourse.js'

export default function({ $axios, redirect }, inject) {
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
    // console.log('Making request to ' + config.url)
  })
  // response interceptor
  $axios.interceptors.response.use(
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    // response => {
    //   const res = response.data
    //   if (response.status === 200) {
    //     if (res.status?.code && (res.status?.code != 1 && res.status?.code !=2)) {
    //       throw { response: {status: 500, code: res.status.code} };
    //     }
    //     return res
    //   } else {
    //     redirect('/404')
    //     // if the custom code is not 200, it is judged as an error.
    //   }
    //   return Promise.reject(new Error(res.msg || 'Error'))
    // },
    // error => {
    //   console.log('err' + error) // for debug
    //   return Promise.reject(error)
    // }
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
    console.error( 'Please make sure $axios module is added');
  } else {
    const newResources = resources($axios)
    inject('resources', newResources('https://vue-lessons-api.herokuapp.com'))
  }
}