import axios from "axios";

const state = {
    currentGroupEditId: 0,
    currentGroupEditName: '',
    editingGroup: false,
    availableGroupPermissions: [],
    chosenGroupPermissions: [],
}

const getters = {
    editingGroup: state => state.editingGroup,
    availableGroupPermissions: state => state.availableGroupPermissions,
    chosenGroupPermissions: state => state.chosenGroupPermissions,
    currentGroupEditName: state => state.currentGroupEditName,
}

const mutations = {
    SET_AVAILABLE_GROUP_PERMISSIONS (state, item){
        state.availableGroupPermissions = item
    },
    SET_CHOSEN_GROUP_PERMISSIONS (state, item){
        state.chosenGroupPermissions = item
    },

    TOGGLE_GROUP_EDITING (state) {
        state.editingGroup = !state.editingGroup
    },

    SET_CURRENT_GROUP_EDIT_ID (state, id){
        state.currentGroupEditId = id
    },
    SET_CURRENT_GROUP_EDIT_NAME (state, name){
        state.currentGroupEditName = name
    },

    RESET_EDITING_PERMISSIONS (state){
        state.availableGroupPermissions = []
        state.chosenGroupPermissions = []
    }
}

const actions = {
    cancelEditingGroup: ({commit}) => {
        commit('TOGGLE_GROUP_EDITING')
        commit('SET_CURRENT_GROUP_EDIT_ID', 0)
        commit('SET_CURRENT_GROUP_EDIT_NAME', '')
        commit('RESET_EDITING_PERMISSIONS')
    },

    editGroup: ({commit}, item) => {
        commit('TOGGLE_GROUP_EDITING')
        commit('SET_CURRENT_GROUP_EDIT_ID', item.id)
        commit('SET_CURRENT_GROUP_EDIT_NAME', item.name)
        
        axios.get('groups/'+item.id+'/').then(res => {
            commit('SET_AVAILABLE_GROUP_PERMISSIONS', res.data.availablePermissions)
            commit('SET_CHOSEN_GROUP_PERMISSIONS', res.data.chosenPermissions)
        }).catch(err=> console.log(err.response.data))
    },

    updateCurrentGroupEditName: ({commit}, value) => {
        commit('SET_CURRENT_GROUP_EDIT_NAME', value)
    },

    updateGroup: ({commit, dispatch,state}, item) => {
        axios.put('groups/'+state.currentGroupEditId+'/', item.groupDetail).then(res => {
            dispatch('cancelEditingGroup')
            dispatch('fetchGroups')
        }).catch(err=> console.log(err.response.data))
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}