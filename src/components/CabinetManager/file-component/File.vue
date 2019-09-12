<template>
    <div class="main-section">
        <div class="create-item">
            <!-- Options -->
            <div class="form-label item1">Sections:</div>
            <div class="dropdown-selector item2">
                <select v-model="file_parent" multiple>
                    <option v-if="sections.length > 0" v-for="item in sections" :value="item.id">{{ item.section_label }}</option>
                </select>
                <p>Hold down 'Control', or 'Command' on a Mac, to select more than one. </p>
            </div>
            <!-- input item -->
           <div class="form-label item3">File Name:</div>
            <!-- input -->
            <div class="form-input item4"> <input type="text" v-model="file_label"> </div>

            <!-- submit btn -->
            <div class="submit-btn item5"><button @click="$store.dispatch('fileCreate', {file_label, file_parent})" >Submit</button></div>
        </div>

        <hr>
        <div class="permisions">Permisions</div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            file_parent: [],
            file_label: '',
        }
    },



    computed: {
        sections (){
            return this.$store.getters.fileSections
        }
    },

    created() {
        this.$store.dispatch('initFile')
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
    width: 50%;
    padding-bottom: 1em;
    display: grid;
    grid-template-areas:
    'cabinet-label cabinet-select'
    'name-label section-input'
    'ff submit-btn';
    grid-gap: .5em;
}

select {
    width: 17em;
    height: 8em;
}
input {
    width: 16em;
}
.dropdown-selector p {
    font-size: .7rem;
}




</style>
