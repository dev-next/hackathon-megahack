<template>
  <div>
    <span class="card-title">Listas Personalizadas</span>
    <q-card>
      <q-markup-table>
        <tbody>
          <tr v-for="l in lists" :key="l.number">
            <td>
              <div class="col-description">{{ l.description }}</div>
              <div class="col-seller">Vendedor: {{ l.seller }}</div>
            </td>
            <td class="col-total">
              <div class="col-items">{{ l.itemQuantity }} itens</div>
              <div>{{ l.date | dateObj }}</div>
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
    lists: [
      {
        // eslint-disable-next-line no-bitwise
        number: ~~(Math.random() * 1000),
        // eslint-disable-next-line no-bitwise
        itemQuantity: ~~(Math.random() * 100),
        date: new Date(),
        description: 'Promoção Dia das Mães',
        total: 299.99,
        seller: 'Júlia',
      },
      {
        // eslint-disable-next-line no-bitwise
        number: ~~(Math.random() * 1000),
        // eslint-disable-next-line no-bitwise
        itemQuantity: ~~(Math.random() * 100),
        date: new Date(),
        description: 'Lista Lúcia - Lavanderia',
        total: 299.99,
        seller: 'Júlia',
      },
      {
        // eslint-disable-next-line no-bitwise
        number: ~~(Math.random() * 1000),
        // eslint-disable-next-line no-bitwise
        itemQuantity: ~~(Math.random() * 100),
        date: new Date(),
        description: 'Lista Carta - Churrasco',
        total: 299.99,
        seller: 'Matheus',
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.card-title {
  font-size: 1.2rem;
  margin-bottom: 12px;
  display: block;
  color: $grey-8;
}

.col-total {
  text-align: right;
}
.col-description {
  font-size: 1rem;
  color: $primary;
  font-weight: bold;
}
.col-seller {
  color: $grey-8
}
.col-items {
  font-size: 0.9rem;
  font-weight: bold;
}
</style>
