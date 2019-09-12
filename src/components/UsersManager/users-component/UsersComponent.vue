<template>

<div>
    <div class="user-pane-nav">
        <div @click="initUsersListComponent">Users List</div>
        <div @click="$store.dispatch('setCurrentUserModuleComponent', 'UsersCreateComponent')">Create</div>
    </div>
    <component :is="currentComponent"></component>
</div>
    
</template>

<script>
import UsersCreateComponent from './components/UsersCreateComponent'
import UsersListComponent from './components/UsersListComponent'
import UsersEditComponent from './components/UsersEditComponent'
export default {
    components: {
        UsersCreateComponent,
        UsersListComponent,
        UsersEditComponent,
    },

    computed: {
        currentComponent () {
            return this.$store.getters.currentUserModuleComponent
        }
    },

    methods: {
        initUsersListComponent (){
            this.$store.dispatch('setCurrentUserModuleComponent', 'UsersListComponent')
            this.$store.dispatch('setUsersList')
        }
    },


}
</script>

<style scoped>

.user-pane-nav {
    display: grid;
    grid-template-columns: 40% 60%;
    background: rgb(209, 209, 209); 
}

.user-pane-nav div {
    padding: 1em;
    cursor: pointer;
    border-right: .2em solid rgb(194, 225, 255);
}

</style>
