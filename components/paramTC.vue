  <template>
  <section>
    <p class="mb-1">
      <a>Paramètres TC</a>
    </p>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label class="input-group-text" for="pTC">Courant primaire TC</label>
      </div>
      <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id='pTC' type="number" v-bind:value="this.$store.state.pTC"
        @change="update('pTC', $event)" />

      <div class="input-group-append">
        <label class="input-group-text" for="pTC">A</label>
      </div>
    </div>

    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <label for="sTC" class="input-group-text">Secondaire TC</label>
      </div>
      <select class="custom-select" id='sTC' v-bind:value="this.$store.state.sTC" @change="update('sTC', $event)">
        <option value="1">Circuit 1 A</option>
        <option value="5">Circuit 5 A</option>
      </select>
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