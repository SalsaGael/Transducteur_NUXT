<template>
  <section class="container">
    <div>
      <calcpa></calcpa>
    </div>
    <div class="param">
      <paramtt></paramtt>
      <paramtc></paramtc>
      <parampa></parampa>
    </div>    
  </section>
</template>

<script>
import paramtt from "@/components/paramTT.vue";
import paramtc from "@/components/paramTC.vue";
import parampa from "@/components/paramPA.vue";
import calcpa from "@/components/calcPA.vue";
import defaultVue from "../layouts/default.vue";
export default {
  layout: "default",
  components: {
    calcpa,
    paramtt,
    paramtc,
    parampa
  },
  methods: {}
};
</script>

<style scoped>
</style>

