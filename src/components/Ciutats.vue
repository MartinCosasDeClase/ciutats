<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "Ciutats",
      ciutats: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:8080/ciutats");
      console.log(res);
      this.ciutats = res.data;
    } catch (error) {
      console.error("Error al obtener las ciudades:", error);
    }
  }
};
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Población</th>
        <th>Provincia</th>
        <th>Franquicias</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="ciutat in ciutats" :key="ciutat.id">
        <td>{{ ciutat.id }}</td>
        <td>{{ ciutat.nom }}</td>
        <td>{{ ciutat.poblacio }}</td>
        <td>{{ ciutat.provincia.nom }}</td>
        <td>
          <ul>
            <li v-for="franquicia in ciutat.franquicies" :key="franquicia.id">
              {{ franquicia.descripcio }}
            </li>
          </ul>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

table th, table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: black;
}
</style>
