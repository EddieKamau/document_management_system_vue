<template>
    <div class="main-section">
        <div class="create-item">
            <!-- Options -->
            <div class="form-label item1">Files:</div>
            <div class="dropdown-selector item2">
                <select v-model="document_parent" multiple>
                    <option v-if="files.length > 0" v-for="item in files" :value="item.id">{{ item.file_label }}</option>
                </select>
                <p>Hold down 'Control', or 'Command' on a Mac, to select more than one. </p>
            </div>
            <!-- input item -->
           <div class="form-label item3">Document Name:</div>
            <!-- input -->
            <div class="form-input item4"> <input type="text" v-model="document_label"> </div>
            <!-- input item -->
           <div class="form-label item5">Document:</div>
            <!-- input -->
            <div class="form-input item6"> <input type="File" v-model="document_content" ref="file"> </div>

            <!-- submit btn -->
            <div class="submit-btn item7"><button @click="$store.dispatch('documentCreate', {document_label, document_parent, document_content: $refs.file.files[0]})" >Submit</button></div>
        </div>
        
        <hr>
        <div class="permisions">Permisions</div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            document_parent: [],
            document_label: '',
            document_content: '',
        }
    },


    computed: {
        files (){
            return this.$store.getters.documentFiles
        }
    },

    created() {
        this.$store.dispatch('initDocument')
    },
    
}
</script>

<style scoped>

.item1 { grid-area: files-label; }
.item2 { grid-area: files-select; }
.item3 { grid-area: name-label; }
.item4 { grid-area: document-input; }
.item5 { grid-area: document-label; }
.item6 { grid-area: document; }
.item7 { grid-area: submit-btn; }


.create-item {
    width: 50%;
    padding-bottom: 1em;
    display: grid;
    grid-template-areas:
    'files-label files-select'
    'name-label document-input'
    'document-label document'
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

