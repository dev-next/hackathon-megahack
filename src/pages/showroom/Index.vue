<template>
  <div class="q-pa-md showroom-index" v-if="catalogue">
    <s-product
      v-for="p in catalogue.items"
      :key="p.id"
      v-bind="p"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import sProduct from '../../components/Showroom/Product.vue';
import { catalogueBySlug } from '../../apollo/Showroom/queries';

export default {
  components: {
    sProduct,
  },

  async mounted() {
    if (this.catalogue.id) return;
    try {
      if (this.$route.params.id.length < 5) throw new Error('Invalid Slug');
      const { data: { catalogueBySlug: catalogue } } = await this.$apollo.query({
        query: catalogueBySlug,
        variables: {
          slug: this.$route.params.id,
        },
      });
      if (!catalogue) throw new Error('Invalid Slug');
      this.SAVE_CATALOGUE(catalogue);
    } catch (e) {
      this.$router.push('/v/Erro');
    }
  },

  computed: {
    ...mapState('showroom', ['catalogue']),
  },

  methods: {
    ...mapMutations('showroom', ['SAVE_CATALOGUE']),
  },
};
</script>

<style scoped lang="scss">
</style>
