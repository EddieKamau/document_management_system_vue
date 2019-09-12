<template>

<div class="nav-container">
  <div class="sidePanel">

    <!-- Todo Logo -->
    <div class="hero">
        ORGANIZATION
    </div>
    <!-- Todo Create Vutton -->
    <div class="createBtn">
        Create
    </div>

    <div class="nav">
        <personal-section></personal-section>
        <cabinet-section></cabinet-section>
    </div>

</div>
</div>
    
</template>
<script>
import PersonalSection from './componets/PersonalSection';
import CabinetSection from './componets/CabinetSection'

export default {

    components:{
        PersonalSection,
        CabinetSection
    }
    
}
</script>

<style scope>
.nav-container{
background: rgb(116, 116, 116);
}

.sidePanel { 
  height: 100vh;
  /* opacity: 0.8;
  background-image: url('../../assets/nav_background.jpg');
  background-repeat: no-repeat;
  background-size: cover; */
  padding: 0.5em 1.7em 0.5em 1.4em;

  color: white;

}
.hero {
  height: 2.5em;
  background: #db3737;
}
.createBtn {
  height: 2.0em;
  background: #3750db;
}
.nav {
  padding-top: 0.9em;
}



@media only screen and (min-width: 1420px) {
    .hero {
  height: 5.0em;
  background: #db3737;
}
.createBtn {
  height: 4.0em;
  background: #3750db;
}
}



</style>
