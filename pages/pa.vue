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
export default {
  components: {
    calcpa,
    paramtt,
    paramtc,
    parampa
  }
};
</script>

<style scoped>
</style>

