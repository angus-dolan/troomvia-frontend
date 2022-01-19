import { createStore } from 'vuex'

// Modules
import user from './modules/user'

const store = createStore({

  modules: {
    user
  }

});

export { store };