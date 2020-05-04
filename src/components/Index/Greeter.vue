<template>
  <div class="greeter">
    <h2>{{ dateRelativeMessage }},</h2>
    <h1>{{ loggedUser.name }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    dateRelativeMessage() {
      const now = new Date();
      const hour = now.getHours();
      if (hour >= 18) return 'Boa Noite';
      return hour >= 0 && hour < 12
        ? 'Bom dia'
        : 'Boa tarde';
    },
    ...mapState(['loggedUser']),
  },
};
</script>

<style scoped lang="scss">
  h1, h2 {
    margin: 0px;
  }

  h1 {
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  h2 {
    color: $grey-6;
    font-size: 1.5rem;
    line-height: 2rem;
  }
</style>
