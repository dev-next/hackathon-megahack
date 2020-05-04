<template>
  <q-page class="login-page">
    <div class="container">
    <h5>Login</h5>
      <transition
        appear
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-form @submit="attemptLogin" key="1">
          <q-input
            color="grey-1"
            v-model="login"
            type="tel"
            label="Celular"
            mask="(##) #####-####"
          />
          <q-input
            color="grey-1"
            :type="hidePass ? 'password' : 'text'"
            v-model="password"
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

          <div v-if="isInvalidLogin" class="text-negative q-mt-md">
            {{ errorMessage }}
          </div>

          <div class="button-container q-mt-lg">
            <q-btn size="lg" to="/Login" flat color="grey-7">Voltar</q-btn>
            <q-btn :disabled="isLoading" type="submit" size="lg" flat :class="primaryColor">
              Entrar
            </q-btn>
          </div>
        </q-form>
      </transition>

    </div>

    <div class="slice" :style="sliceStyle"></div>
  </q-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { authenticate } from '../apollo/Login/queries';

export default {
  data: () => ({
    hidePass: true,
    login: '',
    password: '',

    slice: {
      height: 33,
      opacity: 0.7,
    },

    animation: null,
    isLoading: false,

    isInvalidLogin: false,
    errorMessage: '',
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

  methods: {
    async attemptLogin() {
      this.isLoading = true;
      this.isInvalidLogin = false;

      try {
        const { data } = await this.$apollo.query({
          query: authenticate,
          variables: {
            phone: this.login,
            password: this.password,
          },
        });

        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        const { authenticate: { token, user } } = data;
        this.SAVE_LOGGED_USER(user);
        this.SAVE_TOKEN(token);

        this.$router.push('/');
      } catch (err) {
        this.isInvalidLogin = true;
        this.errorMessage = err.message.replace(/GraphQL error:/, '');
      } finally {
        this.isLoading = false;
      }
    },
    ...mapMutations(['SAVE_LOGGED_USER', 'SAVE_TOKEN']),
  },
};
</script>

<style scoped lang="scss">
  .login-page {
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
