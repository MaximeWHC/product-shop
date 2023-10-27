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
      tabs: ['Toutes les catégories', 'Histoire', 'Psychologie', 'Philosophie', 'Parentalité', 'Classique', 'Droit', 'Photographie', 'Littérature', 'Biographie', 'Enfants', 'Internet', 'Architecture', 'Finance', 'Actions', 'Investissements']
    }
  }
}
</script>

<style scoped lang="scss">
.demo-tabs {
    width: 100%;
}
</style>
