import { SessionStorage } from 'quasar';
import { boot } from 'quasar/wrappers';

export default boot(async ({
  store,
}) => {
  try {
    const ssToken = SessionStorage.getItem('token');
    const ssUser = SessionStorage.getItem('user');

    if (ssToken && ssUser) {
      store.commit('SAVE_TOKEN', ssToken);
      store.commit('SAVE_LOGGED_USER', ssUser);
    }
  } catch (e) {
    console.error('Not able to find logged user');
  }
});
