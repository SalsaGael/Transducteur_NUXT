<template>
    <section class="container">
        <div>
        <calcpa></calcpa>
        </div>
        <div>
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
export default {
  data() {
    return {};
  },
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

