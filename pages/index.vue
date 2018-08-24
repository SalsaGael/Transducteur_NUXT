<template>

  <section class="container">
<div>
  <img src="favicon.ico">
  <h2>Choissisez le type de capteur</h2>
</div>  
<div>
         <nuxt-link to="/pa">
			    <v-btn class="btn-dark" type="v-btn">
                   Puissance active
			    </v-btn>
            </nuxt-link>
            <nuxt-link to="/pr">
			    <v-btn class="btn-dark" type="v-btn">
				    Puissance réactive
			    </v-btn>
            </nuxt-link>
            <nuxt-link to="/tens">
			    <v-btn class="btn-dark" type="v-btn">
				    Tension quadratique
			    </v-btn>
            </nuxt-link>
</div>

  </section>
</template>

<script>
</script>

<style scoped>
.container,
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

