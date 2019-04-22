<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      <a href="https://cli.vuejs.org" target="_blank">vue-cli documentation</a>
    </p>
    <button @click="fullscreen()">全屏截图</button>
    <button @click="startScreenshot()">开始截图</button>
  </div>
</template>

<script>
import screenshot from 'html-screenshot-tool'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    fullscreen: function(){
      let options = {
        successCallback: this.finishClip // 上传成功回调 
      }
      screenshot.fullscreen(options)
    },
    startScreenshot: function(){
      let options = {
        successCallback: this.finishClip, // 上传成功回调 
        cancelCallback: this.cancelClip // 取消截图回调 
      }
      screenshot.start(options)
    },
    finishClip: function(){
    },
    cancelClip: function(){
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
button{
  background: #10b93b;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 9px;
  margin: 10px;
}
</style>