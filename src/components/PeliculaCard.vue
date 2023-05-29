<template>
  <div class="mt-5">
    <div class="movie-card card mx-auto mb-3" :key="id">
      <img :src="poster" class="card-img-top" />
      <div class="card-body">
        <h4 class="card-title font-weight-bold">{{ recotarTitulo() }}</h4>
        <div class="card-text text-primary">
          <div>{{ type }}</div>
          <div class="pb-4 text-descripcion"> 
            {{ recortarTexto() }} 
          </div>
        </div>
        <div class="card-footer w-100">
          <button :class="`btn btn-lg btn-${!estaGuardada ? 'añadir' : 'eliminar'}`" @click="peliculaGuardada">{{ buttonText }}</button>
          <p v-if="confirmacion">{{ confirmacion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  /**
 * Nombre del componente.
 * @name PeliculaCard
 */
  name: 'PeliculaCard',
  props: {
    /**
 * Película pasada como prop.
 * @property {Object} pelicula - Objeto de la película.
 * @property {string} pelicula.name - Nombre de la película.
 * @property {string} pelicula.poster_path - Imagen de la película.
 * @property {number} pelicula.id - ID de la película.
 * @property {string} pelicula.media_type - Tipo de medio de la película.
 * @property {string} pelicula.overview - Resumen de la película.
 */
    pelicula: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      /**
       * Mensaje de error.
       * @member {string}
       */
      confirmacion: '',
      estaGuardada: false,
      textoRecortado: '',
    };
  },
  computed: {
    /**
   * Título de la película.
   * @function
   * @returns {string} Título de la película.
   */
    title() {
      return this.pelicula.name;
    },
    /**
* Ruta del póster de la película.
* @function
* @returns {string} Imagen de la película.
*/
    poster() {

      let imagen = 'https://image.tmdb.org/t/p/original' + this.pelicula.poster_path;
      return imagen;
    },
    /**
   * ID de la película.
   * @function
   * @returns {number} ID de la película.
   */
    id() {
      return this.pelicula.id;
    },
    /** 
    * Tipo de medio de la película.
     * @function
     * @returns {string} Tipo de medio de la película.
     */
    type() {
      return this.pelicula.media_type;
    },
    /**
  * Resumen de la película.
  * @function
  * @returns {string} Resumen de la película.
  */
    overview() {
      return this.pelicula.overview;
    },
    buttonText() {
      if (this.estaGuardada) {
        return 'Eliminar';
      } else {
        return 'Añadir a la Lista';
      }
    },
  },
  mounted() {
    this.recortarTexto();
    this.recotarTitulo();
  },
  methods: {
    /**
     * Recorta el texto del resumen de la película.
     * @function
     * @returns {string} Resumen de la película recortado.
     */
    recortarTexto(){
      let texto = this.pelicula.overview;
      let textoRecortado = texto.substring(0, 70);
      if(texto.length > 20){
        textoRecortado += '...'
      }
      return textoRecortado;
    },
    /**
     * Recorta el título de la película.
     * @function
     * @returns {string} Título de la película recortado.
     */
    recotarTitulo(){
      let titulo = this.pelicula.name;
      let tituloRecortado = titulo.substring(0, 20);
      if(titulo.length > 20){
        tituloRecortado += '...'
      }
      return tituloRecortado;
    },

    /**
    * Guarda la película.
    * @function
    */
    peliculaGuardada() {
      // Comprueba si la película ya está guardada
      const existePelicula = this.$store.state.resultGuardados.some(
        peliculaGuardada => peliculaGuardada.id === this.pelicula.id
      );
      
      // Si la película no está guardada, la guarda
      if (!existePelicula) {
        this.$store.dispatch('peliculaGuardada', this.pelicula);
        this.estaGuardada = true;
        this.confirmacion = 'Guardado correctamente';
        console.log(this.estaGuardada);
        setTimeout(() => {
        this.confirmacion = '';
      }, 3000);
      } else {
        this.$store.dispatch('eliminarPelicula', this.pelicula.id);
        this.estaGuardada = false;
      }
    },
  },
  created() {
    // Comprueba si la película ya está guardada
    const existePelicula = this.$store.state.resultGuardados.some(
      peliculaGuardada => peliculaGuardada.id === this.pelicula.id
    );
    // Si la película está guardada, cambia el estado de estaGuardada a true
    this.estaGuardada = existePelicula;
  }
};
</script>

<style>
.card-footer {
  background-color: transparent !important;
  border-top: none !important;
}
.card-title{
  min-height: 60px;
  color: #024959;
}

.text-descripcion{
  color:#2F3D40;
}

.btn-añadir{
  background-color: #012E40 !important;
  color: white !important;
}
.btn-añadir:hover{
  background-color: #024959  !important;
}
.btn-eliminar{
background-color: red !important;
color: white !important;
}
.btn-eliminar:hover{
  background-color: rgb(255, 38, 38) !important;
}
@media (max-width: 768px) {
  .card-img-top{
  min-height: 390px;
}
}

</style>