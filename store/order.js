export const state = ()=>{
    return {
        infodata: {
            seat_infos:{}
        },
        allPrice:0

    }
    
}

export const mutations = {
    // 修改数据
    setInfoData(state,data){
        state.infodata = data
    },
    // 修改总价
    setAllPrice(state,price){
        state.allPrice = price
    }
}