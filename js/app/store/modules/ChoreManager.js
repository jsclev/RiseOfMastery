export default {
    namespaced: true,
    state: {
        history: []
    },
    actions: {
        setHistory({commit}, history) {
            commit('setHistory', history);
        }
    },
    mutations: {
        setHistory(state, history) {
            state.history = history;
        }
    }
};
