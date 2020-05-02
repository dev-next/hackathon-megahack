<template>
  <q-page class="q-pa-md">
    <i-greeter />
    <i-last-orders class="q-mt-lg" />
    <i-last-products class="q-mt-lg"/>
  </q-page>
</template>

<script>
import iGreeter from '../components/Index/Greeter.vue';
import iLastOrders from '../components/Index/LastOrders.vue';
import iLastProducts from '../components/Index/LastProducts.vue';

export default {
  name: 'PageIndex',
  components: {
    iGreeter,
    iLastOrders,
    iLastProducts,
  },
};
</script>
