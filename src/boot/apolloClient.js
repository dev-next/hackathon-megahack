import { boot } from 'quasar/wrappers';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

export default boot(async ({
  app, Vue, store,
}) => {
  const apolloClient = new ApolloClient({
    uri: process.env.ENDPOINT_URL,
    request: (op) => {
      op.setContext({
        headers: {
          authorization: store.state.token
            ? `Bearer ${store.state.token}`
            : '',
        },
      });
    },
  });

  Vue.use(VueApollo);

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  });

  app.apolloProvider = apolloProvider;
});
