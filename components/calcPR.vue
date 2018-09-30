 <template>
    <section class="">
        <p class="mb-1">
        <a>Calcul des valeurs pour 100/√3 V φ=90°</a>
        </p>
            <v-flex xs12 @change="inputPRHT('inputPRHT', $event)">
        <v-text-field
            id="inputPRHT"
            type="number"
            :value="Math.round(this.$store.state.inputPRHT / 10000) /100"
            background-color="red"
            label="Puissance réactive HT"
            placeholder="Entrez la valeur"
            box
            outline
            suffix="Mvar">
        </v-text-field>
        </v-flex>
            <v-flex xs12 @change="inputIRBT('inputIRBT', $event)">
        <v-text-field
            id="inputIRBT"
            type="number"
            :value="Math.round(this.$store.state.inputIRBT * 100) /100"
            background-color="blue"
            label="Courant BT"
            placeholder="Entrez la valeur"
            box
            outline
            suffix="A">
        </v-text-field>
        </v-flex>
            <v-flex xs12 @change="inputSRMA('inputSRMA', $event)">
        <v-text-field
            id="inputSRMA"
            type="number"
            :value="Math.round(this.$store.state.inputSRMA * 100) /100"
            background-color="green"
            label="Sortie procédé"
            placeholder="Entrez la valeur"
            box
            outline
            suffix="mA">
        </v-text-field>
        </v-flex>
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
        (this.$store.state.smaMinPR + this.$store.state.smaMaxPR) / 2;
    },
    inputIRBT(key, event) {
      this.changeValue(key, event.target.value);
      this.changeValue(
        "inputPRHT",
        event.target.value *
          this.$store.getters.KI *
          (this.$store.state.KU * 100) *
          Math.sqrt(3)
      );
      this.changeValue(
        "inputSRMA",
        this.$store.state.inputPRHT /
          (this.$store.getters.prMaxHT / this.$store.getters.smaPlagePR) +
          (this.$store.state.smaMinPR + this.$store.state.smaMaxPR) / 2
      );
    },
    inputSRMA(key, event) {
      this.changeValue(key, event.target.value);
      this.changeValue(
        "inputPRHT",
        (event.target.value -
          (this.$store.state.smaMinPR + this.$store.state.smaMaxPR) / 2) *
          (this.$store.getters.prMaxHT / this.$store.getters.smaPlagePR)
      );
      this.changeValue(
        "inputIRBT",
        (event.target.value -
          (this.$store.state.smaMinPR + this.$store.state.smaMaxPR) / 2) *
          (this.$store.getters.prMaxHT / this.$store.getters.smaPlagePR) /
          (this.$store.state.KU * 100 * Math.sqrt(3)) /
          this.$store.getters.KI
      );
    }
  }
};
</script>

<style scoped>
</style>