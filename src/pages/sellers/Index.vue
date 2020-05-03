<template>
  <q-page class="q-pa-md">
    <h2>Vendedores</h2>

    <s-list-sellers :sellers="sellers" />
  </q-page>
</template>

<script>
import { sellers } from '../../apollo/Sellers/queries';
import sListSellers from '../../components/Sellers/ListSellers.vue';

export default {
  apollo: {
    sellers: {
      query: sellers,
    },
  },

  components: {
    sListSellers,
  },

  data: () => ({
    sellers: [],
  }),
};
</script>

<style scoped lang="scss">
</style>
