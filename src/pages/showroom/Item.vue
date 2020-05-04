<template>
  <div class="q-pa-md q-mb-md item-page">
    <div class="text-h4 q-mb-lg">{{ item.name }}</div>
    <div class="image-container">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
      >
        <q-carousel-slide
          v-for="(image, index) in item.photos"
          :key="index"
          :name='index'
          :img-src="image"
          />
      </q-carousel>
    </div>

    <div class="details">
      <div class="left">
        <div class="name q-mb-xs">{{ item.name }}</div>
        <div class="fields">
          <div class="field">
            <span class="label">Cores: </span>
            <span class="value">Azul, Amarelo</span>
          </div>
          <div class="field">
            <span class="label">Tamanhos: </span>
            <span class="value">P, M, G</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="price">{{ item.value | moneyNum }}</div>
      </div>
    </div>

    <div class="options q-mt-lg">
      <div class="q-mb-md">
        <div class="title q-mb-sm">Cores</div>
        <q-btn-toggle
          v-model="item.cores"
          toggle-color="accent"
          spread
          :options="[
            {label: 'Azul', value: 'Azul'},
            {label: 'Amarelo', value: 'Amarelo'},
            {label: 'Marrom', value: 'Marrom', disabled: true }
          ]"
        />
      </div>
      <div>
        <div class="title q-mb-sm">Tamanhos</div>
        <q-btn-toggle
          v-model="item.tamanho"
          toggle-color="accent"
          spread
          :options="[
            {label: 'P', value: 'P'},
            {label: 'M', value: 'M'},
            {label: 'G', value: 'G'}
          ]"
        />
      </div>
    </div>

    <q-btn
      class="btn-carrinho q-mt-lg"
      color="accent"
      size="lg"
      @click="submit"
    >
      Comprar
    </q-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { item } from '../../apollo/Showroom/queries';

export default {
  apollo: {
    item: {
      query: item,
      variables() {
        return { id: this.itemID };
      },
    },
  },

  data() {
    return {
      slide: 0,
      item: {},
      itemID: this.$route.params.item,
    };
  },

  methods: {
    submit() {
      this.addToCart({
        ...this.item,
        qte: 1,
      });

      this.$q.notify({
        type: 'positive',
        position: 'top',
        message: 'Item adicionado ao carrinho!',
      });
      this.$router.push(`/v/${this.$route.params.id}`);
    },
    ...mapActions('showroom', ['addToCart']),
  },
};
</script>

<style scoped lang="scss">
  .item-page {
    display: flex;
    flex-direction: column;
    align-items: center;

    .text-h4 {
      text-align: center;
      font-weight: bold;
    }

    .image-container {
      height: 70vw;
      width: 70vw;
      .q-carousel {
        height: 70vw;
      }
    }

    .options {
      display: flex;
      flex-direction: column;
      width: 70vw;
      .q-btn-group {
        display: flex;
        justify-content: space-around;
        width: 70vw;
      }
    }

    .details {
      width: 70vw;
      display: flex;
      .left {
        width: 70%;
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

  .btn-carrinho {
    width: 70vw;
  }
</style>
