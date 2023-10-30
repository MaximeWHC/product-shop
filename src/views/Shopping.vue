/* eslint-disable no-console, no-alert */
<template>
    <div>
        <el-affix :offset="0">
            <Header :active="'/shopping'" />
        </el-affix>
    </div>
    <div style="padding: 0 10%">
        <div class="bg-white p-20" style="text-align: left; min-height: 80vh">
            <div class="m-b-20">
                <span><h3>Panier</h3></span>
            </div>
            <el-table :data="shopbooks" border style="width: 100%" :header-cell-style="{ background: '#F5F7FA', color: '#666' }" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" />
                <el-table-column type="index" label="Nombre d'ordre" width="80" />
                <el-table-column prop="image" label="Livres" width="140">
                    <template #default="scope">
                        <div>
                            <el-image
                                style="width: 100px"
                                :src="require('@/assets/imgs/cardbooks/' + scope.row.image + '')"
                                :preview-src-list="[require('@/assets/imgs/cardbooks/' + scope.row.image + '')]"
                                :z-index="9999"
                                hide-on-click-modal
                                preview-teleported
                                close-on-press-escape
                            />
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="shopinfo" label="Information du livre" width="180">
                    <template #default="scope">
                        <div>
                            <div>
                                <span>Nom du livre:</span><span>{{ scope.row.name }}</span>
                            </div>
                            <div>
                                <span>Auteur:</span><span>{{ scope.row.auth }}</span>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="price" label="Prix" min-width="120">
                    <template #default="scope">
                        <div>
                            <span>{{ scope.row.price }} €</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="num" label="Quantité" min-width="180">
                    <template #default="scope">
                        <div>
                            <el-input-number v-model="scope.row.num" size="large" :min="1" @change="(data) => handleChange(data, scope.row)" style="width: 100%" />
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="sum" label="Total" min-width="120">
                    <template #default="scope">
                        <div>{{ parseFloat((parseInt(scope.row.price * 100) / 100) * scope.row.num).toFixed(2) }} €</div>
                    </template>
                </el-table-column>
                <el-table-column prop="caozuo" label="Opération" min-width="140">
                    <template #default="scope">
                        <div>
                            <el-button type="primary" @click="shopInfoEvent(scope.row)">Détails</el-button>
                            <el-button type="danger" icon="Delete" @click="delEvent(scope.$index)"></el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="w-100 flex-r flex-jc-r flex-ai-c m-t-20 end-sum">
                <div class="c-gray">
                    <span class="c-red">{{ number }}</span><span> article(s) </span><span>choisi(s)</span>
                </div>
                <div>
                    <span>Montant total: </span><span class="c-red f-b f-16">{{ money }} €</span>
                </div>
                <div><el-button type="danger" size="large" style="width: 100px" :disabled="shopnum == 0">Acheter</el-button></div>
            </div>

            
            <div>
                <Dialog :dialog="dialogVisible" :title="taninfo.Name" v-on:handleClose="handleClose">
                    <template v-slot:content>
                        <div>
                            <Details :image="taninfo.Image" :name="taninfo.Name" :auth="taninfo.Auth" :price="taninfo.Price" :number="'150'" />
                        </div>
                    </template>
                </Dialog>
            </div>
        </div>
    </div>
    <div class="footer-box f-12 bg-primary">
        <Footer />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Shopping',
  data () {
    return {
      number: 0,
      money: '0.00',
      selectiondata: [],

      dialogVisible: false,
      taninfo: {
        Name: '',
        Image: '',
        Auth: '',
        Price: ''
      }
    }
  },
  computed: {
    ...mapState({
      shopnum: (state) => state.shopcar.shopnum,
      shopbooks: (state) => state.shopcar.shopbooks
    })
  },
  methods: {
    shopInfoEvent (data) {
      this.taninfo = {
        Name: data.name,
        Image: data.image,
        Auth: data.auth,
        Price: data.price
      }

      this.dialogVisible = true
    },
    handleClose (done) {
      done()
      this.dialogVisible = false
    },
    delEvent (index) {
      this.shopbooks.splice(index, 1)
      this.$store.dispatch('shopcar/revise_shopnum', this.shopbooks.length)
      this.$store.dispatch('shopcar/revise_shopbooks', this.shopbooks)
    },
    handleChange (num, data) {
      if (this.selectiondata.length > 0) {
        this.selectiondata.map((n) => {
          if (n.id == data.id) {
            n = data
          }

          return n
        })

        this.handleSelectionChange(this.selectiondata)
      }
    },

    handleSelectionChange (data) {
      this.selectiondata = data

      if (data.length > 0) {
        this.number = eval(
          data
            .map((n) => {
              return n.num
            })
            .join('+')
        )

        this.money = eval(
          data
            .map((n) => {
              return parseFloat((parseInt(n.price * 100) / 100) * n.num).toFixed(2)
            })
            .join('+')
        ).toFixed(2)
      } else {
        this.number = 0
        this.money = '0.00'
      }
    }
  }
}
</script>

<style lang="scss">
body {
    background-color: #cacaca55;
}

.footer-box {
    height: 40px;
    line-height: 40px;
    color: #ffffff;
}

.end-sum {
    gap: 40px;
}
</style>
