import axios from "axios";

const state = {
    userDetails: {}
}

const getters = {
    userDetails: state => state.userDetails
}

const mutations = {
    SET_USER_DETAILS (state, item){
        state.userDetails = item
    }
}

const actions = {
    loadEditUser: ({commit, dispatch, state, getters}, id) => {
        axios.get('users/edit/'+id+'/').then(res => {
            let userD = {
                username: res.data.username,
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                email: res.data.email,
            }
            commit('SET_USER_DETAILS', userD)

            dispatch('setGroups', id)

            dispatch('setPermissions', id)

            commit('SET_CURRENT_EDIT_USER_ID', id)


        }).catch(err=> console.log(err.response.data))
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}