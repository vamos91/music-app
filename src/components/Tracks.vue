<template>
    <div>
        tracks: {{ album }}
    </div>
</template>

<script>
export default {
    name: 'tracks',
    props:['album'],
    data(){
        return{
            test: ''
        }
    },
    mounted(){
        console.log(this.album)
        fetch(`http://cors-anywhere.herokuapp.com/api.deezer.com/album/${this.album}/tracks`)
        .then(response => response.json())
        .then((data) => {
            console.log(data.data)
        })
    }

}
</script>

<style scoped>

</style>