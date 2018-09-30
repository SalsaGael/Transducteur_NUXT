 <template>
    <section class="">
        <p class="mb-1">
            <a>Calcul des valeurs pour 100/√3 V φ=0°</a>
        </p>
        <v-flex xs12 @change="inputPAHT('inputPAHT', $event)">
            <v-text-field
                id="inputPAHT"
                type="number"
                :value="Math.round(this.$store.state.inputPAHT / 10000) /100"
                background-color="red"
                label="Puissance HT"
                placeholder="Entrez la valeur"
                box
                outline
                suffix="MW">
            </v-text-field>
        </v-flex>
        <v-flex xs12 @change="inputIABT('inputIABT', $event)">
            <v-text-field
                id="inputIABT"
                type="number"
                :value="Math.round(this.$store.state.inputIABT * 100) /100"
                background-color="blue"
                label="Courant BT"
                placeholder="Entrez la valeur"
                box
                outline
                suffix="A">
            </v-text-field>
        </v-flex>
        <v-flex xs12 @change="inputSAMA('inputSAMA', $event)">
            <v-text-field
                id="inputSAMA"
                type="number"
                :value="Math.round(this.$store.state.inputSAMA * 100) /100"
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
    inputPAHT(key, event) {
      this.changeValue(key, event.target.value * 1000000);
      this.changeValue(
        "inputIABT",
        event.target.value *
          1000000 /
          (this.$store.state.KU * 100 * Math.sqrt(3)) /
          this.$store.getters.KI
      );
      this.changeValue(
        "inputSAMA",
        event.target.value *
          1000000 /
          (this.$store.getters.paMaxHT / this.$store.getters.smaPlagePA)
      ) +
        (this.$store.state.smaMinPA + this.$store.state.smaMaxPA) / 2;
    },
    inputIABT(key, event) {
      this.changeValue(key, event.target.value);
      this.changeValue(
        "inputPAHT",
        event.target.value *
          this.$store.getters.KI *
          (this.$store.state.KU * 100) *
          Math.sqrt(3)
      );
      this.changeValue(
        "inputSAMA",
        this.$store.state.inputPAHT /
          (this.$store.getters.paMaxHT / this.$store.getters.smaPlagePA) +
          (this.$store.state.smaMinPA + this.$store.state.smaMaxPA) / 2
      );
    },
    inputSAMA(key, event) {
      this.changeValue(key, event.target.value);
      this.changeValue(
        "inputPAHT",
        (event.target.value -
          (this.$store.state.smaMinPA + this.$store.state.smaMaxPA) / 2) *
          (this.$store.getters.paMaxHT / this.$store.getters.smaPlagePA)
      );
      this.changeValue(
        "inputIABT",
        (event.target.value -
          (this.$store.state.smaMinPA + this.$store.state.smaMaxPA) / 2) *
          (this.$store.getters.paMaxHT / this.$store.getters.smaPlagePA) /
          (this.$store.state.KU * 100 * Math.sqrt(3)) /
          this.$store.getters.KI
      );
    }
  }
};
</script>

<style scoped>
</style>