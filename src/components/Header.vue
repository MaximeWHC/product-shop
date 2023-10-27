/* eslint-disable no-console, no-alert */
<template>
    <div class="bg-primary">
        <div style="padding: 0 10%">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                :ellipsis="false"
                background-color="#455fff"
                text-color="#fff"
                active-text-color="#ffd04b"
                @select="handleSelect"
            >
                <el-menu-item><strong>Emazon</strong></el-menu-item>
                <div style="flex-grow: 1" />
                <el-menu-item index="/home">Livres</el-menu-item>
                <el-menu-item index="/shopping">
                    Panier <span class="shopcar-num">{{ shopnum }}</span>
                </el-menu-item>
                <el-menu-item index="/contact">Contact</el-menu-item>
                <el-sub-menu>
                    <template #title>admin</template>
                    <el-menu-item index="/">
                        <el-icon> <SwitchButton /> </el-icon>Se déconnecter</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  props: ['active'],
  watch: {
    active: {
      handler (newVal) {
        this.activeIndex = newVal
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    ...mapState({
      shopnum: (state) => state.shopcar.shopnum
    })
  },
  data () {
    return {
      activeIndex: '0'
    }
  },
  methods: {
    handleSelect (index) {
      this.$router.push({ path: index }).catch((error) => error)
    }
  }
}
</script>

<style scoped lang="scss">
.el-menu--horizontal {
    border-bottom: solid 0px var(--el-menu-border-color);
}

.shopcar-num {
    width: 10px;
    height: 10px;
    line-height: 10px;
    background-color: red;
    padding: 6px;
    border-radius: 50%;
    margin-left: 5px;
}
</style>
