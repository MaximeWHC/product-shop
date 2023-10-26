/* eslint-disable no-console, no-alert */
<template>
    <div>
        <el-dialog v-model="dialogVisible" :title="titleVisible" :width="searchwidth" :before-close="handleClose" draggable>
            <slot name="content"></slot>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: ['dialog', 'title'],
  data () {
    return {
      dialogVisible: false,
      sreenwidth: '580px'
    }
  },
  computed: {
    dialogVisible () {
      return this.dialog
    },
    titleVisible () {
      return this.title
    }
  },
  methods: {
    handleClose (done) {
      this.$emit('handleClose', done)
    },
    // 获取当前windows页面信息-实时修改【弹窗】的宽度
    getwindowinfo () {
      this.sreenwidth = document.documentElement.clientWidth
      if (this.sreenwidth < 600) {
        this.searchwidth = this.sreenwidth * 0.8 + 'px'
      } else {
        this.searchwidth = '580px'
      }
    }
  },
  created () {
    window.addEventListener('resize', this.getwindowinfo) // 注册监听器-实时检测浏览器页面宽高
    this.getwindowinfo()
  }
}
</script>

<style scoped lang="scss">
.demo-tabs {
    width: 100%;
}
</style>
