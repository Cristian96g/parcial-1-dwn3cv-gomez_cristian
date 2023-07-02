<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <div class="text-center">
          <h1>Buscá Series y Películas</h1>
          <p>Encuentra tus favoritas y descubre nuevas opciones.</p>
          <v-col justify="center">
            <v-card-title>
              <v-text-field append-icon="mdi-magnify" label="Ingresa el nombre aca" single-line hide-details
                v-model="textoBusqueda" @keydown.enter="buscar"></v-text-field>
            </v-card-title>
          </v-col>
          <v-row justify="center">
            <v-col cols="auto">
              <v-btn color="btn-buscar" @click="buscar">Buscar</v-btn>
            </v-col>
          </v-row>
        </div>
        <v-col class="text-center">
              <v-btn color="btn-buscar" @click="sortResults('populares')">Más populares</v-btn>
            </v-col>
      </v-col>

    </v-row>
  
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="3" v-for="pelicula in resultadoBusqueda" :key="pelicula.id">
        <PeliculaCard :pelicula="pelicula" @guardar-pelicula="peliculaGuardada"></PeliculaCard>
      </v-col>
    </v-row>
  </v-container>
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
      sortBy: '',
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

        this.sortBy = '';
      } else {
        alert("Ingrese una pelicula o serie");
      }

    },
    sortResults(option) {
      this.sortBy = option;

      // Perform the sorting based on the selected option
      if (option === 'populares') {
        this.$store.dispatch('ordenarMasPopulares');
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
      let results = this.$store.state.resultadoBusqueda;
      if (this.sortBy === 'populares') {
      results.sort((a, b) => b.popularity - a.popularity);
    }

    return results;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

h1 {
  color: #012E40;
}

.hero-caption p {
  color: #026773;
}

.btn-buscar {
  border-radius: 0 7px 7px 0;
  cursor: pointer;
}
</style>