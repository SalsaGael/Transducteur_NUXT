import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

const createStore = () => {
  return new Vuex.Store({
    plugin: [process.client ? createPersistedState() : console.log("Rendu Serveur")],
    state: {
      start: "pa",
      theme: "default",
      KU: 2200,
      pTC: 1500,
      sTC: 5,
      fpaBT: 4,
      fprBT: 4,
      smaMinPA: -20,
      smaMaxPA: 20,
      smaMinPR: -20,
      smaMaxPR: 20,
      fuHT: "1",
      smaMinU: 4,
      smaMaxU: 20,
      uBTMin: 0,
      uBTMax: 124,
      uMin: 0,
      uMax: 272800,
      inputPAHT: "Entrez la valeur",
      inputIABT: "Entrez la valeur",
      inputSAMA: "Entrez la valeur",
      inputPRHT: "Entrez la valeur",
      inputIRBT: "Entrez la valeur",
      inputSRMA: "Entrez la valeur",
      inputUHT: "Entrez la valeur",
      inputVHT: "Entrez la valeur",
      inputVBT: "Entrez la valeur"
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
          path: "uMin",
          value: this.state.uBTMin * this.state.KU
        });
        context.commit("CHANGE_VALUE", {
          path: "uMax",
          value: this.state.uBTMax * this.state.KU
        });
      },
      CALC_U_BT(context) {
        context.commit("CHANGE_VALUE", {
          path: "uBTMin",
          value: this.state.uMin / this.state.KU
        });
        context.commit("CHANGE_VALUE", {
          path: "uBTMax",
          value: this.state.uMax / this.state.KU
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
        return state.uMin / state.KU / Math.sqrt(3);
      },
      bvMax(state) {
        return state.uMax / state.KU / Math.sqrt(3);
      },
      buMin(state) {
        return state.uMax / state.KU;
      },
      buMax(state) {
        return state.uMax / state.KU;
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
