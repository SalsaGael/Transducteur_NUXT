<template>
  <section>
    <p class="mb-1">
      <a>Paramètres Capteur P</a>
    </p>
   <v-layout wrap>
      <v-flex d-flex xs12 @change="changeValueEvent('paMaxHT', $event)">
        <v-text-field
          id="paMaxHT"
          type="number"
          :value="$store.state.paMaxHT"
          background-color=""
          label="Puissance active HT min/max"
          placeholder="Entrez la valeur"
          box
          outline
          suffix="MW">
        </v-text-field>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 d-flex>
        <v-select
          @change="changeValue('fpaBT', $event)"
          id="fpaBT"
          :items="fpaBT"
          v-model="$store.state.fpaBT"
          item-value="value"
          item-text="text"
          label="Puissance active BT"
          placeholder="Choissisez la famille"
          outline
          suffix="">
        </v-select>
      </v-flex>
            <v-flex xs6 d-flex>
        <v-select
          @change="changeValue('smaMinPA', $event)"
          id="smaMinPA"
          :items="smaMinPA"
          v-model="$store.state.smaMinPA"
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
          @change="changeValue('smaMaxPA', $event)"
          id="smaMaxPA"
          :items="smaMaxPA"
          v-model="$store.state.smaMaxPA"
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
    fpaBT: [
      {
        value: 0,
        text: "Plage réglée"
      },
      {
        value: 602.2,
        text: "P1 - 602.2 W"
      },
      {
        value: 744.8,
        text: "P2 - 744.8 W"
      },
      {
        value: 866,
        text: "P3 - 866 W"
      },
      {
        value: 1039,
        text: "P4 - 1039 W"
      },
      {
        value: 1212,
        text: "P5 - 1212 W"
      },
      {
        value: 1464,
        text: "P6 - 1464"
      },
      {
        value: 1732,
        text: "P8 - 1732 W"
      },
      {
        value: 2250,
        text: "P9 - 2148 W"
      }
    ],
    smaMinPA: [
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
       smaMaxPA: [
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
    changepaMaxHT(key, event) {
      this.changeValueEvent(key, event);
      this.changeValue("fpaBT", 0);
    }
  }
};
</script>

<style>
</style>