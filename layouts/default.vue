<template>

  <div class="div-body" @click.stop="hideMenu()" v-touch="{
      left: () => hideMenu(),
      right: () => showMenu()
    }">
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

	<!-- injection App -->
  <nuxt/>

	<div class="menu" id="menu" @click.stop>
		<ul id="menulist">
			<li id="burger" class="m-4 ml-5">
				<i class="fa fa-user-circle-o" aria-hidden="true"></i>
				<a> Gaël Piconcely</a>
			</li>
			<li id="" class="m-4">
				<div class="input-group">
					<div class="input-group-prepend">
						<label class="input-group-text bg-dark text-light theme-select" for="theme">Thème</label>
					</div>
					<select class="custom-select theme-select" id="theme">
						<option value="light">Clair</option>
						<option value="dark">Sombre</option>
						<option value="orange">Orange</option>
					</select>
				</div>
			</li>
			<li id="" class="m-4">
				<button class="btn btn-dark theme-icon" onClick="location.href='mailto:gael.piconcely@free.fr?subject=Retour utilisateur'">
					<i class="fa fa-envelope-open" aria-hidden="true"></i>
				</button>
				<a> Me contacter</a>
			</li>
			<li id="" class="m-4">
				<button class="btn btn-dark theme-icon" onClick="location.href='https://twitter.com/salsagael'">
					<i class="fa fa-twitter" aria-hidden="true"></i>
				</button>
				<a> Me suivre</a>
			</li>
			<li id="" class="m-4">
				<button class="btn btn-dark theme-icon" onClick="location.href='https://paypal.me/PICONCELY/1.5'">
					<i class="fa fa-paypal" aria-hidden="true"></i>
				</button>
				<a> Me payer un café</a>
			</li>
      <no-ssr v-if="isShare()">
      <li id="" class="m-4">
				<button class="btn btn-dark theme-icon" @click="share()">
					<i class="fa fa-share" aria-hidden="true"></i>
				</button>
				<a> Partager</a>
			</li>
      </no-ssr>
		</ul>
	</div>

	<div class="nav justify-content-left py-1" id="footer">
		<button class="btn btn-dark ml-2 mr-auto" @click.stop="burgerClick()" type="button" id="menubtn">
			<a>
				<i class="fa fa-bars" aria-hidden="true"></i>
			</a>
		</button>
        <nuxt-link to="/pa">
		<button class="btn btn-dark btn-reduct ml-auto mr-2" type="button" id="tabCalcPuisActReduct">
			P

		</button>
        </nuxt-link>
        <nuxt-link to="/pr">
		<button class="btn btn-dark btn-reduct mr-2" type="button" id="tabCalcPuisReactReduct">
			Q

		</button>
        </nuxt-link>
        <nuxt-link to="/tens">
		<button class="btn btn-dark btn-reduct mr-2" type="button" id="tabCalcTensReduct">
			U
		</button>
        </nuxt-link>
	</div>
    
  </div>

</template>

<script>
export default {
  data: function() {
    return {
      timer: false
    };
  },
  methods: {
    // Gestion Panneau Menu //
    toggleMenu() {
      menu.classList.toggle("show");
      menubtn.classList.toggle("active");
    },
    showMenu() {
      if (!this.timer) {
        this.timer = true;
        menu.classList.add("show");
        menubtn.classList.add("active");
        setTimeout(() => {
          this.timer = false;
          menu.classList.remove("show");
          menubtn.classList.remove("active");
        }, 10000);
      } else {
        menu.classList.add("show");
        menubtn.classList.add("active");
      }
    },
    hideMenu() {
      menu.classList.remove("show");
      menubtn.classList.remove("active");
    },
    burgerClick() {
      if (!this.timer) {
        this.showMenu();
      } else {
        this.toggleMenu();
      }
    },
    isShare() {
      if (process.client) {
        if (navigator.share) {
          return true;
        }
      }
    },
    share() {
      navigator
        .share({
          title: "Transducteur",
          text: "Une calculette pratique pour les capteurs de mesure",
          url: window.location.href
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(err => {
          console.log(`Couldn't share because of`, err.message);
        });
    }
  },
  computed: {}
};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html,
body,
.div-body {
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-between;
  width: 100vw;
  height: 100vh;
  font-family: sans-serif;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(240, 240, 240, 0.95);
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  color: black;
  min-height: 68px;
  height: 68px;
  z-index: 5;
}

a,
a:hover,
a:checked {
  text-decoration: none;
  color: inherit;
}

#footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(240, 240, 240, 0.95);
  border-top: 1px solid black;
  width: 100%;
  height: 48px;
  min-height: 48px;
  z-index: 5;
}
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
}
.param {
  overflow-y: auto;
}
#menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 245px;
  top: 68px;
  bottom: 48px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: rgba(240, 240, 240, 0.95);
  color: black;
  transform: translateX(-250px);
  transition: 0.6s;
  z-index: 10;
}

