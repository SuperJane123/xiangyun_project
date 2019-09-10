export const state = ()=>{
    return {
        airList: {}
    }
    
}

export const mutations = {
    // 设置储存数据
    setAirInfo(state,data){
        state.airList = data
    }
}