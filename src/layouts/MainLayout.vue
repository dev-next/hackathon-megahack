<template>
  <q-layout class="main-layout" view="lHh Lpr lFf">
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
      <user-info />
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          MENU
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

import UserInfo from '../components/UserInfo.vue';
import lLogo from '../components/Login/Logo.vue';
import EssentialLink from '../components/EssentialLink.vue';

export default {
  name: 'MainLayout',

  components: {
    lLogo,
    UserInfo,
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
          title: 'Relatórios',
          icon: 'mdi-file-chart',
        },
        {
          title: 'Produtos',
          icon: 'mdi-package-variant-closed',
          link: '/Produtos',
        },
        {
          title: 'Tendências de Consumo',
          icon: 'mdi-chart-line',
          withSeparator: true,
        },
        {
          title: 'Adicionar Produtos',
          icon: 'mdi-package-variant',
          link: '/Produtos/Adicionar',
        },
        {
          title: 'Criar Listas',
          icon: 'mdi-cart',
          link: '/Lista/Adicionar',
        },
        {
          title: 'Vendedores',
          icon: 'mdi-account',
          link: '/Vendedores',
          withSeparator: true,
        },
        {
          title: 'Conta',
          icon: 'mdi-account',
          link: '/Clientes',
        },
        {
          title: 'Configurações',
          icon: 'mdi-cog',
          withSeparator: true,
        },
        {
          title: 'Perguntas Frequentes',
          icon: 'mdi-help',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.main-layout {
  h2 {
    color: $grey-6;
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

.text-primary {
  color: $primary !important
}
.text-secondary {
  color: $secondary !important
}
.text-accent {
  color: $accent !important
}
.text-positive {
  color: $positive !important
}
.text-negative {
  color: $negative !important
}
.text-warning {
  color: $warning !important
}
</style>