.show {
  transform: translateX(0px) !important;
  transition: all 1s ease-in-out;
}

.disapear {
  display: none !important;
}

.form-control,
.custom-select,
.input-group-text,
.input-group-middle {
  border: 1px solid gainsboro;
  font-size: auto;
  color: #000;
}

.form-control,
.input-group-text,
.input-group-middle {
  padding-left: 1em;
  padding-right: 1em;
}

.bg-primary,
.bg-secondary,
.bg-success,
.bg-danger,
.bg-dark {
  border: 0;
}

.input-group-middle {
  border-left: 0;
  border-right: 0;
}

.input-group-middle {
  border-radius: 0;
}

#theme {
  text-decoration: none;
  border: 0px;
  width: 50%;
}

.theme-select {
  height: 42px !important;
}

.theme-icon {
  height: 42px !important;
  width: 42px !important;
}

/* Extra small devices (portrait phones, less than 576px) */

/* No media query since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */

@media (min-width: 200px) {
  .input-group-text,
  .input-group-middle,
  .form-control,
  .custom-select {
    height: 1.9em;
    padding: 0px 5px 0px 5px;
  }
  #titleAppShort {
    display: block;
  }
  #titleAppMedium {
    display: none;
  }
  #titleApp {
    display: none;
  }
  .btn-origin {
    display: none;
  }
  .btn-reduct {
    display: block;
  }
  .input-ant {
    width: 7.5em;
  }
  .input-post {
    width: 2.8em;
  }
}

/* Medium devices (medium phone, 360px and up) */

@media (min-width: 360px) {
  .input-group-text,
  .input-group-middle,
  .form-control,
  .custom-select {
    height: 2.5em;
    padding: 0px 10px 0px 10px;
  }
  #titleAppShort {
    display: block;
  }
  #titleAppMedium {
    display: none;
  }
  #titleApp {
    display: none;
  }
  .btn-origin {
    display: none;
  }
  .btn-reduct {
    display: block;
  }
  .input-ant {
    width: 8.2em;
  }
  .input-post {
    width: 3.5em;
  }
}

/* Medium devices (large phone, 375px and up) */

@media (min-width: 375px) {
  .form-control,
  .custom-select,
  .input-group-text,
  .input-group-middle {
    height: 2.7em;
  }
  #titleAppShort {
    display: none;
  }
  #titleAppMedium {
    display: block;
  }
  #titleApp {
    display: none;
  }
  .btn-origin {
    display: none;
  }
  .btn-reduct {
    display: block;
  }
}

/* Medium devices (tablets, 400px and up) */

@media (min-width: 400px) {
  .form-control,
  .custom-select,
  .input-group-text,
  .input-group-middle {
    height: 3em;
  }
  #titleAppShort {
    display: none;
  }
  #titleAppMedium {
    display: block;
  }
  #titleApp {
    display: none;
  }
  .btn-origin {
    display: none;
  }
  .btn-reduct {
    display: block;
  }
}

/* Large devices (desktops, 992px and up) */

@media (min-width: 992px) {
  .form-control,
  .custom-select,
  .input-group-text,
  .input-group-middle {
    height: 3.2em;
  }
  #titleAppShort {
    display: none;
  }
  #titleAppMedium {
    display: none;
  }
  #titleApp {
    display: block;
  }
  .btn-origin {
    display: block;
  }
  .btn-reduct {
    display: none;
  }
}

/* Extra large devices (large desktops, 1200px and up) */

@media (min-width: 1200px) {
  .form-control,
  .custom-select,
  .input-group-text,
  .input-group-middle {
    height: 3.4em;
  }
  #titleAppShort {
    display: none;
  }
  #titleAppMedium {
    display: none;
  }
  #titleApp {
    display: block;
  }
  .btn-origin {
    display: block;
  }
  .btn-reduct {
    display: none;
  }
}
</style>

