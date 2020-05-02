import { boot } from 'quasar/wrappers';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

export default boot(async ({
  app, Vue,
}) => {
  const apolloClient = new ApolloClient({
    uri: process.env.ENDPOINT_URL,
  });

  Vue.use(VueApollo);

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  });

  app.apolloProvider = apolloProvider;
});
