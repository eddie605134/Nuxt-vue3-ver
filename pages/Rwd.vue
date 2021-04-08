<template lang="">
  <div :style="{color: GetColor}">
    Rwd
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(['GetColor'])
  }
}
</script>
<style lang="scss" scoped>
  
</style>