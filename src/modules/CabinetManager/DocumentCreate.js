import axios from 'axios'

const state = {
    documentLabel: '',
    documentFiles: []

}

const getters = {
    documentLabel: state => state.documentLabel,
    documentFiles: state => state.documentFiles
}

const mutations = {
    'SET_FILES' (state, items){
        state.documentFiles = items
    }

}

const actions = {
    initDocument: ({commit}) => {
        axios.get('cabinets/sections/files/documents/create/').then(function(res){
            commit('SET_FILES', res.data.files)
        }).catch(err => console.log(err))
    },
    documentCreate: ({commit}, item) => {
        let response
        let formData = new FormData();
        formData.append('document_content', item.document_content);
        formData.append('document_label', item.document_label);
        item.document_parent.forEach(el => {
            formData.append('document_parent', el);
        })
        axios.post('cabinets/sections/files/documents/create/',
        formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
         .then(function(res){

        }).catch(err => console.log(err.response.data))
    },

}

export default {
    state,
    mutations,
    actions,
    getters
}