<template>
<section>
    <p class="mb-1">
      <a>Paramètres Capteur Q</a>
    </p>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label class="input-group-text" for="fprBT">Famille BT</label>
      </div>
      <select id="fprBT" class="custom-select" v-bind:value="this.$store.state.fprBT" @change="changeValueEvent('fprBT', $event)">
        <option value="0">Plage réglée</option>
        <option value="303.1">Q1 303,1</option>
        <option value="372.4">Q2 372,4</option>
        <option value="433">Q3 433</option>
        <option value="519.6">Q4 519,6</option>
        <option value="602.2">Q5 602,2</option>
        <option value="848.7">Q6 848,7</option>
        <option value="731.8">Q7 731,8</option>
        <option value="866">Q8 866</option>
        <option value="1074">Q9 1074</option>
      </select>
      <div class="input-group-append">
        <span class="input-group-text">± var</span>
      </div>
    </div>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label class="input-group-text" for="prMaxHT">Plage HT</label>
      </div>
      <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id='prMaxHT' type="number" v-bind:value="Math.round(this.$store.getters.prMaxHT / 10000) / 100" @change="changeprMaxHT('prMaxHT', $event)"
      />
      <div class="input-group-append">
        <span class="input-group-text">± Mvar</span>
      </div>
      
    </div>
    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label for="smaMinPR" class="input-group-text">Sortie</label>
      </div>
      <select id='smaMinPR' class="custom-select" v-bind:value="this.$store.state.smaMinPR" @change="changeValueEvent('smaMinPR', $event)">
        <option value="-20">-20</option>
        <option value="-10">-10</option>
        <option value="-5">-5</option>
        <option value="0">0</option>
        <option value="4">4</option>
      </select>
      <span class="input-group-text input-group-middle">à</span>
      <select id='smaMaxPR' class="custom-select" v-bind:value="this.$store.state.smaMaxPR" @change="changeValueEvent('smaMaxPR', $event)">
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
    changeprMaxHT(key, event) {
      this.changeValueEvent(key, event);
      this.changeValue("fprBT", 0);
    }
  }
};
</script>

<style scoped>
</style>