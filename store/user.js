// 用户管理
export const state = {
    loginFrom: {
        token: '',
        user: {}
    }
};



export const mutations = {
    // 储存用于信息
    setUserInfo(state,data){
        state.loginFrom = data
    },
// 清空用户数据
    clearUserInfo(state){
        state.loginFrom = {}
    }
};


export const actions = {}