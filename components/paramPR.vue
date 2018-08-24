<template>
<section>
    <p class="mb-1">
      <a>Paramètres Capteur Q</a>
    </p>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label class="input-group-text" for="fprHT">Famille BT</label>
      </div>
      <select id="fprHT" class="custom-select" v-bind:value="this.$store.state.fprHT" @change="update('fprHT', $event)">
        <option value="0">Plage réglée</option>
        <option value="1">Q1 303,1</option>
        <option value="2">Q2 372,4</option>
        <option value="3">Q3 433</option>
        <option value="4">Q4 519,6</option>
        <option value="5">Q5 602,2</option>
        <option value="6">Q6 848,7</option>
        <option value="7">Q7 731,8</option>
        <option value="8">Q8 866</option>
        <option value="9">Q9 1074</option>
      </select>
      <div class="input-group-append">
        <span class="input-group-text">± var</span>
      </div>
    </div>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label class="input-group-text" for="prMaxHT">Plage HT</label>
      </div>
      <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id='prMaxHT' type="number" v-bind:value="this.$store.state.prMaxHT" @change="update('prMaxHT', $event)"
      />
      <div class="input-group-append">
        <span class="input-group-text">± Mvar</span>
      </div>
      
    </div>
    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label for="smaMin" class="input-group-text">Sortie</label>
      </div>
      <select id='smaMinPR' class="custom-select" v-bind:value="this.$store.state.smaMinPR" @change="update('smaMinPR', $event)">
        <option value="-20">-20</option>
        <option value="-10">-10</option>
        <option value="-5">-5</option>
        <option value="0">0</option>
        <option value="4">4</option>
      </select>
      <span class="input-group-text input-group-middle">à</span>
      <select id='smaMaxPR' class="custom-select" v-bind:value="this.$store.state.smaMaxPR" @change="update('smaMaxPR', $event)">
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
    update(key, event) {
      this.$store.commit("update", {
        path: [key],
        value: event.target.value
      });
    }
  }
};
</script>

<style scoped>
</style>