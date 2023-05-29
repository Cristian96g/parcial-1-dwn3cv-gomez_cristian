<template>
  <div class="container-fluid">
    <div class="row">
      
        <div v-for="pelicula in resultGuardados" :key="pelicula.id" class="col-12 col-sm-6 col-md-4 col-lg-3" style="max-width: 400px;">
            <PeliculaCard :pelicula="pelicula"></PeliculaCard>
        </div>
    
    </div>
  </div>
</template>
  
  <script>

  import PeliculaCard from './PeliculaCard';
  
  export default {
    name: 'PeliculasGuardadas',
    components: {
          /**
     * Componente de tarjeta de película.
     * @component
     */
      PeliculaCard,
    },
    computed: {
       /**
     * Películas guardadas.
     * @function
     * @returns {Array} Array de películas guardadas.
     */
      resultGuardados() {
        return this.$store.state.resultGuardados;
      },
    },
  };
  </script>

<style>

</style>
  
  