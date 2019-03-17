import choreLog from './ChoreManager.js'

export default {
    namespaced: true,
    modules: {
        choreLog: choreLog
    },
    state: {
        name: 'Joshua',
        numCurrency: 1
    },
    actions: {
        incrementCurrency({commit}) {
            commit('incrementCurrency');
        }
    },
    mutations: {
        incrementCurrency(state) {
            state.numCurrency++;
        }
    }
};
