import usersCreate from './UsersCreate'
import usersList from './UsersList'
import usersEdit from './UsersEdit'

const state = {
    currentUserModuleComponent: 'UsersListComponent'
}

const getters = {
    currentUserModuleComponent: state => state.currentUserModuleComponent 
}

const mutations = {
    SET_CURRENT_USER_MODULE_COMPONENT (state, item){
        state.currentUserModuleComponent = item
    }
}

const actions = {
    setCurrentUserModuleComponent: ({commit}, name) => {
        commit('SET_CURRENT_USER_MODULE_COMPONENT', name)
    }
}

const modules = {
    usersCreate,
    usersList,
    usersEdit,
}

export default {
    state,
    getters,
    mutations,
    actions,
    modules,
}