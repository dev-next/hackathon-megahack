<template>
  <div class="login-container shadow-10">
    <div class="logo q-mb-md q-mt-md">
      <span class="title" :class="variableColor">PERALTA</span>
      <span class="subtitle">Subtitle</span>
    </div>
    <div class="buttons">
      <q-btn flat>Entrar</q-btn>
      <q-btn flat>Registrar</q-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    variableColor() {
      return [`text-${this.pageColor}`];
    },
    ...mapState('login', ['pageColor']),
  },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=swap');

  .login-container {
    z-index: 100;
    background-color:  #fff;
    height: 25vh;
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;

    .logo {
      text-align: center;
      span.title {
        font-family: 'Arvo', serif;
        display: block;
        font-size: 2.33rem;
      }
      .subtitle {
        color: $grey-8;
      }
    }

    .buttons {
      width: 100%;
      height: 30%;

      button {
        width: 50%;
        height: 100%;
        border-radius: 0px;
        border-top: 1px solid $grey-4;
        &:first-child {
          border-right: 1px solid $grey-4;
        }
      }
    }
  }
</style>
