<template>
  <q-layout view="lHh Lpr lFf" :class="layoutStyle">
    <q-page-container>
      <transition
        appear
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view @changeColor="changeColor"/>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ExternalLayout',

  data: () => ({
    bgColor: 'primary',
  }),

  created() {
    this.$q.dark.set(true);
    this.bgColor = this.pageColor;
  },

  computed: {
    layoutStyle() {
      return [`bg-${this.bgColor}`];
    },
    ...mapState('login', ['pageColor']),
  },

  methods: {
    changeColor(color) {
      this.bgColor = color;
    },
  },
};
</script>

<style lang="scss">
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
  .text-warning {
    color: $warning !important
  }
</style>
