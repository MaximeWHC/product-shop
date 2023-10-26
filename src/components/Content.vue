/* eslint-disable no-console, no-alert */
<template>
    <div style="padding: 0 10%">
        <div class="bg-white p-20">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane v-for="(item, index) in tabs" :key="index" :label="item" :name="index">
                    <div>
                        <slot name="content"></slot>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      activeName: 0,
      tabs: ['全部分类', '历史', '心理学', '哲学', '亲子', '古典', '法律', '摄影', '文艺', '传记', '儿童', '网络', '建筑', '金融', '股票', '投资理财']
    }
  }
}
</script>

<style scoped lang="scss">
.demo-tabs {
    width: 100%;
}
</style>
