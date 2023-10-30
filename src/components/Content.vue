/* eslint-disable no-console, no-alert */
<template>
  <div style="padding: 0 10%">
    <div class="bg-white p-20">
      <el-tabs v-model="selectedCategory" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane
        v-for="cat in categories"
        :key="cat"
        :label="cat"
        :name="cat"
        >
        <div  class="content-slot">
            <div v-for="(item, index) in filterBooksByCategory(cat)" :key="index">
            <CardBooks :id="item.id" :image="item.image" :name="item.name" :auth="item.auth" :price="item.price"
                :priceold="item.priceold" :active="item.active" />
        </div>

            <slot name="content" ></slot>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import booksjson from '@/assets/json/books.json'
export default {
  name: "Content",
  data() {
    return {
      books: booksjson,
      selectedCategory: 'Toutes les catégories',
        categories: [
        "Toutes les catégories",
        "Histoire",
        "Suspense",
        "Sport",
        "Cuisine",
        "Anime",
        "Droit",
        "Art",
        "Littérature",
        "Biographie",
        "Internet",
        "Informatique",
        "Finance",
        "Actions",
        "Investissements",
        "Voyage",
      ],
      activeName: 0,
      
      
    };
  },
  methods: {
    
    filterBooksByCategory(cat) {
        if(cat === 'Toutes les catégories') {
            return this.books;
        } else {
            return this.books.filter(book => book.category.includes(cat));
        }
    },
    handleClick(tab, event) {
        console.log(tab, event);
    }
}
  }
</script>

<style scoped lang="scss">
.demo-tabs {
  width: 100%;
}
.content-slot {
    width: 100%;
    min-height: 330px;
    gap: 30px;
    display: flex;
    flex-wrap: wrap;
    
}


</style>
