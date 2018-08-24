 <template>
 <section>
    <p class="mb-1">
    <a>Calcul des valeurs pour 100/√3 V φ=90°</a>
</p>

<div class="input-group mb-2">
    <div class="input-group-prepend">
        <label class="input-group-text text-light bg-secondary input-ant">Puissance HT</label>
    </div>
    <input type="number" id="prHT" v-bind:value="this.$store.state.prHT" @change="update('prHT', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
    <div class="input-group-append">
        <span class="input-group-text text-light bg-secondary input-post">Mvar</span>
    </div>
</div>

<div class="input-group mb-2">
    <div class="input-group-prepend">
        <label for="irBT" class="input-group-text text-light bg-primary input-ant">Courant BT</label>
    </div>
    <input type="number" id="irBT" v-bind:value="this.$store.state.irBT" @change="update('irBT', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small"
        aria-describedby="inputGroup-sizing-sm">
    <div class="input-group-append">
        <span class="input-group-text text-light bg-primary input-post">A</span>
    </div>
</div>

<div class="input-group mb-2">
    <div class="input-group-prepend">
        <label for="srma" class="input-group-text text-light bg-success input-ant">Sortie procédé</label>
    </div>
    <input type="number" id="srma" v-bind:value="this.$store.state.srma" @change="update('srma', $event)" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
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