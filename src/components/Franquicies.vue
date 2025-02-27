<script>
import axios from "axios";

export default {
  data() {
    return {
      franquicies: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:8080/franquicies");
      this.franquicies = res.data;
    } catch (error) {
      console.error("Error al obtener las franquicias:", error);
    }
  }
};
</script>
<template>
  <div>
    <h1>Franquicies</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Descripció</th>
        <th>Ciutats</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="franquicia in franquicies" :key="franquicia.id">
        <td>{{ franquicia.id }}</td>
        <td>{{ franquicia.descripcio }}</td>
        <td>
          <ul>
            <li v-for="ciutat in franquicia.ciutats" :key="ciutat.id">{{ ciutat.nom }}</li>
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


