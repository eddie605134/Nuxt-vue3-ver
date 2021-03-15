<template lang="">
  <div class="aaa" @click="">
    <div v-if="$fetchState.pending">Loading...</div>
    <div v-if="$fetchState.error"> {{ $fetchState.error }} </div>
    <button @click="openLoading">按我</button>
    <img
      v-for="item in data"
      :key="item.url"
      :src="item.url" 
      :alt="item.url">
  </div>
</template>
<script>
import axios from "axios";
export default {
  head: {
    title: 'About page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  },
  async asyncData({$resources}) {
    const { data } = await $resources.Photo.list();
    const courseData  = await $resources.Courses.list(419);
    console.log(courseData.data.data[0]);
    return { data }
  },
  activated() {
    //超過N秒重打打fetch
    if (this.$fetchState.timestamp <= Date.now() - 3000) {
      this.$fetch()
    }
  },
  async fetch () {
    // const { data } = await axios.get('https://vue-lessons-api.herokuapp.com/photo/list')
    // this.data = data
    // console.log(data);
    // try {
    //   const { data } = await axios.get('https://vue-lessons-api.herokuapp.com/photo/list?status=error')
    //   this.data = data
    // } catch (error) {
    //   console.log(error);
    // }
  },
  data () {
    return {
      age: '18',
      data: []
    }
  },
  mounted () {
    this.$demoTest.log(4564564564564564564);
  },
  methods: {
    openLoading () {
      this.$nuxt.$loading.start();
    }
  }
}
</script>
<style lang="scss">
  .aaa {
    /* color: aqua; */
  }
</style>