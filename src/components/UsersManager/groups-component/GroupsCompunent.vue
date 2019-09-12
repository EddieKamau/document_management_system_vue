<template>

<div>
    <div class="group-nav-bar">
        <div class="list-groups" @click="setListGroupsComponent">Groups</div>
        <div class="create-groups" @click="$store.dispatch('setCurrentGroupModuleComponent', 'GroupsCreateComponent')">Create Groups</div>
    </div> 
    <keep-alive>
     <component :is="currentComponent"></component>
    </keep-alive>   
    
</div>
    
</template>

<script>
import GroupsCreateComponent from './components/GroupsCreateComponent'
import GroupsListComponent from './components/GroupsListComponent'

export default {

    components:{
        GroupsCreateComponent,
        GroupsListComponent
    },

    computed: {
        currentComponent () {
            return this.$store.getters.currentGroupModuleComponent
        }
    },

    methods: {
        setListGroupsComponent (){
            this.$store.dispatch('setCurrentGroupModuleComponent', 'GroupsListComponent')
            this.$store.dispatch('fetchGroups')

        }
    },
    
}
</script>

<style scoped>

.group-nav-bar {
    display: grid;
    grid-template-columns: 40% 60%;
    background: rgb(209, 209, 209); 
}

.group-nav-bar div {
    padding: 1em;
    cursor: pointer;
    border-right: .2em solid rgb(194, 225, 255);
}

</style>
