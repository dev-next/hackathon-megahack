<template>
  <div>
    <span class="card-title" v-if="isIndex">Produtos</span>
    <span v-if="isIndex" class="card-subtitle">Últimos Cadastrados</span>
    <q-card>
      <q-markup-table>
        <tbody>
          <tr v-for="p in products" :key="p.id">
            <td>
                <div class="col-image">
                  <q-img
                    src="https://via.placeholder.com/50"
                    :alt="p.description"
                    class="rounded-borders"
                    style="height: 50px; width: 50px"
                  />
                  <div class="col-descripion q-ml-sm">
                    {{ p.name }}
                  </div>
                </div>
            </td>
            <td class="col-total">
              {{ p.value | moneyNum }}
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: [Array, Object],
    },
    isIndex: {
      type: Boolean,
    },
  },

  data: () => ({
  }),
};
</script>

<style scoped lang="scss">
.card-title {
  font-size: 1.2rem;
  display: block;
  color: $grey-8;
}

.card-subtitle {
  display: block;
  margin-bottom: 12px;
  color: $grey-6;
}

.col-image {
  margin-top: 5px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  .col-descripion {
    font-size: 1rem;
    color: $grey-9;
  }
}

.col-total {
  font-size: 0.75rem;
  text-align: right;
}
</style>
