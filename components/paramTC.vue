  <template>
  <section>
    <p class="mb-1">
      <a>Paramètres TC</a>
    </p>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label class="input-group-text" for="pTC">Rapport</label>
      </div>
      <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id='pTC' type="number" v-bind:value="this.$store.state.pTC"
        @change="CHANGE_VALUE('pTC', $event)" />
      <div class="input-group-append">
        <span class="input-group-text input-group-middle">/</span>
      </div>
     <select class="custom-select" id='sTC' v-bind:value="this.$store.state.sTC" @change="CHANGE_VALUE('sTC', $event)">
        <option value="1">1</option>
        <option value="5">5</option>
      </select>
      <div class="input-group-append">
        <span class="input-group-text">A</span>
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