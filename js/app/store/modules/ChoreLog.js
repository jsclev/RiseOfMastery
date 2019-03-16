export default {
    namespaced: true,
    state: {
        questions: []
    },
    getters: {
        totalNumQuestions: state => state.questions.length,
        numAnsweredCorrectly(state) {
            return state.questions.filter(
                item => item.chosenAnswerId === item.correctAnswerId
            ).length;
        },
        percentageCorrect(state, getters) {
            if (state.questions.length > 0) {
                const numCorrect = getters.numAnsweredCorrectly;
                return Math.round((numCorrect / state.questions.length) * 100);
            }

            return 0;
        }
    },
    actions: {
        logAnswer({commit}, payload) {
            commit('logAnswer', payload);
        },
        setQuestions({commit}, questions) {
            commit('setQuestions', questions);
        }
    },
    mutations: {
        logAnswer(state, payload) {
            state.questions.push(payload);
        },
        setQuestions(state, questions) {
            state.questions = questions;
        }
    }
};
