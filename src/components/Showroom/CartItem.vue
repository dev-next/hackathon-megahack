<template>
  <q-slide-item left-color="negative" right-color="negative">
    <template v-slot:left>
      <q-icon name="mdi-delete" />
    </template>
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
          :src="url"
          :alt="name"
          class="rounded-borders product-img"
          style="height: 10vh; width: 10vh"
        />
      </div>

      <div class="info q-ml-sm">
        <div class="product-name">{{ name }}</div>
        <div class="product-description">Azul</div>
        <div class="product-quantity">Quantidade: {{ quantity }}</div>
        <div class="product-price">{{ price | moneyNum }}</div>
      </div>
    </div>
  </q-slide-item>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
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
  .product-quantity {
    width: 50%;
    display: inline-block;
    color: $grey-8;
    font-size: 0.8rem;
  }
  .product-price {
    text-align: right;
    width: 50%;
    display: inline-block;
  }
}
</style>
