import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({

    state: {
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
      smaMin: "-20",
      smaMax: "20",
      fuHT: "1",
      smaPlage: "20",
      smaMinU: "4",
      smaMaxU: "20",
      smaPlageU: "16",
      paHT: "444"
    },
    mutations: {
      update(state, {
        path,
        value
      }) {
        const parent = ((state, key) => {
          return state.key
        }, state)
        parent[path[path.length - 1]] = value
      }
    }


  })
}

export default createStore
