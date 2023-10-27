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
    // Obtenir les informations sur la page de la fenêtre en cours - modifier la largeur de la fenêtre popup en temps réel.
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
    window.addEventListener('resize', this.getwindowinfo)
    this.getwindowinfo()
  }
}
</script>

<style scoped lang="scss">
.demo-tabs {
    width: 100%;
}
</style>
