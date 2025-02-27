<script>
import axios from "axios";

export default {
  data() {
    return {
      provincies: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:8080/provincies");
      this.provincies = res.data;
    } catch (error) {
      console.error("Error al obtener las provincias:", error);
    }
  }
};
</script>
<template>
  <div>
    <h1>Provincies</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
        <th>País</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="provincia in provincies" :key="provincia.id">
        <td>{{ provincia.id }}</td>
        <td>{{ provincia.nom }}</td>
        <td>{{ provincia.pais.nom }}</td>
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



