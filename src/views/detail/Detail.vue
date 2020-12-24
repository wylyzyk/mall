<template>
  <div id="detail">
    <detail-navbar></detail-navbar>
  </div>
</template>
<script>
import DetailNavbar from './childComponents/DetailNavbar'

export default {
  name: "Detail",
  components: {
    DetailNavbar
  },
  data () {
    return {
      iid: null
    }
  },
  created () {
    console.log(this.$route);
    this.iid = this.$route.params.iid;
  }
}
</script>
<style scoped>
</style>