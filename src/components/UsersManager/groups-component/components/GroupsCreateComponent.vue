<template>
    <div class="main-section">
        <div class="create-item">
            <!-- input label -->
           <div class="form-label item3">Group Name:</div>
            <!-- input -->
            <div class="form-input item4"> <input type="text" v-model="name"> </div>

            <!-- Options -->
            <div class="form-label item1">Permissions:</div>
            <div class="dropdown-selector item2">
                <select v-model="permissions" multiple>
                    <option v-if="groupPermissions.length > 0" v-for="item in groupPermissions" :value="item.id">{{ item.name }}</option>
                </select>
                <p>Hold down 'Control', or 'Command' on a Mac, to select more than one. </p>
            </div>

            <!-- submit btn -->
            <div class="submit-btn item5"><button @click="$store.dispatch('groupsCreate', {name, permissions})" >Submit</button></div>
        </div>

    </div>
</template>

<script>

export default {

    data() {
        return {
            permissions: [],
            name: '',
        }
    },


    computed: {
        groupPermissions (){
            return this.$store.getters.groupPermissions
        }
    },

    created() {
        this.$store.dispatch('initGroupsCreate')
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
    'name-label section-input'
    'cabinet-label cabinet-select'
    'ff submit-btn';
    grid-gap: .5em;
}

select {
    width: 17em;
    height: 13em;
}
input {
    width: 16em;
}
.dropdown-selector p {
    font-size: .7rem;
}




</style>
