<template>
    <div class="allstyle">
        <b-container class="bv-example-row">
            <b-row>
                <b-col md="3" class="item" v-for="style in all_style" v-bind:key="style.id">
                    <div class="style-card center">
                        <p class="title">{{ style.name }}</p>
                        <router-link :to="{ name: 'Artistes', params: {slug: style.id} }"><img :src="style.picture_medium" alt=""></router-link>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

export default {
    name: 'allStyle',
    data(){
        return{
           all_style: []
        }
    },
    created() {
        fetch('https://cors-anywhere.herokuapp.com/api.deezer.com/genre')
            .then(response => response.json())
            .then((data) => {
            //console.log(data)
            this.all_style = data.data
        })
    }   
}
</script>

<style scoped>

.allstyle{
    margin-top: 100px;
}

ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

li{
    list-style: none;
}

img{
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0 14px 28px rgba(0,0,0,.25),0 5px 10px rgba(0,0,0,.22)!important;
    transition: .4s;
}

img:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)!important;
    transition: .4s;
}

.style-card{
    position: relative;
}

.title{
    position: absolute;
    color: white;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 16px;
    font-weight: bold;
}

.center{
    display: flex;
    align-items: center;
    justify-content: center;
}

.item{
    margin-bottom: 40px;
}

</style>