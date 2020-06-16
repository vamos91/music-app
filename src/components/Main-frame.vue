<template>
    <div>
        <home class="center"></home>
         <allstyle></allstyle>
    </div>
</template>

<script>

import home from './Home'
import allstyle from './AllStyle'

export default {
    name: 'main-frame',
    data(){
        return{
            show: false
        }
    },
    components:{
        home,
        allstyle
    }
}
</script>

<style scoped>

.center{
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>