<template>
  <section>
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
            <select class="custom-select theme-select" id="theme" v-bind:value="this.$store.state.theme" @change="changeEntryEvent('theme', $event)">
              <option value="default">Clair</option>
              <option value="defaultDark">Sombre</option>
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
    <div class="nav justify-content-left py-1 footer" id="footer">
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
  </section>
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
    },
    changeValue(key, value) {
      this.$store.commit("CHANGE_VALUE", {
        path: [key],
        value: value
      });
    },
    changeEntryEvent(key, event) {
      this.$store.commit("CHANGE_ENTRY", {
        path: [key],
        value: event.target.value
      });
    }
  }
};
</script>

<style>
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

#footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(240, 240, 240, 0.95);
  border-top: 1px solid black;
  width: 100%;
  height: 48px;
  min-height: 48px;
  bottom: 48px;
  z-index: 5;
}
</style>
