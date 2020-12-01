Vue.component("search", {
    data() {
      return {
          userSearch: '',
      }
    },
    template: `
      <form action="#" class="search-form" @submit.prevent="productsAPI.filter(userSearch)">
          <input type="text" class="search-field" v-model="userSearch">
          <button class="btn-search" type="submit">
              <i class="fas fa-search"></i>
          </button>
      </form>
      `,
    mounted() {
    this.productsAPI = this.$root.$refs.products; // добираемся до компонента корзины, чтобы далее использовать метод добавления
    },
  });