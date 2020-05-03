<template>
  <div class="delivery-page q-pa-md">
      <div class="delivery-title q-mb-md">Entrega</div>
      <div class="delivery-subtitle">Escolha como deseja receber suas compras:</div>

      <q-btn-toggle
        v-model="type"
        class="q-mt-sm"
        toggle-color="accent"
        spread
        :options="[
          {label: 'Retirar Na Loja (Grátis)', value: '1'},
          {label: 'Receber em Casa (R$ 5,00)', value: '2'},
        ]"
      />

      <div class="delivery-options q-mb-lg q-mt-lg">
        <div class="delivery-subtitle">
          Escolha o melhor dia para receber suas compras
        </div>

        <div class="delivery-option q-mt-sm">
          DATA
        </div>
        <div class="delivery-date q-mt-sm">
          <q-btn-toggle
            v-model="date"
            toggle-color="accent"
            spread
            :options="[
              {label: '03/05/2020', value: '03/05/2020'},
              {label: '04/05/2020', value: '04/05/2020'},
              {label: '05/05/2020', value: '05/05/2020'},
            ]"
          />
        </div>

        <div class="delivery-option q-mt-lg">
          HORÁRIO
        </div>
        <div class="delivery-time q-mt-sm">
          <q-btn-toggle
            v-model="time"
            toggle-color="accent"
            spread
            :options="[
              {label: 'Manhã: 8h às 12h', value: '8h às 12h'},
              {label: 'Tarde: 12h às 17h', value: '12h às 17h'},
            ]"
          />
        </div>
      </div>

      <hr class="separator">

      <div class="delivery-subtitle q-mt-sm" v-if="date && time">
        *Entrega no dia <span>{{ date }}</span> das {{ time }}
      </div>

      <q-btn
        size="lg"
        class="q-mt-lg"
        @click="goToPayingOptions"
        color="accent"
        :disabled="!time || !date"
      >
        Continuar
      </q-btn>

  </div>
</template>

<script>
export default {
  data: () => ({
    type: '2',
    date: null,
    time: null,
  }),

  methods: {
    goToPayingOptions() {
      this.$router.push(`/v/${this.$route.params.id}/Pagamento`);
    },
  },
};
</script>

<style scoped lang="scss">
.delivery-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.delivery-title {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}
.delivery-subtitle {
  text-align: center;
  span {
    font-weight: bold;
  }
}
.delivery-option {
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
}
.separator {
  border: 1px solid $grey-3;
  width: calc(100vw - 36px);
}
</style>
