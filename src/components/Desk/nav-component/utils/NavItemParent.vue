<template>
    <div>
        <div class="navItem cabinet" @click="$emit('toggled')">
            <div class="navItemIcon">
                <dms-icons :icon="'cabinet'" :color="'currentColor'" ></dms-icons>
            </div>
            <div class="navItemLabel">
                <p>{{label}}</p>
            </div>
            <div class="navItemSuffix">
                <p>{{itemCount}}</p>
                <div class="navItemSuffixIcon">
                    <dms-icons :icon="'arrow_drop_down'" :color="'currentColor'" ></dms-icons>
                </div>
            </div>
        </div>
    <div class="cabinetBody" v-if="collapsed">
        <nav-item v-for="item in sections" :label="item.section_label" :itemCount="item.itemCount" :id="item.id" :parent_label="label" :parent_id="id"></nav-item>
    </div>
    </div>
</template>

<script>
import DmsIcons from '../../../utils/DmsIcons'
import NavItem from '../utils/NavItem';

export default {

    props: [
        'id',
        'label',
        'itemCount',
        'collapsed',
        'sections'
    ],

    components: {
        NavItem,
        DmsIcons
    },

    
}
</script>


<style scope>
.navItemSuffixIcon {
    cursor: pointer;
}

.navItemSuffixIcon, .navItemSuffix p {
    display: inline-block;
}

.cabinetBody {
    padding-left: 1.6em;
}
.navItemSuffixIcon, .navItemIcon{
    vertical-align: bottom;
}


</style>
