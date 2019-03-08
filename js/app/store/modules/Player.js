import questionLog from './QuestionLog.js'

export default {
    namespaced: true,
    modules: {
        questionLog: questionLog
    },
    state: {
        name: 'Joshua',
        numCurrency: 0
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
