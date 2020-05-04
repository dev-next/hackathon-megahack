<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="showroom-header bg-accent">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="mdi-arrow-left-thick"
          @click="$router.back()"/>
        <q-toolbar-title class="showroom-title">{{ title }}</q-toolbar-title>
        <q-btn flat round dense icon="mdi-cart" @click="isCartOpen = !isCartOpen"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      side="right"
      v-model="isCartOpen"
      content-class="bg-grey-3"
    >
      <s-cart />
    </q-drawer>

    <q-page-container class="q-mt-lg">
      <transition
        appear
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import sCart from '../components/Showroom/Cart.vue';

export default {
  name: 'ShowroomLayout',
  components: {
    sCart,
  },

  data: () => ({
    title: 'Loja da Maria Bonita',
    isCartOpen: false,
  }),

  created() {
    this.$q.dark.set(false);
  },
};
</script>

<style scoped lang="scss">
  .showroom-header {
    height: 5rem;
    display: flex;
    justify-content: center;

    .showroom-title {
      font-weight: bold;
      text-align: center;
    }
}
</style>
