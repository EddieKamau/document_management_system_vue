<template>

<div class="wrapper">
    <div class="side-panel">
        <div class="select-btn" @click="currentComponent='UsersComponent'">Users</div>
        <div class="select-btn" @click="currentComponent='Groups'">Groups</div>
    </div>
    <component :is="currentComponent"></component>


</div>
    
</template>


<script>
import LandingPage from '../utils/LandingPage'
import UsersComponent from './users-component/UsersComponent'
import Groups from './groups-component/GroupsCompunent'

export default {

    data() {
        return {
            currentComponent: 'LandingPage'
        }
    },

    components: {
        LandingPage,
        UsersComponent,
        Groups,
    }
    
}
</script>


<style scoped>

.side-panel {
    background: rgb(243, 243, 243);
    padding-top: 12em;
    
}

.select-btn {
    border: 1.5px solid rgb(245, 230, 230);
    background: rgb(216, 227, 228);
    padding: .9em;
}

.select-btn:hover {
    cursor: pointer;
}

.main-section {
    padding: 1.4em
}


.wrapper {
  display: -ms-grid;
  display: grid;
  grid-template-columns: 16em auto;
  height: 100vh;
  width: 100%;
}
@media only screen and (min-width: 1420px) {

    .side-panel {
        padding-top: 24em;
    }

    .select-btn {
        padding: 1.8em;
    }

  .wrapper{
    grid-template-columns: 25em auto;
  }
}


</style>
