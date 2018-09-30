<template>
  <v-container>
    <img src="favicon.ico">
    <div>
      <nuxt-link tag="v-btn" to="/pa">
        Calculette puissance active
      </nuxt-link>
      <nuxt-link tag="v-btn" to="/pr">
        Calculette puissance réactive
      </nuxt-link>
      <nuxt-link tag="v-btn" to="/tens">
        Calculette tension quadratique
      </nuxt-link>
      <nuxt-link tag="v-btn" to="/params">
        Paramétres capteurs
      </nuxt-link>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
v-container,
div {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;
}

h1 {
  font-size: 25px;
}

img {
  width: 50vw;
  max-width: 300px;
}
</style>

