<script>
import axios from "axios";

export default {
  data() {
    return {
      paisos: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:8080/paisos");
      this.paisos = res.data;
    } catch (error) {
      console.error("Error al obtener los países:", error);
    }
  }
};
</script>
<template>
  <div>
    <h1>Paisos</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="pais in paisos" :key="pais.id">
        <td>{{ pais.id }}</td>
        <td>{{ pais.nom }}</td>
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



