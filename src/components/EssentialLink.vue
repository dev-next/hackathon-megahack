<template>
  <q-item
    clickable
    :tag="link ? 'a' : 'span'"
    :disabled="!link"
    :to="link"
    :class="{ separator: withSeparator }"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
    },

    icon: {
      type: String,
      default: '',
    },

    withSeparator: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  .separator {
    margin-bottom: 8px;
    border-bottom: 1px solid $grey-5;
  }
</style>
