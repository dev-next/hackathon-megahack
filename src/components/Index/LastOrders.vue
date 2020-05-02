<template>
  <div>
    <span class="card-title">Últimos Pedidos</span>
    <q-card>
      <q-markup-table>
        <tbody>
          <tr v-for="o in orders" :key="o.number">
            <td>
              <div class="col-order-number">
                # {{ o.number }}
              </div>
              <div class="col-date">
                {{ o.date| dateObj }}
              </div>
            </td>
            <td class="col-total">
              {{ o.total | moneyNum }}
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
    orders: [
      {
        // eslint-disable-next-line no-bitwise
        number: ~~(Math.random() * 1000),
        date: new Date(),
        total: 299.99,
      },
      {
        // eslint-disable-next-line no-bitwise
        number: ~~(Math.random() * 1000),
        date: new Date(),
        total: 199.99,
      },
      {
        // eslint-disable-next-line no-bitwise
        number: ~~(Math.random() * 1000),
        date: new Date(),
        total: 199.99,
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

.col-order-number {
  font-size: 1rem;
  color: $primary;
  font-weight: bold;
}
.col-total {
  font-size: 1.05rem;
  text-align: right;
}
</style>
