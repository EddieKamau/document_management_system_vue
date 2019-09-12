import axios from "axios";

const state = {
    usersList: [],
}

const getters = {
    usersList: state => state.usersList
}

const mutations = {
    SET_USERS_LIST (state, item){
        state.usersList = item
    },

    REMOVE_USER_ITEM (state, index){
        state.usersList.splice(index, 1)
    }
}

const actions = {
    setUsersList: ({commit}) => {
        axios.get('users/').then(res => {
            commit('SET_USERS_LIST', res.data)
        }).catch(err=> console.log(err.response.data))
    },

    removeUserItem: ({commit, state}, id) => {
        state.usersList.forEach((el, index) => {
            if(el.id == id){
                commit('REMOVE_USER_ITEM', index)
            }
        })
    },

    deletUser: ({dispatch}, id) => {
        axios.delete('users/delete/'+id+'/').then(res => {
            dispatch('removeUserItem', id)
        }).catch(err => console.log(err.response.data))
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}