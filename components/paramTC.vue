<template>
    <v-layout wrap>
      <v-flex d-flex xs6 @change="changeValueEvent('pTC', $event)">
        <v-text-field
          id="pTC"
          type="number"
          :value="this.$store.state.pTC"
          background-color=""
          label="Primaire TC"
          placeholder="Entrez la valeur"
          box
          outline
          suffix="A">
        </v-text-field>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs5 d-flex>
        <v-select
          @change="changeValue('sTC', $event)"
          id="sTC"
          :items="sTC"
          v-model="$store.state.sTC"
          item-value="value"
          item-text="text"
          label="Secondaire TC"
          placeholder="Entrez la valeur"
          outline
          suffix="">
        </v-select>
      </v-flex>
     </v-layout>
</template>

<script>
export default {
  data: () => ({
    sTC: [
      {
        value: 1,
        text: "1 A"
      },
      {
        value: 5,
        text: "5 A"
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
    },
    changeValueEvent(key, value) {
      this.$store.commit("CHANGE_VALUE", {
        path: [key],
        value: event.target.value
      });
    }
  }
};
</script>

<style scoped>
</style>