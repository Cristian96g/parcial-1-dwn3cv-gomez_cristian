<template>
   <v-app id="app">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/ListaView">
          <v-list-item-icon>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Lista de Favoritos</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Nombre de tu Aplicación</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container class="contenedor-app">
        <router-view />
      </v-container>
    </v-main>
    <v-footer app>
      <v-container>
        <span>&copy; 2023 - Cristian Gómez</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style>
@import '~vuetify/dist/vuetify.min.css';

</style>

