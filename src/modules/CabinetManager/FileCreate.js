import axios from 'axios'

const state = {
    fileLabel: '',
    fileSections: []

}

const getters = {
    fileLabel: state => state.fileLabel,
    fileSections: state => state.fileSections
}

const mutations = {
    'SET_SECTIONS' (state, items){
        state.fileSections = items
    }

}

const actions = {
    initFile: ({commit}) => {
        axios.get('cabinets/sections/files/create/').then(function(res){
            commit('SET_SECTIONS', res.data.sections)
        }).catch(err => console.log(err))
    },
    fileCreate: ({commit}, item) => {
        let response
        // console.log(item)
        axios.post('cabinets/sections/files/create/', item).then(function(res){

        }).catch(err => console.log(err))
    },

}

export default {
    state,
    mutations,
    actions,
    getters
}