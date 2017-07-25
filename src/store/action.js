// 可以执行同步方法，也可以执行异步
export default{
    addCountAction({commit, state}){
        console.log('addCountAction')
        commit('ADD_COUNT',10)
    }
}