<template>
  <div>
    <q-page class="q-pa-md">
      <h2>Adicionar novo Produto</h2>

      <q-form @submit="saveItem">
        <q-input
         label="Nome"
         v-model="product.name"
         :rules="[v => v.length >= 3 || 'Nome precisa ter ao menos 3 caracteres']"
        />
        <q-input
         label="Descrição"
         v-model="product.description"
         type="textarea"
        />
        <q-input
          label="Preço"
          v-model="product.value"
          mask="#,##"
          fill-mask="0"
          input-class="text-right"
          unmasked-value
          reverse-fill-mask
          :rules="[v => !!v || 'Preço nao pode ser vazio']"
        />
        <p-product-tags
          :defaultOptions="tagsOptions"
          label="Tags"
          v-model="product.tags"
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
import pProductTags from '../../components/Products/productTags.vue';
import { createItem } from '../../apollo/Products/mutations';

export default {
  components: {
    pProductTags,
  },

  data: () => ({
    tags: [],
    tagsOptions: [],
    product: {
      name: '',
      description: '',
      value: 0,
      tags: [],
    },
    isLoading: false,
    errorMsg: null,
  }),

  computed: {
    ...mapState(['loggedUser']),
  },

  methods: {
    async saveItem() {
      try {
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
      }
    },

    resetForm() {
      this.product = {
        name: '',
        description: '',
        value: 0,
        tags: [],
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
