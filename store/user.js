// 用户管理
export const state = {
    loginFrom: {
        token: '',
        user: {}
    }
};



export const mutations = {
    setUserInfo(state,data){
        state.loginFrom = data
    }
};


export const actions = {}