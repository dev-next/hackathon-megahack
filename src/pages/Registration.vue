<template>
  <q-page class="register-page">
    <div class="container">
    <h5>{{ title }}</h5>
      <transition
        appear
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-form key="1" v-if="step === 1">
          <q-input
            color="grey-1"
            v-model="owner.name"
            label="Nome"
          />
          <q-input
            color="grey-1"
            v-model="owner.phone"
            type="tel"
            label="Celular"
            mask="(##) #####-####"
          />
          <q-input
            color="grey-1"
            :type="hidePass ? 'password' : 'text'"
            v-model="owner.password"
            label="Senha"
          >
            <template v-slot:append>
              <q-icon
                :name="hidePass ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="hidePass = !hidePass"
              />
            </template>
          </q-input>
        </q-form>
        <q-form key="2" v-else>
          <q-input
            color="grey-1"
            v-model="store.name"
            label="Nome da Loja"
          />
          <q-input
            color="grey-1"
            v-model="store.documentNumber"
            mask="##.###.###/####-##"
            label="CNPJ"
          />
          <q-input
            color="grey-1"
            v-model="store.address"
            label="Endereço"
          />
          <q-input
            color="grey-1"
            v-model="store.phone"
            label="Telefone"
            mask="(##) ####-####"
          />
        </q-form>
      </transition>

      <div class="button-container q-mt-lg">
        <q-btn size="lg" flat color="grey-7" @click="lastStep">Voltar</q-btn>
        <q-btn size="lg" flat :class="primaryColor" @click="nextStep">
          {{ step == 1 ? "Avançar" : "Concluir" }}
        </q-btn>
      </div>
    </div>

    <div class="slice" :style="sliceStyle"></div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex';

const MAX_PAGES = 2;

export default {
  data: () => ({
    step: 1,
    title: 'Cadastre seu Usuário',
    hidePass: true,
    owner: {
      name: '',
      phone: '',
      password: '',
    },
    store: {
      name: '',
      documentNumber: '',
      address: '',
    },

    slice: {
      height: 33,
      opacity: 0.7,
    },

    animation: null,
  }),

  computed: {
    sliceStyle() {
      const { height, opacity } = this.slice;
      return {
        height: `${height}vh`,
        opacity: `${opacity}`,
      };
    },

    primaryColor() {
      return [`text-${this.pageColor}`];
    },

    ...mapState('login', ['pageColor']),
  },

  created() {
    this.$q.dark.set(false);
    this.animation = setInterval(() => {
      this.slice.height += 1;
      this.slice.opacity += 0.01;

      if (this.slice.height === 150) {
        clearInterval(this.animation);
      }
    }, 2);
  },

  watch: {
    step() {
      if (this.step === 1) this.title = 'Cadastre seu Usuário';
      if (this.step === 2) this.title = 'Cadastre sua Loja';
    },
  },

  methods: {
    nextStep() {
      this.step += this.step >= MAX_PAGES ? 0 : 1;
    },
    lastStep() {
      if (this.step === 1) return this.$router.push('/Login');
      this.step -= this.step <= 1 ? 0 : 1;
      return this.step;
    },
  },
};
</script>

<style scoped lang="scss">
  .register-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .container {
      width: 100vw;
      padding: 2rem;
      height: 70vh;
      z-index: 100;
    }

    .button-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .slice {
    z-index: 1;
    background: $grey-1;
    width: 100vw;
    position: absolute;
    clip-path: polygon(0 0, 0% 100%, 250% 100%);
    bottom: 0;
    left: 0;
  }
</style>
