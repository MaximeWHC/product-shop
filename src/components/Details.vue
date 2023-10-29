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
            <div class="flex-c flex-jc-sb flex-ai-l" style="height: 160px; text-align: left; margin-left: 20px" >
                <div>
                    <span>Nom du livre: </span><span>{{ Name }}</span>
                </div>
                <div>
                    <span>Auteur: </span><span>{{ Auth }}</span>
                </div>
                <div>
                    <span>Prix: </span><span class="c-red f-b">{{ Price }} €</span>
                </div>
                <div>
                    <span>Stock: </span><span>{{ Numbers }}</span>
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
    window.addEventListener('resize', this.getwindowinfo) // Register Listener - Détecter la largeur et la hauteur de la page du navigateur en temps réel
    this.getwindowinfo()
  }
}
</script>

<style scoped lang="scss">
.demo-tabs {
    width: 100%;
}
</style>
