<template>
    <div class="artistes">
        <b-container class="bv-example-row">
            <b-row>
                <b-col md="3" class="item" v-for="artiste in artistes" v-bind:key="artiste.id">
                    <div class="style-card center">
                        <p class="title">{{ artiste.name }}</p>
                        <router-link :to="{ name: 'Albums', params: {slug: artiste.name} }"><img :src="artiste.picture_medium" alt=""></router-link>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'artiste',
    data(){
        return{
            slug: this.$route.params.slug,
            artistes: []
        }
    },
    mounted(){
        fetch(`https://cors-anywhere.herokuapp.com/api.deezer.com/chart/${this.slug}/artists`)
        .then(response => response.json())
        .then((data) => {
           // console.log(data.data)
            this.artistes = data.data
        })
    }
}
</script>

<style scoped>

.artistes{
    margin-top: 100px;
}

.center{
    display: flex;
    align-items: center;
    justify-content: center;
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

.item{
    margin-bottom: 40px;
}
</style>