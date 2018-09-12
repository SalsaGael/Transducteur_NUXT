<template>
<nav id="nav" class="navbar navbar-light justify-content-between w-100">
         
		<span class="navbar-brand">
			<nuxt-link to="/">
				<img src="favicon.ico" alt="Logo App" height="45" class="d-inline-block align-middle">
			</nuxt-link>
		</span>
		<span id="titleAppShort" class="">
			<a class="h5">Calculette pour capteur</a>
		</span>
		<span id="titleAppMedium" class="mr-auto">
			<a class="h4">Calculette pour capteur</a>
		</span>
		<span id="titleApp" class="mr-auto">
			<a class="h4">Calculette pour transducteur de mesure</a>
		</span>
		<span class="btn-group">
             <nuxt-link to="/pa">
			    <button class="btn btn btn-dark btn-origin mr-2" type="button" id="tabCalcPuisAct">
                   Puissance active
			    </button>
            </nuxt-link>
            <nuxt-link to="/pr">
			    <button class="btn btn btn-dark btn-origin mr-2" type="button" id="tabCalcPuisReact">
				    Puissance réactive
			    </button>
            </nuxt-link>
            <nuxt-link to="/tens">
			    <button class="btn btn btn-dark btn-origin mr-2" type="button" id="tabCalcTens">
				    Tension
			    </button>
            </nuxt-link>
		</span>

</nav>
</template>
<script>
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-bg-color);
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  color: black;
  min-height: 68px;
  height: 68px;
  z-index: 5;
}
</style>