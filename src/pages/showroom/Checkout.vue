<template>
  <div class="q-pa-md checkout-page">
      <div class="checkout-title q-mb-sm">Resumo</div>
      <div class="checkout-subtitle">PARABÉNS, PEDIDO FEITO COM SUCESSO</div>
      <div class="checkout-info q-mt-md">
        O vendedor <span class="text-weight-bold">{{ seller.name }}</span>
        foi avisado sobre o seu pedido e
        entrará em contato o mais rapido possível com os detalhes da sua
        compra.
      </div>
      <q-card class="q-mt-lg">
        <q-card-section>
          <div class="text-weight-bold q-mb-sm">PEDIDO Nº 52117</div>
          <q-list>
            <q-item v-for="c in cart" :key="c.id">
              <q-item-section>{{ c.name }}</q-item-section>
            </q-item>
          </q-list>

          <div class="text-weight-bold q-mt-sm">Entrega: </div>
          <div class="checkout-delivery">
            05/05/2020 das 8h ás 12h
          </div>
          <div class="text-weight-bold q-mt-sm">Pagamento: </div>
          <div class="checkout-delivery">
            {{ total | moneyNum }} em dinheiro
          </div>
        </q-card-section>
      </q-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    checkoutOption: '',
    seller: {
      name: 'José',
    },
    cart: [
      {
        id: '1',
        url: 'https://via.placeholder.com/500',
        name: 'Nome do Produto',
        price: 79.99,
        quantity: 2,
      },
      {
        id: '2',
        url: 'https://via.placeholder.com/500',
        name: 'Nome do Produto',
        price: 79.99,
        quantity: 1,
      },
      {
        id: '3',
        url: 'https://via.placeholder.com/500',
        name: 'Nome do Produto',
        price: 79.99,
        quantity: 3,
      },
    ],
  }),

  computed: {
    total() {
      return this.cart.reduce((t, d) => t + d.price, 5);
    },
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>
.checkout-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.checkout-title {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}
.checkout-info {
  text-align: center;
}
.checkout-subtitle {
  text-align: center;
  span {
    font-weight: bold;
  }
}
.checkout-option {
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
}
.separator {
  border: 1px solid $grey-3;
  width: calc(100vw - 36px);
}
</style>
