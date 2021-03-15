import { editor } from '~/plugins/utils/edit-api'

export default $axios => resource => ({
  Photo: { // 主页选择线路
    list: () => $axios.get(`${resource}/photo/list` || ''),
  },
  Courses: {
    list: (id = "list") => $axios.get(`${resource}/courses/${id}` || ''),
  }
})