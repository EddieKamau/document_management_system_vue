import personalSection from './PersonalSection'
import cabinetsSection from './CabinetSection'

const state = {
    activeSection: ''
}

const getters = {
    activeSection: state => state.activeSection
}

const mutations = {
    'SET_ACTIVE_SECTION' (state, key){
        state.activeSection = key
    }
}

const actions = {
    setActiveItem: ({commit}, key) => {
        commit('SET_ACTIVE_SECTION', key)
    }
}



const modules = {
    personalSection,
    cabinetsSection
}

export default {
    state,
    mutations,
    actions,
    getters,
    modules
}