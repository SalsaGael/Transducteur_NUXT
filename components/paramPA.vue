<template>
  <section>
    <p class="mb-1">
      <a>Paramètres Capteur P</a>
    </p>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label class="input-group-text" for="fpaHT">Famille BT</label>
      </div>
      <select id="fpaHT" class="custom-select" v-bind:value="this.$store.state.fpaHT" @change="update('fpaHT', $event)">
        <option value="0">Plage réglée</option>
        <option value="1">P1 602,2</option>
        <option value="2">P2 744,8</option>
        <option value="3">P3 866</option>
        <option value="4">P4 1039</option>
        <option value="5">P5 1212</option>
        <option value="6">P6 1464</option>
        <option value="8">P8 1732</option>
        <option value="9">P9 2148</option>
      </select>
      <div class="input-group-append">
        <span class="input-group-text">± W</span>
      </div>
    </div>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label class="input-group-text" for="paMaxHT">Plage HT</label>
      </div>
      <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id='paMaxHT' type="number" v-bind:value="this.$store.state.paMaxHT"
        @change="update('paMaxHT', $event)" />
      <div class="input-group-append">
        <span class="input-group-text">± MW</span>
      </div>
    </div>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label for="smaMinPA" class="input-group-text">Sortie</label>
      </div>
      <select id='smaMin' class="custom-select" v-bind:value="this.$store.state.smaMinPA" @change="update('smaMinPA', $event)">
        <option value="-20">-20</option>
        <option value="-10">-10</option>
        <option value="-5">-5</option>
        <option value="0">0</option>
        <option value="4">4</option>
      </select>
      <span class="input-group-text input-group-middle">à</span>
      <select id='smaMaxPA' class="custom-select" v-bind:value="this.$store.state.smaMaxPA" @change="update('smaMaxPA', $event)">
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