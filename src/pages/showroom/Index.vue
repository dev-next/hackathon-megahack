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
        name: 'Vassoura',
        price: 19.99,
        fields: [
          { label: 'Cores', values: 'Azul, Amarelo' },
        ],
      },
      {
        id: '2',
        url: 'https://via.placeholder.com/500',
        name: 'Cesto de Lixo',
        price: 29.99,
        fields: [
          { label: 'Cores', values: 'Preto' },
          { label: 'Tamanhos', values: 'P, M, G' },
        ],
      },
      {
        id: '3',
        url: 'https://via.placeholder.com/500',
        name: 'Saco de Lixo',
        price: 9.99,
        fields: [
          { label: 'Cores', values: 'Azul, Preto' },
          { label: 'Tamanhos', values: '5L, 15L, 50L' },
        ],
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
</style>
