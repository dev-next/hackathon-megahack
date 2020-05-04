<template>
  <q-slide-item @right="remove" right-color="negative">
    <template v-slot:right>
      <q-icon name="mdi-delete" />
    </template>

    <div class="cart-item q-pa-md">
      <q-icon
        class="close-icon"
        size="sm"
        color="grey-6"
        name="mdi-delete-outline"
      />
      <div class="img-container">
        <q-img
          :src="photos[0]"
          :alt="name"
          class="rounded-borders product-img"
          style="height: 10vh; width: 10vh"
        />
      </div>

      <div class="info q-ml-sm">
        <div class="product-name">{{ name }}</div>
        <div class="product-description">Azul</div>
        <div class="product-qte">Quantidade: {{ qte }}</div>
        <div class="product-value">{{ value * qte | moneyNum }}</div>
      </div>
    </div>
  </q-slide-item>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    id: {
      type: String,
    },
    photos: {
      type: Array,
    },
    name: {
      type: String,
    },
    value: {
      type: Number,
    },
    qte: {
      type: Number,
    },
  },

  methods: {
    remove() {
      this.removeFromCart({ id: this.id, qte: this.qte });
    },
    ...mapActions('showroom', ['removeFromCart']),
  },
};
</script>

<style scoped lang="scss">
.cart-item {
  position: relative;
  background: $grey-4;
  display: flex;

  .close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .info {
    width: calc(100% - 10vw);
  }
  .product-name {
    font-size: 1rem;
  }
  .product-description {
    font-size: 0.8rem;
    color: $grey-8
  }
  .product-qte {
    width: 50%;
    display: inline-block;
    color: $grey-8;
    font-size: 0.8rem;
  }
  .product-value {
    text-align: right;
    width: 50%;
    display: inline-block;
  }
}
</style>
