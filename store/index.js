import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    strict: true,
    state: {
      smaPlageU: "",
      bvMin: "",
      start: "calcpa",
      theme: "light",
      themeselect: "light",
      KU: "2200",
      KI: "300",
      KP: "660000",
      pTC: "1500",
      sTC: "5",
      fpaHT: "4",
      fprHT: "4",
      smaMinPA: "-20",
      smaMaxPA: "20",
      smaMinPR: "-20",
      smaMaxPR: "20",
      fuHT: "1",
      smaPlage: "20",
      smaPlageU: "16",
      smaMinU: "4",
      smaMaxU: "20"
    },
    mutations: {
      ADD(state, name, value) {
        const parent = ((state, key) => {
          return state.key;
        },
        state);
        parent[name] = value;
      },
      CHANGE_VALUE(state, { path, value }) {
        const parent = ((state, key) => {
          return state.key;
        },
        state);
        parent[path[path.length - 1]] = value;
      }
    },
    actions: {
      ADD(context, name, value) {
        console.log("actions " + name + " " + value);
        this.commit("ADD", name, value);
      }
    }
  });
};

export default createStore;
