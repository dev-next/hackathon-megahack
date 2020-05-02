<template>
  <q-page>
    <div class="q-md">
      <div class="column justify-between container">
        <l-logo />
        <div class="col">
          <l-carousel class="login-carousel" />
        </div>
        <div class="col col-buttons q-mt-md">
          <q-btn to="/Entrar" size="lg" color="grey-1" :class="primaryColor">Entrar</q-btn>
          <q-btn to="/Registrar" size="lg" class="q-mt-sm">Cadastrar</q-btn>
        </div>
        <div class="slice"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex';
import lCarousel from '../components/Login/Carousel.vue';
import lLogo from '../components/Login/Logo.vue';

export default {
  components: {
    lLogo,
    lCarousel,
  },

  watch: {
    pageColor() {
      this.$emit('changeColor', this.pageColor);
    },
  },

  created() {
    this.$q.dark.set(true);
  },

  computed: {
    primaryColor() {
      return [`text-${this.pageColor}`];
    },
    ...mapState('login', ['pageColor']),
  },
};
</script>

<style scoped lang="scss">
  .login-carousel {
    height: 60vh;
  }

  .col-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 100;
    button, a {
      width: 33%;
      ::before {
        box-shadow: none;
      }
    }
  }

  .slice {
    z-index: 1;
    background: $grey-1;
    opacity: .7;
    height: 33vh;
    width: 100vw;
    position: absolute;
    clip-path: polygon(0 0, 0% 100%, 250% 100%);
    bottom: 0;
    left: 0;
  }
</style>
