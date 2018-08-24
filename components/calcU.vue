 <template>
 <section>
     
 <div class="bloccalc" id="bloccalc">
    <p class="mb-1">
        <a>Calcul des valeurs</a>
    </p>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label for="uHT" class="input-group-text text-light bg-secondary input-ant">HT Triphasé</label>
        </div>
        <input type="number" id="uHT" v-bind:value="this.$store.state.uHT" @change="update('uHT', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
        <span class="input-group-text text-light bg-secondary input-post">kV</span>
        </div>
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label for="vHT" class="input-group-text text-light bg-primary input-ant">HT Monophasé</label>
        </div>
        <input type="number" id="vHT" v-bind:value="this.$store.state.vHT" @change="update('vHT', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
            <span class="input-group-text text-light bg-primary input-post">kV</span>
        </div>
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label for="vBT" class="input-group-text text-light bg-danger input-ant">BT Monophasé</label>
        </div>
        <input type="number" id="vBT" v-bind:value="this.$store.state.vBT" @change="update('vBT', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
            <span class="input-group-text text-light bg-danger input-post">V</span>
        </div>
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label for="suma" class="input-group-text text-light bg-success input-ant">Sortie procédé</label>
        </div>
            <input type="number" id="suma" v-bind:value="this.$store.state.suma" @change="update('suma', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
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
  methods: {
    update(key, event) {
      this.$store.commit("update", {
        path: [key],
        value: event.target.value
      });
    }
  }
};
</script>

<style scoped>
</style>