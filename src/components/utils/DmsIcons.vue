<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path :d="path(icon)" :fill="color == null ? '': color"/></svg>
    </div>
</template>

<script>
import { icons } from './icons'

export default {
    props:[
        'icon',
        'color'
    ],


    methods: {
        path(iconName){
            let d = ''
            icons.forEach(icon => {
                if (icon.name == iconName) {
                    d = icon.path
                }
            })
            return d
        }
    }
}
</script>

<style scoped>
svg{
    width: 30px;
    height: 30px;
}
@media only screen and (min-width: 1420px) {
    svg{
        width: 40px;
        height: 40px;
    }
}
</style>
