<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <l-logo />
        </q-toolbar-title>

        <q-btn flat round dense icon="mdi-bell" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Peralta
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import lLogo from '../components/Login/Logo.vue';
import EssentialLink from '../components/EssentialLink.vue';

export default {
  name: 'MainLayout',

  components: {
    lLogo,
    EssentialLink,
  },

  created() {
    this.$q.dark.set(false);
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Início',
          icon: 'home',
          link: '/',
        },
        {
          title: 'Loja',
          icon: 'storefront',
          link: '/Loja',
        },
        {
          title: 'Vendedores',
          icon: 'mdi-account',
          link: '/Vendedores',
        },
        {
          title: 'Clientes',
          icon: 'mdi-account',
          link: '/Clientes',
        },
      ],
    };
  },
};
</script>
