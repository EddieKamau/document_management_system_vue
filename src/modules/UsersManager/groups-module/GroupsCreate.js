import axios from 'axios'

const state = {
    groupPermissions: []
}

const getters = {
    groupPermissions: state => state.groupPermissions
}

const mutations = {
    SET_GROUPS_PERMISSIONS (state, item){
        state.groupPermissions = item
    },
    
    RESET_GROUPS_PERMISSIONS (state){
        state.groupPermissions = []
    },
    
}

const actions = {
    initGroupsCreate: ({commit}) => {
        axios.get('groups/create/').then(res => {
            commit('SET_GROUPS_PERMISSIONS', res.data.permissions)
        }).catch(err=> console.log(err))
    },

    groupsCreate: ({commit},item) => {
        axios.post('groups/create/', item).then(res => {
            commit('RESET_GROUPS_PERMISSIONS')
        }).catch(err=> console.log(err))
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}