<template>
  <v-container>
    <calcpr></calcpr>
    <parampr></parampr>
  </v-container>
</template>

<script>
import calcpr from "@/components/calcPR.vue";
import parampr from "@/components/paramPR.vue";
export default {
  components: {
    calcpr,
    parampr
  }
};
</script>

<style scoped>
</style>