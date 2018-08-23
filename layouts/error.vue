<template>
   <section class="container">
<div>
  <img src="favicon.ico">
    <h1 v-if="error.statusCode === 404">Page non trouvée</h1>
    <h1 v-else>Une erreur s'est produite</h1>
</div>  
<div>
    <nuxt-link to="/">
    <v-btn class="">Retouner à l'accueil</v-btn>
    </nuxt-link>
 </div>
   </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // vous pouvez définir une mise en page personnalisée pour la page d'erreur
}
</script>

<style scoped>
.container, div {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;
}

h2 {
  font-size: 25px;
}

a {
  font-size: 40px;
}

img {
  width: 100%;
  max-width: 300px;
}
</style>
