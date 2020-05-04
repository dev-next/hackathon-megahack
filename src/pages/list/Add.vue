<template>
  <div>
    <q-page class="q-pa-md">
      <h2>Adicionar Lista</h2>

      <q-form @submit="saveList">
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
         @blur="formatText"
         @input="formatText"
        />

        <q-select
          v-model="catalogue.customer"
          label="Comprador/Cliente"
          :options="userOptions"
        />

        <q-select
          v-model="catalogue.items"
          label="Itens"
          :options="itemOptions"
          multiple
          class="q-mt-md"
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
  import { items, users, validateSlug } from '../../apollo/Lists/queries';
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

    users: {
      query: users,
      variables() {
        return {
          where: {
            type: 'CUSTOMER',
          },
        };
      },
      update: (data) => data.users,
    },

    items: {
      query: items,
      update: (data) => data.items,
    },
  },

  data: () => ({
    catalogue: {
      name: '',
      slug: '',
      items: [],
      customer: '',
    },

    validate: false,
    users: [],
    items: [],

    loadingState: false,
    isLoading: false,
    errorMsg: null,
  }),

  computed: {
    ...mapState(['loggedUser']),

    userOptions() {
      return this.users && this.users.length
        ? this.users.map(user => ({
          label: user.name,
          value: user.id,
        }))
        : [];
    },

    itemOptions() {
      return this.items && this.items.length
        ? this.items.map(item => ({
          label: item.name,
          value: item.id,
        }))
        : [];
    },
  },

  methods: {
    refetch() {
      return this.$apollo.queries.validate.refetch();
    },

    formatText() {
      this.catalogue.slug = this.replaceDiacritics(this.catalogue.slug.toLowerCase())
        .replace(/ .+/g, '-')
        .replace(/[\W ]+/g, '-');

      return this.refetch();
    },

    replaceDiacritics(text){
      let newText = '';

      const diacritics =[
        /[\300-\306]/g, /[\340-\346]/g,  // A, a
        /[\310-\313]/g, /[\350-\353]/g,  // E, e
        /[\314-\317]/g, /[\354-\357]/g,  // I, i
        /[\322-\330]/g, /[\362-\370]/g,  // O, o
        /[\331-\334]/g, /[\371-\374]/g,  // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
      ];

      const chars = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

      for (let i = 0; i < diacritics.length; i++) {
        newText = text.replace(diacritics[i],chars[i]);
      }

      return(newText);
    },

    async saveList() {
      try {
        this.isLoading = true;
        this.errorMsg = null;

        const catalogue = {
          ...this.catalogue,
          items: this.catalogue.items && this.catalogue.items.length
            ? this.catalogue.items.map(item => item.value) : [],
          seller: this.loggedUser.id,
          customer: this.catalogue.customer ? this.catalogue.customer.value : '',
        };

        const { data } = await this.$apollo.mutate({
          mutation: createCatalogue,
          variables: {
            catalogue,
          },
        });

        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        this.$q.notify({
          type: 'positive',
          message: 'Lista salva com sucesso!',
        });

        this.resetForm();

        return this.$router.push('/');
      } catch (err) {
        this.errorMsg = err.message.replace(/GraphQL error:/, '');
      } finally {
        this.isLoading = false;
      }
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
