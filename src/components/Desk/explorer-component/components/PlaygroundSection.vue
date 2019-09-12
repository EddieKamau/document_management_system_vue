<template>
    <div class="playGroundSection">
        <keep-alive>
        <component 
        :is="currentComponentObj.componentName" 
        :key="currentComponentObj.key" 
        v-bind="{items: currentComponentObj.items, parent_id: currentComponentObj.id, parent_label: currentComponentObj.label}"></component>
        </keep-alive>

    </div>
</template>

<script>
import TableView from '../utils/TableView';
import LandingPage from '../../../utils/LandingPage'
export default {
    components:{
        LandingPage,
        TableView
    },
    computed: {
        currentComponentObj(){
            return this.$store.getters.currentComponentObject
        },
        

    },


}
</script>

