// Factories
const userFactory = function() { 
  return {
    uid: '',
    email: '',
    emailVerified: false,
    phoneNumber: '',
    displayName: '',
    photoURL: '',
    metadata: {
      createdAt: '',
      creationTime: '',
      lastLoginAt: '',
      lastSignInTime: '',
    }
  }
}

// State
const state = () => ({
  user: userFactory()
})

// Getters
const getters = {
  get: state => {
    return state
  },
  getUser: state => {
    if (state.user.uid.length > 0) return state.user
    return 
  },
}

// Actions
const actions = {
  setUser ({commit}, payload) {
    commit('setUser', payload)
  }
}

// Mutations
const mutations = {
  setUser (state, payload) {
    console.log(payload)
    state.user = {
      ...state.user,
      
      uid: payload.uid,
      email: payload.email,
      emailVerified: payload.emailVerified,
      displayName: payload.displayName,
      phoneNumber: payload.phoneNumber,
      photoURL: payload.photoURL,

      metadata: {
        createdAt: payload.metadata.createdAt,
        creationTime: payload.metadata.creationTime,
        lastLoginAt: payload.metadata.lastLoginAt,
        lastSignInTime: payload.metadata.lastSignInTime,
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}