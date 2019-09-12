import axios from 'axios'

const state = {
    cabinets:[]
}

const mutations = {
    'SET_CABINETS' (state, cabinets) {
        state.cabinets = cabinets
    }
}

const actions = {
    initCabinets: ({commit}) => {
        var data = []
        axios.get('cabinets/').then(function (res){
            data = res.data
            for (let dt in data) {
                data[dt].collapsed = false
                data[dt].itemCount = data[dt].sections.length

            }



            commit('SET_CABINETS', data)

            
        }).catch(err => console.log(err))

        
    }
}

const getters = {
    cabinets: state => state.cabinets

}

export default {
    state,
    mutations,
    actions,
    getters
}