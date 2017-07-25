import {ADD_COUNT} from './mutation-types'
// 只能执行同步方法 
export default {
    [ADD_COUNT](state, n){
        state.count += n
        console.dir(state.count)
        
    }
}