<template>
  <v-layout>
    <v-flex xs12>
      <v-select
        @change="changeValue('KU', $event)"
        id="KU"
        :items="KU"
        v-model="$store.state.KU"
        item-value="value"
        item-text="text"
        label="Rapport TT"
        placeholder="Entrez la valeur"
        outline
        default
        suffix="">
      </v-select>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    KU: [
      {
        value: 150,
        text: "15 kV / 100 V"
      },
      {
        value: 200,
        text: "20 kV / 100 V"
      },
      {
        value: 450,
        text: "45 kV / 100 V"
      },
      {
        value: 600,
        text: "60 kV / 100 V"
      },
      {
        value: 630,
        text: "63 kV / 100 V"
      },
      {
        value: 900,
        text: "90 kV / 100 V"
      },
      {
        value: 1500,
        text: "150 kV / 100 V"
      },
      {
        value: 2200,
        text: "220 kV / 100 V"
      },
      {
        value: 2250,
        text: "225 kV / 100 V"
      },
      {
        value: 4000,
        text: "400 kV / 100 V"
      }
    ]
  }),
  components: {},
  methods: {
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