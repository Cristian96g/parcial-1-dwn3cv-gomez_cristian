<template>
  <section class="container-fluid pt-4">
    <BusquedaPelicula></BusquedaPelicula>
  </section>
</template>

<script>
import BusquedaPelicula from '@/components/BusquedaPelicula';

export default {
  name: 'BusquedaView',
  components: {
    BusquedaPelicula
}
}
</script>
