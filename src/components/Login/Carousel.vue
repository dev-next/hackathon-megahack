<template>
  <q-carousel
    v-model="slide"
    transition-prev="jump-right"
    transition-next="jump-left"
    swipeable
    infinite
    autoplay
    animated
    control-color="white"
    navigation
    padding
    class="text-white bg-transparent"
    @transition="emitTransition"
  >
    <q-carousel-slide name="p-1" class="column no-wrap flex-center">
      <q-icon name="style" size="56px" />
      <div class="q-mt-md text-center">
        {{ lorem }}
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="p-2" class="column no-wrap flex-center">
      <q-icon name="live_tv" size="56px" />
      <div class="q-mt-md text-center">
        {{ lorem }}
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="p-3" class="column no-wrap flex-center">
      <q-icon name="layers" size="56px" />
      <div class="q-mt-md text-center">
        {{ lorem }}
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="p-4" class="column no-wrap flex-center">
      <q-icon name="terrain" size="56px" />
      <div class="q-mt-md text-center">
        {{ lorem }}
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    colors: {
      'p-1': 'primary',
      'p-2': 'positive',
      'p-3': 'warning',
      'p-4': 'accent',
    },
    slide: 'p-1',
    lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
  }),

  methods: {
    emitTransition() {
      this.CHANGE_PAGE_COLOR(this.colors[this.slide]);
    },
    ...mapMutations('login', ['CHANGE_PAGE_COLOR']),
  },
};
</script>

<style>

</style>
