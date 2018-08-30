<template>
    <section class="container">
        <div>
        <calcpr></calcpr>
        </div>
        <div class="param">
        <paramtt></paramtt>
        <paramtc></paramtc>
        <parampr></parampr>
        </div>
    </section>
</template>

<script>
import calcpr from "@/components/calcPR.vue";
import paramtt from "@/components/paramTT.vue";
import paramtc from "@/components/paramTC.vue";
import parampr from "@/components/paramPR.vue";

export default {
  components: {
    calcpr,
    paramtt,
    paramtc,
    parampr
  }
};
</script>

<style scoped>
</style>