 <template>
 <section class="">
      <p class="mb-1">
        <a>Calcul des valeurs pour 100/√3 V φ=0°</a>
    </p>
    
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text text-light bg-secondary input-ant">Puissance HT</label>
        </div>
        <input type="number" id="paHT" v-bind:value="this.$store.state.paHT" @change="CHANGE_VALUE('paHT', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
    <span class="input-group-text text-light bg-secondary input-post">MW</span>
        </div>
    </div>

    <div class="input-group mb-2">
        <div class="input-group-prepend">
           <label for="iaBT" class="input-group-text text-light bg-primary input-ant">Courant BT</label>
        </div>
            <input type="number" id="iaBT" v-bind:value="this.$store.state.iaBT" @change="CHANGE_VALUE('iaBT', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small"
        aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
           <span class="input-group-text text-light bg-primary input-post">A</span>
        </div>
    </div>

    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text text-light bg-success input-ant">Sortie procédé</label>
        </div>
            <input type="number" id="sama" v-bind:value="this.$store.state.sama" @change="CHANGE_VALUE('sama', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
        <span class="input-group-text text-light bg-success input-post">mA</span>
        </div>
    </div>
    </section>
    </template>
    <script>
export default {
  components: {},
  methods: {
    CHANGE_VALUE(key, event) {
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