 <template>
 <section>
     
 <div class="bloccalc" id="bloccalc">
    <p class="mb-1">
        <a>Calcul des valeurs</a>
    </p>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label for="inputUHT" class="input-group-text text-light bg-secondary input-ant">HT Triphasé</label>
        </div>
        <input type="number" id="inputUHT" v-bind:value="Math.round(this.$store.state.inputUHT / 10) /100" placeholder="Entrez la valeur" @change="inputUHT('inputUHT', $event)" class="form-control" aria-label="inputSMAll" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
        <span class="input-group-text text-light bg-secondary input-post">kV</span>
        </div>
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label for="inputVHT" class="input-group-text text-light bg-primary input-ant">HT Monophasé</label>
        </div>
        <input type="number" id="inputVHT" v-bind:value="Math.round(this.$store.state.inputVHT / 10) / 100" placeholder="Entrez la valeur" @change="inputVHT('inputVHT', $event)" class="form-control" aria-label="inputSMAll" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
            <span class="input-group-text text-light bg-primary input-post">kV</span>
        </div>
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label for="inputVBT" class="input-group-text text-light bg-danger input-ant">BT Monophasé</label>
        </div>
        <input type="number" id="inputVBT" v-bind:value="Math.round(this.$store.state.inputVBT * 100) / 100" placeholder="Entrez la valeur" @change="inputVBT('inputVBT', $event)" class="form-control" aria-label="inputSMAll" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
            <span class="input-group-text text-light bg-danger input-post">V</span>
        </div>
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label for="inputSMA" class="input-group-text text-light bg-success input-ant">Sortie procédé</label>
        </div>
            <input type="number" id="inputSMA" v-bind:value="Math.round(this.$store.state.inputSMA * 100) / 100" placeholder="Entrez la valeur" @change="inputSMA('inputSMA', $event)" class="form-control" aria-label="inputSMAll" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
            <span class="input-group-text text-light bg-success input-post">mA</span>
        </div>
    </div>
</div>
    </section>
    </template>
    <script>
export default {
  components: {},
  computed: {},
  methods: {
    changeValue(key, value) {
      this.$store.commit("CHANGE_VALUE", {
        path: [key],
        value: value
      });
    },
    inputUHT(key, event) {
      this.changeValue(key, event.target.value * 1000);
      this.changeValue("inputVHT", event.target.value * 1000 / Math.sqrt(3));
      this.changeValue(
        "inputVBT",
        event.target.value * 1000 / Math.sqrt(3) / this.$store.state.KU
      );
      this.changeValue(
        "inputSMA",
        Math.pow(this.$store.state.inputVBT, 2) * this.$store.getters.faMax +
          this.$store.getters.faMin +
          this.$store.state.smaMinU
      );
    },
    inputVHT(key, event) {
      this.changeValue(key, event.target.value * 1000);
      this.changeValue("inputUHT", event.target.value * 1000 * Math.sqrt(3));
      this.changeValue(
        "inputVBT",
        event.target.value * 1000 / this.$store.state.KU
      );
      this.changeValue(
        "inputSMA",
        Math.pow(this.$store.state.inputVBT, 2) * this.$store.getters.faMax +
          this.$store.getters.faMin +
          this.$store.state.smaMinU
      );
    },
    inputVBT(key, event) {
      this.changeValue(key, event.target.value);
      this.changeValue(
        "inputUHT",
        event.target.value * this.$store.state.KU * Math.sqrt(3)
      );
      this.changeValue("inputVHT", event.target.value * this.$store.state.KU);
      this.changeValue(
        "inputSMA",
        Math.pow(this.$store.state.inputVBT, 2) * this.$store.getters.faMax +
          this.$store.getters.faMin +
          this.$store.state.smaMinU
      );
    },
    inputSMA(key, event) {
      this.changeValue(key, event.target.value);
      this.changeValue(
        "inputUHT",
        Math.sqrt(
          (event.target.value -
            this.$store.state.smaMinU -
            this.$store.getters.faMin) /
            this.$store.getters.faMax
        ) *
          this.$store.state.KU *
          Math.sqrt(3)
      );
      this.changeValue(
        "inputVHT",
        Math.sqrt(
          (event.target.value -
            this.$store.state.smaMinU -
            this.$store.getters.faMin) /
            this.$store.getters.faMax
        ) * this.$store.state.KU
      );
      this.changeValue(
        "inputVBT",
        Math.sqrt(
          (event.target.value -
            this.$store.state.smaMinU -
            this.$store.getters.faMin) /
            this.$store.getters.faMax
        )
      );
    }
  }
};
</script>

<style scoped>
</style>