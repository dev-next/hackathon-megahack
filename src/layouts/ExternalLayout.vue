<template>
  <q-layout view="lHh Lpr lFf" :class="layoutStyle">
    <q-page-container>
      <router-view @changeColor="changeColor"/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'ExternalLayout',

  data: () => ({
    bgColor: 'primary',
  }),

  computed: {
    layoutStyle() {
      return [`bg-${this.bgColor}`];
    },
  },

  methods: {
    changeColor(color) {
      this.bgColor = color;
    },
  },
};
</script>
