 <template>
  <section>
    <div class="bloccalc" id="bloccalc">
      <p class="mb-1">
        <a>Calculette tension quadratique</a>
      </p>
      <v-flex xs12 @change="inputUHT('inputUHT', $event)">
        <v-text-field
          id="inputUHT"
          type="number"
          :value="Math.round(this.$store.state.inputUHT / 10) /100"
          background-color="red"
          label="Tension HT triphasé"
          placeholder="Entrez la valeur"
          box
          outline
          suffix="kV">
        </v-text-field>
      </v-flex>
            <v-flex xs12 @change="inputVHT('inputVHT', $event)">
        <v-text-field
          id="inputVHT"
          type="number"
          :value="Math.round(this.$store.state.inputVHT / 10) / 100"
          background-color="orange"
          label="Tension HT monophasé"
          placeholder="Entrez la valeur"
          box
          outline
          suffix="kV">
        </v-text-field>
      </v-flex>
      <v-flex xs12 @change="inputVBT('inputVBT', $event)">
        <v-text-field
          id="inputVBT"
          type="number"
          :value="Math.round(this.$store.state.inputVBT * 100) / 100"
          background-color="blue"
          label="Tension BT monophasé"
          placeholder="Entrez la valeur"
          box
          outline
          suffix="V">
        </v-text-field>
      </v-flex>
      <v-flex xs12  @change="inputSUMA('inputSUMA', $event)">
        <v-text-field
          id="inputSUMA"
          type="number"
          :value="Math.round(this.$store.state.inputSUMA * 100) / 100"
          background-color="green"
          label="Sortie procédé"
          placeholder="Entrez la valeur"
          box
          outline
          suffix="mA">
        </v-text-field>
      </v-flex>
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
        "inputSUMA",
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
        "inputSUMA",
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
        "inputSUMA",
        Math.pow(this.$store.state.inputVBT, 2) * this.$store.getters.faMax +
          this.$store.getters.faMin +
          this.$store.state.smaMinU
      );
    },
    inputSUMA(key, event) {
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