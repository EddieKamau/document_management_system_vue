<template>
    <div class="tableView">
        <table>
            <tr>
                <th class="userNameColumn">
                    <!-- <div class="inlineBlock">
                        <img src="../../../../assets/Rectangle.svg" alt="">
                    </div> -->
                    <div class="inlineBlock">Username</div>
                </th>

                <th class="emailColumn">Email</th>

                <th class="firstNameColumn">First Name</th>

                <th class="lastNameColumn">
                    <div class="inlineBlock "> LastName </div>                   
                </th>

                <th class="updateColumn">Update</th>
                
                <th class="deleteColumn">Delete</th>
                
            </tr>
            
            <tr v-for="item in items">
                <td class="userNameColumn">
                    <div class="inlineBlock">{{ item.username }}</div>
                </td>

                <td class="emailColumn">
                   <div class="inlineBlock">{{ item.email }}</div>
                </td>

                <td class="firstNameColumn">{{ item.first_name }}</td>

                <td class="lastNameColumn">{{ item.last_name }}</td>

                <td class="updateColumn">
                    <button class="updateButton" @click="updateUser(item.id)">Update</button>
                </td>

                <td class="deleteColumn">
                    <button class="deleteButton" @click="$store.dispatch('deletUser', item.id)">Delete</button>
                </td>
                
            </tr>
        </table>
    </div>
</template>

<script>
export default {

    computed: {
        items (){
            return this.$store.getters.usersList
        }
    },

    methods: {
        updateUser (id){
            this.$store.dispatch('loadEditUser', id)
            this.$store.dispatch('setCurrentUserModuleComponent', 'UsersEditComponent')
        }
    },
    
    created() {
        this.$store.dispatch('setUsersList')
    },
}
</script>

<style scoped>

.tableView {
    padding: 0 1em;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: .6em;
}
 table td, table th {
    padding-top: .5em;
 }

table td, table th {
  border-bottom: 1px solid #dddddd;
  text-align: left;
  font-size: 1rem;
}

table .userNameColumn, table .emailColumn, table .firstNameColumn, table .lastNameColumn {
  width: 21%;
}

table th {
  color: #575757;
}

table th i {
  color: #000;
  stroke: #000;
}


table .userNameColumn div img {
  padding-right: 1.2em;
}



.inlineBlock {
  display: inline-block;
}

.th-icon{
  vertical-align: top;
}

.deleteButton, .updateButton {
    margin-bottom: .4em;
    padding: .2em;
}


@media only screen and (min-width: 1420px) {
    table td, table th {
        font-size: 1.8rem;
        }
    .tableView {
        padding: .4em 2em;
    }
}

</style>
