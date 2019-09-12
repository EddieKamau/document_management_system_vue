<template>
    <div>
        <nav-item v-for="item in items" v-if="item.label == 'Inbox'" :label="item.label" :itemCount="item.itemCount"></nav-item>        
        <nav-item v-for="item in items" v-if="item.label == 'Starred'" :label="item.label" :itemCount="item.itemCount"></nav-item>        
        <nav-item v-for="item in items" v-if="item.label == 'Personal'" :label="item.label" :itemCount="item.itemCount"></nav-item>        
        <nav-item v-for="item in items" v-if="item.label == 'Sent'" :label="item.label" :itemCount="item.itemCount"></nav-item>        
        <!-- <nav-item v-for="item in items" v-else :label="item.label" :itemCount="item.itemCount"></nav-item>         -->
    </div>
</template>

<script>
import NavItem from '../utils/NavItem';

export default {


    created(){
        this.$store.dispatch('initPersonalCabinet')
    },
    
    computed: {
        items(){
            return this.$store.getters.personalCabinet
        }
    },

    components:{
        NavItem
    }
}
</script>


