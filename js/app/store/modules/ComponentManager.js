import questionLog from './ChoreLog.js'

export default {
    namespaced: true,
    modules: {
        questionLog: questionLog
    },
    state: {
        components: [],
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
