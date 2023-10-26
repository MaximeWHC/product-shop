/* eslint-disable no-console, no-alert */
<template>
    <div>
        <div class="flex-r flex-jc-l flex-ai-c" style="height: 180px">
            <div>
                <el-image
                    style="height: 180px"
                    :src="require('@/assets/imgs/cardbooks/' + Image + '')"
                    :preview-src-list="[require('@/assets/imgs/cardbooks/' + Image + '')]"
                    :z-index="9999"
                    hide-on-click-modal
                    preview-teleported
                    close-on-press-escape
                />
            </div>
            <div class="flex-c flex-jc-sb flex-ai-l" style="height: 160px; text-align: left">
                <div>
                    <span>书名：</span><span>{{ Name }}</span>
                </div>
                <div>
                    <span>作者：</span><span>{{ Auth }}</span>
                </div>
                <div>
                    <span>价格：</span><span class="c-red f-b">￥ {{ Price }}</span>
                </div>
                <div>
                    <span>库存：</span><span>{{ Numbers }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Details',
  props: ['image', 'name', 'auth', 'price', 'number'],
  data () {
    return {}
  },
  computed: {
    Image () {
      return this.image
    },
    Name () {
      return this.name
    },
    Auth () {
      return this.auth
    },
    Price () {
      return this.price
    },
    Numbers () {
      return this.number
    }
  },
  methods: {
    handleClose (done) {
      done()
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
