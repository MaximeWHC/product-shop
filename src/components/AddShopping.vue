/* eslint-disable no-console, no-alert */
<template>
  <div @click="clickEvent(Active)">
      <div v-if="Active == '0'">
          <el-tooltip content="Ajouter au panier" placement="bottom">
              <el-button type="primary" icon="" size="small" round
                  ><el-icon size="14"><ShoppingCartFull /></el-icon
              ></el-button>
          </el-tooltip>
      </div>
      <div v-else>
          <el-button type="primary" size="small" round plain>
              <span class="f-12">Ajouté</span>
          </el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AddShopping',
  props: ['active'],
  watch: {
    active: {
      handler (newVal) {
        this.Active = newVal
      },
      immediate: true,
      deep: true
    }
  },
  data () {
    return {
      Active: 0 // // 0 pour l'état d'adhésion  1 pour Etat joint
    }
  },
  methods: {
    clickEvent (data) {
      if (data == 1) {
        this.Active = 0
        this.$emit('nojoin', true)
      } else {
        this.Active = 1
        this.$emit('join', true)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.demo-tabs {
  width: 100%;
}
</style>
