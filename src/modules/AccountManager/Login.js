import axios from 'axios'

const actions = {
    loginAction: ({}, item) => {
        axios.post('users/login/', item).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }
}

export default {
    actions
}