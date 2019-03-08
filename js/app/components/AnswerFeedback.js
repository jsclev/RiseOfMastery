import store from '../store/Game.js'

export default {
    name: 'AnswerFeedback',
    props: {
        selectedAnswerId: null
    },
    template: `
        <div id="feedback-container">
            <div v-if="isVisible" id="feedback-inner-container">
                <div id="feedback-content">
                    <span v-if="isCorrect">Correct!  +1 Gold!</span>
                    <span v-else>Incorrect.</span>
                </div>
                <div id="next-question-button"
                     @click="loadNextQuestion()">
                    Next Question
                </div>
            </div>
        </div>`,
    computed: {
        isCorrect() {
            return store.state.questionManager.isCorrect;
        },
        isVisible() {
            return store.state.questionManager.chosenAnswerId !== null;
        }
    },
    methods: {
        loadNextQuestion() {
            store.dispatch('questionManager/loadNextQuestion', {root: true});
        }
    }
};
