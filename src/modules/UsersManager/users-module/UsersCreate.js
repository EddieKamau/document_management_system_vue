import axios from 'axios'

const state = {
    showPermisions: true,
    availableGroups: [],
    availablePermissions: [],
    chosenGroups: [],
    chosenPermissions: [],
    currentEditUserId: 0,
}

const getters = {
    showPermisions: state => state.showPermisions,
    availableGroups: state => state.availableGroups,
    availablePermissions: state => state.availablePermissions,
    chosenGroups: state => state.chosenGroups,
    chosenPermissions: state => state.chosenPermissions,
    currentEditUserId: state => state.currentEditUserId,
}

const mutations = {
    SET_AVAILABLE_GROUPS (state, item){
        state.availableGroups = item
    },

    SET_AVAILABLE_PERMISSIONS (state, item){
        state.availablePermissions = item
    },

    SET_CHOSEN_GROUPS (state, item){
        state.chosenGroups = item
    },

    SET_CHOSEN_PERMISSIONS (state, item){
        state.chosenPermissions = item
    },

    TOGGLE_SHOW_PERMISSIONS (state){
        state.showPermisions = true
    },
    SET_CURRENT_EDIT_USER_ID (state, id){
        state.currentEditUserId = id
    }
}

const actions = {

    setGroups: ({commit}, id) => {
        axios.get('users/setGroups/'+id+'/').then(res => {
            commit('SET_AVAILABLE_GROUPS', res.data.availableGroups)
            commit('SET_CHOSEN_GROUPS', res.data.chosenGroups)
        }).catch(err=> console.log(err))
    },

    setPermissions: ({commit}, id) => {
        axios.get('users/setPermissions/'+id+'/').then(res => {
            commit('SET_AVAILABLE_PERMISSIONS', res.data.availablePermissions)
            commit('SET_CHOSEN_PERMISSIONS', res.data.chosenPermissions)
        }).catch(err=> console.log(err))
    },

    userCreate: ({commit, dispatch, state}, item) => {
        let response
        axios.post('users/create/', item).then(function(res){
            if(res.status===201){

                commit('SET_CURRENT_EDIT_USER_ID', res.data.id) 

                commit('TOGGLE_SHOW_PERMISSIONS')

                dispatch('setGroups', res.data.id)

                dispatch('setPermissions', res.data.id)

            }
        }).catch(err => {            
            console.log(err)
        })
    },

    updateUserPermissions: ({getters}, item) => {
        axios.put('users/setPermissions/'+getters.currentEditUserId+'/', item).then(res => {
        }).catch(err=> console.log(err.response.data))
    },

    updateUserGroups: ({getters}, item) => {
        axios.put('users/setGroups/'+getters.currentEditUserId+'/', item).then(res => {
        }).catch(err=> console.log(err.response.data))
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}