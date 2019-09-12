import axios from "axios";

const state = {
    groupsList: [],
}

const getters = {
    groupsList: state => state.groupsList,
}

const mutations = {
    SET_GROUP_LIST (state, item){
        state.groupsList = item
    },
    
}

const actions = {
    fetchGroups: ({commit}) => {

        axios.get('groups/detailed-list/').then(res => {
            let lst = res.data
            commit('SET_GROUP_LIST', lst)
        }).catch(err=> console.log(err.response.data))

    },

}

export default {
    state,
    getters,
    mutations,
    actions
}