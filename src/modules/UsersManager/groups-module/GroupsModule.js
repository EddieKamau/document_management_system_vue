import groupsCreate from './GroupsCreate'
import groupList from './GroupsList'
import groupEdit from './GroupsEdit'

const state = {
    currentGroupModuleComponent: 'GroupsListComponent'
}

const getters = {
    currentGroupModuleComponent: state => state.currentGroupModuleComponent 
}

const mutations = {
    SET_CURRENT_GROUP_MODULE_COMPONENT (state, item){
        state.currentGroupModuleComponent = item
    }
}

const actions = {
    setCurrentGroupModuleComponent: ({commit}, name) => {
        commit('SET_CURRENT_GROUP_MODULE_COMPONENT', name)
    }
}


const modules = {
    groupsCreate,
    groupList,
    groupEdit,
}

export default {
    state,
    getters,
    mutations,
    actions,
    modules,
}