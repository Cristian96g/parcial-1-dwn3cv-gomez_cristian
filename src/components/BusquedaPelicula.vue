<template>
  <div class="hero-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 justify-content-center text-center">
          <div class="hero-caption">
            <h1>Buscá Series y Películas</h1>
            <p>Encuentra tus favoritas y descubre nuevas opciones.</p>
            <div class="input-group mb-3">
              <input type="text" v-model="textoBusqueda" @keyup.enter="buscar" class="form-control"
                placeholder="Busca tu serie o pelicula" required>
              <button class="btn-buscar" @click="buscar">Buscar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
      <div v-for="pelicula in resultadoBusqueda" :key="pelicula.id" class="col-12 col-sm-6 col-md-4 col-lg-3" style="max-width: 400px;">
          <PeliculaCard :pelicula="pelicula" @guardar-pelicula="peliculaGuardada"></PeliculaCard>
      </div>
    </div>

    </div>
  </div>
</template>
  
<script>
import PeliculaCard from './PeliculaCard';

export default {
  name: 'BusquedaPelicula',
  components: {
    PeliculaCard,
  },
  data() {
    return {
      textoBusqueda: '',
    };
  },
  methods: {
    /**
* Realiza la búsqueda de películas.
* @function
*/
    buscar() {
      if (this.textoBusqueda !== '') {
        this.$store.dispatch('busquedaPelicula', this.textoBusqueda);

      } else {
        alert("Ingrese una pelicula o serie");
      }

    },
    /**
* Guarda una película.
* @function
* @param {Object} pelicula - Objeto de película a guardar.
*/
    peliculaGuardada(pelicula) {
      this.$store.dispatch('peliculaGuardada', pelicula);
    },
  },

  computed: {
    /**
  * Resultados de búsqueda de películas.
  * @function
  * @returns {Array} Array de resultados de búsqueda.
  */
    resultadoBusqueda() {
      return this.$store.state.resultadoBusqueda;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

h1{
  color: #012E40;
}

.hero-caption p{
  color:#026773;
}

.btn-buscar {
  border-radius: 0 7px 7px 0;
  cursor: pointer;
}
</style>