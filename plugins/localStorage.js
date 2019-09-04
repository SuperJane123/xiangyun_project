import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
    // 这里的store指向的是nuxt实例对象
  window.onNuxtReady(() => {
    createPersistedState({
        key: 'state',
        paths: []
       
    })(store)
  })
}