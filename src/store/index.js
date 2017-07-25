import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)
const state = {
    count: 11
}

export default new Vuex.Store({
    state,
    actions,//必须写成复数形式牛逼了呀，去掉s居然会报错
	mutations
})