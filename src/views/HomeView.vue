<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "ciutats",
      ciutats: []
    }
  },
  async mounted() {
    const res = await axios.get("http://localhost:8080/ciutats")
    console.log(res)
    this.ciutats = res.data
  }
}
</script>

<template>
  <h1>{{name}}</h1>
  <table>
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Poblacio</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="ciutat in ciutats">
      <td>{{ciutat.id}}</td>
      <td>{{ciutat.nom}}</td>
      <td>{{ciutat.poblacio}}</td>
    </tr>
    </tbody>
  </table>
</template>
