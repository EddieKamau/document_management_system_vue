import axios from 'axios'


const state = {
    navigationItems: [],
}

const getters = {
    navigationItems : state => state.navigationItems
}

const mutations = {
    
    'ADD_NAVIGATION_ITEMS' (state, item){
            state.navigationItems.push(item)
    },
    'REMOVE_NAVIGATION_ITEMS' (state, index){
        state.navigationItems.splice(index, 1)
    },



}

const actions = {

    addPlaygroundComponent: ({commit}, item) => {

            commit('ADD_PLAYGROUND_COMPONENT', item.data)

            commit('SET_CURRENT_COMPONENT_OBJ', item.key)

            

    
    },

    setCurrentComponentObj : ({commit}, key) => {
        commit('SET_CURRENT_COMPONENT_OBJ', key)
    },



    addNavigationItem: ({commit, dispatch, getters}, item) => {


        var index = -1
        item.twin = false

        let itemId= item.id
        let navItem = item
        item.item_type == 'file' ? navItem.key = 'file' + '-' + item.id : navItem.key = 'section' + '-' + item.id

        
        state.navigationItems.forEach((el, indx) => {
            
            if (el.key == navItem.key) {
                index = indx
            }
            if (el.label == item.label){
                item.twin = true
                if(el.key != navItem.key) state.navigationItems[indx].twin = true
            }
        })



        dispatch('setCurrentComponent', navItem.key)
        dispatch('setActiveItem', navItem.key)

        if (index == -1){ 
            commit('ADD_NAVIGATION_ITEMS', item)
            
            let sectionUrl = 'sections/'
            let filesUrl = 'files/'

            let url = ''
            item.item_type == 'section' ?  url = sectionUrl : url = filesUrl

            var data = {}
            axios.get(url + itemId + '/').then(function (res){
                data = res.data
                if(item.item_type == 'section') data.items = data.files
                if(item.item_type == 'section') data.label = data.section_label
                if(item.item_type == 'section') data.content_type = 'file'

                if(item.item_type == 'file') data.items = data.documents
                if(item.item_type == 'file') data.label = data.file_label
                if(item.item_type == 'file') data.content_type = 'document'

                data.componentName = item.componentName
                data.key = navItem.key


                dispatch('addPlaygroundComponent', {key:navItem.key, data: data})  


                }).catch(err => console.log(err))
            
        }
        // console.log(getters.navigationItems[getters.navigationItems.length -1].key)
        dispatch('setCurrentComponentObj', navItem.key)
        
        
    },
}


export default {
    state,
    getters,
    mutations,
    actions,
}