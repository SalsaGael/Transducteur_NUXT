<template>
  <section class="container">
    <div>
      <calcpa></calcpa>
    </div>
    <div class="param">
      <paramtt></paramtt>
      <a>{{  theme  }}</a>
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
  data: function() {
    return {
      theme: this.getLayout()
    };
  },
  layout: this.theme,
  components: {
    calcpa,
    paramtt,
    paramtc,
    parampa
  },
  methods: {
    getLayout() {
      if (this.$store.state.theme === "defaultDark") {
        console.log("dark");
        return "defaultDark";
      } else {
        console.log("light");
        return "default";
      }
    }
  }
};
</script>

<style scoped>
</style>

