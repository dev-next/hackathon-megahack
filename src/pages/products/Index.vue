<template>
    <q-page class="q-pa-md">
      <h2>Produtos</h2>

      <i-products-list
        :products="items"
      />
    </q-page>
</template>

<script>
import iProductsList from '../../components/Index/LastProducts.vue';
import { items } from '../../apollo/Products/queries';

export default {
  apollo: {
    items,
  },
  components: {
    iProductsList,
  },
  data: () => ({
    items,
  }),
};
</script>

<style scoped lang="scss">
  h2 {
    color: $grey-6;
    font-size: 1.5rem;
    line-height: 2rem;
  }
</style>
