<template>
  <div>
    <img src="https://cn.vuejs.org/images/logo.png" style="width:150px">
    <h1>Welcome to Your Vue.js App</h1>
    <button @click="fullscreen()">全屏截图</button>
    <button @click="startScreenshot()">开始截图</button>
    <div class="view_box">
      <img :src="imgUrl"/>
    </div>
  </div>
</template>

<script>
import screenshot from 'html-screenshot-tool'
export default {
  name: 'HelloWorld',
  data () {
    return {
      imgUrl: null
    }
  },
  methods: {
    fullscreen: function(){
      screenshot.fullscreen({
        successCallback: this.finishClip // 上传成功回调 
      })
    },
    startScreenshot: function(){
      screenshot.start({
        successCallback: this.finishClip, // 上传成功回调 
        cancelCallback: this.cancelClip // 取消截图回调 
      })
    },
    finishClip: function(val){
      this.imgUrl = val
    },
    cancelClip: function(){
      console.log('您取消了截图')
    }
  }
}
</script>

<style scoped>
button {
  background: #10b93b;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 9px;
  margin: 10px;
}
.view_box {
  border: 1px solid #ecebeb;
  background-color: #fafafa;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  padding: 20px;
}
.view_box img {
  max-width: 100%;
}
</style>