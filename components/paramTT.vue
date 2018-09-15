<template>

<section>
  <p class="mb-1">
    <a>Paramètres TT</a>
  </p>
  <div class="input-group mb-2">
    <div class="input-group-prepend">
      <label for="KU" class="input-group-text">Rapport</label>
    </div>
    <select id="KU" class="custom-select" v-bind:value="this.$store.state.KU" @change="changeValueEvent('KU', $event); calcU()">
      <option value="150">15 kV / 100 V</option>
      <option value="200">20 kV / 100 V</option>
      <option value="450">45 kV / 100 V</option>
      <option value="600">60 kV / 100V</option>
      <option value="630">63 kV / 100V</option>
      <option value="900">90 kV / 100 V</option>
      <option value="1500">150 kV / 100V</option>
      <option value="2200">220 kV / 100V</option>
      <option value="2250">225 kV / 100V</option>
      <option value="4000">400 kV / 100V</option>
    </select>
  </div>
</section>

</template>
<script>
export default {
  components: {},
  methods: {
    calcU() {
      this.$store.dispatch("CALC_U");
      this.$store.dispatch("CALC_U_BT");
    },
    changeValueEvent(key, event) {
      this.$store.commit("CHANGE_VALUE", {
        path: [key],
        value: event.target.value
      });
    }
  }
};
</script>

<style scoped>
</style>