<template>
  <v-container>
      <calcpa></calcpa>
      <parampa></parampa>
  </v-container>
</template>

<script>
import calcpa from "@/components/calcPA.vue";
import parampa from "@/components/paramPA.vue";
export default {
  components: {
    calcpa,
    parampa
  }
};
</script>

<style scoped>
</style>

