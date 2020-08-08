<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hello: 'Hello world！',
      requestData: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('/demo/get/1')
        .then(res => {
          this.requestData = res && res.data
          alert(res.data && JSON.stringify(res.data))
        })
        .catch(err => {
          console.error((err && err.message) || '请求错误！')
        })
    }
  }
}
</script>
