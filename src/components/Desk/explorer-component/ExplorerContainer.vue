<template>
    <div class="explorerWrapper">
        <search-section></search-section>
        <navigation-section></navigation-section>
        <playground-section></playground-section>


    </div>
</template>

<script>

import SearchSection from './components/SearchSection'
import NavigationSection from './components/NavigationSection'
import PlaygroundSection from './components/PlaygroundSection'
export default {
    components:{
        SearchSection,
        NavigationSection,
        PlaygroundSection,
    },




}
</script>

<style scope>

.explorerWrapper {
    padding: 0.8em 2em;

}


</style>
