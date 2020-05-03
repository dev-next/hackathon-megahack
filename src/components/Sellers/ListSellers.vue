<template>
  <!-- https://ui-avatars.com/api/?name=John+Doe -->
  <q-list bordered separator>
    <q-item
      clickable
      v-ripple
      v-for="s in sellers"
      :key="s.id"
    >
      <q-item-section avatar>
        <q-avatar>
          <q-img :src="`https://ui-avatars.com/api/?name=${filteredString(s.name)}`"></q-img>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        {{ s.name }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  props: {
    sellers: {
      type: [Array, Object],
    },
  },

  methods: {
    filteredString(str) {
      return str.replace(/ /, '+');
    },
  },
};
</script>

<style>

</style>
