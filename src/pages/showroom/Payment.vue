<template>
  <div class="q-pa-md payment-page">
      <div class="payment-title q-mb-md">Pagamento</div>

      <div class="cart-items">
        <q-list>
          <q-item v-for="c in cart" :key="c.id">
            <q-item-section>{{ c.name }}</q-item-section>
            <q-item-section side>{{ c.price | moneyNum }}</q-item-section>
          </q-item>
        </q-list>
      </div>

      <hr class="separator">
      <q-list>
        <q-item>
          <q-item-section>TAXA DE ENTREGA: </q-item-section>
          <q-item-section side>{{ 5 | moneyNum }}</q-item-section>
        </q-item>
      </q-list>
      <hr class="separator">
      <q-list>
        <q-item>
          <q-item-section>TOTAL A PAGAR: </q-item-section>
          <q-item-section side>{{ total | moneyNum }}</q-item-section>
        </q-item>
      </q-list>

      <div class="payment-option q-mt-lg">
        MEIO DE PAGAMENTO
      </div>
      <div class="payment-subtitle">
        escolha qual a forma de pagamento
      </div>
      <div class="q-mt-sm text-center">
        NO MOMENTO DA ENTREGA, COMO PREFERE PAGAR?
      </div>

      <div class="payment-change-option q-mt-md">
          <q-btn-toggle
            v-model="paymentOption"
            toggle-color="accent"
            spread
            :options="[
              {label: 'Quero pagar em Dinheiro', value: '1'},
              {label: 'Quero pagar no Cartão', value: '2'},
            ]"
          />
      </div>

      <q-btn
        size="lg"
        class="q-mt-lg"
        @click="goToCheckout"
        color="accent"
        :disabled="!paymentOption"
      >
        Concluir Compra
      </q-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    paymentOption: '',
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
    goToCheckout() {
      this.$router.push(`/v/${this.$route.params.id}/Checkout`);
    },
  },
};
</script>

<style lang="scss" scoped>
.payment-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.payment-title {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}
.payment-subtitle {
  text-align: center;
  span {
    font-weight: bold;
  }
}
.payment-option {
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
}
.separator {
  border: 1px solid $grey-3;
  width: calc(100vw - 36px);
}
</style>
