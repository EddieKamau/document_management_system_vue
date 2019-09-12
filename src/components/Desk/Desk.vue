<template>

<div class="wrapper">
    <nav-container></nav-container>
     <explorer-container></explorer-container>
</div>
</template>

<script>
import NavContainer from './nav-component/NavContainer';
import ExplorerContainer from './explorer-component/ExplorerContainer';
export default {

  components:{
    NavContainer,
    ExplorerContainer
  }

}
</script>

<style scope>


.wrapper {
  display: -ms-grid;
  display: grid;
  grid-template-columns: 16em auto;
  height: 100vh;
  width: 100%;
}
@media only screen and (min-width: 1420px) {
  .wrapper{
    grid-template-columns: 25em auto;
  }
}



</style>
