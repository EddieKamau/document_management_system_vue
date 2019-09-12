import axios from 'axios'

const state = {
    sectionLabel: '',
    sectionCabinets: []

}

const getters = {
    sectionLabel: state => state.sectionLabel,
    sectionCabinets: state => state.sectionCabinets
}

const mutations = {
    'SET_CABINETS' (state, items){
        state.sectionCabinets = items
    }

}

const actions = {
    initSection: ({commit}) => {
        axios.get('cabinets/sections/create/').then(function(res){
            commit('SET_CABINETS', res.data.cabinets)
        }).catch(err => console.log(err))
    },
    sectionCreate: ({commit}, item) => {
        let response
        axios.post('cabinets/sections/create/', item).then(function(res){

        }).catch(err => console.log(err))
    },

}

export default {
    state,
    mutations,
    actions,
    getters
}