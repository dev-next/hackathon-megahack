<template>
  <div>
    <q-page class="q-pa-md">
      <h2>Adicionar Catálogo</h2>

      <q-form @submit="saveItem">
        <q-input
         label="Nome"
         v-model="catalogue.name"
         :rules="[v => v.length >= 3 || 'Nome precisa ter ao menos 3 caracteres']"
        />

        <q-input
         label="Nome único (url/link)"
         v-model="catalogue.slug"
         :rules="[() => validate || 'Este nome já existe. Escolha outro']"
         :loading="loadingState"
         @blur="refecth"
         @input="refecth"
        />

        <q-input
         label="Comprador"
         v-model="catalogue.customer"
        />

        <div v-if="errorMsg" class="error-message q-mt-sm text-negative">
          {{ errorMsg }}
        </div>

        <q-btn
          class="q-mt-lg btn-submit-product"
          color="primary"
          type="submit"
          size="lg"
          fill
          :disabled="isLoading"
        >
          Adicionar
        </q-btn>
      </q-form>
    </q-page>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { validateSlug } from '../../apollo/Lists/queries';
import { createCatalogue } from '../../apollo/Lists/mutations';

export default {
  apollo: {
    validate: {
      query: validateSlug,
      variables() {
        return {
          slug: this.catalogue.slug,
        }
      },
      update: (data) => data.validateSlug,
    },
  },

  components: {

  },

  data: () => ({
    catalogue: {
      name: '',
      slug: '',
      items: [],
      customer: '',
    },

    validate: false,

    loadingState: false,
    isLoading: false,
    errorMsg: null,
  }),

  computed: {
    ...mapState(['loggedUser']),
  },

  methods: {
    refecth() {
      return this.$apollo.queries.validate.refetch();
    },

    async saveItem() {
      /*try {
        this.isLoading = true;
        this.errorMsg = null;

        const savedItem = {
          ...this.product,
          value: this.product.value / 100,
        };

        const { data } = await this.$apollo.mutate({
          mutation: createItem,
          variables: {
            item: savedItem,
            store: this.loggedUser.stores[0].id,
            createdBy: this.loggedUser.id,
          },
        });

        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        this.$q.notify({
          type: 'positive',
          message: 'Produto salvo com sucesso!',
        });
        this.resetForm();
      } catch (err) {
        this.errorMsg = err.message.replace(/GraphQL error:/, '');
      } finally {
        this.isLoading = false;
      }*/
    },

    resetForm() {
      this.catalogue = {
        name: '',
        slug: '',
        items: [],
        seller: '',
        customer: '',
      };
    },
  },
};
</script>

<style scoped lang="scss">
  .btn-submit-product {
    width: 100%;
  }
  .error-message {
    font-size: 0.8rem;
  }
</style>
