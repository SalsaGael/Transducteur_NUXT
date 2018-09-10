<template>
  <section>
    <p class="mb-1">
      <a>Paramètres Capteur P</a>
    </p>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label class="input-group-text" for="fpaBT">Famille BT</label>
      </div>
      <select id="fpaBT" class="custom-select" v-bind:value="this.$store.state.fpaBT" @change="changeValueEvent('fpaBT', $event)">
        <option value="0">Plage réglée</option>
        <option value="602.2">P1 602,2</option>
        <option value="744.8">P2 744,8</option>
        <option value="866">P3 866</option>
        <option value="1039">P4 1039</option>
        <option value="1212">P5 1212</option>
        <option value="1464">P6 1464</option>
        <option value="1732">P8 1732</option>
        <option value="2148">P9 2148</option>
      </select>
      <div class="input-group-append">
        <span class="input-group-text">± W</span>
      </div>
    </div>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label class="input-group-text" for="paMaxHT">Plage HT</label>
      </div>
      <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id='paMaxHT' type="number" v-bind:value="Math.round(this.$store.getters.paMaxHT / 10000) / 100"
        @change="changepaMaxHT('paMaxHT', $event)" />
      <div class="input-group-append">
        <span class="input-group-text">± MW</span>
      </div>
    </div>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label for="smaMinPA" class="input-group-text">Sortie</label>
      </div>
      <select id='smaMinPA' class="custom-select" v-bind:value="this.$store.state.smaMinPA" @change="changeValueEvent('smaMinPA', $event)">
        <option value="-20">-20</option>
        <option value="-10">-10</option>
        <option value="-5">-5</option>
        <option value="0">0</option>
        <option value="4">4</option>
      </select>
      <span class="input-group-text input-group-middle">à</span>
      <select id='smaMaxPA' class="custom-select" v-bind:value="this.$store.state.smaMaxPA" @change="changeValueEvent('smaMaxPA', $event)">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <div class="input-group-append">
        <span class="input-group-text">mA</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  methods: {
    changeValue(key, value) {
      this.$store.commit("CHANGE_VALUE", {
        path: [key],
        value: value
      });
    },
    changeValueEvent(key, event) {
      this.$store.commit("CHANGE_VALUE", {
        path: [key],
        value: event.target.value
      });
    },
    changepaMaxHT(key, event) {
      this.changeValueEvent(key, event);
      this.changeValue("fpaBT", 0);
    }
  }
};
</script>

<style scoped>
</style>