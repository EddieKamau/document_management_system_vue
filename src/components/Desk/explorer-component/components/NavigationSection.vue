<template>
    <div class="explorerNavigation">
        <navigation-item v-for="item in items" :label="item.label" :id="item.id" :parent_label="item.parent_label" :twin="item.twin" :itemKey="item.key"></navigation-item>
        <!-- <navigation-item :label="'Accounts'" :id="'1'"></navigation-item> -->
    </div>
</template>


<script>
import NavigationItem from '../utils/NavigationItem';
export default {

    components: {
        NavigationItem
    },

    computed: {
        items(){
            return this.$store.getters.navigationItems
        }
    },




    
}
</script>


<style scoped>

.explorerNavigation{
    margin-top: 1em;
    width: 100%;
    border-bottom: 2px solid grey;
    /* height: 4.3em; */
}


</style>
