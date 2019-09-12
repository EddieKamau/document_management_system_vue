<template>

<div>
    <component :is="'LoginComponent'"></component>
</div>
    
</template>

<script>
import LoginComponent from './login-component/LoginComponent'
export default {

    components: {
        LoginComponent
    }
    
}
</script>

<style scoped>

</style>
