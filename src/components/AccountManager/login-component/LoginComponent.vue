<template>
<div class="login-container">
    <div class="login-form">
        <div class="username-label">Username:</div>
        <div class="username-input">
            <input type="text" v-model="username">
        </div>

        <div class="password-label">Password:</div>
        <div class="password-input">
            <input type="password" v-model="password"> 
        </div>
        <div class="btn">
            <button @click="$store.dispatch('loginAction', {username, password})">Login</button>
            <p class="forgotten-password">Forgotten Password</p>
        </div>
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            username: '',
            password: '',
        }
    },
    
}
</script>

<style scoped>



.username-label {grid-area: username-label}
.username-input {grid-area: username-input}
.password-label {grid-area: password-label}
.password-input {grid-area: password-input}
.btn {grid-area: btn}

.login-form {
    display: grid;
    grid-template-areas: 
    'username-label username-input'
    'password-label password-input'
    'blank btn';

    grid-gap: 1em;

    background: rgb(233, 222, 222);
    width: 25em;
    margin: auto;
    margin-top: 20%;
    padding: 2em;
    border-radius: 10px
}

.forgotten-password {
    display: inline-block;
    margin-left: 2em;
}

</style>
