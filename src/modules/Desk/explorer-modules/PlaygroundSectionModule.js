

const state = {
    playgroundComponents: [],
    currentComponent: '',
    currentComponentObject: {componentName: 'LandingPage'}
}

const getters = {
    playgroundComponents: state => state.playgroundComponents,
    currentComponent: state => state.currentComponent, 
    currentComponentObject: state => state.currentComponentObject,

}

const mutations = {
    ADD_PLAYGROUND_COMPONENT (state, item){
        state.playgroundComponents.push(item)
    },

    REMOVE_PLAYGROUND_COMPONENT (state, index){        
        state.playgroundComponents.splice(index, 1)
    },


    SET_CURRENT_COMPONENT (state, key){
        
        state.currentComponent = key
    },

    SET_CURRENT_COMPONENT_OBJ (state, key){
        state.playgroundComponents.forEach(el => {
            if(el.key == key) {
                state.currentComponentObject = el
                
            }
            
        });
    },

}

const actions = {
    setCurrentComponent: ({commit}, key) => {
       commit('SET_CURRENT_COMPONENT', key)

    },

    removePlaygroundComponent: ({commit, getters, state}, key) => {
        let index = state.playgroundComponents.findIndex(f => f.key === key)
        console.log(index)
        commit('REMOVE_PLAYGROUND_COMPONENT', index)
        commit('REMOVE_NAVIGATION_ITEMS', index)
        if (getters.currentComponent == key) {
            if (index == 0) { 
                state.currentComponentObject = {componentName: 'LandingPage'} 
            }

            else {
                let componentKey = getters.playgroundComponents[index - 1].key
                commit('SET_CURRENT_COMPONENT_OBJ', componentKey)
                commit('SET_CURRENT_COMPONENT', componentKey)
            }
        }
    }
}


export default {
    state,
    getters,
    mutations,
    actions,
}