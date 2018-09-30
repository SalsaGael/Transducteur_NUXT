import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

const createStore = () => {
  return new Vuex.Store({
    plugin: [process.client ? createPersistedState() : console.log("Rendu Serveur")],
    state: {
      start: "pa",
      theme: "default",
      isDark: true,
      KU: 4000,
      pTC: 1500,
      sTC: 5,
      fpaBT: 1039,
      fprBT: 519.6,
      smaMinPA: -20,
      smaMaxPA: 20,
      smaMinPR: -20,
      smaMaxPR: 20,
      fuBT: 1,
      smaMinU: 4,
      smaMaxU: 20,
      uMinBT: 0,
      uMaxBT: 124,
      uMinHT: 0,
      uMaxHT: 272800,
      inputPAHT: "Entrez la valeur",
      inputIABT: "Entrez la valeur",
      inputSAMA: "Entrez la valeur",
      inputPRHT: "Entrez la valeur",
      inputIRBT: "Entrez la valeur",
      inputSRMA: "Entrez la valeur",
      inputUHT: "Entrez la valeur",
      inputVHT: "Entrez la valeur",
      inputVBT: "Entrez la valeur",
      inputSUMA: "Entrez la valeur",
    },
    mutations: {
      CHANGE_VALUE(state, {
        path,
        value
      }) {
        const parent = ((state, key) => {
            return state.key;
          },
          state);
        parent[path] = Number.parseFloat(value);
      },
      CHANGE_ENTRY(state, {
        path,
        value
      }) {
        const parent = ((state, key) => {
            return state.key;
          },
          state);
        parent[path] = (value);
      }
    },
    actions: {
      CALC_U(context) {
        context.commit("CHANGE_VALUE", {
          path: "uMinHT",
          value: this.state.uMinBT * this.state.KU
        });
        context.commit("CHANGE_VALUE", {
          path: "uMaxHT",
          value: this.state.uMaxBT * this.state.KU
        });
      },
      CALC_U_BT(context) {
        context.commit("CHANGE_VALUE", {
          path: "uMinBT",
          value: this.state.uMinHT / this.state.KU
        });
        context.commit("CHANGE_VALUE", {
          path: "uMaxBT",
          value: this.state.uMaxHT / this.state.KU
        });
      }
    },
    getters: {
      KI(state) {
        return state.pTC / state.sTC
      },
      KP(state, getters) {
        return state.KU * getters.KI
      },
      paMaxHT(state, getters) {
        if (state.fpaBT === 0) {
          return state.paMaxHT * 1000000
        } else {
          return state.fpaBT * getters.KP
        }
      },
      prMaxHT(state, getters) {
        if (state.fprBT === 0) {
          return state.prMaxHT * 1000000
        } else {
          return state.fprBT * getters.KP
        }
      },
      smaPlagePA(state) {
        return (state.smaMaxPA - state.smaMinPA) / 2
      },
      smaPlagePR(state) {
        return (state.smaMaxPR - state.smaMinPR) / 2
      },
      smaPlageU(state) {
        return state.smaMaxU - state.smaMinU;
      },
      bvMin(state) {
        return state.uMinHT / state.KU / Math.sqrt(3);
      },
      bvMax(state) {
        return state.uMaxHT / state.KU / Math.sqrt(3);
      },
      buMin(state) {
        return state.uMaxHT / state.KU;
      },
      buMax(state) {
        return state.uMaxHT / state.KU;
      },
      faMin(state, getters) {
        return (
          getters.smaPlageU *
          (1 -
            Math.pow(getters.bvMax, 2) /
            (Math.pow(getters.bvMax, 2) - Math.pow(getters.bvMin, 2)))
        );
      },
      faMax(state, getters) {
        return (
          getters.smaPlageU /
          (Math.pow(getters.bvMax, 2) - Math.pow(getters.bvMin, 2))
        );
      },
      faMoo(state, getters) {
        return (getters.smaPlageU - getters.faMin) / getters.faMax;
      },
      faTot(state, getters) {
        return Math.sqrt(getters.faMoo);
      }
    }
  });
};

export default createStore;
