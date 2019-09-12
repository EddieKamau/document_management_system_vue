<template>
    <div class="main-section">
        <div class="create-item">
            <!-- Options -->
            <div class="form-label item1">Cabinets:</div>
            <div class="dropdown-selector item2">
                <select v-model="section_parent">
                    <option v-if="cabinets.length > 0" v-for="item in cabinets" :value="item.id">{{ item.cabinet_label }}</option>
                </select>
            </div>
            <!-- input item -->
           <div class="form-label item3">Section Name:</div>
            <!-- input -->
            <div class="form-input item4"> <input type="text" v-model="section_label"> </div>

            <!-- submit btn -->
            <div class="submit-btn item5"><button @click="$store.dispatch('sectionCreate', {section_label, section_parent})" >Submit</button></div>
        </div>

        <hr>
        <div class="permisions">Permisions</div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            section_parent: '',
            section_label: '',
        }
    },


    computed: {
        cabinets (){
            return this.$store.getters.sectionCabinets
        }
    },

    created() {
        this.$store.dispatch('initSection')
    },
    
}
</script>

<style scoped>

.item1 { grid-area: cabinet-label; }
.item2 { grid-area: cabinet-select; }
.item3 { grid-area: name-label; }
.item4 { grid-area: section-input; }
.item5 { grid-area: submit-btn; }


.create-item {
    width: 34%;
    padding-bottom: 1em;
    display: grid;
    grid-template-areas:
    'cabinet-label cabinet-select'
    'name-label section-input'
    'ff submit-btn';
    grid-gap: .5em;
}



</style>
