<template>
  <section>
    <p class="mb-1">
      <a>Paramètres Capteur Q</a>
    </p>
   <v-layout wrap>
      <v-flex d-flex xs12 @change="changeValueEvent('prMaxHT', $event)">
        <v-text-field
          id="prMaxHT"
          type="number"
          :value="$store.state.prMaxHT"
          background-color=""
          label="Puissance réactive HT min/max"
          placeholder="Entrez la valeur"
          box
          outline
          suffix="Mvar">
        </v-text-field>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 d-flex>
        <v-select
          @change="changeValue('fprBT', $event)"
          id="fprBT"
          :items="fprBT"
          v-model="$store.state.fprBT"
          item-value="value"
          item-text="text"
          label="Puissance réactive BT"
          placeholder="Choissisez la famille"
          outline
          suffix="">
        </v-select>
      </v-flex>
            <v-flex xs6 d-flex>
        <v-select
          @change="changeValue('smaMinPR', $event)"
          id="smaMinPR"
          :items="smaMinPR"
          v-model="$store.state.smaMinPR"
          item-value="value"
          item-text="text"
          label="Sortie procédé min"
          placeholder="Choissisez la valeur"
          outline
          suffix="">
        </v-select>
      </v-flex>
      <v-spacer></v-spacer>
            <v-flex xs6 d-flex>
        <v-select
          @change="changeValue('smaMaxPR', $event)"
          id="smaMaxPR"
          :items="smaMaxPR"
          v-model="$store.state.smaMaxPR"
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
data: () => ({
    fprBT: [
      {
        value: 0,
        text: "Plage réglée"
      },
      {
        value: 301.1,
        text: "Q1 - 301.1 var"
      },
      {
        value: 372.4,
        text: "Q2 - 372.4 var"
      },
      {
        value: 433,
        text: "Q3 - 433 var"
      },
      {
        value: 519.6,
        text: "Q4 - 519.6 var"
      },
      {
        value: 606.2,
        text: "Q5 - 606.2 var"
      },
      {
        value: 848.7,
        text: "Q6 - 848.7 var"
      },
      {
        value: 731.8,
        text: "Q7 - 731.8 var"
      },
      {
        value: 866,
        text: "Q8 - 866 var"
      },
            {
        value: 1074,
        text: "Q9 - 1074 var"
      }
    ],
    smaMinPR: [
      {
        value: -20,
        text: "-20 mA"
      },
           {
        value: -10,
        text: "-10 mA"
      },
           {
        value: -5,
        text: "-5 mA"
      },
           {
        value: -0,
        text: "0 mA"
      },
           {
        value: 4,
        text: "4 mA"
      }
    ],
       smaMaxPR: [
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
  }),
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

<style>
</style>