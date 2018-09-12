<template>
<section>
<menu></menu>
  <div class="div-body" @click.stop="hideMenu()" v-touch="{
      left: () => hideMenu(),
      right: () => showMenu()
    }">
  <headernav></headernav>
  

	<!-- injection App -->
  <nuxt/>

  <footerapp></footerapp>
</div>
</section>
</template>

<script>
import headernav from "../components/headernav.vue";
import footerapp from "../components/footerapp.vue";
export default {
  layout: "default",
  components: {
    headernav,
    footerapp
  },
  methods: {
    // Gestion Panneau Menu avec Swype/
    showMenu() {
      menu.classList.add("show");
      menubtn.classList.add("active");
    },
    hideMenu() {
      menu.classList.remove("show");
      menubtn.classList.remove("active");
    }
  }
};
</script>

<style>
</style>