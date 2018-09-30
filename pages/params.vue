<template>
  <v-container>
    <paramtt></paramtt>
    <paramtc></paramtc>
    <paramu></paramu>
  </v-container>
</template>

<script>
import paramtt from "@/components/paramTT.vue";
import paramtc from "@/components/paramTC.vue";
import paramu from "@/components/paramU.vue";

export default {
  components: {
    paramtt,
    paramtc,
    paramu
  }
};
</script>

<style scoped>
</style>