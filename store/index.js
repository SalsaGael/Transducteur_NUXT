import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      start: "calcpa",
      theme: "light",
      themeselect: "light",
      KU: 2200,
      KI: 300,
      KP: 660000,
      pTC: 1500,
      sTC: 5,
      fpaHT: 4,
      fprHT: 4,
      smaMinPA: -20,
      smaMaxPA: 20,
      smaMinPR: -20,
      smaMaxPR: 20,
      fuHT: "1",
      smaPlage: 20,
      smaPlageU: 16,
      smaMinU: 4,
      smaMaxU: 20,
      uBTMin: 0,
      uBTMax: 124,
      uMin: 0,
      uMax: 272800,
      inputUHT: "Entrez la valeur",
      inputVHT: "Entrez la valeur",
      inputVBT: "Entrez la valeur",
      inputSMA: "Entrez la valeur"
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
        console.log(path)
        parent[path] = Number.parseFloat(value);
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
      },
    },
    getters: {
      smaPlageU(state) {
        return state.smaMaxU - state.smaMinU
      },
      bvMin(state) {
        return state.uMin / state.KU / Math.sqrt(3)
      },
      bvMax(state) {
        return state.uMax / state.KU / Math.sqrt(3)
      },
      buMin(state) {
        return state.uMax / state.KU
      },
      buMax(state) {
        return state.uMax / state.KU
      },
      faMin(state, getters) {
        return getters.smaPlageU * (1 - Math.pow(getters.bvMax, 2) / (Math.pow(getters.bvMax, 2) - Math.pow(getters.bvMin, 2)))
      },
      faMax(state, getters) {
        return getters.smaPlageU / (Math.pow(getters.bvMax, 2) - Math.pow(getters.bvMin, 2))
      },
      faMoo(state, getters) {
        return (getters.smaPlageU - getters.faMin) / getters.faMax
      },
      faTot(state, getters) {
        return Math.sqrt(getters.faMoo)
      }
  }
  });
};

export default createStore;
