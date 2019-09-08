// 选择航班信息
export const state = () => {
  return {
    singleData: []
       
  }
}

export const mutations = {
  // 储存选择的航班信息
  setSingleForm(state, val) {
    state.singleData.push(val)
  }
}
