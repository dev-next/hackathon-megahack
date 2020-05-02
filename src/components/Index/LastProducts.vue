<template>
  <div>
    <span class="card-title">Produtos</span>
    <span class="card-subtitle">Últimos Cadastrados</span>
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
                    {{ p.description }}
                  </div>
                </div>
            </td>
            <td class="col-total">
              {{ p.price | moneyNum }}
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        // eslint-disable-next-line no-bitwise
        id: ~~(Math.random() * 1000),
        description: 'Vassoura',
        price: 19.99,
      },
      {
        // eslint-disable-next-line no-bitwise
        id: ~~(Math.random() * 1000),
        description: 'Cesto de Lixo',
        price: 29.99,
      },
      {
        // eslint-disable-next-line no-bitwise
        id: ~~(Math.random() * 1000),
        description: 'Saco de Lixo',
        price: 9.99,
      },
    ],
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
  font-size: 1.05rem;
  text-align: right;
}
</style>
