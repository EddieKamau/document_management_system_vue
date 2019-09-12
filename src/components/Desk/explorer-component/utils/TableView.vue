<template>
    <div class="tableView">
        <table>
            <tr>
                <th class="nameColumn">
                    <div class="inlineBlock">
                        <img src="../../../../assets/Rectangle.svg" alt="">
                    </div>
                    <div class="inlineBlock">Name</div>
                    <div class="suffixIcon inlineBlock th-icon">
                            <dms-icons :icon="'arrow_drop_down'" ></dms-icons>
                    </div>
                </th>

                <th class="aboutColumn">About</th>

                <th class="sizeColumn">Size</th>

                <th class="modifiedColumn">
                    <div class="inlineBlock "> Modified </div>
                      <div class="inlineBlock th-icon" >
                        <dms-icons :icon="'arrow_drop_down'" ></dms-icons>
                    </div>
                    
                </th>
                
            </tr>
            
            <tr v-for="item in items" >
              
                <td class="nameColumn" @click="selectFile(item.id, item.label)">
                    <div class="inlineBlock td-icon">
                        <dms-icons :icon="'folder_outline'" ></dms-icons>
                    </div>
                    <div class="inlineBlock fileName">{{ item.label }}</div>
                </td>

                <td class="aboutColumn td-icon">
                   <dms-icons :icon="'more_horiz'" :color="'grey'"></dms-icons>
                </td>

                <td class="sizeColumn">{{ item.itemCount }} Items</td>

                <td class="modifiedColumn">12 hours ago</td>
                
            </tr>
        </table>
    </div>
</template>


<script>
import DmsIcons from '../../../utils/DmsIcons'

export default {


    components:{
      DmsIcons
    },

    props: [
      'items',
      'parent_id',
      'parent_label',
    ],

   methods: {
        selectFile (id, label){
            this.$store.dispatch('setActiveItem', id)
            this.$store.dispatch('setCurrentComponent', id)
            this.$store.dispatch('addNavigationItem',{id, label, parent_label: this.parent_label, parent_id: this.parent_id, componentName: 'TableView', item_type:'file'})
            
             }
      
    },




  // destroyed(){
  //     console.log("Destroyed")
  // },
  // deactivated(){
  //     console.log("deact")
  // },
  // activated(){
  //     console.log("act")
  // }
    
}
</script>

<style scoped>

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

table .aboutColumn, table .sizeColumn, table .modifiedColumn {
  width: 16%;
}

table th {
  color: #575757;
}

table th i {
  color: #000;
  stroke: #000;
}

table td.sizeColumn {
  color: #7d7d7d;
  font-size: 1.2em;
}

table .modifiedColumn {
  text-align: right;
  padding-right: 2.0em;
}

table td.nameColumn {
  cursor: pointer;
}

table .nameColumn div img {
  padding-right: 1.2em;
}

.fileName {
    padding-bottom: .3em;
}



.inlineBlock {
  display: inline-block;
}

.td-icon{
  padding-right: .6em; 
  vertical-align: bottom;
}
.th-icon{
  vertical-align: top;
}



@media only screen and (min-width: 1420px) {
    table td, table th {
        font-size: 1.8rem;
        }
    table td.sizeColumn {
        font-size: 2em;
        }
}

</style>
