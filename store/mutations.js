export default {
  changeList(state, value) {
    state.list.push(value)
  },
  setLinkModal(state, value) {
    state.linkModal.projectId = value.id
    state.linkModal.status = value.status
  },
  setColor (state, value) {
    state.color = value
  }
}