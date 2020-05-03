<template>
  <div class="fit">
    <div class="q-pa-sm cart-page">
      <div class="text-h5 cart-title q-mt-md">Meu Carrinho</div>

      <q-scroll-area style="height: 75vh" class="q-mb-sm">
        <div class="cart-items q-mt-lg">
            <s-cart-item
              class="q-mb-md"
              v-for="i in cart"
              :key="i.id"
              v-bind="i"
            />
        </div>
      </q-scroll-area>
      <div class="total q-pr-md q-mb-sm">
        Total: R$ 100,00
      </div>
      <q-btn size="lg" color="accent"> Continuar </q-btn>
    </div>
  </div>
</template>

<script>
import sCartItem from './CartItem.vue';

export default {
  components: {
    sCartItem,
  },

  data: () => ({
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
      {
        id: '3',
        url: 'https://via.placeholder.com/500',
        name: 'Nome do Produto',
        price: 79.99,
        quantity: 3,
      },
      {
        id: '3',
        url: 'https://via.placeholder.com/500',
        name: 'Nome do Produto',
        price: 79.99,
        quantity: 3,
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
};
</script>

<style scoped lang="scss">
.cart-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  .cart-title {
    text-align: center;
    font-weight: bold;
  }
  .total {
    width: 100%;
    text-align: right;
  }
}
</style>
