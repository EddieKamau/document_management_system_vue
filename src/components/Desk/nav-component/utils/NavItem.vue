<template>
    <div class="navItem" @click="selectSection()" :class="{navItemActive: id == activeSection}">
                <div class="navItemIcon">
                    <dms-icons :icon="'section'" :color="'currentColor'" ></dms-icons>
                </div>
                <div class="navItemLabel">
                    <p>{{label}}</p>
                </div>
                <div class="navItemSuffix">
                    <p>{{itemCount}}</p>
                </div>
        </div>
</template>

<script>
import DmsIcons from '../../../utils/DmsIcons'
export default {

    components: {
        DmsIcons
    },

    props:[
        'id',
        'label',
        'itemCount',
        'parent_label',
        'parent_id',
    ],

    methods: {
        selectSection (){
            // this.$store.dispatch('setActiveItem', this.itemKey)
            // this.$store.dispatch('setCurrentComponent', this.itemKey)
            this.$store.dispatch('addNavigationItem',{id: this.id, label: this.label, parent_label: this.parent_label, parent_id: this.parent_id, componentName: 'TableView', item_type:'section'})
            
             }
      
    },

    computed: {
        activeSection(){
            return this.$store.getters.activeSection
        }
    },
    
}

</script>

<style>

.navItem {
    margin-left: -1.4em;
    width: calc(100% + 1.7em);
    padding-left:1.4em;
    border-radius: 0 22px 22px 0;
    height: 2.3em;
}

.navItemIcon, .navItemLabel, .navItemSuffix {
  display: inline-block;
}


.navItemLabel {
    height: 100%;
    font-size: 1rem;
}
.navItemLabel p, .navItemSuffix p{
    margin: 10px;
}


.navItemIcon {
    height: 100%;
}





.navItemSuffix {
    height: 100%;
    float: right;
    padding-right: 1.4em;
    font-size: 0.75rem;
}


.navItem:hover {
  cursor: pointer;
  background: rgb(82, 81, 81);
  opacity: 0.8;
}

.navItemActive {
  background: #555555;
}




@media only screen and (min-width: 1420px) {
    .navItem {
        height: 3.4em;
    }
    .navItemLabel {
        font-size: 1.5rem;
        padding-left: 1.0em;
    }
    .navItemLabel p {
        margin: 7px;
    }
    .navItemSuffix {
        font-size: 1.2rem;
    }

}


</style>
