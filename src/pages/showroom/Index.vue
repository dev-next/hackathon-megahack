<template>
  <div class="q-pa-md showroom-index">
    <s-product
      v-for="p in products"
      :key="p.id"
      v-bind="p"
    />
  </div>
</template>

<script>
import sProduct from '../../components/Showroom/Product.vue';

export default {
  components: {
    sProduct,
  },

  data: () => ({
    products: [
      {
        id: '1',
        url: 'https://via.placeholder.com/500',
        name: 'Nome do Produto',
        price: 79.99,
      },
      {
        id: '2',
        url: 'https://via.placeholder.com/500',
        name: 'Nome do Produto',
        price: 79.99,
      },
      {
        id: '3',
        url: 'https://via.placeholder.com/500',
        name: 'Nome do Produto',
        price: 79.99,
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
</style>
