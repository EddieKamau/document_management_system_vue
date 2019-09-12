import Vue from 'vue';
import Vuex from 'vuex';
import deskModules from '../modules/Desk/DeskModules'
import cabinetManagerModules from '../modules/CabinetManager/CabinetManager'
import usersManagerModules from '../modules/UsersManager/UsersManager'
import accountManagerModules from '../modules/AccountManager/AccountManagerModules'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        deskModules,
        cabinetManagerModules,
        usersManagerModules,
        accountManagerModules
    }
});