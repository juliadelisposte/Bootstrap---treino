import api from 'axios'

const state = {
  content: []
}

const getters = {
  contentList: state => state.content
}

const mutations = {
  setContent (state, value) {
    state.content = value
  }
}

const actions = {
  async fetchContent ({ commit }) {
    try {
      const { data } = await api.get('content')
      commit('setContent', data)
    } catch {}
  },

  async postContent ({ commit }, values) {
    try {
      await api.post('content', values)
    } catch {}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}