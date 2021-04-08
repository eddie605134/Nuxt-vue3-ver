export default {
  change({ state, commit }, value) {
    commit('changeList', value)
  },
  upDateLinkModal({ commit }, value) {
    commit('setLinkModal', value)
  },
  toRed ({commit}, value) {
    commit('setColor', value)
  }

}