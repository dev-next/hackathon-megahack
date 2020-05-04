<template>
  <q-select
    class="product-tag-select"
    :label="label"
    :value="value"
    @add="$emit('input', [...value, $event.value])"
    @remove="$emit('input', handleRemove($event))"
    use-input
    use-chips
    multiple
    input-debounce="0"
    @new-value="createValue"
    :options="defaultOptions"
    @filter="filterFn"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
    },
    label: {
      type: String,
    },
    defaultOptions: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    createValue(val, done) {
      if (val.length > 0) {
        if (!this.defaultOptions.includes(val)) {
          this.defaultOptions.push(val);
        }
        done(val, 'toggle');
      }
    },

    filterFn(val, update) {
      update(() => {
        if (val === '') {
          this.filterOptions = this.defaultOptions;
        } else {
          const needle = val.toLowerCase();
          this.filterOptions = this.defaultOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1,
          );
        }
      });
    },

    handleRemove(event) {
      return this.value.length > 1
        ? this.value.filter((v) => v === event.value)
        : [];
    },
  },
};
</script>

<style lang="scss">
  .product-tag-select .q-chip {
    zoom: 1.25;
    padding: 12px;
  }
</style>
