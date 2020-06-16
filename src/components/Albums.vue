<template>
<div>
    <audio
        controls
        autoplay
        :src="itemPreview"
        :style="{width: '500px', marginTop: '50px'}"
        >
            Your browser does not support the
            <code>audio</code> element.
    </audio>
    <div class="artistes">
            
            <b-container class="bv-example-row">
                <b-row>
                    <b-col md="5" class="item" v-for="album in albums" v-bind:key="album.id">
                        <div class="style-card center">
                        <img :src="album.cover_medium" alt="" @click="getTracks(album.id)">
                        </div>
                    </b-col>
                </b-row>
            </b-container>
            <b-table :fields="fields" striped hover :items="tracks">
                <template v-slot:cell(title)="data" >
                    <span type="submit" @click="getTrackId(data.item.preview)">{{ data.item.title }}</span>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'artiste',
    data(){
        return{
            slug: this.$route.params.slug,
            albums: [],
            albumId: '',
            tracks: [],
            fields: ['title'],
            itemPreview: ''
        }
    },
    methods:{
        getTracks(album_id){
            fetch(`http://cors-anywhere.herokuapp.com/api.deezer.com/album/${album_id}/tracks`)
            .then(response => response.json())
            .then((data) => {
                console.log(data.data[0].id)
                console.log(data.data[0].title)
                console.log(data.data[0].preview)
                this.tracks = data.data
                
            })
        },
        getTrackId(e){
            this.itemPreview = e
        }
    },
    created(){
        fetch(`https://cors-anywhere.herokuapp.com/api.deezer.com/search/album?q=${this.slug}`)
        .then(response => response.json())
        .then((data) => {
            this.albums = data.data    
        })   
    }
}
</script>

<style scoped>

.artistes{
    margin-top: 50px;
    display: flex;
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