<script>
import Ciutats from "@/components/Ciutats.vue";
import Provincies from '@/components/Provincies.vue'
import Paisos from '@/components/Paisos.vue'
import Franquicies from '@/components/Franquicies.vue'

export default {
  name: 'App',
  components: {
    Ciutats,
    Provincies,
    Paisos,
    Franquicies
  }
}

</script>

<template>
  <div>
    <nav>
      <router-link to="/">Ciutats</router-link>
      <router-link to="/provincies">Provincies</router-link>
      <router-link to="/paisos">Paisos</router-link>
      <router-link to="/franquicies">Franquicies</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
