<template>
<div>
    <nav-item-parent v-for="item in items"
    :id="item.id"
    :label="item.cabinet_label"
    :itemCount="item.itemCount"
    :collapsed="item.collapsed"
    :sections="item.sections"
    @toggled="item.collapsed = !item.collapsed"> 
</nav-item-parent>
</div>

</template>


<script>
import NavItemParent from '../utils/NavItemParent';
import axios from 'axios'

export default {


    created(){
        this.$store.dispatch('initCabinets')
    },
    
    computed: {
        items(){
            return this.$store.getters.cabinets
        }
    },

    components:{
        NavItemParent        
    }
}
</script>
