<template>
  <div id="app">
    <nav >
      <router-link to="/">Inicio</router-link> |
      <router-link to="/ListaView">Lista de Favoritos</router-link>
    </nav>
    <div class="contenedor-app container">
      <div class="content">
        <router-view/>
      </div>
    </div>
    <footer class="footer  mt-auto py-3  bg-light">
      <p>&#169; Copyright 2023 - Cristian Gómez</p>
</footer>
  </div> 
</template>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
}


nav {
  padding: 30px;
  background-color: #f7f7f7;
}

nav a {
  font-weight: bold;
  color: #024959;
  text-decoration: none;
;
}

nav a.router-link-exact-active {
  color: #012E40;
  text-decoration: underline;
}

button{
  padding: 10px 20px;
  background-color: #012E40;
  color: #ffffff;
  border: none;
}

button:hover{
  background-color: #024959;
}

footer{
  background-color: #f7f7f7;
  color: #012E40;
}

/* Color Theme Swatches in Hex */
.Deep-Teal-Sea-1-hex { color: #012E40; }
.Deep-Teal-Sea-2-hex { color: #024959; }
.Deep-Teal-Sea-3-hex { color: #026773; }
.Deep-Teal-Sea-4-hex { color: #3CA6A6; }
.Deep-Teal-Sea-5-hex { color: #F2E3D5; }
.Deep-Teal-Sea-5-hex { color: #f7f7f7; }


</style>
