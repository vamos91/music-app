<template>
    <div class="home center">
       <formulaire></formulaire>
    </div>
</template>

<script>

import formulaire from './Formulaire'
export default {
    name: 'home',
    data(){
        return{
            message: ''
        }
    },
    components:{
        formulaire
    }
}
</script>

<style scoped>

.home{
    height: 90vh;
}

.center{
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>