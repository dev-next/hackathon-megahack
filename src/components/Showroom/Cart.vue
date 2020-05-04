<template>
  <div class="fit">
    <div class="q-pa-sm cart-page">
      <div class="text-h5 cart-title q-mt-md">Meu Carrinho</div>

      <q-scroll-area style="height: 75vh" class="q-mb-sm">
        <div class="cart-items q-mt-lg" v-if="cart.length">
            <s-cart-item
              class="q-mb-md"
              v-for="i in cart"
              :key="i.id"
              v-bind="i"
            />
        </div>
        <div class="q-mt-lg q-pa-lg text-center text-grey-6" v-else>
          Adicione itens ao carrinho e eles aparecerão aqui
        </div>
      </q-scroll-area>
      <div class="total q-pr-md q-mb-sm">
        Total: {{ totalInCart.total | moneyNum }}
      </div>
      <q-btn size="lg" :disabled="cart.length === 0" @click="checkout" color="accent"> Continuar </q-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import sCartItem from './CartItem.vue';

export default {
  components: {
    sCartItem,
  },

  computed: {
    ...mapState('showroom', ['cart']),
    ...mapGetters('showroom', ['totalInCart']),
  },

  methods: {
    checkout() {
      this.$router.push(`/v/${this.$route.params.id}/Entrega`);
    },
  },
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
