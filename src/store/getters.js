const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  uploadVisible: state => state.file.uploadVisible,
  deleteVisible: state => state.file.deleteVisible,
  fileList: state => state.file.fileList,
  selectedData: state => state.file.selectedData,
  folderNav: state => state.file.folderNav
}
export default getters
