<template>

<div>
    
    <div class="edit-container" v-if="editingGroup">
        <div class="permissions">
            <div class="available-permissions">
                <h5 class="container-title">Availabel Permisions</h5>
                <select multiple v-model="avlPselected">
                    <option v-for="item in availableGroupPermissions" :value="item.id">{{ item.name }}</option>
                </select>
            </div>

            <div class="toggleGroup">
                <button @click="addPermission(avlPselected)">add</button>
                <button @click="removePermission(chPselected)">rem</button>
            </div>

            <div class="chosen-permissions">
                <h5 class="container-title">Chosen Permisions</h5>
                <select multiple v-model="chPselected">
                    <option v-for="item in chosenGroupPermissions" :value="item.id">{{ item.name }}</option>
                </select>
                <input type="text" v-model="currentGroupEditName">
                <div class="edit-btn">
                    <button class="btn-update" @click="updateGroup">Update</button>
                    <button class="btn-cancel" @click="$store.dispatch('cancelEditingGroup')">Cance</button>
                </div>
               
            </div>
        </div>
    </div>

    <div class="groups-wrapper">
        <div class="group-container" v-for="item in groupsList" >
            <div class="group-detail">
                <div class="container-title">
                    <h5>{{ item.name }}</h5>
                    <h5 class="edit-group" @click="$store.dispatch('editGroup', {id: item.id, name: item.name})">Edit</h5>
                </div>
                
                <div class="permissions-list">
                    <ul>
                        <li v-for="perm in item.permissions">{{perm.name}}</li>
                    </ul>
                </div>
            </div>
        <button>Delete</button>
        </div>
        

    </div>




</div>

</template>

<script>
export default {

    data() {
        return {
            avlPselected: [],
            chPselected: [],
        }
    },

    computed: {
        groupsList (){
            return this.$store.getters.groupsList
        },

        editingGroup (){
            return this.$store.getters.editingGroup
        },
        currentGroupEditName: {
            get (){
                return this.$store.getters.currentGroupEditName
            },
            set (value){
                this.$store.dispatch('updateCurrentGroupEditName', value)
            }
        },
        
        availableGroupPermissions (){
            return this.$store.getters.availableGroupPermissions
        },
        chosenGroupPermissions (){
            return this.$store.getters.chosenGroupPermissions
        },

    },

    methods: {
        addPermission(lst){
            lst.forEach(element => {
                let avIndex
                this.availableGroupPermissions.forEach((el, index) => {
                    el.id == element ? avIndex = index : null
                })
                this.availableGroupPermissions.length != 0 ? this.chosenGroupPermissions.push(this.availableGroupPermissions[avIndex]) : null
                this.availableGroupPermissions.splice(avIndex, 1)
            });
        },
        
        removePermission(lst){
            lst.forEach(element => {
                let avIndex
                this.chosenGroupPermissions.forEach((el, index) => {
                    el.id == element ? avIndex = index : null
                })
                this.chosenGroupPermissions.length != 0 ? this.availableGroupPermissions.push(this.chosenGroupPermissions[avIndex]) : null
                this.chosenGroupPermissions.splice(avIndex, 1)
            });
        },

        updateGroup(){
            let list = []
            this.chosenGroupPermissions.forEach(el => {
                list.push(el.id)
            })
            this.$store.dispatch('updateGroup', {
                groupDetail: {permissions: list, name: this.currentGroupEditName},
                chosenGroupPermissions: this.chosenGroupPermissions
                })
        },
        
    },

    created() {
        this.$store.dispatch('fetchGroups')
    }
    
}
</script>

<style scoped>

.groups-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20em, 26em));
    grid-gap: 1em;
}

.edit-container {
    background: rgba(180, 180, 180, 0.521);
    width: 100%;
    height: 100%;
    padding: 15em 25em;
    position: absolute;
}


.permissions {
    display: grid;
    grid-template-columns: 26em 6em 26em;
    grid-gap: .5em;
}


.toggleGroup {
    display: block;
    margin-top: auto;
    margin-bottom: auto;
}
.permissions select{
    width: 100%;
    height: 14em;
}

.group-container {
    background: whitesmoke;
}

.group-container .container-title, .permissions .container-title {
    color: white;
    background: rgb(49, 94, 71);
    margin: 0;
    padding: .7em;
}

.permissions-list {
    height: 15.5em;
    overflow: auto;
}

.group-container button {
    float: right;
}

.group-detail ul {
    list-style-type: none;
    margin: 0;
    padding: .4em 0;
}

.group-detail ul li {
    background: #cce5ff;
    margin: 1.5px;
    padding: .4em;
}

.container-title h5{
    display: inline-block;
     margin: 0;
}

.container-title .edit-group {
    background: whitesmoke;
    float: right;
    padding: .3em 2em;
    color: black;
    cursor: pointer;
}
.edit-btn .btn-cancel, .edit-btn .btn-update {
    display: inline-block;
}
.edit-btn .btn-cancel {
    float: right;
}

</style>

