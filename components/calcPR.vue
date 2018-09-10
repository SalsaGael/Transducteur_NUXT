 <template>
 <section class="">
      <p class="mb-1">
        <a>Calcul des valeurs pour 100/√3 V φ=90°</a>
    </p>
    
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label for="inputPRHT" class="input-group-text text-light bg-secondary input-ant">Puissance HT</label>
        </div>
        <input type="number" id="inputPRHT" v-bind:value="Math.round(this.$store.state.inputPRHT / 10000) / 100" @change="inputPRHT('inputPRHT', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
    <span class="input-group-text text-light bg-secondary input-post">Mvar</span>
        </div>
    </div>

    <div class="input-group mb-2">
        <div class="input-group-prepend">
           <label for="iaBT" class="input-group-text text-light bg-primary input-ant">Courant BT</label>
        </div>
            <input type="number" id="inputIRBT" v-bind:value="Math.round(this.$store.state.inputIRBT*100) / 100" @change="inputIRBT('inputIRBT', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small"
        aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
           <span class="input-group-text text-light bg-primary input-post">A</span>
        </div>
    </div>

    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text text-light bg-success input-ant">Sortie procédé</label>
        </div>
            <input type="number" id="inputSRMA" v-bind:value="Math.round(this.$store.state.inputSRMA * 100) / 100" @change="inputSRMA('inputSRMA', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
        <span class="input-group-text text-light bg-success input-post">mA</span>
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
    inputPRHT(key, event) {
      this.changeValue(key, event.target.value * 1000000);
      this.changeValue(
        "inputIRBT",
        event.target.value *
          1000000 /
          (this.$store.state.KU * 100 * Math.sqrt(3)) /
          this.$store.getters.KI
      );
      this.changeValue(
        "inputSRMA",
        event.target.value *
          1000000 /
          (this.$store.getters.prMaxHT / this.$store.getters.smaPlagePR)
      ) +
        ((this.$store.state.smaMinPR + this.$store.state.smaMaxPR) / 2);
    },
        inputIRBT(key, event) {
      this.changeValue(key, event.target.value);
      this.changeValue(
        "inputPRHT",
        (event.target.value * this.$store.getters.KI) * (this.$store.state.KU * 100) * Math.sqrt(3)
      );
      this.changeValue(
        "inputSRMA",
        (this.$store.state.inputPRHT / (this.$store.getters.prMaxHT / this.$store.getters.smaPlagePR)) + ((this.$store.state.smaMinPR + this.$store.state.smaMaxPR) / 2))
    },
          inputSRMA(key, event) {
      this.changeValue(key, event.target.value);
      this.changeValue(
        "inputPRHT",
       (event.target.value - ((this.$store.state.smaMinPR + this.$store.state.smaMaxPR) / 2)) * (this.$store.getters.prMaxHT / this.$store.getters.smaPlagePR)
      );
      this.changeValue(
        "inputIRBT",
    (event.target.value - ((this.$store.state.smaMinPR + this.$store.state.smaMaxPR) / 2)) * (this.$store.getters.prMaxHT / this.$store.getters.smaPlagePR) / (this.$store.state.KU * 100 * Math.sqrt(3)) / this.$store.getters.KI)
    }
  }
};
</script>

<style scoped>
</style>