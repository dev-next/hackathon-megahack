<template>
  <div class="user-info q-pa-md">
    <q-avatar>
      <q-img src="https://via.placeholder.com/150" />
    </q-avatar>
    <div class="info q-ml-md q-pt-xs">
      <div class="user-name">{{ loggedUser.name }}</div>
      <div class="user-store">{{ loggedUser.stores[0].name }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['loggedUser']),
  },
};
</script>

<style scoped lang="scss">
.user-info {
  display: flex;
  border-bottom: 1px solid $grey-4;
  .user-name {
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-weight: bold;
  }
  .user-store {
    color: $grey-8
  }
}
</style>
