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
        <q-form @submit="onUserSubmit" key="1" v-if="step === 1">
          <q-input
            v-model="owner.name"
            label="Nome"
            :rules="[v => !!v || 'Campo nome é obrigatório']"
          />
          <q-input
            v-model="owner.phone"
            type="tel"
            label="Celular"
            :rules="[v => v.length == 15 || 'Campo celular inválido']"
            mask="(##) #####-####"
          />
          <q-input
            :type="hidePass ? 'password' : 'text'"
            v-model="owner.password"
            label="Senha"
            :rules="[v => v.length >= 6 || 'Campo senha precisa ter no mínimo 6 caracteres']"
          >
            <template v-slot:append>
              <q-icon
                :name="hidePass ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="hidePass = !hidePass"
              />
            </template>
          </q-input>

          <div class="button-container q-mt-lg">
            <q-btn size="lg" flat color="grey-7" @click="lastStep">Voltar</q-btn>
            <q-btn type="submit" size="lg" flat :class="primaryColor">
              Avançar
            </q-btn>
          </div>
        </q-form>
        <q-form @submit="onStoreSubmit" key="2" v-else-if="step === 2">
          <q-input
            v-model="store.name"
            label="Nome da Loja"
            :rules="[v => !!v || 'Campo nome não pode ser vazio']"
          />
          <q-input
            v-model="store.documentNumber"
            mask="##.###.###/####-##"
            label="CNPJ"
            :rules="[v => v.length ==  18 || 'Campo CNPJ Inválido']"
          />
          <q-input
            v-model="store.phones[0]"
            label="Telefone"
            mask="(##) ####-####"
          />

          <div class="button-container q-mt-lg">
            <q-btn size="lg" flat color="grey-7" @click="lastStep">Voltar</q-btn>
            <q-btn type="submit" size="lg" flat :class="primaryColor">
              Próximo
            </q-btn>
          </div>
        </q-form>

        <q-form @submit="onStoreSubmit" key="3" v-else-if="step === 3">
          <q-input
            v-model="store.location.zipcode"
            label="CEP"
            mask="#####-###"
            @blur="searchByZipCode"
            :rules="[v => !!v || 'Campo CEP não pode ser vazio']"
          />

          <div class="address-with-extra">
            <q-input
              v-model="store.location.street"
              label="Rua"
              :rules="[v => !!v || 'Campo rua não pode ser vazio']"
            />
            <q-input
              v-model="store.location.number"
              :rules="[v => !!v || '']"
              label="Nº"
            />
          </div>

          <q-input
            label="Bairro"
            :rules="[v => !!v || 'Campo bairro não pode ser vazio']"
            v-model="store.location.neighborhood"
          />

          <div class="address-with-extra">
            <q-input
              label="Cidade"
              :rules="[v => !!v || 'Campo cidade não pode ser vazio']"
              v-model="store.location.city"
            />
            <q-input
              label="Estado"
              :rules="[v => !!v || '']"
              v-model="store.location.state"
              mask="AA"
            />
          </div>

          <div class="button-container q-mt-lg">
            <q-btn size="lg" flat color="grey-7" @click="lastStep">Voltar</q-btn>
            <q-btn type="submit" :disable="isSavingUser" size="lg" flat :class="primaryColor">
              Concluir
            </q-btn>
          </div>
        </q-form>
        <div v-else>
          Cadastro realizado com Sucesso!
        </div>
      </transition>
    </div>

    <div class="slice" :style="sliceStyle"></div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex';
import { createStoreAndOwner } from '../apollo/Login';

const MAX_PAGES = 3;

export default {
  data: () => ({
    step: 1,
    title: 'Cadastre seu Usuário',
    hidePass: true,
    isSavingUser: false,
    owner: {
      name: '',
      phone: '',
      password: '',
    },
    store: {
      name: '',
      documentNumber: '',
      phones: [''],
      location: {
        zipcode: '',
        country: '',
        state: '',
        city: '',
        neighborhood: '',
        street: '',
        number: '',
      },
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
      if (this.step === 2 || this.step === 3) this.title = 'Cadastre sua Loja';
      if (this.step === 4) this.title = 'Obrigado!';
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

    onUserSubmit() {
      this.nextStep();
    },

    async onStoreSubmit() {
      if (this.step === 2) return this.nextStep();

      this.isSavingUser = true;
      try {
        const res = await this.$apollo.mutate({
          mutation: createStoreAndOwner,
          variables: {
            owner: this.owner,
            store: this.store,
          },
        });

        this.isSavingUser = false;
        this.step = 4;
        setTimeout(() => this.$router.push('/Login'), 2500);
        return res;
      } catch (err) {
        console.error(err);
        this.isSavingUser = false;
      }
    },

    async searchByZipCode() {
      try {
        const { data: address } = await this.$axios.get(`https:/viacep.com.br/ws/${this.store.location.zipcode}/json`);
        this.store.location.street = address.logradouro;
        this.store.location.neighborhood = address.bairro;
        this.store.location.city = address.localidade;
        this.store.location.state = address.uf;
      } catch (err) {
        console.error(err);
      }
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

    .address-with-extra {
      > label:first-child {
        width: 80%;
        display: inline-block;
      }
      > label:last-child {
        width: 20%;
        display: inline-block;
      }
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
