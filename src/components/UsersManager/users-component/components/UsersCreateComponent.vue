<template>
    <div class="main-section">
        <div class="create-item">
            <!-- input item -->
                <!-- label -->
            <div class="form-label item1">UserName:</div>
            <!-- input -->
            <div class="form-input item2"> <input type="text" v-model="username"> </div>
                <!-- label -->
            <div class="form-label item3">First Name:</div>
            <!-- input -->
            <div class="form-input item4"> <input type="text" v-model="first_name"> </div>
                <!-- label -->
            <div class="form-label item5">Last Name:</div>
            <!-- input -->
            <div class="form-input item6"> <input type="text" v-model="last_name"> </div>
                <!-- label -->
            <div class="form-label item9">Email:</div>
            <!-- input -->
            <div class="form-input item10"> <input type="text" v-model="email"> </div>
                <!-- label -->
            <div class="form-label item11">Confirm Email:</div>
            <!-- input -->
            <div class="form-input item12"> <input type="email" v-model="c_email"> </div>

            <!-- submit btn -->
            <div class="submit-btn item13"  @click="$store.dispatch('userCreate', {
            username,
            first_name,
            last_name,
            email,
            })"><button >Submit</button></div>
        </div>
        <hr>
        <div class="permisions">
            <p class="title">Permissions</p>
            <div class="container" v-if="showPermisions"> 
                <div class="users-groups">
                    <div class="available-groups">
                        <h5>Available Groups</h5>
                        <select multiple v-model="avlGselected">

                            <option 
                            v-for="item in availableGroups" :value="item.id">
                            {{ item.name }}
                            </option>

                        </select>
                    </div>

                    <div class="toggleGroup">

                        <button @click="addGroup(avlGselected)">add</button>
                        <button @click="removeGroup(chGselected)">rem</button>

                    </div>

                    <div class="choosen-groups">
                        <h5>Choosen Groups</h5>
                        <select multiple v-model="chGselected">

                            <option 
                            v-for="item in chosenGroups" :value="item.id">
                            {{ item.name }}
                            </option>

                        </select>
                        <div><button @click="updateGroups">Update</button></div>
                    </div>
                    
                </div>




                <div class="users-permissions">
                      <div class="available-permissions">
                        <h5>Available Permissions</h5>
                        <select multiple v-model="avlPselected">

                            <option 
                            v-for="item in availablePermissions" :value="item.id">
                            {{ item.name }}
                            </option>

                        </select>
                    </div>

                    <div class="toggleGroup">

                        <button @click="addPermission(avlPselected)">add</button>
                        <button @click="removePermission(chPselected)">rem</button>

                    </div>

                    <div class="choosen-permissions">
                        <h5>Choosen Permissions</h5>
                        <select multiple v-model="chPselected">

                            <option 
                            v-for="item in chosenPermissions" :value="item.id">
                            {{ item.name }}
                            </option>

                        </select>
                        <div><button @click="updatePermissions">Update</button></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            c_email: '',

            avlGselected: [],
            chGselected: [],

            avlPselected: [],
            chPselected: [],
        }
    },
    methods: {
        addGroup(lst){
            lst.forEach(element => {
                let avIndex
                this.availableGroups.forEach((el, index) => {
                    el.id == element ? avIndex = index : null
                })
                this.availableGroups.length != 0 ? this.chosenGroups.push(this.availableGroups[avIndex]) : null
                this.availableGroups.splice(avIndex, 1)
            });
        },
        
        removeGroup(lst){
            lst.forEach(element => {
                let avIndex
                this.chosenGroups.forEach((el, index) => {
                    el.id == element ? avIndex = index : null
                })
                this.chosenGroups.length != 0 ? this.availableGroups.push(this.chosenGroups[avIndex]) : null
                this.chosenGroups.splice(avIndex, 1)
            });
        },


        addPermission(lst){
            lst.forEach(element => {
                let avIndex
                this.availablePermissions.forEach((el, index) => {
                    el.id == element ? avIndex = index : null
                })
                this.availablePermissions.length != 0 ? this.chosenPermissions.push(this.availablePermissions[avIndex]) : null
                this.availablePermissions.splice(avIndex, 1)
            });
        },
        
        removePermission(lst){
            lst.forEach(element => {
                let avIndex
                this.chosenPermissions.forEach((el, index) => {
                    el.id == element ? avIndex = index : null
                })
                this.chosenPermissions.length != 0 ? this.availablePermissions.push(this.chosenPermissions[avIndex]) : null
                this.chosenPermissions.splice(avIndex, 1)
            });
        },

        updatePermissions(){
            let list = []
            this.chosenPermissions.forEach(el => {
                list.push(el.id)
            })
            this.$store.dispatch('updateUserPermissions', {user_permissions: list})
        },
        
        updateGroups(){
            let list = []
            this.chosenGroups.forEach(el => {
                list.push(el.id)
            })
            this.$store.dispatch('updateUserGroups', {groups: list})
        },

    },

    computed: {
        showPermisions(){
            return this.$store.getters.showPermisions
        },
        availableGroups(){
            return this.$store.getters.availableGroups
        },
        availablePermissions(){
            return this.$store.getters.availablePermissions
        },
        chosenGroups(){
            return this.$store.getters.chosenGroups
        },
        chosenPermissions(){
            return this.$store.getters.chosenPermissions
        }
    },


    
}
</script>


<style scoped>

.main-section {
    padding: 2.5em 2em;
}


.item1 { grid-area: username-label; }
.item2 { grid-area: username-input; }
.item3 { grid-area: fName-label; }
.item4 { grid-area: fName-input; }
.item5 { grid-area: lName-label; }
.item6 { grid-area: lName-input; }
.item7 { grid-area: phoneNo-label; }
.item8 { grid-area: phoneNo-input; }
.item9 { grid-area: email-label; }
.item10 { grid-area: email-input; }
.item11 { grid-area: cEmail-label; }
.item12 { grid-area: cEmail-input; }
.item13 { grid-area: submit-btn; }


.create-item {
    /* height: 100px;
    overflow: auto; */
    width: 37%;
    padding-bottom: 1em;
    display: grid;
    grid-template-areas:
    'username-label username-input'
    'fName-label fName-input'
    'lName-label lName-input'
    'phoneNo-label phoneNo-input'
    'email-label email-input'
    'cEmail-label cEmail-input'
    'ff submit-btn';
    grid-gap: .5em;
}

.permisions .container .users-groups, .permisions .container .users-permissions {
    display: grid;
      grid-template-columns: 27em 6em auto;
}

.permisions h5, .permisions p {
    margin: .6em;
}

.permisions .container select{
    width: 22em;
    height: 14em;
}

.toggleGroup {
    display: block;
    margin-top: auto;
    margin-bottom: auto;
}


</style>
