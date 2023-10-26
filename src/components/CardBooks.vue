/* eslint-disable no-console, no-alert */
<template>
    <div class="cardbooks-box b-1 brd-4">
        <div class="p-12 f-12">
            <div class="flex-r flex-jc-c flex-ai-c">
                <div class="image-box">
                    <el-image
                        style="width: 100%"
                        :src="require('@/assets/imgs/cardbooks/' + Image + '')"
                        :preview-src-list="[require('@/assets/imgs/cardbooks/' + Image + '')]"
                        :z-index="9999"
                        hide-on-click-modal
                        preview-teleported
                        close-on-press-escape
                    />
                </div>
            </div>
            <div class="p-t-12 cardbook-text">
                <div class="no-warp name-box" @click="this.dialogVisible = true">
                    <span>{{ Name }}</span>
                </div>
                <div>
                    <span class="c-gray">{{ Auth }}</span>
                </div>
            </div>
            <div class="flex-r flex-jc-sb flex-ai-c">
                <div>
                    <span class="f-14 f-b c-red">￥{{ Price }}</span
                    >&nbsp;&nbsp;<span class="c-gray cardbook-span">￥{{ Priceold }}</span>
                </div>
                <div class="shopping c-p">
                    <AddShopping :active="Active" v-on:join="joinEvent" v-on:nojoin="nojoinEvent" />
                </div>
            </div>
        </div>

        <!-- 加弹出框-显示详情 -->
        <div>
            <Dialog :dialog="dialogVisible" :title="Name" v-on:handleClose="handleClose">
                <template v-slot:content>
                    <div>
                        <Details :image="Image" :name="Name" :auth="Auth" :price="Price" :number="'20'" />
                    </div>
                </template>
            </Dialog>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CardBooks',
  props: ['id', 'image', 'name', 'auth', 'price', 'priceold', 'active'],
  watch: {
    id: {
      handler (newVal) {
        this.Id = newVal
      },
      immediate: true,
      deep: true
    },
    image: {
      handler (newVal) {
        this.Image = newVal
      },
      immediate: true,
      deep: true
    },
    name: {
      handler (newVal) {
        this.Name = newVal
      },
      immediate: true,
      deep: true
    },
    auth: {
      handler (newVal) {
        this.Auth = newVal
      },
      immediate: true,
      deep: true
    },
    price: {
      handler (newVal) {
        this.Price = newVal
      },
      immediate: true,
      deep: true
    },
    priceold: {
      handler (newVal) {
        this.Priceold = newVal
      },
      immediate: true,
      deep: true
    },
    active: {
      handler (newVal) {
        this.Active = newVal
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    ...mapState({
      shopnum: (state) => state.shopcar.shopnum,
      shopbooks: (state) => state.shopcar.shopbooks
    })
  },
  data () {
    return {
      Id: '1',
      Image: 'cardbooks-01.jpg',
      Name: '博物馆里的大语文',
      Auth: '曲现龙',
      Price: '￥90.00',
      Priceold: '￥128.00',
      Active: '0',

      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      done()
      this.dialogVisible = false
    },
    joinEvent () {
      const data = {
        id: this.Id,
        image: this.Image,
        name: this.Name,
        auth: this.Auth,
        price: this.Price,
        priceold: this.Priceold,
        active: '1',
        num: '1'
      }

      this.shopbooks.push(data)

      this.$store.dispatch('shopcar/revise_shopnum', this.shopbooks.length)
      this.$store.dispatch('shopcar/revise_shopbooks', this.shopbooks)
    },
    nojoinEvent () {
      const newdata = this.shopbooks.filter((n) => n.id != this.Id)

      this.$store.dispatch('shopcar/revise_shopnum', newdata.length)
      this.$store.dispatch('shopcar/revise_shopbooks', newdata)
    }
  }
}
</script>

<style scoped lang="scss">
.cardbooks-box {
    height: 290px;
    min-width: 220px;
    max-width: 240px;

    .image-box {
        max-width: 180px;
    }

    .name-box {
        font-size: 14px;
        line-height: 28px;
    }
    .name-box:hover {
        cursor: pointer;
        color: var(--el-color-primary);
    }

    .cardbook-text {
        text-align: left;
        line-height: 18px;
    }

    .cardbook-span {
        text-decoration: line-through;
    }

    .shopping:hover {
        color: var(--el-color-primary);
    }
}
</style>
