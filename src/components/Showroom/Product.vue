<template>
  <div
    class="product-item q-mb-lg"
    @click="productDetail"
  >
    <q-img
      :src="url"
      :alt="name"
      class="rounded-borders product-img"
      style="height: 70vw; width: 70vw"
    >
    </q-img>
    <div class="details">
      <div class="left">
        <div class="name q-mb-xs">{{ name }}</div>

        <div class="fields">
          <div class="field" v-for="(f, k) in fields" :key="k">
            <span class="label">{{ f.label }}: </span>
            <span class="value">{{ f.values }}</span>
          </div>
        </div>

      </div>
      <div class="right">
        <div class="price">{{ price | moneyNum }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    url: {
      type: String,
    },
    name: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    fields: {
      type: Array,
    },
  },

  methods: {
    productDetail() {
      this.$router.push(`/v/${this.$route.params.id}/item/${this.id}`);
    },
  },
};
</script>

<style scoped lang="scss">
  .product-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    .details {
      width: 70vw;
      display: flex;
      .left {
        width: 70%;
      }
      .right {
        width: 30%;
        text-align: right;
      }
      .name {
        font-size: 1.1rem;
        line-height: 1.5rem;
      }
      .fields {
        font-size: 0.8rem;
        line-height: 1rem;
        color: $grey-8;
      }
      .price {
        font-size: 1.1rem;
        color: $accent;
        font-weight: bold;
      }
      .field .label {
        font-weight: bold;
      }
    }
  }
</style>
