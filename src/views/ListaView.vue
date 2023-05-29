

<template>
  <div class="about pt-4">
    <h1>Peliculas y Series guardadas</h1>
    <PeliculasGuardadas></PeliculasGuardadas>
  </div>
</template>


<script>
import PeliculasGuardadas from '@/components/PeliculasGuardadas';

export default {
  name: 'ListaView',
  components: {
    PeliculasGuardadas
  }
}
</script>