<template>
    <section class="container">
    <calcu></calcu>
    <div class="param">
    <paramtt></paramtt>
    <paramu></paramu>
    </div>
    </section>
</template>

<script>
import calcu from "@/components/calcU.vue";
import paramtt from "@/components/paramTT.vue";
import paramu from "@/components/paramU.vue";

export default {
  components: {
    calcu,
    paramtt,
    paramu
  }
};
</script>

<style scoped>
</style>