<template>

<div class="wrapper">
    <div class="side-panel">
        <div class="select-btn" @click="currentComponent='Cabinet'">Cabinet</div>
        <div class="select-btn" @click="currentComponent='Section'">Section</div>
        <div class="select-btn" @click="currentComponent='File'">File</div>
        <div class="select-btn" @click="currentComponent='Document'">Document</div>
    </div>
    <component :is="currentComponent"></component>


</div>
    
</template>


<script>
import Cabinet from './cabinet-component/Cabinet'
import Section from './section-component/Section'
import File from './file-component/File'
import Document from './document-component/Document'
import LandingPage from '../utils/LandingPage'

export default {

    data() {
        return {
            currentComponent: 'LandingPage'
        }
    },

    components: {
        LandingPage,
        Cabinet,
        Section,
        File,
        Document,
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
