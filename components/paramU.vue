<template>

<section>
  <p class="mb-1">
     <a>Paramètres du capteur U</a>
  </p>
 <v-layout wrap>
      <v-flex d-flex xs5 @change="changeU('uMinHT', $event)">
        <v-text-field
          id="uMinHT"
          type="number"
          :value="$store.state.uMinHT"
          background-color=""
          label="Tension HT min"
          placeholder="Entrez la valeur"
          box
          outline
          suffix="kV">
        </v-text-field>
      </v-flex>
      <v-spacer></v-spacer>
         <v-flex d-flex xs5 @change="changeU('uMaxHT', $event)">
        <v-text-field
          id="uMaxHT"
          type="number"
          :value="$store.state.uMaxHT"
          background-color=""
          label="Tension HT max"
          placeholder="Entrez la valeur"
          box
          outline
          suffix="kV">
        </v-text-field>
      </v-flex>
      <v-flex xs12 d-flex>
        <v-select
          @change="changePlageU('fuBT', $event)"
          id="fuBT"
          :items="fuBT"
          v-model="$store.state.fuBT"
          item-value="value"
          item-text="text"
          label="Plage tension BT"
          placeholder="Choissisez la famille"
          outline
          suffix="">
        </v-select>
      </v-flex>
            <v-flex>
        <v-select
          @change="changeValue('smaMinU', $event)"
          id="smaMinU"
          :items="smaMinU"
          v-model="$store.state.smaMinU"
          item-value="value"
          item-text="text"
          label="Sortie procédé min"
          placeholder="Choissisez la valeur"
          outline
          suffix="">
        </v-select>
      </v-flex>
      <v-spacer></v-spacer>
            <v-flex>
        <v-select
          @change="changeValue('smaMaxU', $event)"
          id="smaMaxU"
          :items="smaMaxU"
          v-model="$store.state.smaMaxU"
          item-value="value"
          item-text="text"
          label="Sortie procédé max"
          placeholder="Choissisez la valeur"
          outline
          suffix="">
        </v-select>
      </v-flex>
     </v-layout>
     </section>
</template>

<script>
export default {
  data: function() {
    return { 
      fuBT: [
      {
        value: 0,
        text: "Plage réglée"
      },
      {
        value: 1,
        text: "U1  0 à 124/√3 V"
      },
      {
        value: 2,
        text: "U2  78/√3 à 121,25/√3 V"
      }
    ],
        smaMinU: [
           {
        value: 0,
        text: "0 mA"
      },
           {
        value: 4,
        text: "4 mA"
      }
    ],
       smaMaxU: [
                    {
        value: 5,
        text: "5 mA"
      },
           {
        value: 10,
        text: "10 mA"
      },
           {
        value: 20,
        text: "20 mA"
      }
    ]
    };
  },
  components: {},
  methods: {
    changeU(key, event) {
      this.changeValue("fuBT", 0);
      this.changeValue(key, event.target.value * 1000);
      this.$store.dispatch("CALC_U_BT");
    },
    changePlageU(key, event) {
      console.log(event)
      this.changeValue("fuBT", event);
      if (this.$store.state.fuBT === 0) {
        this.changeValue("uMinBT", "");
        this.changeValue("uMaxBT", "");
      } else if (this.$store.state.fuBT === 1) {
        this.changeValue("uMinBT", 0);
        this.changeValue("uMaxBT", 124);
      } else if (this.$store.state.fuBT === 2) {
        this.changeValue("uMinBT", 78);
        this.changeValue("uMaxBT", 121.25);
      }
      this.$store.dispatch("CALC_U");
    },
    changeValueEvent(key, event) {
      this.$store.commit("CHANGE_VALUE", {
        path: [key],
        value: event.target.value
      });
    },
    changeValue(key, value) {
      this.$store.commit("CHANGE_VALUE", {
        path: [key],
        value: value
      });
    }
  }
};
</script>

<style scoped>
</style>