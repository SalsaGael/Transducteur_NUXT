<template>
<section>
       
 <p class="mb-1">
     <a>Paramètres du capteur U</a>
    </p>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text" for="fuHT">Famille BT</label>
        </div>
           <select id="fuHT" class="custom-select" v-bind:value="this.$store.state.fuHT" @change="update('fuHT', $event)">
            <option value="0">Plage réglée</option>
            <option value="1">U1  0 à 124/√3 V</option>
            <option value="2">U2  78/√3 à 121,25/√3 V</option>
        </select>
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text" for="uMin">Plage HT</label>
        </div>
        <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="uMin" type="number" v-bind:value="this.$store.state.uMin" @change="update('uMin', $event)"/>
        <span class="input-group-text input-group-middle">à</span>
        <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="uMax" type="number" v-bind:value="this.$store.state.uMax" @change="update('uMax', $event)"/>
        <div class="input-group-append">
            <span class="input-group-text">kV</span>
        </div>
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label for="smaMinU" class="input-group-text">Sortie</label>
        </div>
        <select id='smaMinU' class="custom-select" v-bind:value="this.$store.state.smaMinU" @change="update('smaMinU', $event)">
            <option value="0">0</option>
            <option value="4">4</option>
        </select>
        <span class="input-group-text input-group-middle">à</span>
        <select id='smaMaxU' class="custom-select" v-bind:value="this.$store.state.smaMaxU" @change="update('smaMaxU', $event)">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
        <div class="input-group-append">
            <span class="input-group-text">mA</span>
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