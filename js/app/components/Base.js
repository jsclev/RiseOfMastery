import store from '../store/Game.js'
const AnswerFeedback = () => import('./AnswerFeedback.js');
const Currency = () => import('./Currency.js');
const PlayerProgress = () => import('./PlayerProgress.js');

export default {
    name: 'CurrentQuestion',
    props: {
        realValue: null
    },
    components: {
        AnswerFeedback,
        Currency,
        PlayerProgress
    },
    template: `
        <div id="main">
            <currency></currency>
            <player-progress></player-progress>
            <form id="active-question-inner-container">
                <div id="question-text" v-html="currentQuestion.text"></div>
                <table id="answers-container">
                    <tr v-for="answer in currentQuestion.answers">
                        <td>
                            <input :id="answer.answerId" 
                                   type="radio"
                                   :value="answer.answerId"
                                   v-model="chosenAnswer"/>
                        </td>
                        <td>
                            <label for="answer.answerId">{{ answer.text }}</label>
                        </td>
                    </tr>
                </table>
                <answer-feedback></answer-feedback>
            </form>
        </div>`,
    computed: {
        chosenAnswer: {
            get() {
                return store.state.questionManager.chosenAnswerId;
            },
            set(value) {
                store.dispatch('questionManager/setAnswer', value, {root: true});
            }
        },
        currentQuestion() {
            return store.state.questionManager.currentQuestion;
        }
    },
    methods: {
        selectAnswer(answerId) {
            store.dispatch('questionManager/setAnswer', {answerId: answerId}, {root: true});
        }
    }
};
