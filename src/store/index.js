import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
const API_BASE_URL = "https://api.themoviedb.org/3";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
       /**
     * Resultados de búsqueda de películas.
     * @type {Array}
     */
    resultadoBusqueda: [],
     /**
     * Películas guardadas.
     * @type {Array}
     */
    resultGuardados: [],
  },
  mutations: {
        /**
     * Actualiza los resultados de búsqueda de películas.
     * @method setResultadoBusqueda
     * @param {Object} state - Estado de Vuex.
     * @param {Array} resultados - Resultados de búsqueda.
     */
    setResultadoBusqueda(state, resultados) {
      state.resultadoBusqueda = resultados;
    },
        /**
     * Actualiza las películas guardadas.
     * @method setResultGuardados
     * @param {Object} state - Estado de Vuex.
     * @param {Array} peliculas - Películas guardadas.
     */
    setResultGuardados(state, peliculas) {
      state.resultGuardados = peliculas;
    },
  },
  actions: {
      /**
     * Realiza una búsqueda de películas según un criterio de búsqueda.
     * @method busquedaPelicula
     * @param {Object} context - Contexto de Vuex.
     * @param {string} query - Criterio de búsqueda.
     */
    async busquedaPelicula({ commit }, query) {
      try {
        const response = await fetch(`${API_BASE_URL}/search/tv?language=es&query=${query}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2RkZjI5ZTMyZTNhMjlhZmNjNWE3ZjVlOWFiYTAyOCIsInN1YiI6IjYzZDQ4M2UyYzE1YjU1MDBmMGI2NjIxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Nwulcov85apY1EEKx3R2x5X7pjwfNAX_6Zq8BVm_b0",
          },
          // params: {
          //   language: "es",
          //   query: query,
          // },
          // headers: {
          //   Authorization:
          //     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2RkZjI5ZTMyZTNhMjlhZmNjNWE3ZjVlOWFiYTAyOCIsInN1YiI6IjYzZDQ4M2UyYzE1YjU1MDBmMGI2NjIxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Nwulcov85apY1EEKx3R2x5X7pjwfNAX_6Zq8BVm_b0",
          // },
        });
        console.log(response);
        const data = await response.json();
        const resultados = data.results;
        commit("setResultadoBusqueda", resultados);
      } catch (error) {
        console.error("Error searching peliculas:", error);
      }
    },
       /**
     * Guarda una película en la lista de películas guardadas.
     * @method peliculaGuardada
     * @param {Object} pelicula - Película a guardar.
     */
    async peliculaGuardada({ commit, state }, pelicula) {
      try {
         // Obtener las películas guardadas de localStorage
        const resultGuardados = JSON.parse(localStorage.getItem('resultGuardados')) || [];
      
         // Agregar la nueva película al array de películas guardadas
        resultGuardados.push(pelicula);
      
        // Guardar las películas actualizadas en localStorage
        localStorage.setItem('resultGuardados', JSON.stringify(resultGuardados));
      
        // Actualizar el estado con las películas guardadas
        commit('setResultGuardados', [...state.resultGuardados, pelicula]);
      } catch (error) {
        console.error('Error guardado de pelicula:', error);
      }
    },
    async eliminarPelicula({ commit, state }, peliculaId) {
      try {
        const resultGuardados = JSON.parse(localStorage.getItem('resultGuardados')) || [];
        const updatedpeliculas = resultGuardados.filter(pelicula => pelicula.id !== peliculaId);
        localStorage.setItem('resultGuardados', JSON.stringify(updatedpeliculas));
        
       
commit('setResultGuardados', state.resultGuardados.filter(pelicula => pelicula.id !== peliculaId));
      } catch (error) {
        console.error('Error al eliminar pelicula:', error);
      }
    },
    
     /**
     * Inicializa el store cargando las películas guardadas desde localStorage.
     * @method iniciarStore
     * @param {Object} context - Contexto de Vuex.
     */
    iniciarStore({ commit }) {
      // Actualizar el estado con las películas guardadas
      const resultGuardados = JSON.parse(localStorage.getItem("resultGuardados")) || [];

      // Actualizar el estado con las peliculas guardadas
      commit("setResultGuardados", resultGuardados);
    },
  },
  getters: {
     /**
     * Obtiene las películas guardadas.
     * @method getResultGuardados
     * @param {Object} state - Estado de Vuex.
     * @returns {Array} - Películas guardadas.
     */
    getResultGuardados(state) {
      return state.resultGuardados;
    },
  },
});
