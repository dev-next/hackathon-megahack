<template>
  <div
    class="product-item q-mb-lg"
    @click="productDetail"
  >
    <q-img
      :src="url || 'https://via.placeholder.com/500'"
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
            <span class="value">{{ f.value }}</span>
          </div>
        </div>

      </div>
      <div class="right">
        <div class="price">{{ value | moneyNum }}</div>
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
    photos: {
      type: Array,
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    fields: {
      type: Array,
    },
  },

  computed: {
    url() {
      return this.photos[0];
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
        width: 60%;
      }
      .right {
        width: 40%;
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
