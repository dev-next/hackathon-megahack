<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="showroom-header bg-accent">
      <q-toolbar>
        <q-toolbar-title class="showroom-title">{{ title }}</q-toolbar-title>
        <q-btn flat round dense icon="mdi-cart" />
      </q-toolbar>
    </q-header>
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
export default {
  name: 'ShowroomLayout',

  data: () => ({
    title: 'Loja da Maria Bonita',
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
      padding-left: 33px;
      text-align: center;
    }
}
</style>
