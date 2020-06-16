<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <router-link to="/"><b-navbar-brand> Home</b-navbar-brand></router-link>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav> 
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <router-link to="/genres"><b-navbar-brand>Voir tous les styles</b-navbar-brand></router-link>
                        <b-nav-item href="#">Créer une playlist</b-nav-item>
                        <b-nav-item href="#">Mes playlists</b-nav-item>
                    </b-navbar-nav>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style scoped>

</style>