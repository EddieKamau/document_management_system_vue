import axios from 'axios'

const state = {
    personalCabinet:[]
}

const mutations = {
    'SET_PERSONAL_CABINET' (state, personalCabinet) {
        state.personalCabinet = personalCabinet
    }
}

const actions = {
    initPersonalCabinet: ({commit}) => {
        var data = []
        axios.get('cabinets/personal/').then(function (res){
            data = res.data
            for (let dt in data) {
                data[dt].collapsed = false
                data[dt].itemCount = data[dt].sections.length

            }

            commit('SET_PERSONAL_CABINET', data)


        }).catch(err => console.log(err))



        // var personalCabinet = [
        //     {
        //         label: "Inbox",
        //         itemCount: "34"
        //     },
        //     {
        //         label: "Starred",
        //         itemCount: "34"
        //     }, 
        //     {
        //         label: "Personal",
        //         itemCount: "34"
        //     },
        //     {
        //         label: "Sent",
        //         itemCount: "34"
        //     }
        // ]
        // commit('SET_PERSONAL_CABINET', personalCabinet)
    }
}

const getters = {
    personalCabinet: state => state.personalCabinet

}

export default {
    state,
    mutations,
    actions,
    getters
}