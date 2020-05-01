<template>
  <q-page>
    <div class="q-md">
      <div class="column justify-between">
        <div class="col">
          <l-carousel class="login-carousel" />
        </div>
        <div class="col justify-center flex">
          <l-btn-container />
        </div>
      </div>
    </div>
    <div class="slice"></div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex';
import lCarousel from '../components/Login/Carousel.vue';
import lBtnContainer from '../components/Login/BtnContainer.vue';

export default {
  components: {
    lBtnContainer,
    lCarousel,
  },

  watch: {
    pageColor() {
      this.$emit('changeColor', this.pageColor);
    },
  },

  computed: {
    ...mapState('login', ['pageColor']),
  },
};
</script>

<style scoped lang="scss">
  .login-carousel {
    height: 70vh;
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
