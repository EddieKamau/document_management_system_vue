<template>
    <div class="navigationItem">
        <!-- Label -->
        <div class="navigationItemLabel" @click="$store.dispatch('setCurrentComponentObj', itemKey)"> {{ twin ? parent_label + "-": '' }} {{ label }}</div>
        <!-- Close Icon -->
        <div class="navigationItemCloseIcon" @click="$store.dispatch('removePlaygroundComponent', itemKey)">
            <img src="../../../../assets/ic_close_black_24dp.png" width="15px" height="15px">
        </div>
       
    </div>
</template>


<script>


export default {

    props: [
        'id',
        'itemKey',
        'label',
        'parent_label',
        'twin'
    ],

    methods: {
        closeCoponent(){
            
        }
    },


    
}
</script>


<style scoped>
.navigationItem{
    height: 2.1em;
    /* width: 5em; */
    background: rgb(194, 194, 194);
    display: inline-block;
    text-align: center;
    margin-right: 1px;
}


.navigationItem:hover {
    background: rgb(158, 158, 158);
    cursor: pointer;
}

.navigationItemLabel {
    /* height: 100%; */
    padding-left: .6em;
    display: inline-block;
    /* margin-top: 7% */
    padding-top: .5em;
    
}

.navigationItemCloseIcon {
    height: 100%;
    float: right;
    padding: .4em;
    margin-top: 4%
}

.navigationItemSelected {
    background: rgb(158, 158, 158);
}

@media only screen and (min-width: 1420px) {
    .navigationItem{
        font-size: 1.8rem;
    }
    .navigationItemCloseIcon {
        margin-top: 1%
    }

}

</style>
