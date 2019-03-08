

export default {
    namespaced: true,
    state: {
        activeUnit: null,
        questionIndex: 0,
        isCorrect: false,
        chosenAnswerId: null,
        currentQuestion: {}
    },
    getters: {
        activeUnitPercentageComplete(state) {
            if (state.activeUnit && state.activeUnit.questions.length > 0) {
                let numCompleted = state.questionIndex;

                if (state.chosenAnswerId) {
                    numCompleted++;
                }

                return Math.round((numCompleted / state.activeUnit.questions.length) * 100);
            }

            return 0;
        }
    },
    actions: {
        setUnits({commit}, units) {
            commit('setUnits', units);
        },
        setActiveUnit({commit}, unit) {
            commit('setActiveUnit', unit);
        },
        setAnswer({commit, state, rootState, dispatch}, answerId) {
            commit('setAnswer', answerId);

            const logPayload = {
                questionId: state.currentQuestion.questionId,
                answeredOn: Date.now(),
                chosenAnswerId: answerId,
                correctAnswerId: state.currentQuestion.correctAnswerId
            };

            dispatch('player/questionLog/logAnswer', logPayload, {root: true});

            const isCorrect = answerId === state.currentQuestion.correctAnswerId;
            commit('setIsCorrect', isCorrect);

            if (isCorrect) {
                rootState.game.sound.play('correct');
                dispatch('player/incrementCurrency', null, {root: true});
            }
        },
        loadNextQuestion({commit}) {
            commit('loadNextQuestion');
        }
    },
    mutations: {
        setActiveUnit(state, unit) {
            state.activeUnit = Object.assign(unit);
            state.isCorrect = false;
            state.chosenAnswerId = null;
            state.questionIndex = 0;
            state.currentQuestion = Object.assign(unit.questions[state.questionIndex]);
        },
        setAnswer(state, answerId) {
            state.chosenAnswerId = answerId;
        },
        setIsCorrect(state, payload) {
            state.isCorrect = payload;
        },
        setUnits(state, units) {
            state.units = units;
        },
        loadNextQuestion(state) {
            state.isCorrect = false;
            state.chosenAnswerId = null;
            state.questionIndex++;
            state.currentQuestion = Object.assign(state.activeUnit.questions[state.questionIndex]);
        }
    }
};
