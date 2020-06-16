<template>
  <div v-if="show">
    <b-form v-on:keyup.enter="getAllAlbumFromArtist" id="formulaire">
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        description="Entrez votre artiste ou votre groupe préféré."
      >
        <b-form-input
          id="input-1"
          v-model="form.artist"
         
          type="text"
          required
          placeholder="Ex: Metallica"
          autocomplete="off"
        ></b-form-input>
      </b-form-group>       
    </b-form>
    <!-- <b-button class="getThemeButton" type="submit" @click="getAllStyle" variant="primary">Tous les genres de musique</b-button> -->
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
  export default {
    name: 'formulaire',
    props:[
      'msg'
    ],
    data() {
      return {
        message: true,
        form: {
          artist: '',
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      getAllAlbumFromArtist(){
        alert(JSON.stringify(this.form))
        fetch('https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track/autocomplete?q=green_day')
        .then(response => response.json())
        .then((data) => {
          console.log(data.data)
          data.data.forEach((song) => {
            console.log(song.album.title)
            console.log(song.album.id)
            console.log(song.album.cover_medium)
            console.log(song.album.tracklist)
            console.log(song.preview)
          })
        })
      },
      getAllStyle(){
        this.show = true
        this.$emit('messagetoreceive', this.message)
        // fetch('https://cors-anywhere.herokuapp.com/api.deezer.com/genre')
        // .then(response => response.json())
        // .then((data) => {
        //   console.log(data)
        //   data.data.forEach((genre) => {
        //     // console.log(genre)
        //     console.log(genre.name)
        //     console.log(genre.picture_medium)
        //     console.log(genre.id)
        //   })
        // })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>

#formulaire{
    width: 400px;
}

.getThemeButton{
  height: calc(1.5em + 1.75rem + 30px);
  width: 400px;
  border-radius: 1.25rem;
  background-color: transparent;
  color: gray;
}
</style>