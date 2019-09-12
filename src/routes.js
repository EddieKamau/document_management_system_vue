import Desk from './components/Desk/Desk.vue'
import CabinetManager from './components/CabinetManager/CabinetManager.vue'
import UsersManager from './components/UsersManager/UsersManager.vue'
import AccountManager from './components/AccountManager/AccountManager.vue'

export const routes = [
    { path: '/', component: Desk },
    { path: '/account', component: AccountManager },
    { path: '/cabinet-manager', component: CabinetManager },
    { path: '/users-manager', component: UsersManager },
]