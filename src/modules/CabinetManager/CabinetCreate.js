import axios from 'axios'

const state = {
    cabinetLabel: ''

}

const getters = {
    cabinetLabel: state => state.cabinetLabel
}

const mutations = {

}

const actions = {
    cabinetCreate: ({commit}, name) => {
        let response
        axios.post('cabinets/create/', {cabinet_label: name}).then(function(res){
            console.log(res)
        }).catch(err => console.log(err))
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}